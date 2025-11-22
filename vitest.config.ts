import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      exclude: ['src/test.setup.ts'],
      include: ['src/**/*.{ts,tsx}'],
      provider: 'v8',
    },
    environment: 'happy-dom',
    globals: true,
  },
});
