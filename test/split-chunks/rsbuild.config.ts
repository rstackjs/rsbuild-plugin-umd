import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginUmd } from '../../dist';
import { getRandomPort } from '../helper';

export default defineConfig({
  plugins: [
    pluginUmd({
      name: 'myLib',
    }),
    pluginReact(),
  ],
  html: {
    template: './src/index.html',
  },
  tools: {
    htmlPlugin: true,
  },
  performance: {
    chunkSplit: {
      strategy: 'split-by-experience',
    },
  },
  server: {
    port: await getRandomPort(),
  },
});
