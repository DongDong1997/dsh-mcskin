// dsh-mcskin — apply(ctx). All theme/slots/styles interactions are guarded so
// the plugin still loads even when those services live in a sibling include
// tree (DSH boot crashes if the loader's `fiber.ctx` is missing any declared
// inject dependency). The main-page decorations always apply; the picker
// and the theme registry only fire when the services are available.

import { THEME_ENTRIES, type ThemeEntry } from './themeEntries'
import { PickerRoot } from './picker'
import { PICKER_AND_DECORATION_CSS, shikiFor } from './mainPageCss'
import { buildTokens } from './palettes'

export const name = 'dsh-mcskin'

// v0.2.4 declared inject: [] — the loader doesn't wait for any service.
// v0.2.2 (inject: [theme,slots,styles]) and v0.2.3 (inject: [styles]) both
// crashed DSH boot because the user's profile-level bundle entry sits in a
// root include tree that has no services at all (theme/slots live in
// web-app's subtree, styles is provided by cordis-client-runner but not
// visible to the profile's fiber.ctx). Declaring no inject means the loader
// activates the entry immediately; runtime service lookups are defensive
// below.
export const inject = [] as const

export function apply(ctx: any): void {
  // Lazy resolve services from the loader entry's context. Anything missing
  // downgrades that feature path silently — the loader never crashes.
  const theme: any = (ctx.theme !== undefined) ? ctx.theme : null
  const slots: any = (ctx.slots !== undefined) ? ctx.slots : null
  const styles: any = (ctx.styles !== undefined) ? ctx.styles : null

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

  // 4. CSS injection — only when styles is available.
  if (styles !== null && typeof styles.insert === 'function') {
    try { styles.insert(PICKER_AND_DECORATION_CSS) } catch (e) {}
  }

  // 5. Settings section picker — only when slots is available.
  if (slots !== null && typeof slots.inject === 'function') {
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
