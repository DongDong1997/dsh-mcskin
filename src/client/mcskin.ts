// Main client-side Cordis plugin. Registers 6 themes, stacks a high-priority
// token override per active theme (so we win over skin-center etc.), inserts
// the picker UI in the settings section, and emits a single CSS string that
// covers the picker page + the main-page MC decorations (top grass strip,
// bottom-right creeper, brand → grass block, settings → chest, send →
// sword, new-session → pickaxe, close → creeper, composer card → oak chest
// border).

import * as React from 'react'
import { PALETTES, type McPalette } from './palettes'
import { THEME_ENTRIES, type ThemeEntry } from './themeEntries'
import { PickerRoot } from './picker'
import { PICKER_AND_DECORATION_CSS } from './mainPageCss'

// Expand one McPalette spec to the full --dsw-alias-* + --dsw-specific-* token
// map. Each registered theme carries this set as its inline tokens; an
// override layer on top of that, restacked on every theme change, layers
// them over every other plugin's overrides.
function buildTokens(p: McPalette): Record<string, string> {
  return {
    '--dsw-alias-bg-base': p.bgBase, '--dsw-alias-bg-layer-1': p.bgL1,
    '--dsw-alias-bg-layer-2': p.bgL2, '--dsw-alias-bg-layer-3': p.bgL3,
    '--dsw-alias-bg-overlay': p.bgOverlay, '--dsw-alias-bg-module-platform': p.bgModule,
    '--dsw-alias-bg-multi-select': p.bgMulti, '--dsw-alias-bg-skeleton': p.bgSkeleton,
    '--dsw-alias-bg-mask-1': p.bgMask1, '--dsw-alias-bg-mask-2': p.bgMask2,
    '--dsw-alias-bg-mask-3': p.bgMask3, '--dsw-alias-bg-mask-photo': p.bgMaskPhoto,
    '--dsw-alias-bg-mask-drop': p.bgMaskDrop,
    '--dsw-alias-border-l1': p.borderL1, '--dsw-alias-border-l2': p.borderL2,
    '--dsw-alias-border-l3': p.borderL3, '--dsw-alias-border-l4': p.borderL4,
    '--dsw-alias-border-l2-darkmode-thin': p.borderL2DT,
    '--dsw-alias-border-inverted': p.borderInv, '--dsw-alias-border-inverted2': p.borderInv2,
    '--dsw-alias-brand-primary': p.brand, '--dsw-alias-brand-primary-invert': p.brandInv,
    '--dsw-alias-brand-text': p.brandText,
    '--dsw-alias-brand-primary-new-colorprimary-new-color': p.brand,
    '--dsw-alias-button-contrast-fill': p.btnContrast,
    '--dsw-alias-button-elevated-fill': p.btnElev,
    '--dsw-alias-button-floating-fill': p.btnFloat,
    '--dsw-alias-button-floating-hover': p.btnFloatH,
    '--dsw-alias-button-ghost-active-border': p.btnGhostB,
    '--dsw-alias-button-ghost-active-fill': p.btnGhostF,
    '--dsw-alias-button-ghost-active-hover': p.btnGhostH,
    '--dsw-alias-button-info-fill': p.btnInfo, '--dsw-alias-button-info-hover': p.btnInfoH,
    '--dsw-alias-button-primary-fill': p.brand, '--dsw-alias-button-primary-hover': p.btnInfoH,
    '--dsw-alias-button-primary-dimmed': p.btnPrimDim,
    '--dsw-alias-button-tool-bar-fill': p.btnTB,
    '--dsw-alias-button-tool-bar-fill-invisible': p.btnTBI,
    '--dsw-alias-button-tool-bar-hover': p.btnTBH,
    '--dsw-alias-interactive-bg-active': p.intActive,
    '--dsw-alias-interactive-bg-hover': p.intHover,
    '--dsw-alias-interactive-bg-hover-accent': p.intHoverAcc,
    '--dsw-alias-interactive-bg-hover-danger': p.intHoverDanger,
    '--dsw-alias-interactive-bg-hover-solid': p.intHoverSolid,
    '--dsw-alias-label-primary': p.labelPri, '--dsw-alias-label-secondary': p.labelSec,
    '--dsw-alias-label-tertiary': p.labelTer, '--dsw-alias-label-caption': p.labelCap,
    '--dsw-alias-label-dimmed': p.labelDim, '--dsw-alias-label-primary-bluish': p.labelPriB,
    '--dsw-alias-label-primary-dimmed': p.labelPriD,
    '--dsw-alias-label-primary-foreground': p.labelPriF,
    '--dsw-alias-label-primary-inverted': p.labelPriI,
    '--dsw-alias-markdown-citation': p.mdCitation,
    '--dsw-alias-markdown-code-block': p.mdCode,
    '--dsw-alias-markdown-code-block-banner': p.mdCodeBanner,
    '--dsw-alias-markdown-code-segment-selected': p.mdCodeSegS,
    '--dsw-alias-markdown-code-segment-unselected': p.mdCodeSegU,
    '--dsw-alias-markdown-inline-code': p.mdInline,
    '--dsw-alias-markdown-placeholder': p.mdPlace, '--dsw-alias-markdown-tag': p.mdTag,
    '--dsw-alias-scrollbar-bg-l1': p.scrlL1, '--dsw-alias-scrollbar-bg-l2': p.scrlL2,
    '--dsw-alias-scrollbar-hover-l1': p.scrlH1, '--dsw-alias-scrollbar-hover-l2': p.scrlH2,
    '--dsw-alias-state-business-primary': p.busPri,
    '--dsw-alias-state-business-tertiary': p.busTer,
    '--dsw-alias-state-error-primary': p.errPri, '--dsw-alias-state-error-secondary': p.errSec,
    '--dsw-alias-state-success-primary': p.sucPri,
    '--dsw-alias-state-success-secondary': p.sucSec,
    '--dsw-alias-state-success-tertiary': p.sucTer,
    '--dsw-alias-state-warn-label': p.warnLab,
    '--dsw-alias-state-warn-primary': p.warnPri,
    '--dsw-alias-state-warn-secondary': p.warnSec,
    '--dsw-alias-state-warn-tertiary': p.warnTer,
    '--dsw-alias-toast-bg': p.toastBg, '--dsw-alias-tooltip-bg': p.tooltipBg,
    '--dsw-specific-bubble': p.bubble, '--dsw-specific-bubble-highlight': p.bubbleHL,
    '--dsw-specific-input-major': p.inputMaj, '--dsw-specific-login-input': p.loginIn,
    '--dsw-specific-menu': p.menu, '--dsw-specific-selector': p.selector,
    '--dsw-specific-sidebar-fill': p.sideFill,
    '--dsw-specific-sidebar-nav-item-active': p.sideNA,
    '--dsw-specific-sidebar-nav-item-active-accent': p.sideNAA,
    '--dsw-specific-sidebar-nav-item-hover': p.sideNH,
    '--dsw-specific-tip': p.tip,
  }
}

