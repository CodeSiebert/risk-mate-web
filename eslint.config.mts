import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import configPrettierFlat from 'eslint-config-prettier/flat';
import pluginImport from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import { default as reactRefresh } from 'eslint-plugin-react-refresh';
import globals from 'globals';
import { configs as tseslintConfigs } from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['node_modules/', 'dist/', 'build/', 'coverage/', '.vscode/']),

  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: [
      js.configs.recommended,
      tseslintConfigs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      pluginImport.flatConfigs.recommended,
      pluginImport.flatConfigs.typescript,
    ],
    languageOptions: { globals: globals.browser },
    rules: {
      'import/order': [
        'error',
        {
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
          },
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
          ],
          named: {
            enabled: true,
            types: 'types-last',
          },
          'newlines-between': 'always',
          sortTypesGroup: false,
        },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.{test|spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: globals.vitest,
    },
  },
  configPrettierFlat,
]);
