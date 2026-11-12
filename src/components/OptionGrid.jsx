import React from 'react';

export function OptionGrid({
  options,
  correctAnswer,
  selectedOption,
  hasAnswered,
  onSelectOption
}) {
  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div className="w-full max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-2" dir="ltr">
      {options.map((option, idx) => {
        const isSelected = selectedOption === option;
        const isCorrect = option === correctAnswer;

        let btnStyle = 'bg-slate-800/90 hover:bg-slate-750 text-slate-100 border-slate-700/80 hover:border-indigo-500/60 shadow-lg hover:shadow-indigo-500/10 hover:translate-y-[-2px] active:translate-y-[1px]';
        let badgeStyle = 'bg-slate-700/80 text-slate-300';
        let statusIcon = null;

        if (hasAnswered) {
          if (isCorrect) {
            btnStyle = 'bg-emerald-600/90 text-white border-emerald-400 shadow-lg shadow-emerald-500/20 scale-[1.02] ring-2 ring-emerald-400';
            badgeStyle = 'bg-emerald-800 text-emerald-100';
            statusIcon = '✅';
          } else if (isSelected && !isCorrect) {
            btnStyle = 'bg-rose-700/90 text-white border-rose-500 shadow-lg shadow-rose-500/20 animate-shake ring-2 ring-rose-400';
            badgeStyle = 'bg-rose-900 text-rose-200';
            statusIcon = '❌';
          } else {
            btnStyle = 'bg-slate-800/40 text-slate-500 border-slate-800/50 opacity-40 cursor-not-allowed';
            badgeStyle = 'bg-slate-800 text-slate-600';
          }
        }

        return (
          <button
            key={idx}
            disabled={hasAnswered}
            onClick={() => onSelectOption(option)}
            dir="ltr"
            className={`group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 font-bold text-left text-lg sm:text-xl select-none cursor-pointer ${btnStyle}`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black transition-colors ${badgeStyle}`}
              >
                {letters[idx]}
              </span>
              <span className="capitalize tracking-wide font-sans">{option}</span>
            </div>

            {statusIcon && (
              <span className="text-xl animate-scale-in">{statusIcon}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
