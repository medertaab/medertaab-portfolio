import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: 'default',
      },
    }),
  ],
  resolve: {
    alias: {
      '@component': path.resolve(__dirname, './src'),
      '@public': path.resolve(__dirname, './public'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@component/styles/variables.scss" as *;`,
      },
    },
  },
});
