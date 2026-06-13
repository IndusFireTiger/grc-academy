import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// GRC Academy — static site, React islands only where interactivity is needed.
export default defineConfig({
  integrations: [react(), tailwind()],
});
