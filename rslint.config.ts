import { defineConfig, js, ts } from '@rslint/core';

export default defineConfig([
  js.configs.recommended,
  ts.configs.recommended,
  {
    files: ['test/**/*.ts'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
]);
