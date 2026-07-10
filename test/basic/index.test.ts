import { writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { expect, test } from '@rstest/playwright';
import { createRsbuild, loadConfig } from '@rsbuild/core';

const require = createRequire(import.meta.url);

test('should generate UMD bundle correctly', async ({ page }) => {
  const rsbuild = await createRsbuild({
    cwd: import.meta.dirname,
    rsbuildConfig: (await loadConfig({ cwd: import.meta.dirname })).content,
  });

  await rsbuild.build();
  const { server, urls } = await rsbuild.preview();

  // Browser env
  await page.goto(urls[0]);

  const test = page.locator('#test');
  await expect(test).toHaveText('2');

  // Node.js env
  writeFileSync(
    join(import.meta.dirname, 'dist/package.json'),
    JSON.stringify({ type: 'commonjs' }),
  );
  const { double } = require('./dist/index.js');
  expect(double(1)).toEqual(2);

  await server.close();
});
