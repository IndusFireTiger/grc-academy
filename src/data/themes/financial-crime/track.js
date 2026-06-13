// Financial Crime (FRAML) — "The Bouncer at the Door". Spotting fraud and dirty
// money before they get in. 5 levels.
import level01 from './level-01.json';
import level02 from './level-02.json';
import level03 from './level-03.json';
import level04 from './level-04.json';
import level05 from './level-05.json';
import level06 from './level-06.json';

const authored = Object.fromEntries(
  [level01, level02, level03, level04, level05, level06].map((l) => [l.slug, l])
);

export const financialCrimeTrack = {
  levels: [
    { id: 1, slug: 'whos-at-the-door', title: 'Who’s at the Door?', subtitle: 'Fraud + money laundering = FRAML', icon: '🕵️', available: true },
    { id: 2, slug: 'spotting-the-fakes', title: 'Spotting the Fakes', subtitle: 'The many faces of fraud', icon: '🎭', available: true },
    { id: 3, slug: 'following-the-dirty-money', title: 'Following the Dirty Money', subtitle: 'How money laundering works', icon: '🧺', available: true },
    { id: 4, slug: 'know-your-customer', title: 'Know Your Customer', subtitle: 'KYC, screening, red flags & reporting', icon: '🪪', available: true },
    { id: 5, slug: 'the-bouncers-playbook', title: 'The Bouncer’s Playbook', subtitle: 'Controls, false positives & balance', icon: '📓', available: true },
    { id: 6, slug: 'the-war-room', title: 'The War Room', subtitle: 'Governance, regulation & the next threats', icon: '🛰️', available: true },
  ],
  getLevel(slug) {
    return authored[slug] ?? null;
  },
};
