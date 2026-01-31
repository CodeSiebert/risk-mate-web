/// <reference types="vitest/config" />
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import reactPlugin from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  appType: 'spa',
  build: {
    emptyOutDir: true,
    outDir: resolve(__dirname, 'dist'),
  },
  logLevel: 'info',
  publicDir: resolve(__dirname, 'public'),
  plugins: [reactPlugin()],
  server: {
    hmr: true,
    open: false,
    port: 3100,
  },
  test: {
    coverage: {
      enabled: false,
      exclude: ['src/test.setup.ts', 'src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
      include: ['src/**/*.{js,ts,jsx,tsx}'],
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
    },
    environment: 'happy-dom',
    globals: true,
    reporters: [
      'default',
      ['junit', { outputFile: 'junit-reports/junit.xml' }],
    ],
  },
});
