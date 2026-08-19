// dsh-mcskin — apply(ctx). All theme/slots interactions are guarded so that
// the plugin still loads even when those services live in a sibling include
// tree (DSH v0.2.2 crashed at boot because inject: ['theme','slots','styles']
// blocked forever). The main-page decorations always apply; the picker and
// the theme registry only fire when the services are available.

import { THEME_ENTRIES, type ThemeEntry } from './themeEntries'
import { PickerRoot } from './picker'
import { PICKER_AND_DECORATION_CSS, shikiFor } from './mainPageCss'
import { buildTokens } from './palettes'

export const name = 'dsh-mcskin'

// Cordis loader blocks this plugin's activation until the listed services
// are available in the plugin's loader-entry context. `styles` is provided
// by the cordis-client-runner at every bundle's root level, so it's always
// safe to declare. `theme` and `slots` are registered by web-app's plugins
// (ui-theme, ui-slots) inside their own include tree, so declaring them in
// inject here makes the loader wait forever for services that live in a
// sibling subtree — which is what crashed DSH boot at v0.2.2.
// We don't inject them here; instead the apply handler resolves them
// lazily via the runtime-level scope so the plugin still loads even if
// they're not in scope. The marketplace's hot-mount path can re-bind
// them later if it boots dsh-mcskin inside web-app's subtree.
export const inject = ['styles'] as const

export function apply(ctx: any): void {
  // Lazy resolve `theme` and `slots`. They live in web-app's include subtree
  // and may or may not be in this loader entry's context. The plugin still
  // loads regardless — the main-page decorations always apply; the theme
  // registry and the picker only fire when both services are bound.
  const theme: any = (ctx.theme !== undefined) ? ctx.theme : null
  const slots: any = (ctx.slots !== undefined) ? ctx.slots : null

  // Tag body so our main-page CSS selectors never bleed out and never collide.
  try { document.body.classList.add('mcskin-decor') } catch (e) {}

  // 1. Register all 6 themes — only when the theme service is in scope.
  if (theme !== null) {
    for (let i = 0; i < THEME_ENTRIES.length; i++) {
      const t: ThemeEntry = THEME_ENTRIES[i]
      ctx.effect(function () {
        return theme.register({
          id: t.id, colorScheme: t.colorScheme, tokens: buildTokens(t.palette),
        })
      })
    }

    // 2. Stack a high-priority override layer per active style.
    const paletteDisposers: Record<string, () => void> = {}
    function applyPaletteOverride(id: string): void {
      for (const k of Object.keys(paletteDisposers)) {
        paletteDisposers[k]()
        delete paletteDisposers[k]
      }
      const entry = THEME_ENTRIES.find(function (t) { return t.id === id })
      if (!entry) return
      const flat = buildTokens(entry.palette)
      const layered: Record<string, { light: string; dark: string }> = {}
      for (const name of Object.keys(flat)) {
        const value = flat[name]
        layered[name] = { light: value, dark: value }
      }
      paletteDisposers[entry.style] = theme.overrideTokens(
        'mcskin-tokens-' + entry.style, layered)
    }

    // 3. Stack a shiki override per style for code-block syntax highlighting.
    const shikiDisposers: Record<string, () => void> = {}
    function updateShiki(id: string): void {
      let style: 'classic' | 'modern' | 'dark' | null = null
      if (id.indexOf('mc-classic-') === 0) style = 'classic'
      else if (id.indexOf('mc-modern-') === 0) style = 'modern'
      else if (id.indexOf('mc-dark-') === 0) style = 'dark'
      for (const k of Object.keys(shikiDisposers)) {
        if (k !== style) {
          shikiDisposers[k]()
          delete shikiDisposers[k]
        }
      }
      if (style !== null && !shikiDisposers[style]) {
        shikiDisposers[style] = theme.overrideTokens(
          'mcskin-shiki-' + style, shikiFor(style))
      }
    }

    ctx.on('theme/change', function (snap: any) {
      const newId = snap.active.id
      applyPaletteOverride(newId)
      updateShiki(newId)
      try {
        if (newId.indexOf('mc-') === 0) localStorage.setItem('mcskin.theme', newId)
        else localStorage.removeItem('mcskin.theme')
      } catch (e) {}
    })

    const initialId = theme.getTheme().active.id
    applyPaletteOverride(initialId)
    updateShiki(initialId)

    try {
      const saved = localStorage.getItem('mcskin.theme')
      if (saved && THEME_ENTRIES.some(function (t) { return t.id === saved })) {
        theme.setTheme(saved)
      }
    } catch (e) {}
  }

  // 4. CSS injection — always runs (styles is in inject).
  ctx.styles.insert(PICKER_AND_DECORATION_CSS)

  // 5. Settings section picker — only when slots is available.
  if (slots !== null) {
    slots.inject('settings.section', function () {
      return slots.register(
        {
          name: 'settings.section',
          id: 'mcskin',
          order: 50,
          label: '🎮 Minecraft 主题',
        },
        function (ownerProps: any) {
          return React.createElement(PickerRoot, {
            ctx: ctx,
            theme: theme,
            themes: THEME_ENTRIES,
            close: ownerProps.close,
          })
        }
      )
    })
  }
}
