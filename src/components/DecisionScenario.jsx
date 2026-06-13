import { useState } from 'react';

// A situation + 2–4 choices → instant feedback explaining *why*. The workhorse interaction.
const VERDICT = {
  good: { ring: 'ring-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/20', tag: '✓ Sound call', tagColor: 'text-emerald-700 dark:text-emerald-400' },
  ok: { ring: 'ring-amber-400', bg: 'bg-amber-50 dark:bg-amber-900/20', tag: '~ Reasonable', tagColor: 'text-amber-700 dark:text-amber-400' },
  bad: { ring: 'ring-rose-400', bg: 'bg-rose-50 dark:bg-rose-900/20', tag: '✗ Risky', tagColor: 'text-rose-700 dark:text-rose-400' },
};

export default function DecisionScenario({ title, prompt, options }) {
  const [picked, setPicked] = useState(null);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
      {title && <h3 className="font-semibold text-slate-800 dark:text-slate-100">{title}</h3>}
      <p className="mt-1 text-slate-600 dark:text-slate-300">{prompt}</p>

      <div className="mt-4 space-y-2">
        {options.map((opt, i) => {
          const isPicked = picked === i;
          const v = VERDICT[opt.verdict] || VERDICT.ok;
          return (
            <button
              key={i}
              onClick={() => setPicked(i)}
              className={`w-full rounded-lg border px-4 py-2.5 text-left transition ${
                isPicked
                  ? `${v.bg} ring-2 ${v.ring} border-transparent`
                  : 'border-slate-200 hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-500'
              }`}
            >
              <span className="text-slate-800 dark:text-slate-100">{opt.label}</span>
              {isPicked && (
                <span className="mt-2 block">
                  <span className={`text-xs font-semibold uppercase tracking-wide ${v.tagColor}`}>{v.tag}</span>
                  <span className="mt-1 block text-sm text-slate-600 dark:text-slate-300">{opt.feedback}</span>
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