function shikiFor(style: 'classic' | 'modern' | 'dark'): { light: Record<string, string>, dark: Record<string, string> } {
  if (style === 'classic') {
    return {
      light: {
        '--shiki-foreground': '#E8E8E8', '--shiki-background': '#2D2D2D',
        '--shiki-token-constant': '#FCDB05', '--shiki-token-string': '#5DEC8C',
        '--shiki-token-comment': '#7A8570', '--shiki-token-keyword': '#A042E0',
        '--shiki-token-parameter': '#FF8B3D', '--shiki-token-function': '#5DECF5',
        '--shiki-token-string-expression': '#3FB97F', '--shiki-token-punctuation': '#B0B0B0',
        '--shiki-token-link': '#FFE34A',
      },
      dark: {
        '--shiki-foreground': '#E5DAEC', '--shiki-background': '#15151A',
        '--shiki-token-constant': '#FCDB05', '--shiki-token-string': '#5DEC8C',
        '--shiki-token-comment': '#6A6580', '--shiki-token-keyword': '#B287F5',
        '--shiki-token-parameter': '#FF8B3D', '--shiki-token-function': '#5DECF5',
        '--shiki-token-string-expression': '#3FB97F', '--shiki-token-punctuation': '#8888A0',
        '--shiki-token-link': '#FFE34A',
      },
    }
  }
  if (style === 'modern') {
    return {
      light: {
        '--shiki-foreground': '#2D2418', '--shiki-background': '#FFFCF5',
        '--shiki-token-constant': '#2D8E4A', '--shiki-token-string': '#A8451A',
        '--shiki-token-comment': '#8A7A60', '--shiki-token-keyword': '#6B2DBC',
        '--shiki-token-parameter': '#E2A632', '--shiki-token-function': '#2D8E4A',
        '--shiki-token-string-expression': '#A8451A', '--shiki-token-punctuation': '#5A4A30',
        '--shiki-token-link': '#1F7A52',
      },
      dark: {
        '--shiki-foreground': '#EAE4D9', '--shiki-background': '#16181C',
        '--shiki-token-constant': '#5DEC8C', '--shiki-token-string': '#FFA85F',
        '--shiki-token-comment': '#6A6458', '--shiki-token-keyword': '#C49DFF',
        '--shiki-token-parameter': '#FFD24A', '--shiki-token-function': '#5DEC8C',
        '--shiki-token-string-expression': '#FFA85F', '--shiki-token-punctuation': '#8A8478',
        '--shiki-token-link': '#5DD597',
      },
    }
  }
  return {
    light: {
      '--shiki-foreground': '#1A0F2A', '--shiki-background': '#F0F1B0',
      '--shiki-token-constant': '#6B2DBC', '--shiki-token-string': '#3F2F4F',
      '--shiki-token-comment': '#7A6A80', '--shiki-token-keyword': '#5A249F',
      '--shiki-token-parameter': '#FF8B3D', '--shiki-token-function': '#5A249F',
      '--shiki-token-string-expression': '#3F2F4F', '--shiki-token-punctuation': '#5A4A60',
      '--shiki-token-link': '#9D6FE6',
    },
    dark: {
      '--shiki-foreground': '#E5DAEC', '--shiki-background': '#08080E',
      '--shiki-token-constant': '#C490FF', '--shiki-token-string': '#5DECF5',
      '--shiki-token-comment': '#6A6580', '--shiki-token-keyword': '#D5A5FF',
      '--shiki-token-parameter': '#FFD24A', '--shiki-token-function': '#5DECF5',
      '--shiki-token-string-expression': '#5DECF5', '--shiki-token-punctuation': '#8A85A0',
      '--shiki-token-link': '#C49DFF',
    },
  }
}

