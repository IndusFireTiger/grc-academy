// Tiny localStorage-backed progress tracker, keyed by theme → level. No backend for v1.
const KEY = 'grc-academy:progress';

function read() {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(window.localStorage.getItem(KEY) || '{}');
  } catch {
    return {};
  }
}

function write(data) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(KEY, JSON.stringify(data));
  // Let other islands on the page react (e.g. the catalog progress meters).
  window.dispatchEvent(new CustomEvent('grc-progress'));
}

export function isComplete(theme, slug) {
  return Boolean(read()?.[theme]?.[slug]);
}

export function markComplete(theme, slug) {
  const data = read();
  data[theme] = data[theme] || {};
  data[theme][slug] = { completedAt: new Date().toISOString() };
  write(data);
}

// How many levels are complete in a given theme.
export function completedCount(theme) {
  return Object.keys(read()?.[theme] || {}).length;
}
