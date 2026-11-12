import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

export function RoundSummary({
  score,
  roundXp,
  correctCount,
  totalAnswered,
  maxStreak,
  mistakes,
  hasWon,
  onPlayAgain,
  onReviewMistakes,
  onBackToMenu,
  onSpeakWord
}) {
  const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
  const [expandedSentenceIdx, setExpandedSentenceIdx] = useState(null);

  useEffect(() => {
    if (hasWon && accuracy >= 70) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore confetti errors
      }
    }
  }, [hasWon, accuracy]);

  return (
    <div className="w-full max-w-xl mx-auto my-6 p-6 sm:p-8 bg-slate-900/90 border border-slate-700/80 rounded-3xl shadow-2xl backdrop-blur-md text-center">
      {/* Header Banner */}
      <div className="mb-4">
        <span className="text-5xl">{hasWon ? '🎉' : '💪'}</span>
        <h2 className="text-3xl font-black text-white mt-2">
          {hasWon ? 'כל הכבוד, אלוף!' : 'אימון מעולה! עוד קצת ואתה שם'}
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          {hasWon ? 'סיימת את הסיבוב בהצלחה!' : 'כל טעות היא הזדמנות ללמוד מילה חדשה'}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-3 my-6">
        <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-3">
          <span className="text-xs text-slate-400 font-semibold block">ניקוד / XP</span>
          <span className="text-2xl font-black text-amber-400">+{roundXp}</span>
        </div>
        <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-3">
          <span className="text-xs text-slate-400 font-semibold block">דיוק</span>
          <span className="text-2xl font-black text-cyan-400">{accuracy}%</span>
        </div>
        <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-3">
          <span className="text-xs text-slate-400 font-semibold block">רצף שיא</span>
          <span className="text-2xl font-black text-rose-400">🔥 {maxStreak}</span>
        </div>
      </div>

      {/* Review Mistakes Section */}
      {mistakes.length > 0 ? (
        <div className="my-6 text-right">
          <h3 className="text-sm font-bold text-slate-300 mb-2 flex items-center justify-between">
            <span>מילים לחזרה ושיפור ({mistakes.length}):</span>
            <span className="text-xs text-slate-400">לחץ לתרגול ומשפטים</span>
          </h3>
          <div className="max-h-60 overflow-y-auto space-y-2.5 pr-1 custom-scrollbar">
            {mistakes.map((item, idx) => {
              const isExpanded = expandedSentenceIdx === idx;
              return (
                <div
                  key={idx}
                  className="p-3 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 rounded-2xl transition flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSpeakWord(item.english)}
                        className="w-8 h-8 rounded-lg bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 flex items-center justify-center text-sm transition cursor-pointer"
                        title="שמע באנגלית"
                      >
                        🔊
                      </button>
                      <span className="font-bold text-emerald-400 text-base">{item.english}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-300 font-medium">{item.hebrew}</span>
                      {item.sentenceEn && (
                        <button
                          onClick={() => setExpandedSentenceIdx(isExpanded ? null : idx)}
                          className="text-xs bg-slate-700/70 hover:bg-slate-650 px-2 py-1 rounded-lg text-amber-300 transition cursor-pointer"
                        >
                          {isExpanded ? 'סגור משפט ▲' : 'משפט לדוגמה ▼'}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Expandable Sentence Drawer */}
                  {isExpanded && item.sentenceEn && (
                    <div className="mt-1 pt-2 border-t border-slate-700/60 text-left bg-slate-900/60 p-2.5 rounded-xl animate-scale-in" dir="ltr">
                      <div className="flex items-start justify-between gap-2" dir="ltr">
                        <p className="text-sm text-cyan-200 font-semibold font-sans text-left" dir="ltr">
                          {item.sentenceEn}
                        </p>
                        <button
                          onClick={() => onSpeakWord(item.sentenceEn)}
                          className="text-xs bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 p-1 rounded transition cursor-pointer"
                          title="הקרא את המשפט המלא"
                        >
                          🔊
                        </button>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 text-right" dir="rtl">
                        תרגום: {item.sentenceHe}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="my-6 p-4 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl text-emerald-300 text-sm font-semibold">
          ⭐ מושלם! ענית נכון על כל המילים בלי אף טעות!
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        {mistakes.length > 0 && (
          <button
            onClick={onReviewMistakes}
            className="flex-1 py-3.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl shadow-lg shadow-indigo-600/25 transition active:scale-95 cursor-pointer"
          >
            🎯 תרגל רק את הטעויות
          </button>
        )}
        <button
          onClick={onPlayAgain}
          className="flex-1 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl shadow-lg shadow-emerald-600/25 transition active:scale-95 cursor-pointer"
        >
          🔄 שחק שוב
        </button>
        <button
          onClick={onBackToMenu}
          className="py-3.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-2xl border border-slate-700 transition active:scale-95 cursor-pointer"
        >
          🏠 תפריט ראשי
        </button>
      </div>
    </div>
  );
}