export const name = 'dsh-mcskin'

export function apply(ctx: any): void {
  const theme = ctx.theme
  const slots = ctx.slots

  // Tag body so our main-page CSS selectors never bleed out and never collide.
  try { document.body.classList.add('mcskin-decor') } catch (e) {}

  // 1. Register all 6 themes.
  for (let i = 0; i < THEME_ENTRIES.length; i++) {
    const t: ThemeEntry = THEME_ENTRIES[i]
    ctx.effect(function () {
      return theme.register({
        id: t.id, colorScheme: t.colorScheme, tokens: buildTokens(t.palette),
      })
    })
  }

  // 2. Stack a high-priority override layer per active style. Restacking on
  //    every theme change keeps our layer on top of any other plugin's
  //    overrides (e.g. skin-center).
  const paletteDisposers: Record<string, () => void> = {}
  function applyPaletteOverride(id: string): void {
    for (const k of Object.keys(paletteDisposers)) {
      paletteDisposers[k]()
      delete paletteDisposers[k]
    }
    const entry = THEME_ENTRIES.find(function (t) { return t.id === id })
    if (!entry) return
    const flat = buildTokens(entry.palette)
    const layered: Record<string, { light: string, dark: string }> = {}
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
    if (style && !shikiDisposers[style]) {
      shikiDisposers[style] = theme.overrideTokens('mcskin-shiki-' + style, shikiFor(style))
    }
  }

  // 4. Wire every theme change so palette + shiki stay synced, and persist.
  ctx.on('theme/change', function (snap: any) {
    const newId = snap.active.id
    applyPaletteOverride(newId)
    updateShiki(newId)
    try {
      if (newId.indexOf('mc-') === 0) localStorage.setItem('mcskin.theme', newId)
      else localStorage.removeItem('mcskin.theme')
    } catch (e) {}
  })

  // 5. Apply both layers for the initial theme.
  const initialId = theme.getTheme().active.id
  applyPaletteOverride(initialId)
  updateShiki(initialId)

  // 6. Restore last user selection.
  try {
    const saved = localStorage.getItem('mcskin.theme')
    if (saved && THEME_ENTRIES.some(function (t) { return t.id === saved })) {
      theme.setTheme(saved)
    }
  } catch (e) {}

  // 7. Picker + main-page CSS.
  ;(ctx as any).styles.insert(PICKER_AND_DECORATION_CSS)

  // 8. Settings section entry.
  slots.inject('settings.section', function () {
    return slots.register(
      { name: 'settings.section', id: 'mcskin', order: 50, label: '🎮 Minecraft 主题' },
      function (ownerProps: any) {
        return React.createElement(PickerRoot, {
          ctx: ctx, theme: theme, themes: THEME_ENTRIES, close: ownerProps.close,
        })
      }
    )
  })
}
