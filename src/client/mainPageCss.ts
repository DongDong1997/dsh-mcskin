// The CSS injected via styles.insert(): a single string containing both the
// picker UI stylesheet and the main-page MC decorations. Body tag
// `.mcskin-decor` is added at apply() so the main-page rules never leak
// out and never collide with other plugins that also use body::before/::after.

import { renderIcon, type IconName } from './icons'

// Convert a renderIcon(...) React element to a CSS data URL. The rects are
// walked off the SVG's props.children array.
function rectsFromIcon(name: IconName): Array<[number, number, number, number, string]> {
  const node = renderIcon(name)
  if (!node) return []
  const kids = (node.props as any).children
  const list: any[] = Array.isArray(kids) ? kids : [kids]
  return list.map(function (r: any) {
    return [r.props.x, r.props.y, r.props.width, r.props.height, r.props.fill]
  })
}

function rectsToDataUrl(rects: Array<[number, number, number, number, string]>): string {
  const svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' shape-rendering='crispEdges'>" +
    rects.map(function (r) {
      return "<rect x='" + r[0] + "' y='" + r[1] + "' width='" + r[2] + "' height='" + r[3] + "' fill='" + String(r[4]).replace(/#/g, '%23') + "'/>";
    }).join('') +
    "</svg>"
  return "url(\"data:image/svg+xml;utf8," + svg + "\")"
}

export const PICKER_AND_DECORATION_CSS =
  // ── Picker page styles (the section content) ─────────────────────────────────
  '.mcskin-root{padding:24px 24px 32px;font-family:var(--dsw-font-family);box-sizing:border-box;}' +
  '.mcskin-header{display:flex;align-items:center;gap:12px;margin-bottom:6px;}' +
  '.mcskin-title{font-family:"Press Start 2P",monospace;font-size:14px;color:var(--dsw-alias-label-primary);margin:0;letter-spacing:.5px;}' +
  '.mcskin-subtitle{color:var(--dsw-alias-label-tertiary);font-size:13px;margin:0 0 18px;line-height:20px;}' +
  '.mcskin-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;}' +
  '@media (max-width:820px){.mcskin-grid{grid-template-columns:repeat(2,minmax(0,1fr));}}' +
  '@media (max-width:560px){.mcskin-grid{grid-template-columns:1fr;}}' +
  '.mcskin-card{border:2px solid var(--dsw-alias-border-l2);border-radius:6px;padding:0;cursor:pointer;transition:transform .1s ease,box-shadow .1s ease;font-family:inherit;text-align:left;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);overflow:hidden;box-sizing:border-box;display:flex;flex-direction:column;}' +
  '.mcskin-card:hover{transform:translateY(-2px);box-shadow:0 4px 14px var(--dsw-alias-bg-mask-2);}' +
  '.mcskin-card.active{border-color:var(--dsw-alias-brand-primary);box-shadow:0 0 0 3px color-mix(in srgb,var(--dsw-alias-brand-primary) 35%,transparent);}' +
  '.mcskin-card-head{padding:10px 14px;border-bottom:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);}' +
  '.mcskin-card-title{font-family:"Press Start 2P",monospace;font-size:9px;color:var(--dsw-alias-label-primary);margin:0;letter-spacing:.4px;}' +
  '.mcskin-card-mode{font-size:11px;color:var(--dsw-alias-label-tertiary);margin-top:6px;}' +
  '.mcskin-icons{display:grid;grid-template-columns:repeat(3,1fr);gap:4px;padding:10px 14px 6px;}' +
  '.mcskin-icon-tile{aspect-ratio:1/1;border:1px solid var(--dsw-alias-border-l2);border-radius:3px;display:flex;align-items:center;justify-content:center;background:var(--dsw-alias-bg-layer-2);image-rendering:pixelated;padding:4px;}' +
  '.mcskin-svg{width:100%;height:100%;image-rendering:pixelated;image-rendering:crisp-edges;}' +
  '.mcskin-card-desc{padding:6px 14px 10px;color:var(--dsw-alias-label-secondary);font-size:12px;line-height:18px;min-height:54px;}' +
  '.mcskin-card-foot{padding:6px 14px 10px;color:var(--dsw-alias-label-tertiary);font-size:11px;line-height:16px;border-top:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);}' +
  '.mcskin-card.active .mcskin-card-foot{color:var(--dsw-alias-brand-primary);}' +
  '.mcskin-footer{margin-top:24px;display:flex;justify-content:space-between;align-items:center;gap:8px;}' +
  '.mcskin-btn{padding:8px 16px;border:1px solid var(--dsw-alias-border-l2);border-radius:4px;background:var(--dsw-alias-button-elevated-fill);color:var(--dsw-alias-label-primary);cursor:pointer;font-family:inherit;font-size:13px;}' +
  '.mcskin-btn:hover{background:var(--dsw-alias-interactive-bg-hover-solid);}' +
  // ── Main-page MC decorations (scoped to body.mcskin-decor) ─────────────────
  'body.mcskin-decor::before{content:"";position:fixed;top:0;left:0;right:0;height:6px;background:var(--dsw-alias-brand-primary);box-shadow:0 1px 0 rgba(0,0,0,0.18);z-index:99999;pointer-events:none;}' +
  'body.mcskin-decor::after{content:"";position:fixed;bottom:14px;right:14px;width:34px;height:34px;background-image:' + rectsToDataUrl(rectsFromIcon('creeper')) + ';background-size:contain;background-repeat:no-repeat;opacity:0.35;pointer-events:none;z-index:99998;}' +
  // Settings trigger (gear → chest)
  'body.mcskin-decor button[aria-haspopup="dialog"]{position:relative;}' +
  'body.mcskin-decor button[aria-haspopup="dialog"] > svg{display:none;}' +
  'body.mcskin-decor button[aria-haspopup="dialog"]::before{content:"";display:inline-block;width:18px;height:18px;background-image:' + rectsToDataUrl(rectsFromIcon('chest')) + ';background-size:contain;background-repeat:no-repeat;vertical-align:middle;margin-right:6px;image-rendering:pixelated;}' +
  // Sidebar brand (text → grass block)
  'body.mcskin-decor button[class*="_brand__"] > svg{display:none;}' +
  'body.mcskin-decor button[class*="_brand__"]{position:relative;padding-left:36px;}' +
  'body.mcskin-decor button[class*="_brand__"]::before{content:"";position:absolute;left:6px;top:50%;transform:translateY(-50%);width:24px;height:24px;background-image:' + rectsToDataUrl(rectsFromIcon('grassBlock')) + ';background-size:contain;background-repeat:no-repeat;image-rendering:pixelated;}' +
  // New-session button (+ icon → pickaxe)
  'body.mcskin-decor [class*="newSession"] > svg{display:none;}' +
  'body.mcskin-decor [class*="newSession"]{position:relative;border:1px solid #6F4F2A !important;box-shadow:inset 0 0 0 1px rgba(255,255,255,0.05);}' +
  'body.mcskin-decor [class*="newSession"]::before{content:"";display:inline-block;width:16px;height:16px;background-image:' + rectsToDataUrl(rectsFromIcon('pickaxe')) + ';background-size:contain;background-repeat:no-repeat;vertical-align:middle;margin-right:4px;image-rendering:pixelated;}' +
  // Send (primary) button (arrow → sword)
  'body.mcskin-decor [class*="primary"] > svg{display:none;}' +
  'body.mcskin-decor [class*="primary"]{position:relative;border:2px solid #3FB9C5 !important;box-shadow:inset 0 0 0 1px rgba(255,255,255,0.2),0 1px 0 rgba(0,0,0,0.2);}' +
  'body.mcskin-decor [class*="primary"]::before{content:"";display:block;width:18px;height:18px;background-image:' + rectsToDataUrl(rectsFromIcon('sword')) + ';background-size:contain;background-repeat:no-repeat;margin:0 auto;image-rendering:pixelated;}' +
  // Composer card: oak-wood border + dark interior
  'body.mcskin-decor [class*="card__"]{border:2px solid #6F4F2A !important;box-shadow:inset 0 0 0 2px #A87F4D,inset 0 0 0 4px #6F4F2A,inset 0 4px 8px rgba(0,0,0,0.18) !important;}' +
  'body.mcskin-decor textarea{font-family:inherit !important;}' +
  // Settings panel close (X → small creeper)
  'body.mcskin-decor button[class*="close"] > svg{display:none;}' +
  'body.mcskin-decor button[class*="close"]{position:relative;color:transparent !important;}' +
  'body.mcskin-decor button[class*="close"]::before{content:"";display:block;width:12px;height:12px;background-image:' + rectsToDataUrl(rectsFromIcon('creeper')) + ';background-size:contain;background-repeat:no-repeat;opacity:0.6;image-rendering:pixelated;}';
