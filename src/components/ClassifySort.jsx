import { useState } from 'react';

// Sort items into the right buckets. Click-to-assign (works on mobile, no HTML5 drag needed).
// Each item exposes a row of bucket buttons; "Check" reveals what's right.
export default function ClassifySort({ title, prompt, buckets, items }) {
  const [picks, setPicks] = useState({}); // itemIndex -> bucketId
  const [checked, setChecked] = useState(false);

  const allPicked = items.every((_, i) => picks[i] !== undefined);
  const correct = items.filter((it, i) => picks[i] === it.bucket).length;
  const allRight = checked && correct === items.length;

  function assign(itemIdx, bucketId) {
    if (checked) return;
    setPicks((p) => ({ ...p, [itemIdx]: bucketId }));
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
      {title && <h3 className="font-semibold text-slate-800 dark:text-slate-100">{title}</h3>}
      <p className="mt-1 text-slate-600 dark:text-slate-300">{prompt}</p>

      <ul className="mt-4 space-y-3">
        {items.map((it, i) => {
          const right = checked && picks[i] === it.bucket;
          const wrong = checked && picks[i] !== undefined && picks[i] !== it.bucket;
          return (
            <li
              key={i}
              className={`rounded-lg border p-3 transition ${
                right ? 'border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20'
                : wrong ? 'border-rose-400 bg-rose-50 dark:bg-rose-900/20'
                : 'border-slate-200 dark:border-slate-700'
              }`}
            >
              <p className="text-sm text-slate-800 dark:text-slate-100">{it.label}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {buckets.map((b) => {
                  const sel = picks[i] === b.id;
                  return (
                    <button
                      key={b.id}
                      onClick={() => assign(i, b.id)}
                      disabled={checked}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition disabled:cursor-default ${
                        sel
                          ? 'bg-sky-600 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                      }`}
                    >
                      {b.label}
                    </button>
                  );
                })}
              </div>
              {wrong && (
                <p className="mt-2 text-xs text-rose-600 dark:text-rose-400">
                  Correct bucket: {buckets.find((b) => b.id === it.bucket)?.label}
                </p>
              )}
            </li>
          );
        })}
      </ul>

      <div className="mt-4 flex items-center gap-3">
        {!allRight && (
          <button
            onClick={() => setChecked(true)}
            disabled={!allPicked}
            className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Check
          </button>
        )}
        {checked && !allRight && (
          <button
            onClick={() => setChecked(false)}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-400 dark:border-slate-600 dark:text-slate-300"
          >
            Try again
          </button>
        )}
        {checked && (
          <span className={`text-sm font-medium ${allRight ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-500 dark:text-slate-400'}`}>
            {correct} / {items.length} sorted correctly{allRight ? ' 🎉' : ''}
          </span>
        )}
      </div>
    </div>
  );
}
