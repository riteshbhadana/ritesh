import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Example alias for src directory
      '@/lib': path.resolve(__dirname, 'src/lib'), // Example alias for src/lib directory
    },
  },
});
