import React from 'react';
import { COURSE_LEVELS, VOCABULARY } from '../data/words';

export function CategorySelect({
  selectedLevel,
  onSelectLevel,
  gameMode,
  onSelectMode,
  onStartGame,
  playerData,
  levelInfo
}) {
  const currentLevelXpFloor = (levelInfo.level - 1) * 300;
  const xpNeeded = levelInfo.nextAt - currentLevelXpFloor;
  const currentProgress = Math.max(0, playerData.totalXp - currentLevelXpFloor);
  const xpPercent = Math.min(100, Math.round((currentProgress / xpNeeded) * 100));

  // Count words per level
  const countWords = (lvlId) => {
    if (lvlId === 'all') return VOCABULARY.length;
    return VOCABULARY.filter(w => w.level === lvlId).length;
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-6 py-4">
      {/* Hero Title */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-indigo-500/20 border border-emerald-500/30 px-4 py-1.5 rounded-full text-emerald-300 text-xs font-bold uppercase tracking-widest">
          🎓 קורס אנגלית ב-3 שלבים + שילוב במשפטים
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400">
          Word Quest
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto">
          קורס אנגלית אינטראקטיבי: מילים בעברית, אפשרויות באנגלית, ואתגרי שילוב בתוך משפטים קצרים!
        </p>
      </div>

      {/* Player Stats Card */}
      <div className="bg-slate-900/80 border border-slate-700/80 rounded-3xl p-5 shadow-xl backdrop-blur-md">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl p-2 bg-indigo-950/80 rounded-2xl border border-indigo-700/50">
              {levelInfo.icon}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-indigo-400 font-bold uppercase">דירוג שחקן: {levelInfo.level}</span>
                <span className="text-sm font-black text-white">{levelInfo.title}</span>
              </div>
              <span className="text-xs text-slate-400">סה״כ צברת: {playerData.totalXp} XP</span>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[11px] text-slate-400 block font-semibold">שיא נקודות</span>
            <span className="text-xl font-black text-amber-400">⭐ {playerData.highScore}</span>
          </div>
        </div>

        {/* Level XP Progress Bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-[11px] text-slate-400 font-medium">
            <span>התקדמות לדרגה הבאה</span>
            <span>{playerData.totalXp} / {levelInfo.nextAt} XP</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden border border-slate-700/60">
            <div
              className="bg-gradient-to-r from-amber-500 to-emerald-500 h-full transition-all duration-500"
              style={{ width: `${xpPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* 3-Level Course Selector */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <label className="text-sm font-bold text-slate-300 uppercase tracking-wider block">
            בחר שלב בקורס:
          </label>
          <span className="text-xs text-slate-400">לחץ לבחירת השלב הרצוי</span>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {COURSE_LEVELS.map((course) => {
            const isSelected = selectedLevel === course.id;
            const wordCount = countWords(course.id);

            let borderStyle = 'border-slate-800 hover:border-slate-700 bg-slate-900/60';
            let glowBadge = 'bg-slate-800 text-slate-400';

            if (isSelected) {
              if (course.id === 1) {
                borderStyle = 'border-emerald-400 bg-gradient-to-r from-emerald-950/70 to-slate-900 ring-2 ring-emerald-500/40 shadow-lg shadow-emerald-500/10';
                glowBadge = 'bg-emerald-500/20 border border-emerald-400/40 text-emerald-300';
              } else if (course.id === 2) {
                borderStyle = 'border-cyan-400 bg-gradient-to-r from-cyan-950/70 to-slate-900 ring-2 ring-cyan-500/40 shadow-lg shadow-cyan-500/10';
                glowBadge = 'bg-cyan-500/20 border border-cyan-400/40 text-cyan-300';
              } else {
                borderStyle = 'border-purple-400 bg-gradient-to-r from-purple-950/70 to-slate-900 ring-2 ring-purple-500/40 shadow-lg shadow-purple-500/10';
                glowBadge = 'bg-purple-500/20 border border-purple-400/40 text-purple-300';
              }
            }

            return (
              <button
                key={course.id}
                onClick={() => onSelectLevel(course.id)}
                className={`w-full p-4 rounded-2xl border-2 transition-all duration-200 text-right flex items-center justify-between gap-4 cursor-pointer select-none ${borderStyle}`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="text-3xl p-2.5 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                    {course.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-lg text-white">{course.title}</span>
                      <span className="text-xs text-slate-400 font-medium">({course.titleEn})</span>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${glowBadge}`}>
                        {course.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5 font-medium">{course.subtitle}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{course.target}</p>
                  </div>
                </div>

                <div className="text-left shrink-0">
                  <span className="text-xs text-slate-400 font-semibold block">{wordCount} מילים</span>
                  {isSelected ? (
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 mt-1">
                      <span>✓</span> נבחר
                    </span>
                  ) : (
                    <span className="text-xs text-slate-500 mt-1 block">בחר</span>
                  )}
                </div>
              </button>
            );
          })}

          {/* All Levels Mix Option */}
          <button
            onClick={() => onSelectLevel('all')}
            className={`w-full p-3.5 rounded-2xl border-2 transition-all duration-200 text-right flex items-center justify-between gap-4 cursor-pointer select-none ${
              selectedLevel === 'all'
                ? 'border-amber-400 bg-gradient-to-r from-amber-950/70 to-slate-900 ring-2 ring-amber-500/40 shadow-lg shadow-amber-500/10'
                : 'border-slate-800 hover:border-slate-700 bg-slate-900/40 text-slate-400'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl p-2 rounded-xl bg-slate-800/80">⚡</span>
              <div>
                <span className="font-bold text-white text-sm">אתגר מגה: כל 3 השלבים מעורבבים</span>
                <p className="text-xs text-slate-400">מבחן מסכם עם מילים מכל הרמות יחד</p>
              </div>
            </div>
            <span className="text-xs text-slate-400 font-semibold">{VOCABULARY.length} מילים</span>
          </button>
        </div>
      </div>

      {/* Game Mode Selector with 3 Modes */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block text-right">
          בחר מצב משחק:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <button
            onClick={() => onSelectMode('classic')}
            className={`p-3.5 rounded-2xl border-2 text-right transition flex flex-col gap-1 cursor-pointer ${
              gameMode === 'classic'
                ? 'bg-indigo-950/80 border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xl">🏆</span>
              <span className="font-black text-sm">מצב קלאסי</span>
            </div>
            <span className="text-xs text-slate-400">3 לבבות + אתגרי משפט בונוס</span>
          </button>

          <button
            onClick={() => onSelectMode('sentences')}
            className={`p-3.5 rounded-2xl border-2 text-right transition flex flex-col gap-1 cursor-pointer ${
              gameMode === 'sentences'
                ? 'bg-indigo-950/80 border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xl">📝</span>
              <span className="font-black text-sm">מצב משפטים</span>
            </div>
            <span className="text-xs text-slate-400">כל שאלה מציגה משפט באנגלית עם מילה חסרה</span>
          </button>

          <button
            onClick={() => onSelectMode('practice')}
            className={`p-3.5 rounded-2xl border-2 text-right transition flex flex-col gap-1 cursor-pointer ${
              gameMode === 'practice'
                ? 'bg-indigo-950/80 border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xl">🛡️</span>
              <span className="font-black text-sm">מצב אימון</span>
            </div>
            <span className="text-xs text-slate-400">ללא הגבלת חיים לתרגול חופשי</span>
          </button>
        </div>
      </div>

      {/* Start Button */}
      <button
        onClick={onStartGame}
        className="w-full py-4 mt-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black text-xl rounded-2xl shadow-xl shadow-teal-500/25 transition transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
      >
        <span>🚀</span>
        <span>
          {selectedLevel === 'all'
            ? 'התחל אתגר מעורב!'
            : `התחל שלב ${selectedLevel}!`}
        </span>
        <span>✨</span>
      </button>
    </div>
  );
}
