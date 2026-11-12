import React from 'react';

export function GameHeader({
  score,
  streak,
  lives,
  maxLives,
  gameMode,
  courseLevelTitle,
  sfxEnabled,
  speechEnabled,
  onToggleSfx,
  onToggleSpeech,
  onExitRound,
  levelInfo
}) {
  return (
    <header className="w-full max-w-2xl mx-auto flex flex-col gap-3 px-4 py-3 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-700/60 shadow-xl">
      <div className="flex items-center justify-between">
        {/* Level & Player Title */}
        <div className="flex items-center gap-2">
          <button
            onClick={onExitRound}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition text-sm flex items-center gap-1 cursor-pointer"
            title="יציאה לתפריט"
          >
            ← תפריט
          </button>
          <div className="flex items-center gap-1.5 bg-indigo-950/70 border border-indigo-700/40 px-2.5 py-1 rounded-full text-xs font-semibold text-indigo-300">
            <span>{levelInfo.icon}</span>
            <span>רמה {levelInfo.level}</span>
          </div>
          {courseLevelTitle && (
            <div className="hidden sm:inline-flex items-center gap-1 bg-slate-800/80 border border-slate-700/70 px-2.5 py-1 rounded-full text-xs font-medium text-slate-300">
              {courseLevelTitle}
            </div>
          )}
        </div>

        {/* Sound & Speech Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleSpeech}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition cursor-pointer ${
              speechEnabled
                ? 'bg-blue-600/30 border-blue-500/50 text-blue-300'
                : 'bg-slate-800 border-slate-700 text-slate-500 line-through'
            }`}
            title="הקראת מילים באנגלית"
          >
            🗣️ {speechEnabled ? 'קול דולק' : 'קול כבוי'}
          </button>
          <button
            onClick={onToggleSfx}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition cursor-pointer ${
              sfxEnabled
                ? 'bg-emerald-600/30 border-emerald-500/50 text-emerald-300'
                : 'bg-slate-800 border-slate-700 text-slate-500 line-through'
            }`}
            title="צלילי משחק"
          >
            🔊 {sfxEnabled ? 'צלילים' : 'מושתק'}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between pt-1 border-t border-slate-800/80">
        {/* Score & XP */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">ניקוד / XP</span>
            <span className="text-xl font-black text-amber-400 drop-shadow">⭐ {score}</span>
          </div>

          {/* Streak Indicator */}
          {streak > 1 && (
            <div className="flex items-center gap-1 bg-amber-500/20 border border-amber-500/40 px-2.5 py-1 rounded-xl animate-pulse">
              <span className="text-base">🔥</span>
              <span className="text-xs font-bold text-amber-300">רצף x{streak}!</span>
            </div>
          )}
        </div>

        {/* Lives / Mode */}
        <div>
          {gameMode === 'practice' ? (
            <div className="bg-emerald-950/60 border border-emerald-600/40 px-3 py-1 rounded-full text-xs font-medium text-emerald-300 flex items-center gap-1.5">
              <span>🛡️</span> מצב אימון (ללא הגבלת חיים)
            </div>
          ) : (
            <div className="flex items-center gap-1 text-lg">
              {Array.from({ length: maxLives }).map((_, idx) => (
                <span
                  key={idx}
                  className={`transition-transform duration-300 ${
                    idx < lives ? 'scale-100 text-rose-500' : 'scale-75 opacity-30 text-slate-600'
                  }`}
                >
                  ❤️
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
