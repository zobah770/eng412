import React, { useState } from 'react';

export function WordCard({
  wordData,
  currentIndex,
  totalQuestions,
  hasAnswered,
  onSpeakWord,
  onOpenSentenceChallenge
}) {
  const [showHint, setShowHint] = useState(false);

  // Reset hint on new question
  React.useEffect(() => {
    setShowHint(false);
  }, [wordData]);

  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-3 my-4">
      {/* Progress Bar */}
      <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden border border-slate-700/50">
        <div
          className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>שאלה {currentIndex + 1} מתוך {totalQuestions}</span>
        <span className="font-semibold text-cyan-400">{progressPercent}% הושלם</span>
      </div>

      {/* Main Flashcard */}
      <div className="relative bg-gradient-to-b from-slate-800/90 to-slate-900/95 border-2 border-indigo-500/30 rounded-3xl p-6 sm:p-8 text-center shadow-2xl backdrop-blur-sm overflow-hidden">
        {/* Glow behind word */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-xs uppercase tracking-widest bg-slate-700/60 border border-slate-600/50 text-indigo-300 px-3 py-1 rounded-full font-bold">
            איך אומרים באנגלית?
          </span>
        </div>

        {/* Hebrew Word Display */}
        <h1
          dir="rtl"
          className="text-4xl sm:text-5xl font-black text-white tracking-wide my-4 drop-shadow-md select-none font-sans"
        >
          {wordData.hebrew}
        </h1>

        {/* Actions row: Hint, Audio, and Extra Sentence Challenge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
          {wordData.phonetic && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-xs bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-600/60 px-3 py-1.5 rounded-full transition flex items-center gap-1.5 cursor-pointer"
            >
              <span>💡</span>
              <span>{showHint ? `הגייה: ${wordData.phonetic}` : 'צריך רמז?'}</span>
            </button>
          )}

          {hasAnswered && (
            <button
              onClick={() => onSpeakWord(wordData.english)}
              className="text-xs bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/50 px-3 py-1.5 rounded-full transition flex items-center gap-1.5 cursor-pointer animate-pulse"
            >
              <span>🔊</span>
              <span>השמע באנגלית</span>
            </button>
          )}

          {/* Extra Sentence Challenge Button */}
          {wordData.sentenceEn && (
            <button
              onClick={onOpenSentenceChallenge}
              className="text-xs bg-gradient-to-r from-amber-500/30 to-purple-500/30 hover:from-amber-500/40 hover:to-purple-500/40 text-amber-300 border border-amber-500/40 px-3.5 py-1.5 rounded-full transition flex items-center gap-1.5 cursor-pointer font-bold shadow-md shadow-amber-500/10"
              title="שאלה מיוחדת: איך המילה משתלבת במשפט קצר"
            >
              <span>📝</span>
              <span>נסה בתוך משפט (+50 XP)</span>
            </button>
          )}
        </div>

        {showHint && wordData.hint && (
          <p className="text-xs text-amber-300/90 mt-2 bg-amber-950/40 border border-amber-500/20 py-1.5 px-3 rounded-lg inline-block">
            רמז: {wordData.hint}
          </p>
        )}
      </div>
    </div>
  );
}
