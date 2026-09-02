// Configuration guide: https://rstack.rs/config
import { define } from 'rstack';

define.lib({
  lib: [
    { syntax: 'es2021', dts: true },
    { format: 'cjs', syntax: 'es2021' },
  ],
});

define.test({
  extends: {},
  env: {
    // Let Rsbuild choose the mode based on the command.
    NODE_ENV: undefined,
  },
  isolate: false,
  testTimeout: 15_000,
});

define.fmt({
  singleQuote: true,
});

define.staged({
  '*.{js,jsx,ts,tsx,mjs,cjs,mts,cts}': ['rs lint --fix', 'rs fmt'],
  '*.{json,jsonc,md,mdx,css,scss,less,html,yml,yaml}': 'rs fmt',
});

define.lint(({ js, ts }) => [
  js.configs.recommended,
  ts.configs.recommended,
  {
    files: ['test/**/*.ts'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
]);
