import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base' is crucial for GitHub Pages. 
  // './' ensures assets are loaded relatively, making it work on https://user.github.io/repo/
  base: './', 
});