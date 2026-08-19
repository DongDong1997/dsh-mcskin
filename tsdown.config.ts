// Build config for dsh-mcskin. Produces a single ESM bundle for the browser
// client (window.__DSH_BOOT__ plugin roster), and leaves React/DSH as externals
// so the host bundle and this bundle don't double-up the runtime.
//
// Note: the DSH modules node-side scanner picks up `./dist/client.js` via the
// `exports."./client"` entry declared in package.json, so a top-level row
// `name: '<pkg-name>'` in cordis.patch.yml is enough to register it.

import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: { client: 'src/client/index.ts' },
  format: ['esm'],
  platform: 'browser',
  target: 'es2022',
  outDir: 'dist',
  clean: true,
  sourcemap: false,
  treeshake: true,
  minify: false,
  // React is provided by the host (DSH Web shell); keep it external so we
  // don't bundle a second copy. `cordis` and `cordis:theme` likewise come
  // from the host runtime — the dynamic Cordis plugin contract binds them at
  // load time through `ctx.theme` / `ctx.slots`.
  deps: {
    neverBundle: ['react', 'react-dom', 'react/jsx-runtime', '@deepseek-ai/cordis'],
  },
})


