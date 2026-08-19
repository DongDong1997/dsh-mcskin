# dsh-mcskin

Minecraft-themed skin for the **DeepSeek Harness** (DSH) Web GUI. 6 themes (3 styles × 2 colorSchemes), with MC pixel-art icons, sidebar biome gradient, top grass strip, bottom-right creeper decoration, and chest / grass-block / sword / pickaxe / creeper replacements for the main-page controls.

> This plugin is a third-party DSH bundle. Tag your GitHub repo with [`dsh-plugin`](https://github.com/topics/dsh-plugin) to make it discoverable.

## Themes

| Style | Light (Day) | Dark (Night) |
|---|---|---|
| **经典原版** Classic | 🌱 Grass-block green + cobblestone + dirt | 🌑 Obsidian + ender pearl purple + deepslate |
| **现代 MC** Modern | 🪵 Oak + paper + emerald | 🪨 Deepslate + amethyst + bone |
| **暗夜 MC** End | 🏛️ End stone + ender dragon purple | 🕳️ Void + obsidian + ender pearl glow |

Each theme is a full token map (70+ `--dsw-alias-*` + `--dsw-specific-*`) derived from a single semantic palette spec.

## Install

```sh
dsh plugin dsh-mcskin
```

The bundle ships with a `cordis.patch.yml` that registers a top-level browser-side plugin row. The web-app bundle's `modules` plugin scans it and composes the build. No manual config needed.

## What changes in the GUI

### Settings picker (new page)

> Settings → 🎮 Minecraft 主题

3 × 2 grid of cards. Each card shows:

- Theme name + mode (in `Press Start 2P` pixel font)
- 6 MC pixel-art icons (grass block, cobblestone, cow, creeper, sword, etc.) themed to the biome
- Description
- Click to apply; selection persists in `localStorage['mcskin.theme']`

### Main-page MC decorations (always on, scope = `body.mcskin-decor`)

| Element | Before | After |
|---|---|---|
| Top edge | (no decoration) | 6px grass strip in brand color |
| Bottom-right | (no decoration) | 35% opacity creeper face, 34px |
| Sidebar (full) | Solid color | 6–7px biome strip + main block color |
| Settings button (footer of sidebar) | Gear icon | Chest |
| Sidebar brand | "DeepSeek" wordmark | 24px grass block |
| New session button | `+` icon | Iron pickaxe + oak border |
| Composer card | Rounded pill | Oak-wood border with inset highlight/shadow |
| Send button | Arrow | Iron sword + lapis border |
| Settings panel close | `×` | Tiny creeper face |

The main-page CSS keys off theme tokens (`--dsw-alias-brand-primary`, `--dsw-specific-sidebar-fill`, etc.), so the decorations change color with the active theme automatically.

## Local development

This bundle is built with [tsdown](https://tsdown.dev) and uses DSH's module conventions.

```sh
# Install
pnpm install
# Build (outputs ./dist/client.js)
pnpm build
# Watch
pnpm dev
# Type-check
pnpm exec tsc --noEmit
```

### Running inside an active DSH session

The bundle is a drop-in replacement for the dynamic Cordis plugin definition. While a DSH session is running, you can hot-load the build:

```ts
// In the agent's tool surface, ask the runtime to evaluate the bundle:
import('/abs/path/to/dsh-mcskin/dist/client.js').then((m) => m.apply(ctx))
```

Or copy the build output to a profile's `node_modules/<name>/dist/` and restart the profile to load it via the standard DSH plugin installer.

## Publish

This package is structured for npm + `dsh plugin <name>`. To publish:

1. `git init && git add . && git commit -m "..."`
2. `npm login` (or `pnpm login`)
3. `npm publish --access public` (rename `name` in `package.json` first if you want a scoped name, e.g. `@yourname/dsh-mcskin`)
4. `gh repo create` and push
5. Add the `dsh-plugin` topic on the GitHub repo
6. Optional: announce in [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) Discussions (DSH currently does not accept plugin PRs, see `CONTRIBUTING.md`)

See `PUBLISHING.md` for a full pre-flight checklist.

## Project layout

```
dsh-mcskin/
├── package.json                 # npm + dsh.bundle manifest
├── cordis.patch.yml             # registers the top-level browser plugin row
├── tsconfig.json                # ESM + JSX + DOM lib
├── tsdown.config.ts             # bundles src/client/index.ts -> dist/client.js
├── LICENSE                      # MIT
├── README.md                    # this file
├── PUBLISHING.md                # pre-publish checklist
└── src/
    └── client/
        ├── index.ts             # public entry (re-exports apply + name)
        ├── mcskin.ts            # Cordis apply(): theme registry, override layers, slot
        ├── palettes.ts          # 6 McPalette specs
        ├── themeEntries.ts      # 6 ThemeEntry rows (style/mode/icons)
        ├── icons.tsx            # 35 pixel-art SVG icons (16x16)
        ├── picker.tsx           # React picker UI (settings-section slot)
        └── mainPageCss.ts       # the CSS string injected via styles.insert
```

## How theme overrides win over other plugins

DSH's `theme.overrideTokens(source, layer)` is a stack: each call adds a layer on top of the previous one, later layers win per-token. The skin-center plugin (and any other third-party theme plugin) calls it once at apply-time. We call it on **every theme change** with our own source, which restacks our layer on top — guaranteeing our tokens win for as long as our plugin's last `theme/change` handler runs after theirs.

The 6 registered themes provide a fallback: even if no override layers exist, the registered theme's tokens are what the ThemePresenter projects onto `body.style`. Setting `theme.setTheme('mc-classic-day')` from a fresh session without any overrides still applies our tokens.

## Compatibility

- DSH ≥ a recent version with `theme.overrideTokens`, `settings.section` list slot, and `body` accessible to plugins
- React 18 (peer dep)
- Modern browsers (CSS `color-mix`, `data-uri svg`, `image-rendering: pixelated`)

## License

MIT — see [LICENSE](./LICENSE).
