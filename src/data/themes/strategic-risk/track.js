// Strategic Risk — "Steering the Ship". The risk that the big-picture direction is
// wrong — doing the wrong thing well — threatening the whole organisation. 6 levels.
import level01 from './level-01.json';
import level02 from './level-02.json';
import level03 from './level-03.json';
import level04 from './level-04.json';
import level05 from './level-05.json';
import level06 from './level-06.json';

const authored = Object.fromEntries(
  [level01, level02, level03, level04, level05, level06].map((l) => [l.slug, l])
);

export const strategicRiskTrack = {
  levels: [
    { id: 1, slug: 'steering-the-ship', title: 'Steering the Ship', subtitle: 'The risk of going the wrong way', icon: '🧭', available: true },
    { id: 2, slug: 'the-wrong-direction', title: 'The Wrong Direction', subtitle: 'The main ways strategy goes wrong', icon: '🧨', available: true },
    { id: 3, slug: 'reading-the-horizon', title: 'Reading the Horizon', subtitle: 'Scanning, scenarios & weak signals', icon: '🔭', available: true },
    { id: 4, slug: 'betting-wisely', title: 'Betting Wisely', subtitle: 'Decisions under deep uncertainty', icon: '🎲', available: true },
    { id: 5, slug: 'when-the-strategy-fails', title: 'When the Strategy Fails', subtitle: 'Pivots, escalation & course correction', icon: '↪️', available: true },
    { id: 6, slug: 'governing-strategy', title: 'Governing Strategy', subtitle: 'The board, blind spots & risk appetite', icon: '🏛️', available: true },
  ],
  getLevel(slug) {
    return authored[slug] ?? null;
  },
};
