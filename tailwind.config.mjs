/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  // Theme accent colours are referenced dynamically per track, so safelist them.
  safelist: [
    { pattern: /(bg|text|border|ring|from|to)-(emerald|sky|amber|rose|violet|teal|slate)-(50|100|200|300|400|500|600|700|800|900)/ },
  ],
  theme: { extend: {} },
  plugins: [],
};
