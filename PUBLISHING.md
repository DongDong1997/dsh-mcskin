# Publishing checklist

This file is the pre-flight checklist for releasing `dsh-mcskin` to npm and tagging the GitHub repo with `dsh-plugin`. DSH's own `CONTRIBUTING.md` says external PRs are not currently accepted, so the supported discoverability path is **npm + GitHub topic**.

## 1. Pre-release sanity

- [ ] `pnpm install` completes without errors
- [ ] `pnpm build` produces `dist/client.js` (no `require`, no TypeScript errors)
- [ ] End-to-end smoke test inside an active DSH session:
  - [ ] Hot-load `dist/client.js` (e.g. via `cordis_define` with the bundle's `apply(ctx)` exported)
  - [ ] Sidebar shows biome gradient (top 6–7px strip + main block color)
  - [ ] Settings → 🎮 Minecraft 主题 page renders 6 cards
  - [ ] Clicking a card swaps the page colors within ~50ms
  - [ ] Top grass strip + bottom-right creeper appear
  - [ ] Settings button is a chest, brand is a grass block, send is a sword
  - [ ] localStorage `mcskin.theme` is written on change
  - [ ] Reload the page → saved theme is restored
- [ ] Code review:
  - [ ] No untracked `console.log`
  - [ ] No accidental global `document.*` writes outside the `body.mcskin-decor` class
  - [ ] All 6 themes' token maps include the same set of token names

## 2. Rename for publication (optional)

By default `name` in `package.json` is `dsh-mcskin`. To publish under a scope, change it to e.g. `@yourname/dsh-mcskin` and `npm login` against that scope first.

```diff
-  "name": "dsh-mcskin",
+  "name": "@yourname/dsh-mcskin",
```

Then update `cordis.patch.yml`:

```diff
- name: 'dsh-mcskin'
+ name: '@yourname/dsh-mcskin'
```

## 3. Versioning

Bump `version` in `package.json` per [SemVer](https://semver.org/). The token map is the public surface — additive palette/icon changes are minor, new features (e.g. new themes, animations) are minor → major if the picker UI changes shape, breaking tokens are major.

## 4. npm publish

```sh
# 1. Confirm the package will publish what you expect
npm pack --dry-run

# 2. Build the final dist
pnpm run clean && pnpm run build

# 3. Login (first time only)
npm login

# 4. Publish
npm publish --access public
#   for scoped: npm publish --access public --@yourname:registry=https://registry.npmjs.org
```

After publish, `npm view dsh-mcskin` (or your scoped name) should show the version.

## 5. GitHub

```sh
# 1. Initialize and push
git init
git add .
git commit -m "Initial release v0.1.0"
gh repo create dsh-mcskin --public --source=. --remote=origin --push
#   (or create the empty repo on github.com first, then add the remote manually)

# 2. Tag the release
git tag v0.1.0
git push --tags
```

On the GitHub repo page:

- [ ] **About**: one-paragraph description matching the package
- [ ] **Topics**: add `dsh-plugin` and `deepseek-harness`
- [ ] **Releases**: cut a release from the v0.1.0 tag, paste the README as the body
- [ ] **Pin**: pin the repo so it shows up in your profile

## 6. Announce (optional)

DSH's own repo doesn't accept plugin PRs but does have Discussions. A short post titled **"dsh-mcskin — Minecraft theme for the Web GUI"** with:

- One-line description
- Screenshot (Settings page + main-page sidebar with a theme applied)
- Install command (`dsh plugin @yourname/dsh-mcskin`)
- Link to GitHub + npm

…in [deepseek-ai/deepseek-harness Discussions → Show and tell](https://github.com/deepseek-ai/deepseek-harness/discussions/categories/show-and-tell) (or the closest existing category) helps discovery without needing a PR.

## 7. Maintenance

- Bump `version` per breaking change, cut a release on GitHub
- Watch DSH releases for token / slot API changes; the `dsh-cordis-client-runner` may publish a new `theme.overrideTokens` signature
- Re-test in a fresh DSH profile after each upstream release; the main-page CSS uses `[class*="..."]` substring matching which is robust to CSS module hash changes but might break if the underlying button structure changes (e.g. DSH replaces the sidebar brand with a different slot)

## 8. Known limitations

- `[class*="_brand__"]` substring match targets CSS-module-hashed classes. If DSH renames the brand slot's CSS module pattern, this selector will need an update.
- The override layer mechanism in `theme.overrideTokens` is the documented public API. If DSH moves to a different override model (e.g. theme extensions), `applyPaletteOverride` and `updateShiki` will need to be re-pointed.
- The hardcoded color tokens for the main-page controls (oak border on composer, lapis on send, etc.) are intentional accents and are not theme-responsive. To make them theme-responsive, swap them for `var(--dsw-*)` references.
