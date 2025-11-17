import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      /* Default configuration is usually sufficient, 
         but you can customize quality here if needed.
         e.g., png: { quality: 80 } 
      */
    }),
  ],
  assetsInclude: ['**/*.apk'],
});