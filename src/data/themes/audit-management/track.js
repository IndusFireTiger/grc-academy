// Audit Management — "The Health Check-up". Independent, evidence-based examination
// that finds problems early and assures controls actually work. 6 levels.
import level01 from './level-01.json';
import level02 from './level-02.json';
import level03 from './level-03.json';
import level04 from './level-04.json';
import level05 from './level-05.json';
import level06 from './level-06.json';

const authored = Object.fromEntries(
  [level01, level02, level03, level04, level05, level06].map((l) => [l.slug, l])
);

export const auditManagementTrack = {
  levels: [
    { id: 1, slug: 'the-health-checkup', title: 'The Health Check-up', subtitle: 'What audit is — and why it’s independent', icon: '🩺', available: true },
    { id: 2, slug: 'planning-the-audit', title: 'Planning the Audit', subtitle: 'Risk-based planning & scope', icon: '🗺️', available: true },
    { id: 3, slug: 'gathering-the-evidence', title: 'Gathering the Evidence', subtitle: 'Fieldwork, testing & working papers', icon: '🧾', available: true },
    { id: 4, slug: 'findings-that-land', title: 'Findings That Land', subtitle: 'Rating, reporting & making it useful', icon: '📝', available: true },
    { id: 5, slug: 'closing-the-loop', title: 'Closing the Loop', subtitle: 'Remediation, follow-up & readiness', icon: '🔁', available: true },
    { id: 6, slug: 'the-assurance-engine', title: 'The Assurance Engine', subtitle: 'Independence, the committee & modern audit', icon: '⚙️', available: true },
  ],
  getLevel(slug) {
    return authored[slug] ?? null;
  },
};
