import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/sound';

export function SentenceChallenge({
  wordData,
  onComplete,
  onClose
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const isCorrect = selectedOption === wordData.english;

  const handleSelect = (option) => {
    if (hasAnswered) return;
    setSelectedOption(option);
    setHasAnswered(true);

    if (option === wordData.english) {
      sound.playCorrect();
      // Speak the FULL completed sentence in English
      sound.speak(wordData.sentenceEn);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }
      onComplete?.(50); // Award 50 bonus XP
    } else {
      sound.playWrong();
      sound.speak(wordData.sentenceEn);
    }
  };

  const handleSpeakSentence = () => {
    sound.speak(wordData.sentenceEn);
  };

  // Helper to safely render the sentence with an LTR visual blank placeholder
  const renderSentenceContent = () => {
    if (hasAnswered) {
      // Highlight the correct word in the completed sentence
      return (
        <span dir="ltr" className="inline-block text-left">
          {wordData.sentenceEn.split(new RegExp(`(${wordData.english})`, 'gi')).map((part, i) =>
            part.toLowerCase() === wordData.english.toLowerCase() ? (
              <span key={i} className="bg-emerald-500/30 text-emerald-300 underline font-black px-1.5 py-0.5 rounded mx-0.5">
                {part}
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </span>
      );
    }

    // Unanswered: render with visual blank box
    const parts = (wordData.sentenceBlank || '').split('_____');
    if (parts.length === 2) {
      return (
        <span dir="ltr" className="inline-block text-left">
          <span>{parts[0]}</span>
          <span className="inline-block px-3 py-0.5 mx-1.5 border-b-2 border-dashed border-cyan-400 bg-cyan-950/80 text-cyan-300 font-mono rounded tracking-widest text-sm align-middle">
            [ &nbsp;?&nbsp; ]
          </span>
          <span>{parts[1]}</span>
        </span>
      );
    }

    return <span dir="ltr">{wordData.sentenceBlank}</span>;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-scale-in">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 border-2 border-indigo-500/50 rounded-3xl p-6 sm:p-7 shadow-2xl text-center">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center text-sm font-bold transition cursor-pointer"
        >
          ✕
        </button>

        {/* Header Badge */}
        <div className="inline-flex items-center gap-1.5 bg-amber-500/20 border border-amber-500/40 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <span>✨</span>
          <span>אתגר משפט בונוס • +50 XP</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
          איזו מילה משלימה את המשפט?
        </h3>
        <p className="text-xs text-slate-400 mb-4">
          קרא את המשפט באנגלית ובחר את המילה החסרה המתאימה
        </p>

        {/* English Sentence Display with explicit dir="ltr" */}
        <div className="bg-slate-800/90 border border-indigo-500/30 rounded-2xl p-5 mb-4 shadow-inner text-left" dir="ltr">
          <div className="flex items-start justify-between gap-3">
            <p className="text-lg sm:text-xl font-bold text-cyan-200 leading-relaxed font-sans text-left" dir="ltr">
              {renderSentenceContent()}
            </p>
            <button
              onClick={handleSpeakSentence}
              className="w-9 h-9 shrink-0 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/40 flex items-center justify-center text-base transition cursor-pointer"
              title="השמע את המשפט באנגלית"
            >
              🔊
            </button>
          </div>

          {/* Hebrew Context / Translation with explicit dir="rtl" */}
          <div className="mt-3 pt-3 border-t border-slate-700/60 text-right" dir="rtl">
            <span className="text-xs text-slate-400 block mb-0.5 font-medium">תרגום המשפט:</span>
            <p className="text-sm font-semibold text-slate-200">
              {wordData.sentenceHe}
            </p>
          </div>
        </div>

        {/* 4 Multiple Choice Options for the sentence with explicit dir="ltr" */}
        <div className="grid grid-cols-2 gap-2.5 mb-5" dir="ltr">
          {wordData.options.map((option, idx) => {
            const isPicked = selectedOption === option;
            const isRight = option === wordData.correctAnswer;

            let btnStyle = 'bg-slate-800/80 hover:bg-slate-750 text-slate-200 border-slate-700/80 hover:border-indigo-400/60';

            if (hasAnswered) {
              if (isRight) {
                btnStyle = 'bg-emerald-600/90 text-white border-emerald-400 ring-2 ring-emerald-400 font-black shadow-lg shadow-emerald-500/30';
              } else if (isPicked && !isRight) {
                btnStyle = 'bg-rose-700/80 text-white border-rose-500 line-through';
              } else {
                btnStyle = 'bg-slate-800/30 text-slate-500 border-slate-800 opacity-40';
              }
            }

            return (
              <button
                key={idx}
                disabled={hasAnswered}
                onClick={() => handleSelect(option)}
                className={`py-3 px-3 rounded-xl border font-bold text-base transition cursor-pointer select-none text-center ${btnStyle}`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Feedback / Continue */}
        {hasAnswered ? (
          <div className="space-y-3 animate-scale-in">
            <div className={`text-sm font-bold p-2.5 rounded-xl ${
              isCorrect
                ? 'bg-emerald-950/70 border border-emerald-500/40 text-emerald-300'
                : 'bg-rose-950/70 border border-rose-500/40 text-rose-300'
            }`}>
              {isCorrect ? '⭐ מצוין! הרווחת 50 XP נוספים!' : `המילה הנכונה היא: ${wordData.english}`}
            </div>
            <button
              onClick={onClose}
              className="w-full py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black text-base rounded-xl transition cursor-pointer"
            >
              המשך לשאלה הבאה ←
            </button>
          </div>
        ) : (
          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-slate-300 underline cursor-pointer"
          >
            דלג על אתגר המשפט
          </button>
        )}
      </div>
    </div>
  );
}
