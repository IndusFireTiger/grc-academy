import { useEffect, useState } from 'react';

// Light/dark toggle, persisted in localStorage. The pre-paint script in Base.astro
// sets the initial class; this just keeps it in sync on click.
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('grc-academy:theme', next ? 'dark' : 'light');
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="rounded-lg border border-slate-300 px-2.5 py-1 text-sm transition hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-500"
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
