// Configuration guide: https://rstack.rs/config
import { define } from 'rstack';
import { pluginUmd } from '../src/index.ts';

define.app({
  plugins: [
    pluginUmd({
      name: 'myLib',
    }),
  ],
  html: {
    template: './src/index.html',
  },
  tools: {
    htmlPlugin: true,
  },
});
