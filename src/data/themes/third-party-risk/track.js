// Third-Party / Vendor Risk — "Your Weakest Supplier". You inherit the weaknesses
// of everyone you depend on; govern the whole vendor ecosystem. 6 levels.
import level01 from './level-01.json';
import level02 from './level-02.json';
import level03 from './level-03.json';
import level04 from './level-04.json';
import level05 from './level-05.json';
import level06 from './level-06.json';

const authored = Object.fromEntries(
  [level01, level02, level03, level04, level05, level06].map((l) => [l.slug, l])
);

export const thirdPartyRiskTrack = {
  levels: [
    { id: 1, slug: 'your-weakest-supplier', title: 'Your Weakest Supplier', subtitle: 'Why other people’s risk becomes yours', icon: '🔗', available: true },
    { id: 2, slug: 'vetting-at-the-gate', title: 'Vetting at the Gate', subtitle: 'Due diligence before you sign', icon: '🔎', available: true },
    { id: 3, slug: 'watching-the-relationship', title: 'Watching the Relationship', subtitle: 'Ongoing monitoring, not sign-and-forget', icon: '📡', available: true },
    { id: 4, slug: 'concentration-and-the-supply-chain', title: 'Concentration & the Supply Chain', subtitle: 'When everyone leans on the same pillar', icon: '🏛️', available: true },
    { id: 5, slug: 'the-exit-plan', title: 'The Exit Plan', subtitle: 'Lock-in, off-boarding & contingency', icon: '🚪', available: true },
    { id: 6, slug: 'governing-the-ecosystem', title: 'Governing the Ecosystem', subtitle: 'The whole vendor lifecycle, owned', icon: '🕸️', available: true },
  ],
  getLevel(slug) {
    return authored[slug] ?? null;
  },
};
