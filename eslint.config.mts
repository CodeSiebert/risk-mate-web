import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import configPrettierFlat from 'eslint-config-prettier/flat';
import pluginImport from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import { configs as tseslintConfigs } from 'typescript-eslint';

export default defineConfig([
  {
    ignores: ['node_modules/', 'dist/', 'build/', 'coverage/'],
  },
  tseslintConfigs.recommended,
  pluginReact.configs.flat.recommended,
  pluginImport.flatConfigs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended', pluginImport.flatConfigs.typescript],
    languageOptions: { globals: globals.browser },
    rules: {
      'import/order': [
        'error',
        {
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
          },
          named: {
            enabled: true,
            types: 'types-first',
          },
          'newlines-between': 'always',
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
