import { useEffect, useState } from 'react';
import { isComplete } from '../lib/progress.js';

// A single theme's journey: all authored levels are open (free navigation).
// Completed levels show ✅; "coming soon" levels stay locked until authored.
export default function TrackMap({ theme, title, tagline, blurb, accent = 'emerald', levels }) {
  const [, setTick] = useState(0);
  useEffect(() => {
    const refresh = () => setTick((t) => t + 1);
    window.addEventListener('grc-progress', refresh);
    return () => window.removeEventListener('grc-progress', refresh);
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-5 py-10">
      <a href="/" className="text-sm text-slate-500 hover:text-emerald-600 dark:text-slate-400">← All tracks</a>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">{title}</h1>
      <p className={`text-${accent}-600 dark:text-${accent}-400 font-medium`}>{tagline}</p>
      <p className="mt-2 text-slate-600 dark:text-slate-300">{blurb}</p>

      <ol className="mt-8 space-y-3">
        {levels.map((lv) => {
          const done = isComplete(theme, lv.slug);
          const open = lv.available; // every authored level is freely accessible
          const node = (
            <div
              className={`flex items-center gap-4 rounded-xl border p-4 transition ${
                done ? `border-${accent}-300 bg-${accent}-50 dark:border-${accent}-800/50 dark:bg-${accent}-900/20`
                : open ? 'border-slate-300 bg-white hover:border-emerald-400 hover:shadow-sm dark:border-slate-700 dark:bg-slate-900'
                : 'border-slate-200 bg-slate-50 opacity-60 dark:border-slate-800 dark:bg-slate-900/40'
              }`}
            >
              <span className="text-2xl">{done ? '✅' : open ? lv.icon : '🔒'}</span>
              <div className="flex-1">
                <div className="font-semibold text-slate-900 dark:text-slate-100">Level {lv.id}: {lv.title}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{lv.subtitle}</div>
              </div>
              {!open && <span className="text-xs font-medium text-slate-400">Coming soon</span>}
              {open && (
                <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  {done ? 'Review →' : 'Start →'}
                </span>
              )}
            </div>
          );

          return (
            <li key={lv.slug}>
              {open ? <a href={`/track/${theme}/${lv.slug}`}>{node}</a> : node}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
