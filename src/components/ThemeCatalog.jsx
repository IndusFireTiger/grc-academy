// Two groups of study tracks: the risk *types* themselves, vs the disciplines for
// *managing & governing* risk (audit, controls, policy, compliance, etc.).
const RISK_TYPE_SLUGS = [
  'credit-risk',
  'operational-risk',
  'market-risk',
  'liquidity-risk',
  'financial-crime',
  'cyber-it-risk',
  'third-party-risk',
  'esg-climate-risk',
  'strategic-risk',
];
const MANAGE_SLUGS = [
  'regulatory-compliance',
  'internal-controls',
  'audit-management',
  'policy-management',
  'business-continuity',
  'insurable-risk',
];

// The academy home: study tracks in two groups, plus the reference library.
export default function ThemeCatalog({ themes }) {
  const bySlug = Object.fromEntries(themes.map((t) => [t.slug, t]));
  const pick = (slugs) => slugs.map((s) => bySlug[s]).filter(Boolean);
  const riskThemes = pick(RISK_TYPE_SLUGS);
  const manageThemes = pick(MANAGE_SLUGS);
  // Safety net: any theme not assigned to a group still shows up.
  const grouped = new Set([...RISK_TYPE_SLUGS, ...MANAGE_SLUGS]);
  const otherThemes = themes.filter((t) => !grouped.has(t.slug));

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <section className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Learn GRC the fun way
        </h1>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
          Governance, Risk &amp; Compliance — education and training material are design to be easy to comprehend and fun to learn about.
          <br />
          Pick a track, play through short levels, and walk away with the ability to hold your own point of view. 
          <br />
         Remember to visit references <strong>GRC Atlas</strong> and <strong>Certifications & Programs</strong>.
        </p>
      </section>

      {/* Reference library — look-ups, not study modules. Deliberately styled
          distinct from the track cards: compact, horizontal, muted, dashed. */}
      <div className="mb-10">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Reference library</span>
          <span className="text-xs text-slate-400 dark:text-slate-500">— look it up, not a lesson</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <RefLink href="/atlas" icon="🗺️" title="GRC Atlas" desc="Laws, regulations, frameworks & standards" />
          <RefLink href="/certifications" icon="🏅" title="Certifications & Programs" desc="Credentials by discipline" />
        </div>
      </div>

      {/* Group 1: the risk types */}
      <GroupHeading
        eyebrow="Study tracks"
        title="Risk types"
        desc="The kinds of risk an organisation faces — what each is and how it bites."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {riskThemes.map((t) => <ThemeCard key={t.slug} t={t} />)}
      </div>

      {/* Group 2: managing & governing risk */}
      <GroupHeading
        eyebrow="Study tracks"
        title="Managing & Governing risk"
        desc="The disciplines that keep risk in check — audit, controls, compliance, policy, resilience, insurance."
        className="mt-12"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {manageThemes.map((t) => <ThemeCard key={t.slug} t={t} />)}
      </div>

      {otherThemes.length > 0 && (
        <>
          <GroupHeading eyebrow="Study tracks" title="More" desc="" className="mt-12" />
          <div className="grid gap-4 sm:grid-cols-2">
            {otherThemes.map((t) => <ThemeCard key={t.slug} t={t} />)}
          </div>
        </>
      )}
    </div>
  );
}

function GroupHeading({ eyebrow, title, desc, className = '' }) {
  return (
    <div className={`mb-4 ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">{eyebrow}</p>
      <h2 className="mt-0.5 text-xl font-bold text-slate-900 dark:text-slate-100">{title}</h2>
      {desc && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{desc}</p>}
    </div>
  );
}

function RefLink({ href, icon, title, desc }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-50/70 px-4 py-3 transition hover:border-emerald-400 hover:bg-white dark:border-slate-600 dark:bg-slate-900/40 dark:hover:bg-slate-900"
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-xl shadow-sm dark:bg-slate-800">{icon}</span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-slate-800 dark:text-slate-100">{title}</span>
        <span className="block truncate text-xs text-slate-500 dark:text-slate-400">{desc}</span>
      </span>
      <span className="ml-auto shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-emerald-500">→</span>
    </a>
  );
}

function ThemeCard({ t }) {
  const total = t.track ? t.track.levels.length : 0;
  const Card = t.status === 'live' ? 'a' : 'div';
  return (
    <Card
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
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {total} modules
          </span>
        ) : (
          <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            Coming soon
          </span>
        )}
      </div>
      <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-slate-100">{t.title}</h3>
      <p className={`text-sm font-medium text-${t.accent}-600 dark:text-${t.accent}-400`}>{t.tagline}</p>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{t.blurb}</p>
      {t.status === 'live' && (
        <span className="mt-3 text-sm font-medium text-emerald-600 group-hover:underline dark:text-emerald-400">
          Start track →
        </span>
      )}
    </Card>
  );
}
