import { defineConfig } from '@rsbuild/core';
import { pluginUmd } from '../../dist';
import { getRandomPort } from '../helper';

export default defineConfig({
  environments: {
    web: {
      output: {
        filenameHash: false,
      },
    },
    umd: {
      plugins: [
        pluginUmd({
          name: 'myLib',
        }),
      ],
      output: {
        distPath: {
          root: 'dist/umd',
        },
        assetPrefix: '/umd/',
      },
      html: {
        template: './src/index.html',
      },
    },
  },
  tools: {
    htmlPlugin: true,
  },
  server: {
    port: await getRandomPort(),
  },
});
