import React, { useState, useEffect, useRef } from 'react';
import { COURSE_LEVELS, VOCABULARY, generateQuestion } from './data/words';
import { sound } from './utils/sound';
import { loadPlayerData, savePlayerData, calculateLevel } from './utils/storage';
import { GameHeader } from './components/GameHeader';
import { WordCard } from './components/WordCard';
import { OptionGrid } from './components/OptionGrid';
import { RoundSummary } from './components/RoundSummary';
import { CategorySelect } from './components/CategorySelect';
import { SentenceChallenge } from './components/SentenceChallenge';

const QUESTIONS_PER_ROUND = 10;
const MAX_LIVES = 3;

export default function App() {
  const [screen, setScreen] = useState('menu'); // 'menu' | 'playing' | 'summary'
  const [selectedCourseLevel, setSelectedCourseLevel] = useState(1); // 1 = Starter (Beginner), 2 = Explorer, 3 = Master, 'all' = Mix
  const [gameMode, setGameMode] = useState('classic'); // 'classic' | 'sentences' | 'practice'

  const [playerData, setPlayerData] = useState(loadPlayerData);
  const [sfxEnabled, setSfxEnabled] = useState(true);
  const [speechEnabled, setSpeechEnabled] = useState(true);

  // Active round state
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lives, setLives] = useState(MAX_LIVES);
  const [score, setScore] = useState(0);
  const [roundXp, setRoundXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [mistakes, setMistakes] = useState([]);

  // Sentence Challenge Modal state
  const [activeSentenceWord, setActiveSentenceWord] = useState(null);

  // Question interaction state
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const timerRef = useRef(null);

  // Save player data on change
  useEffect(() => {
    savePlayerData(playerData);
  }, [playerData]);

  // Sync sound controller settings
  useEffect(() => {
    sound.setSfxEnabled(sfxEnabled);
    sound.setSpeechEnabled(speechEnabled);
  }, [sfxEnabled, speechEnabled]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const levelInfo = calculateLevel(playerData.totalXp);

  // Get active course level display title
  const activeCourse = COURSE_LEVELS.find(c => c.id === selectedCourseLevel);
  const activeCourseTitle = selectedCourseLevel === 'all' 
    ? '⚡ אתגר מעורב' 
    : (activeCourse ? `${activeCourse.icon} ${activeCourse.title}` : 'שלב 1: יסודות');

  // Start round with given word set or course level
  const startRound = (chosenLevel = selectedCourseLevel, customWords = null) => {
    let pool = [];
    if (customWords && customWords.length > 0) {
      pool = customWords;
    } else if (chosenLevel === 'all') {
      pool = VOCABULARY;
    } else {
      pool = VOCABULARY.filter(w => w.level === Number(chosenLevel));
      if (pool.length === 0) pool = VOCABULARY;
    }

    // Shuffle and pick subset of questions
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const count = Math.min(QUESTIONS_PER_ROUND, shuffled.length);
    const roundWords = shuffled.slice(0, count);

    const generated = roundWords.map(word => generateQuestion(word, pool, gameMode));

    setQuestions(generated);
    setCurrentIndex(0);
    setLives(MAX_LIVES);
    setScore(0);
    setRoundXp(0);
    setStreak(0);
    setMaxStreak(0);
    setCorrectCount(0);
    setMistakes([]);
    setSelectedOption(null);
    setHasAnswered(false);
    setActiveSentenceWord(null);
    setScreen('playing');
    sound.playClick();
  };

  const handleSelectOption = (option) => {
    if (hasAnswered) return;

    setHasAnswered(true);
    setSelectedOption(option);

    const currentQ = questions[currentIndex];
    const isCorrect = option === currentQ.correctAnswer;

    // Pronounce the word (or full sentence in sentence mode)
    if (gameMode === 'sentences' && currentQ.sentenceEn) {
      sound.speak(currentQ.sentenceEn);
    } else {
      sound.speak(currentQ.correctAnswer);
    }

    let nextLives = lives;
    let nextScore = score;
    let nextStreak = streak;
    let nextCorrect = correctCount;
    const nextMistakes = [...mistakes];

    if (isCorrect) {
      sound.playCorrect();
      nextStreak = streak + 1;
      nextCorrect = correctCount + 1;
      const streakMultiplier = Math.min(nextStreak, 5);
      const pointsEarned = 100 + (streakMultiplier * 20);
      nextScore = score + pointsEarned;

      setStreak(nextStreak);
      if (nextStreak > maxStreak) setMaxStreak(nextStreak);
      setScore(nextScore);
      setCorrectCount(nextCorrect);
    } else {
      sound.playWrong();
      nextStreak = 0;
      setStreak(0);
      nextMistakes.push(currentQ);
      setMistakes(nextMistakes);

      if (gameMode === 'classic') {
        nextLives = Math.max(0, lives - 1);
        setLives(nextLives);
      }
    }

    // If modal is not opened, auto-advance after 1.5s
    timerRef.current = setTimeout(() => {
      advanceQuestion(nextLives, nextScore, nextCorrect, nextMistakes);
    }, 1500);
  };

  const advanceQuestion = (curLives, curScore, curCorrect, curMistakes) => {
    // If the sentence challenge modal is active, do not auto-advance
    if (activeSentenceWord) return;

    const isLast = currentIndex + 1 >= questions.length;
    const isDead = gameMode === 'classic' && curLives <= 0;

    if (isLast || isDead) {
      finishRound(curLives, curScore, curCorrect, curMistakes);
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
      setActiveSentenceWord(null);
    }
  };

  const finishRound = (curLives, curScore, curCorrect, curMistakes) => {
    const xpGained = curScore;
    setRoundXp(xpGained);

    // Update persistent player data
    setPlayerData(prev => {
      const newTotalXp = prev.totalXp + xpGained;
      const newHighScore = Math.max(prev.highScore, curScore);
      const updatedLevelInfo = calculateLevel(newTotalXp);

      if (updatedLevelInfo.level > prev.level) {
        sound.playLevelUp();
      }

      return {
        ...prev,
        totalXp: newTotalXp,
        highScore: newHighScore,
        level: updatedLevelInfo.level,
        gamesPlayed: prev.gamesPlayed + 1
      };
    });

    setScreen('summary');
  };

  // Open the Sentence Challenge for current word
  const handleOpenSentenceChallenge = () => {
    // Clear auto-advance timer so user can complete sentence challenge comfortably
    if (timerRef.current) clearTimeout(timerRef.current);
    sound.playClick();
    setActiveSentenceWord(questions[currentIndex]);
  };

  const handleSentenceBonusComplete = (bonusXp = 50) => {
    setScore(prev => prev + bonusXp);
    setPlayerData(prev => ({
      ...prev,
      totalXp: prev.totalXp + bonusXp
    }));
  };

  const handleCloseSentenceChallenge = () => {
    setActiveSentenceWord(null);
    // Proceed to next question smoothly
    advanceQuestion(lives, score, correctCount, mistakes);
  };

  const handleReviewMistakes = () => {
    if (mistakes.length === 0) return;
    startRound(selectedCourseLevel, mistakes);
  };

  const handlePlayAgain = () => {
    startRound(selectedCourseLevel);
  };

  const handleBackToMenu = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    sound.playClick();
    setActiveSentenceWord(null);
    setScreen('menu');
  };

  const currentQ = questions[currentIndex];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* Background ambient decorative glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-6 max-w-3xl flex-1 flex flex-col justify-center">
        {screen === 'menu' && (
          <CategorySelect
            selectedLevel={selectedCourseLevel}
            onSelectLevel={setSelectedCourseLevel}
            gameMode={gameMode}
            onSelectMode={setGameMode}
            onStartGame={() => startRound(selectedCourseLevel)}
            playerData={playerData}
            levelInfo={levelInfo}
          />
        )}

        {screen === 'playing' && currentQ && (
          <div className="flex flex-col flex-1 justify-center">
            <GameHeader
              score={score}
              streak={streak}
              lives={lives}
              maxLives={MAX_LIVES}
              gameMode={gameMode}
              courseLevelTitle={activeCourseTitle}
              sfxEnabled={sfxEnabled}
              speechEnabled={speechEnabled}
              onToggleSfx={() => setSfxEnabled(!sfxEnabled)}
              onToggleSpeech={() => setSpeechEnabled(!speechEnabled)}
              onExitRound={handleBackToMenu}
              levelInfo={levelInfo}
            />

            {/* In Sentence Mode, show the sentence prompt */}
            {gameMode === 'sentences' ? (
              <div className="w-full max-w-2xl mx-auto my-4 bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-indigo-500/40 rounded-3xl p-6 sm:p-8 text-center shadow-xl">
                <span className="text-xs uppercase tracking-widest bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full font-bold">
                  השלם את המילה החסרה במשפט
                </span>
                <div className="my-4 p-4 bg-slate-950/50 rounded-2xl border border-slate-800 text-left" dir="ltr">
                  <p className="text-xl sm:text-2xl font-black text-cyan-200 font-sans leading-relaxed text-left" dir="ltr">
                    {hasAnswered ? (
                      currentQ.sentenceEn.split(new RegExp(`(${currentQ.english})`, 'gi')).map((part, i) =>
                        part.toLowerCase() === currentQ.english.toLowerCase() ? (
                          <span key={i} className="bg-emerald-500/30 text-emerald-300 underline font-black px-1.5 py-0.5 rounded mx-0.5">
                            {part}
                          </span>
                        ) : (
                          <span key={i}>{part}</span>
                        )
                      )
                    ) : (
                      (() => {
                        const parts = (currentQ.sentenceBlank || '').split('_____');
                        if (parts.length === 2) {
                          return (
                            <span>
                              <span>{parts[0]}</span>
                              <span className="inline-block px-3 py-0.5 mx-1.5 border-b-2 border-dashed border-cyan-400 bg-cyan-950/80 text-cyan-300 font-mono rounded tracking-widest text-base align-middle">
                                [ &nbsp;?&nbsp; ]
                              </span>
                              <span>{parts[1]}</span>
                            </span>
                          );
                        }
                        return currentQ.sentenceBlank;
                      })()
                    )}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-700/60 pt-3" dir="rtl">
                  <span className="font-semibold text-slate-200">תרגום: {currentQ.sentenceHe}</span>
                  <button
                    onClick={() => sound.speak(currentQ.sentenceEn)}
                    className="p-1.5 rounded-lg bg-blue-600/30 text-blue-300 hover:bg-blue-600/50 cursor-pointer flex items-center gap-1"
                  >
                    🔊 <span>השמע</span>
                  </button>
                </div>
              </div>
            ) : (
              <WordCard
                wordData={currentQ}
                currentIndex={currentIndex}
                totalQuestions={questions.length}
                hasAnswered={hasAnswered}
                onSpeakWord={(w) => sound.speak(w)}
                onOpenSentenceChallenge={handleOpenSentenceChallenge}
              />
            )}

            <OptionGrid
              options={currentQ.options}
              correctAnswer={currentQ.correctAnswer}
              selectedOption={selectedOption}
              hasAnswered={hasAnswered}
              onSelectOption={handleSelectOption}
            />

            {/* Sentence Challenge Modal */}
            {activeSentenceWord && (
              <SentenceChallenge
                wordData={activeSentenceWord}
                onComplete={handleSentenceBonusComplete}
                onClose={handleCloseSentenceChallenge}
              />
            )}
          </div>
        )}

        {screen === 'summary' && (
          <RoundSummary
            score={score}
            roundXp={roundXp}
            correctCount={correctCount}
            totalAnswered={currentIndex + (hasAnswered ? 1 : 0)}
            maxStreak={maxStreak}
            mistakes={mistakes}
            hasWon={lives > 0}
            onPlayAgain={handlePlayAgain}
            onReviewMistakes={handleReviewMistakes}
            onBackToMenu={handleBackToMenu}
            onSpeakWord={(w) => sound.speak(w)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-4 text-xs text-slate-500 border-t border-slate-900">
        <p>Word Quest • 3-Level English Course with Sentence Integration • Firebase Ready</p>
      </footer>
    </div>
  );
}
