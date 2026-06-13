import { useMemo, useState } from 'react';

// Match a term to its plain-English meaning. Click a left item, then its match on the right.
// Used by later levels (e.g. COSO component ↔ its job); ships now so the kit is complete.
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function MatchPairs({ title, prompt, pairs }) {
  const rights = useMemo(() => shuffle(pairs.map((p, i) => ({ text: p.right, key: i }))), [pairs]);
  const [activeLeft, setActiveLeft] = useState(null);
  const [matched, setMatched] = useState({}); // leftIndex -> rightKey
  const [wrongFlash, setWrongFlash] = useState(null);

  const usedRightKeys = new Set(Object.values(matched));
  const done = Object.keys(matched).length === pairs.length;

  function pickRight(rightKey) {
    if (activeLeft === null) return;
    if (rightKey === activeLeft) {
      setMatched((m) => ({ ...m, [activeLeft]: rightKey }));
      setActiveLeft(null);
    } else {
      setWrongFlash(rightKey);
      setTimeout(() => setWrongFlash(null), 500);
    }
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
      {title && <h3 className="font-semibold text-slate-800 dark:text-slate-100">{title}</h3>}
      <p className="mt-1 text-slate-600 dark:text-slate-300">{prompt}</p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="space-y-2">
          {pairs.map((p, i) => {
            const isMatched = matched[i] !== undefined;
            return (
              <button
                key={i}
                disabled={isMatched}
                onClick={() => setActiveLeft(i)}
                className={`block w-full rounded-lg border px-3 py-2 text-left text-sm transition ${
                  isMatched ? 'border-emerald-400 bg-emerald-50 text-slate-400 dark:bg-emerald-900/20'
                  : activeLeft === i ? 'border-sky-500 bg-sky-50 dark:bg-sky-900/20'
                  : 'border-slate-200 hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-500'
                }`}
              >
                {p.left}
              </button>
            );
          })}
        </div>
        <div className="space-y-2">
          {rights.map((r) => {
            const used = usedRightKeys.has(r.key);
            return (
              <button
                key={r.key}
                disabled={used}
                onClick={() => pickRight(r.key)}
                className={`block w-full rounded-lg border px-3 py-2 text-left text-sm transition ${
                  used ? 'border-emerald-400 bg-emerald-50 text-slate-400 dark:bg-emerald-900/20'
                  : wrongFlash === r.key ? 'border-rose-400 bg-rose-50 dark:bg-rose-900/20'
                  : 'border-slate-200 hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-500'
                }`}
              >
                {r.text}
              </button>
            );
          })}
        </div>
      </div>

      {done && <p className="mt-4 text-sm font-medium text-emerald-700 dark:text-emerald-400">✓ All matched!</p>}
    </div>
  );
}
