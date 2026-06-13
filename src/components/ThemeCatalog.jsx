import { useEffect, useState } from 'react';
import { completedCount } from '../lib/progress.js';

// The academy home: a grid of GRC theme cards. Live themes are clickable and show
// progress; "coming soon" themes are dimmed.
export default function ThemeCatalog({ themes }) {
  const [, setTick] = useState(0);
  useEffect(() => {
    const refresh = () => setTick((t) => t + 1);
    window.addEventListener('grc-progress', refresh);
    return () => window.removeEventListener('grc-progress', refresh);
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <section className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Learn GRC the fun way
        </h1>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
          Governance, Risk &amp; Compliance — made for people without a finance or statistics
          background. Pick a theme, play through short levels, and walk away able to hold your own in
          the conversation. Start with <strong>Credit Risk</strong>.
        </p>
      </section>

      {/* Reference module: the GRC Atlas */}
      <a
        href="/atlas"
        className="mb-8 flex items-center justify-between gap-4 rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-sky-50 p-5 transition hover:border-emerald-400 hover:shadow-md dark:border-emerald-800/50 dark:from-emerald-900/20 dark:to-sky-900/20"
      >
        <div className="flex items-center gap-4">
          <span className="text-3xl">🗺️</span>
          <div>
            <h2 className="font-semibold text-slate-900 dark:text-slate-100">The GRC Atlas</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              A worldwide reference of the laws, regulations, frameworks &amp; standards organisations must abide by — filter by region, type &amp; scope.
            </p>
          </div>
        </div>
        <span className="hidden shrink-0 text-sm font-medium text-emerald-600 sm:inline dark:text-emerald-400">Open the atlas →</span>
      </a>

      <div className="grid gap-4 sm:grid-cols-2">
        {themes.map((t) => {
          const total = t.track ? t.track.levels.length : 0;
          const done = t.status === 'live' ? completedCount(t.slug) : 0;
          const Card = t.status === 'live' ? 'a' : 'div';
          return (
            <Card
              key={t.slug}
              href={t.status === 'live' ? `/track/${t.slug}` : undefined}
              className={`group relative flex flex-col rounded-2xl border p-5 transition ${
                t.status === 'live'
                  ? `cursor-pointer border-${t.accent}-200 bg-white hover:border-${t.accent}-400 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-${t.accent}-500`
                  : 'border-slate-200 bg-slate-50 opacity-70 dark:border-slate-800 dark:bg-slate-900/40'
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="text-3xl">{t.icon}</span>
                {t.status === 'live' ? (
                  <span className={`rounded-full bg-${t.accent}-100 px-2 py-0.5 text-xs font-medium text-${t.accent}-700 dark:bg-${t.accent}-900/30 dark:text-${t.accent}-300`}>
                    {done}/{total} done
                  </span>
                ) : (
                  <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    Coming soon
                  </span>
                )}
              </div>
              <h2 className="mt-3 text-lg font-semibold text-slate-900 dark:text-slate-100">{t.title}</h2>
              <p className={`text-sm font-medium text-${t.accent}-600 dark:text-${t.accent}-400`}>{t.tagline}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{t.blurb}</p>
              {t.status === 'live' && (
                <span className="mt-3 text-sm font-medium text-emerald-600 group-hover:underline dark:text-emerald-400">
                  Start track →
                </span>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
