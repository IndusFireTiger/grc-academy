// Cyber & IT Risk — "Guarding the Castle". Protecting digital systems and data
// from attacks and failures; plus privacy and AI governance. 6 levels.
import level01 from './level-01.json';
import level02 from './level-02.json';
import level03 from './level-03.json';
import level04 from './level-04.json';
import level05 from './level-05.json';
import level06 from './level-06.json';

const authored = Object.fromEntries(
  [level01, level02, level03, level04, level05, level06].map((l) => [l.slug, l])
);

export const cyberItRiskTrack = {
  levels: [
    { id: 1, slug: 'the-castle-under-siege', title: 'The Castle Under Siege', subtitle: 'What cyber & IT risk really is', icon: '🏰', available: true },
    { id: 2, slug: 'who-is-attacking-and-how', title: 'Who’s Attacking, and How', subtitle: 'The threat landscape, de-mystified', icon: '🦹', available: true },
    { id: 3, slug: 'building-the-walls', title: 'Building the Walls', subtitle: 'Defence in depth', icon: '🧱', available: true },
    { id: 4, slug: 'when-the-walls-are-breached', title: 'When the Walls Are Breached', subtitle: 'Detection & incident response', icon: '🚨', available: true },
    { id: 5, slug: 'privacy-and-ai-governance', title: 'Privacy & AI Governance', subtitle: 'Protecting people, not just systems', icon: '🧠', available: true },
    { id: 6, slug: 'governing-cyber', title: 'Governing Cyber', subtitle: 'Frameworks, the board & the human firewall', icon: '🛡️', available: true },
  ],
  getLevel(slug) {
    return authored[slug] ?? null;
  },
};
