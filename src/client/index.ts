// Public entry: re-exports the Cordis plugin. tsdown picks `index.ts` as
// the entry per tsdown.config.ts, bundles the React fragment, and writes
// `./dist/client.js` for the DSH modules scanner.
//
// Cordis loader contract (vendor/cordis/src/loader/config/entry.ts):
//   - `name`     — optional display id
//   - `inject`   — REQUIRED when apply() touches other plugins' services;
//                   blocks apply() until those services are registered.
//   - `apply`    — the actual activation function called with `ctx`.
//
// The DSH loader imports this module and runs `apply(ctx)`. We expose the
// three named exports so the loader can read each via static analysis; the
// default export is for downstream consumers that import the whole module.

import { apply, name, inject } from './mcskin'

export { name, inject, apply }
export default { name, inject, apply }
