import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/capsule/',
  plugins: [
    tailwindcss(),
    react()
  ],
  optimizeDeps: {
    include: ["gsap"],
  },
  // Ensure certain ESM-only deps are bundled for SSR environments (Vercel)
  ssr: {
    // Force bundling for these packages when Vite performs SSR builds
    noExternal: ['@studio-freight/lenis', 'gsap', '@gsap/react']
  },
  build: {
    // If you'd rather externalize a module for the final Rollup bundle,
    // add it to `rollupOptions.external`. Leaving empty here; Vercel
    // errors typically want bundling instead, so we enable `noExternal`.
    rollupOptions: {
      external: []
    }
  }
});