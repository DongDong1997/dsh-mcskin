// Theme table: 6 entries (3 styles x 2 colorSchemes). Each entry points at a
// palette in `./palettes` and lists 6 MC icon names to render in the picker
// card. The picker is a single-page grid; this is its data source.

import type { McPalette } from './palettes'
import type { IconName } from './icons'

export interface ThemeEntry {
  id: string
  name: string
  mode: string
  style: 'classic' | 'modern' | 'dark'
  colorScheme: 'light' | 'dark'
  palette: McPalette
  desc: string
  icons: IconName[]
}

import { PALETTES } from './palettes'

export const THEME_ENTRIES: ThemeEntry[] = [
  { id: 'mc-classic-day', name: '经典原版', mode: '日间', style: 'classic', colorScheme: 'light',
    palette: PALETTES.classicDay, desc: '草方块绿 + 圆石灰。阳光普照的草原与森林。',
    icons: ['grassBlock', 'dirt', 'cow', 'chicken', 'fox', 'apple'] },
  { id: 'mc-classic-night', name: '经典原版', mode: '夜晚', style: 'classic', colorScheme: 'dark',
    palette: PALETTES.classicNight, desc: '黑曜石黑 + 末影紫。深夜洞穴与下界。',
    icons: ['obsidian', 'cobblestone', 'creeper', 'wolf', 'soulSand', 'goldIngot'] },
  { id: 'mc-modern-day', name: '现代 MC', mode: '日间', style: 'modern', colorScheme: 'light',
    palette: PALETTES.modernDay, desc: '橡木米 + 祖母绿。柔和森林小屋。',
    icons: ['oakPlank', 'emerald_ore', 'sheep', 'pig', 'glass', 'lantern'] },
  { id: 'mc-modern-night', name: '现代 MC', mode: '夜晚', style: 'modern', colorScheme: 'dark',
    palette: PALETTES.modernNight, desc: '深板岩 + 紫晶紫。暮色森林小屋。',
    icons: ['deepslate', 'amethyst', 'bee', 'wolf', 'potion', 'lantern'] },
  { id: 'mc-dark-day', name: '暗夜 MC', mode: '日间', style: 'dark', colorScheme: 'light',
    palette: PALETTES.darkDay, desc: '末地石米黄 + 龙紫。漂泊的末地。',
    icons: ['endstone', 'purpurBlock', 'chorusFruit', 'shulker', 'axolotl', 'elytra'] },
  { id: 'mc-dark-night', name: '暗夜 MC', mode: '夜晚', style: 'dark', colorScheme: 'dark',
    palette: PALETTES.darkNight, desc: '虚空黑 + 末影紫。末地深处的幽光。',
    icons: ['bedrock', 'dragonEgg', 'witherSkull', 'warden', 'phantom', 'netherStar'] },
]
