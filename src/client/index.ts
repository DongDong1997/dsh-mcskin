// Public entry: re-exports the Cordis plugin. tsdown picks `index.ts` as
// the entry per tsdown.config.ts, bundles the React fragment, and writes
// `./dist/client.js` for the DSH modules scanner.
//
// The shape mirrors what `cordis_define` expects when the runtime loads
// the bundle inline. The DSH loader imports the package's
// `exports['./client']` (which points to `./dist/client.js`) and invokes
// `apply(ctx)` to wire this plugin into the browser runtime.

import { apply, name } from './mcskin'

export { name, apply }
export default { name, apply }
