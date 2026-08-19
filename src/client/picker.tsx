// React UI for the settings-section "Minecraft 主题" page: header (creeper
// face + title), 3x2 grid of theme cards (each with 6 MC icons + name + mode
// + description), and a footer with current-theme indicator + reset button.

import * as React from 'react'
import { renderIcon, type IconName } from './icons'
import type { ThemeEntry } from './themeEntries'

interface PickerRootProps {
  ctx: any
  theme: any
  themes: ThemeEntry[]
  close: () => void
}

function McSkinCard(props: { entry: ThemeEntry; active: boolean; onPick: () => void }) {
  const t = props.entry
  return React.createElement('button', {
    className: 'mcskin-card' + (props.active ? ' active' : ''),
    onClick: props.onPick,
    type: 'button',
  },
    React.createElement('div', { className: 'mcskin-card-head' },
      React.createElement('p', { className: 'mcskin-card-title' }, t.name),
      React.createElement('p', { className: 'mcskin-card-mode' }, t.mode)
    ),
    React.createElement('div', { className: 'mcskin-icons' },
      t.icons.map(function (iconName: IconName, i: number) {
        return React.createElement('div', {
          key: iconName + '-' + i,
          className: 'mcskin-icon-tile',
          title: iconName,
        }, renderIcon(iconName));
      })
    ),
    React.createElement('div', { className: 'mcskin-card-desc' }, t.desc),
    React.createElement('div', { className: 'mcskin-card-foot' }, props.active ? '✓ 已启用' : '点击应用')
  );
}

function CreeperFace() {
  return renderIcon('creeper')
}

export function PickerRoot(props: PickerRootProps) {
  const initialSnap = props.theme.getTheme()
  const [activeId, setActiveId] = React.useState(initialSnap.active.id)
  React.useEffect(function () {
    const handler = function (snap: any) { setActiveId(snap.active.id) }
    const dispose = props.ctx.on('theme/change', handler)
    return dispose
  }, [])

  return React.createElement('div', { className: 'mcskin-root' },
    React.createElement('div', { className: 'mcskin-header' },
      React.createElement('div', { style: { width: '36px', height: '36px', flexShrink: 0 } },
        React.createElement(CreeperFace, null)),
      React.createElement('h2', { className: 'mcskin-title' }, '🎮 Minecraft 主题')
    ),
    React.createElement('p', { className: 'mcskin-subtitle' },
      '在 3 种风格 × 2 套明暗中自由切换。色板按 MC 方块配色定制，叠加高优先级 token 覆盖以胜过其他主题插件。侧栏显示方块条带，主页控件（设置、品牌、输入框、发送、新会话）也会换成 MC 元素。'),
    React.createElement('div', { className: 'mcskin-grid' },
      props.themes.map(function (t) {
        return React.createElement(McSkinCard, {
          key: t.id,
          entry: t,
          active: activeId === t.id,
          onPick: function () { props.theme.setTheme(t.id); },
        })
      })
    ),
    React.createElement('div', { className: 'mcskin-footer' },
      React.createElement('span', { style: { color: 'var(--dsw-alias-label-tertiary)', fontSize: '12px' } },
        '当前：' + activeId),
      React.createElement('button', {
        className: 'mcskin-btn',
        type: 'button',
        onClick: function () {
          try { localStorage.removeItem('mcskin.theme'); } catch (e) {}
          props.theme.setTheme('system');
        },
      }, '↩ 恢复默认（系统主题）')
    )
  );
}
