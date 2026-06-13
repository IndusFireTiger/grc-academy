import { useMemo, useState } from 'react';
import { certifications, disciplineOrder, disciplineIcon, levelOrder, uniqueValues } from '../data/certifications.js';
import { getThemes } from '../data/themes.js';

const THEME_TITLE = Object.fromEntries(getThemes().map((t) => [t.slug, t.title]));
const THEME_LIVE = Object.fromEntries(getThemes().map((t) => [t.slug, t.status === 'live']));
const PROVIDERS = uniqueValues('provider').sort((a, b) => a.localeCompare(b));

const LEVEL_STYLE = {
  Foundational: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  Intermediate: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
  Advanced: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Expert: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
};

// Catalog of professional GRC certifications & programs, categorised by discipline,
// filterable by discipline, level and provider.
export default function Certifications() {
  const [discipline, setDiscipline] = useState('All');
  const [level, setLevel] = useState('All');
  const [provider, setProvider] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return certifications.filter((c) => {
      if (discipline !== 'All' && c.discipline !== discipline) return false;
      if (level !== 'All' && c.level !== level) return false;
      if (provider !== 'All' && c.provider !== provider) return false;
      if (q && !(`${c.name} ${c.full} ${c.provider} ${c.discipline} ${c.summary}`.toLowerCase().includes(q)))
        return false;
      return true;
    });
  }, [discipline, level, provider, query]);

  const groups = disciplineOrder
    .map((d) => ({ discipline: d, items: filtered.filter((c) => c.discipline === d) }))
    .filter((g) => g.items.length > 0);

  const reset = () => {
    setDiscipline('All');
    setLevel('All');
    setProvider('All');
    setQuery('');
  };

  return (
    <div className="mx-auto max-w-5xl px-5 py-12">
      <header className="text-center">
        <a href="/" className="text-sm text-slate-500 hover:text-emerald-600 dark:text-slate-400">← All tracks</a>
        <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Certifications &amp; Programs</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900 dark:text-slate-100">
          The professional credentials of GRC, by discipline
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          The certifications and programs that build a GRC career — grouped by discipline, from
          foundational to expert. Filter to find a path, and jump to the track that teaches the concept.
        </p>
      </header>

      {/* Level legend */}
      <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
        {levelOrder.map((l) => (
          <span key={l} className={`rounded-full px-3 py-1 font-medium ${LEVEL_STYLE[l]}`}>{l}</span>
        ))}
      </div>

      {/* Filters */}
      <div className="mt-8 space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <FilterRow label="Discipline">
          <Chip active={discipline === 'All'} onClick={() => setDiscipline('All')}>All</Chip>
          {disciplineOrder.map((d) => (
            <Chip key={d} active={discipline === d} onClick={() => setDiscipline(d)}>{disciplineIcon[d]} {d}</Chip>
          ))}
        </FilterRow>
        <FilterRow label="Level">
          <Chip active={level === 'All'} onClick={() => setLevel('All')}>All</Chip>
          {levelOrder.map((l) => (
            <Chip key={l} active={level === l} onClick={() => setLevel(l)}>{l}</Chip>
          ))}
        </FilterRow>
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Provider
            <select
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
              className="rounded-lg border border-slate-300 px-2 py-1.5 text-sm font-normal normal-case text-slate-700 outline-none focus:border-emerald-400 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
            >
              <option value="All">All providers</option>
              {PROVIDERS.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </label>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name, provider, keyword…"
            className="min-w-[200px] flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-400 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
          />
          <button onClick={reset} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-500 hover:text-emerald-600 dark:text-slate-400">
            Reset
          </button>
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
        Showing <strong className="text-slate-700 dark:text-slate-200">{filtered.length}</strong> of {certifications.length} certifications
      </p>

      {/* Results grouped by discipline */}
      {groups.length === 0 ? (
        <p className="mt-10 text-center text-slate-400">No matches — try clearing a filter.</p>
      ) : (
        groups.map(({ discipline: d, items }) => (
          <section key={d} className="mt-8">
            <h2 className="flex items-center gap-2 border-b border-slate-200 pb-2 text-lg font-bold text-slate-800 dark:border-slate-700 dark:text-slate-200">
              <span>{disciplineIcon[d]}</span> {d}
              <span className="text-sm font-normal text-slate-400">({items.length})</span>
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((c) => (
                <Card key={c.id} item={c} />
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}

function FilterRow({ label, children }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="w-20 shrink-0 text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</span>
      {children}
    </div>
  );
}

function Chip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3 py-1 text-sm transition ${
        active
          ? 'border-emerald-500 bg-emerald-500 text-white'
          : 'border-slate-300 text-slate-600 hover:border-emerald-400 dark:border-slate-600 dark:text-slate-300'
      }`}
    >
      {children}
    </button>
  );
}

function Card({ item }) {
  const live = THEME_LIVE[item.track];
  return (
    <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-bold text-slate-900 dark:text-slate-100">{item.name}</h3>
        <span className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold ${LEVEL_STYLE[item.level]}`}>
          {item.level}
        </span>
      </div>
      <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{item.full}</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        <Tag>{item.provider}</Tag>
      </div>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.summary}</p>
      <div className="mt-auto pt-3">
        {live && (
          <a
            href={`/track/${item.track}`}
            className="inline-block text-xs font-medium text-sky-600 hover:underline dark:text-sky-400"
          >
            ↳ Related track: {THEME_TITLE[item.track]}
          </a>
        )}
      </div>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300">
      {children}
    </span>
  );
}
