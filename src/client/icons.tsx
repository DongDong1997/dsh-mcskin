// 16x16 pixel-art SVG icons (existing) + 30 PNG data URLs from Mojang's
// vanilla 1.21.11 client.jar (see ./pngIcons.tsx). The PNG icons render as
// <img> in the picker cards; SVG icons render as <svg>. renderIcon() picks
// the right shape based on the entry's value type (string -> <img>, function
// -> <svg>).
//
// `px(x, y, w, h, color)` is a pixel-cluster helper. `mkIcon` builds the
// <rect> list, `svgFrame` wraps it in a <svg>.

import * as React from 'react'
import { PNG_ICONS } from './pngIcons'

type Rect = [number, number, number, number, string]

const px = (x: number, y: number, w: number, h: number, c: string): Rect => [x, y, w, h, c]

function svgFrame(children: React.ReactNode): React.ReactElement {
  return React.createElement('svg', {
    viewBox: '0 0 16 16',
    shapeRendering: 'crispEdges',
    xmlns: 'http://www.w3.org/2000/svg',
    className: 'mcskin-svg',
  }, children)
}

function mkIcon(rects: Rect[]): React.ReactElement {
  const kids: React.ReactNode[] = []
  for (let i = 0; i < rects.length; i++) {
    const r = rects[i]
    kids.push(React.createElement('rect', {
      key: 'r' + i,
      x: r[0], y: r[1], width: r[2], height: r[3], fill: r[4],
    }))
  }
  return svgFrame(kids)
}

export type IconName =
  | 'grassBlock' | 'dirt' | 'cobblestone' | 'obsidian' | 'oakPlank' | 'deepslate'
  | 'endstone' | 'bedrock' | 'purpurBlock' | 'emerald' | 'goldIngot' | 'ironingot'
  | 'amethyst' | 'wheat' | 'apple' | 'bread' | 'potion' | 'lantern' | 'chorusFruit'
  | 'soulSand' | 'creeper' | 'enderman' | 'cow' | 'pig' | 'chicken' | 'sheep' | 'bee'
  | 'phantom' | 'shulker' | 'elytra' | 'dragonEgg' | 'witherSkull' | 'netherStar'
  | 'chest' | 'pickaxe' | 'sword'
  // PNG icons (Mojang vanilla 1.21.11 textures). See ./pngIcons.tsx.
  | 'anvil' | 'axolotl' | 'beacon' | 'book' | 'bookshelf' | 'bucket'
  | 'cat' | 'clock' | 'crafting_table' | 'diamond' | 'diamond_axe'
  | 'diamond_ore' | 'diamond_pickaxe' | 'diamond_sword' | 'dolphin'
  | 'emerald_ore' | 'fox' | 'furnace' | 'glass' | 'horse' | 'panda'
  | 'parrot' | 'redstone' | 'shears' | 'totem_of_undying' | 'trident'
  | 'turtle' | 'warden' | 'wolf'

// SVG factory map (existing 35 icons). PNG icons live in PNG_ICONS and are
// resolved at render time — see renderIcon().
export const MC_ICONS: Record<string, () => React.ReactElement> = {
  grassBlock: () => mkIcon([
    px(0, 0, 16, 5, '#7EBD52'), px(0, 5, 16, 11, '#866043'),
    px(1, 3, 1, 1, '#A0DA68'), px(3, 2, 2, 1, '#A0DA68'),
    px(7, 3, 1, 1, '#A0DA68'), px(10, 2, 2, 1, '#A0DA68'),
    px(13, 3, 1, 1, '#A0DA68'),
    px(2, 4, 1, 1, '#5A8C24'), px(8, 4, 1, 1, '#5A8C24'), px(12, 4, 1, 1, '#5A8C24'),
    px(3, 7, 2, 1, '#6F4A30'), px(9, 9, 1, 1, '#6F4A30'),
    px(12, 11, 2, 1, '#6F4A30'), px(1, 12, 1, 1, '#6F4A30'),
    px(7, 14, 2, 1, '#6F4A30'), px(14, 13, 1, 1, '#6F4A30'),
  ]),

  dirt: () => mkIcon([
    px(0, 0, 16, 16, '#866043'),
    px(1, 1, 1, 1, '#A07850'), px(4, 1, 2, 1, '#A07850'),
    px(8, 1, 1, 1, '#A07850'), px(12, 2, 1, 1, '#A07850'),
    px(14, 1, 1, 1, '#A07850'),
    px(2, 5, 1, 1, '#6F4A30'), px(6, 5, 2, 1, '#6F4A30'),
    px(11, 6, 1, 1, '#6F4A30'), px(3, 9, 1, 1, '#6F4A30'),
    px(8, 10, 2, 1, '#6F4A30'), px(13, 8, 1, 1, '#6F4A30'),
    px(1, 12, 1, 1, '#6F4A30'), px(5, 13, 1, 1, '#6F4A30'),
    px(10, 14, 1, 1, '#6F4A30'),
  ]),

  cobblestone: () => mkIcon([
    px(0, 0, 16, 16, '#7F7F7F'),
    px(0, 0, 6, 4, '#999999'), px(6, 0, 5, 5, '#6F6F6F'),
    px(11, 0, 5, 3, '#999999'), px(0, 4, 4, 4, '#6F6F6F'),
    px(4, 5, 2, 5, '#999999'), px(10, 5, 6, 4, '#6F6F6F'),
    px(0, 8, 3, 3, '#999999'), px(3, 10, 7, 3, '#6F6F6F'),
    px(10, 9, 6, 4, '#999999'), px(0, 13, 5, 3, '#999999'),
    px(5, 13, 4, 3, '#6F6F6F'), px(9, 13, 7, 3, '#999999'),
  ]),

  obsidian: () => mkIcon([
    px(0, 0, 16, 16, '#1A0F2A'),
    px(1, 1, 1, 1, '#3F2F5F'), px(3, 1, 2, 1, '#3F2F5F'),
    px(7, 1, 1, 1, '#3F2F5F'), px(10, 1, 2, 1, '#3F2F5F'),
    px(13, 1, 1, 1, '#3F2F5F'),
    px(2, 4, 1, 1, '#0A0510'), px(12, 4, 1, 1, '#0A0510'),
    px(5, 5, 2, 1, '#5A4A6A'), px(9, 5, 1, 1, '#5A4A6A'),
    px(3, 7, 1, 1, '#0A0510'), px(10, 8, 2, 1, '#0A0510'),
    px(1, 10, 1, 1, '#3F2F5F'), px(4, 11, 1, 1, '#3F2F5F'),
    px(13, 11, 1, 1, '#3F2F5F'), px(2, 13, 1, 1, '#5A4A6A'),
    px(8, 14, 2, 1, '#5A4A6A'), px(14, 13, 1, 1, '#3F2F5F'),
  ]),

  oakPlank: () => mkIcon([
    px(0, 0, 16, 16, '#A87F4D'),
    px(0, 3, 16, 1, '#6F4F2A'), px(0, 7, 16, 1, '#6F4F2A'),
    px(0, 11, 16, 1, '#6F4F2A'), px(0, 15, 16, 1, '#6F4F2A'),
    px(2, 1, 1, 2, '#6F4F2A'), px(5, 1, 1, 2, '#6F4F2A'),
    px(9, 1, 1, 2, '#6F4F2A'), px(12, 1, 1, 2, '#6F4F2A'),
    px(3, 5, 1, 2, '#6F4F2A'), px(7, 5, 1, 2, '#6F4F2A'),
    px(11, 5, 1, 2, '#6F4F2A'), px(1, 9, 1, 2, '#6F4F2A'),
    px(8, 9, 1, 2, '#6F4F2A'), px(13, 9, 1, 2, '#6F4F2A'),
    px(3, 13, 1, 2, '#6F4F2A'), px(6, 13, 1, 2, '#6F4F2A'),
    px(10, 13, 1, 2, '#6F4F2A'),
  ]),

  deepslate: () => mkIcon([
    px(0, 0, 16, 16, '#4F5057'),
    px(0, 0, 6, 5, '#3F4046'), px(6, 0, 5, 5, '#5F6067'),
    px(11, 0, 5, 5, '#3F4046'), px(0, 5, 4, 5, '#5F6067'),
    px(4, 5, 6, 5, '#3F4046'), px(10, 5, 6, 5, '#5F6067'),
    px(0, 10, 5, 3, '#3F4046'), px(5, 10, 6, 3, '#5F6067'),
    px(11, 10, 5, 6, '#3F4046'), px(0, 13, 8, 3, '#5F6067'),
    px(8, 13, 3, 3, '#3F4046'),
  ]),

  endstone: () => mkIcon([
    px(0, 0, 16, 16, '#DBDE8E'),
    px(2, 1, 2, 1, '#C5C880'), px(6, 1, 1, 1, '#C5C880'),
    px(10, 1, 2, 1, '#C5C880'), px(14, 1, 1, 1, '#C5C880'),
    px(3, 4, 2, 1, '#F0F1B0'), px(8, 4, 1, 1, '#F0F1B0'),
    px(12, 5, 1, 1, '#F0F1B0'), px(1, 7, 1, 1, '#A7A66E'),
    px(5, 8, 2, 1, '#A7A66E'), px(11, 8, 1, 1, '#A7A66E'),
    px(4, 11, 2, 1, '#F0F1B0'), px(9, 12, 1, 1, '#F0F1B0'),
    px(13, 11, 2, 1, '#F0F1B0'), px(2, 14, 1, 1, '#A7A66E'),
    px(7, 14, 1, 1, '#A7A66E'), px(12, 14, 2, 1, '#A7A66E'),
  ]),

  bedrock: () => mkIcon([
    px(0, 0, 16, 16, '#3F3F3F'),
    px(1, 0, 1, 1, '#1F1F1F'), px(4, 0, 2, 1, '#1F1F1F'),
    px(8, 0, 1, 1, '#1F1F1F'), px(12, 0, 2, 1, '#1F1F1F'),
    px(0, 2, 1, 1, '#5F5F5F'), px(5, 2, 1, 1, '#5F5F5F'),
    px(10, 2, 1, 1, '#5F5F5F'), px(3, 4, 1, 1, '#1F1F1F'),
    px(7, 5, 2, 1, '#1F1F1F'), px(12, 5, 1, 1, '#1F1F1F'),
    px(0, 7, 1, 1, '#5F5F5F'), px(4, 7, 1, 1, '#5F5F5F'),
    px(10, 7, 2, 1, '#5F5F5F'), px(1, 10, 1, 1, '#1F1F1F'),
    px(6, 10, 1, 1, '#1F1F1F'), px(12, 10, 2, 1, '#1F1F1F'),
    px(3, 12, 1, 1, '#5F5F5F'), px(8, 12, 1, 1, '#5F5F5F'),
    px(13, 12, 1, 1, '#5F5F5F'), px(0, 14, 2, 1, '#1F1F1F'),
    px(5, 14, 2, 1, '#1F1F1F'), px(10, 14, 1, 1, '#1F1F1F'),
    px(13, 14, 2, 1, '#1F1F1F'),
  ]),

  purpurBlock: () => mkIcon([
    px(0, 0, 16, 16, '#7A6A99'),
    px(1, 0, 1, 1, '#9D90A5'), px(4, 0, 1, 1, '#9D90A5'),
    px(8, 0, 1, 1, '#9D90A5'), px(12, 0, 1, 1, '#9D90A5'),
    px(0, 2, 1, 1, '#5A4A6A'), px(5, 2, 1, 1, '#5A4A6A'),
    px(9, 3, 1, 1, '#5A4A6A'), px(12, 2, 1, 1, '#5A4A6A'),
    px(15, 2, 1, 1, '#5A4A6A'), px(3, 5, 1, 1, '#9D90A5'),
    px(7, 5, 1, 1, '#9D90A5'), px(11, 5, 1, 1, '#9D90A5'),
    px(1, 8, 1, 1, '#5A4A6A'), px(5, 8, 1, 1, '#5A4A6A'),
    px(10, 8, 1, 1, '#5A4A6A'), px(14, 9, 1, 1, '#5A4A6A'),
    px(3, 12, 1, 1, '#9D90A5'), px(8, 12, 1, 1, '#9D90A5'),
    px(13, 12, 1, 1, '#9D90A5'), px(1, 14, 1, 1, '#5A4A6A'),
    px(5, 14, 1, 1, '#5A4A6A'), px(10, 14, 1, 1, '#5A4A6A'),
  ]),

  emerald: () => mkIcon([
    px(6, 1, 4, 1, '#3FB97F'), px(4, 2, 2, 1, '#3FB97F'),
    px(10, 2, 2, 1, '#3FB97F'), px(3, 3, 1, 1, '#3FB97F'),
    px(12, 3, 1, 1, '#3FB97F'), px(2, 4, 1, 4, '#3FB97F'),
    px(13, 4, 1, 4, '#3FB97F'), px(3, 8, 1, 4, '#3FB97F'),
    px(12, 8, 1, 4, '#3FB97F'), px(4, 12, 2, 1, '#3FB97F'),
    px(10, 12, 2, 1, '#3FB97F'), px(6, 13, 4, 1, '#3FB97F'),
    px(7, 2, 2, 2, '#7BE5AF'), px(7, 8, 2, 2, '#7BE5AF'),
    px(6, 5, 4, 1, '#5DEC8C'), px(6, 10, 4, 1, '#5DEC8C'),
    px(7, 4, 2, 1, '#1F7A52'), px(7, 11, 2, 1, '#1F7A52'),
  ]),

  goldIngot: () => mkIcon([
    px(1, 4, 14, 1, '#FCDB05'), px(3, 5, 10, 1, '#FCDB05'),
    px(4, 6, 8, 1, '#FCDB05'), px(3, 7, 10, 1, '#FCDB05'),
    px(2, 8, 12, 1, '#FCDB05'), px(1, 9, 14, 1, '#FCDB05'),
    px(2, 10, 12, 1, '#FCDB05'),
    px(2, 5, 1, 1, '#E29033'), px(12, 5, 1, 1, '#E29033'),
    px(3, 8, 1, 1, '#FFE34A'), px(12, 8, 1, 1, '#FFE34A'),
    px(4, 6, 1, 1, '#FFE34A'), px(11, 6, 1, 1, '#FFE34A'),
    px(2, 9, 1, 1, '#E29033'), px(13, 9, 1, 1, '#E29033'),
  ]),

  ironingot: () => mkIcon([
    px(1, 4, 14, 1, '#D4D4D4'), px(3, 5, 10, 1, '#D4D4D4'),
    px(4, 6, 8, 1, '#D4D4D4'), px(3, 7, 10, 1, '#D4D4D4'),
    px(2, 8, 12, 1, '#D4D4D4'), px(1, 9, 14, 1, '#D4D4D4'),
    px(2, 10, 12, 1, '#D4D4D4'),
    px(2, 5, 1, 1, '#888888'), px(12, 5, 1, 1, '#888888'),
    px(3, 8, 1, 1, '#F0F0F0'), px(12, 8, 1, 1, '#F0F0F0'),
    px(4, 6, 1, 1, '#F0F0F0'), px(11, 6, 1, 1, '#F0F0F0'),
    px(2, 9, 1, 1, '#888888'), px(13, 9, 1, 1, '#888888'),
  ]),

  amethyst: () => mkIcon([
    px(0, 0, 16, 16, '#3F2F5F'),
    px(5, 2, 6, 4, '#B287F5'), px(4, 6, 8, 2, '#B287F5'),
    px(5, 8, 6, 2, '#9D6FE6'), px(4, 10, 8, 2, '#B287F5'),
    px(5, 12, 6, 2, '#9D6FE6'),
    px(6, 4, 1, 1, '#D5A5FF'), px(9, 4, 1, 1, '#D5A5FF'),
    px(7, 7, 2, 1, '#D5A5FF'), px(6, 11, 1, 1, '#D5A5FF'),
    px(10, 12, 1, 1, '#D5A5FF'), px(3, 6, 1, 1, '#5F4F7F'),
    px(12, 7, 1, 1, '#5F4F7F'),
  ]),

  wheat: () => mkIcon([
    px(7, 1, 2, 1, '#E2A632'), px(6, 2, 4, 1, '#E2A632'),
    px(7, 3, 2, 1, '#F4B400'), px(6, 4, 4, 1, '#F4B400'),
    px(5, 5, 6, 1, '#F4B400'), px(6, 6, 4, 1, '#E2A632'),
    px(7, 7, 2, 1, '#F4B400'), px(6, 8, 4, 1, '#F4B400'),
    px(5, 9, 6, 1, '#F4B400'),
    px(7, 10, 2, 8, '#A88B3D'), px(8, 10, 1, 8, '#7A5A1A'),
  ]),

  apple: () => mkIcon([
    px(4, 4, 8, 2, '#E14B4B'), px(3, 6, 10, 4, '#E14B4B'),
    px(4, 10, 8, 4, '#A02828'), px(5, 12, 6, 1, '#A02828'),
    px(3, 6, 1, 1, '#FF7070'), px(12, 6, 1, 1, '#FF7070'),
    px(7, 1, 2, 2, '#5BA32F'), px(8, 1, 1, 3, '#3F7A1F'),
    px(9, 2, 1, 1, '#A8451A'),
  ]),

  bread: () => mkIcon([
    px(2, 5, 12, 5, '#C5A050'), px(1, 6, 14, 4, '#C5A050'),
    px(2, 5, 1, 1, '#A0803F'), px(13, 5, 1, 1, '#A0803F'),
    px(4, 7, 1, 1, '#A0803F'), px(8, 8, 1, 1, '#A0803F'),
    px(11, 7, 1, 1, '#A0803F'), px(3, 9, 1, 1, '#DFB060'),
    px(10, 9, 1, 1, '#DFB060'),
  ]),

  potion: () => mkIcon([
    px(6, 1, 4, 1, '#5A4A30'), px(6, 2, 4, 1, '#888880'),
    px(5, 3, 1, 2, '#888880'), px(10, 3, 1, 2, '#888880'),
    px(5, 5, 1, 1, '#1F1F24'), px(10, 5, 1, 1, '#1F1F24'),
    px(4, 6, 8, 1, '#B287F5'), px(4, 7, 1, 1, '#9D6FE6'),
    px(11, 7, 1, 1, '#9D6FE6'), px(3, 8, 10, 5, '#9D6FE6'),
    px(4, 13, 8, 1, '#7A4FCC'), px(5, 9, 1, 1, '#D5A5FF'),
    px(10, 9, 1, 1, '#D5A5FF'), px(7, 11, 2, 1, '#D5A5FF'),
  ]),

  lantern: () => mkIcon([
    px(7, 0, 2, 2, '#3F3F3F'), px(6, 2, 4, 1, '#3F3F3F'),
    px(5, 3, 6, 1, '#5F5F5F'), px(4, 4, 8, 7, '#3F3F3F'),
    px(5, 4, 6, 7, '#FCDB05'), px(6, 5, 4, 5, '#FFE34A'),
    px(5, 4, 1, 1, '#888888'), px(10, 4, 1, 1, '#888888'),
    px(7, 7, 2, 1, '#FFFFFF'), px(7, 11, 2, 1, '#3F3F3F'),
    px(6, 12, 4, 1, '#3F3F3F'), px(5, 13, 1, 2, '#5F5F5F'),
    px(10, 13, 1, 2, '#5F5F5F'),
  ]),

  chorusFruit: () => mkIcon([
    px(3, 4, 10, 1, '#9D6FE6'), px(2, 5, 12, 1, '#9D6FE6'),
    px(2, 6, 12, 4, '#B287F5'), px(3, 10, 10, 1, '#9D6FE6'),
    px(4, 11, 8, 1, '#7A4FCC'),
    px(5, 5, 1, 1, '#D5A5FF'), px(10, 5, 1, 1, '#D5A5FF'),
    px(5, 8, 1, 1, '#D5A5FF'), px(10, 8, 1, 1, '#D5A5FF'),
    px(7, 6, 2, 2, '#D5A5FF'),
  ]),

  soulSand: () => mkIcon([
    px(0, 0, 16, 16, '#5A3B29'),
    px(2, 1, 1, 1, '#7A5A3F'), px(5, 1, 2, 1, '#7A5A3F'),
    px(9, 1, 1, 1, '#7A5A3F'), px(12, 2, 1, 1, '#7A5A3F'),
    px(14, 1, 1, 1, '#7A5A3F'),
    px(3, 4, 1, 1, '#3F2820'), px(7, 4, 2, 1, '#3F2820'),
    px(11, 5, 1, 1, '#3F2820'), px(1, 7, 2, 1, '#3F2820'),
    px(6, 7, 1, 1, '#3F2820'), px(10, 8, 2, 1, '#3F2820'),
    px(3, 10, 1, 1, '#3F2820'), px(8, 10, 1, 1, '#3F2820'),
    px(13, 11, 2, 1, '#3F2820'), px(1, 13, 1, 1, '#3F2820'),
    px(5, 14, 2, 1, '#3F2820'), px(11, 14, 1, 1, '#3F2820'),
    px(4, 6, 1, 1, '#FF8B3D'), px(8, 6, 1, 1, '#FF8B3D'),
    px(12, 9, 1, 1, '#FF8B3D'),
  ]),

  creeper: () => mkIcon([
    px(3, 1, 10, 6, '#5BA32F'), px(2, 7, 12, 4, '#5BA32F'),
    px(3, 11, 10, 4, '#5BA32F'),
    px(4, 6, 2, 2, '#1F2A14'), px(10, 6, 2, 2, '#1F2A14'),
    px(6, 8, 4, 3, '#1F2A14'),
    px(6, 8, 1, 1, '#5BA32F'), px(9, 8, 1, 1, '#5BA32F'),
    px(3, 1, 1, 1, '#7EBD52'), px(12, 1, 1, 1, '#7EBD52'),
    px(3, 11, 1, 1, '#3F7A1F'), px(12, 11, 1, 1, '#3F7A1F'),
    px(4, 14, 1, 1, '#3F7A1F'), px(11, 14, 1, 1, '#3F7A1F'),
  ]),

  enderman: () => mkIcon([
    px(5, 0, 6, 3, '#1A0F2A'), px(4, 3, 8, 1, '#1A0F2A'),
    px(3, 4, 10, 5, '#1A0F2A'),
    px(5, 6, 1, 1, '#B287F5'), px(10, 6, 1, 1, '#B287F5'),
    px(3, 9, 1, 1, '#1A0F2A'), px(12, 9, 1, 1, '#1A0F2A'),
    px(2, 10, 2, 4, '#1A0F2A'), px(12, 10, 2, 4, '#1A0F2A'),
    px(4, 14, 1, 1, '#1A0F2A'), px(11, 14, 1, 1, '#1A0F2A'),
    px(5, 14, 1, 1, '#3F2F5F'), px(10, 14, 1, 1, '#3F2F5F'),
  ]),

  cow: () => mkIcon([
    px(2, 3, 12, 8, '#FFFFFF'),
    px(4, 4, 2, 2, '#5F3F1F'), px(10, 4, 2, 2, '#5F3F1F'),
    px(3, 7, 2, 3, '#5F3F1F'), px(10, 7, 2, 3, '#5F3F1F'),
    px(5, 9, 1, 2, '#5F3F1F'), px(10, 9, 1, 2, '#5F3F1F'),
    px(6, 11, 4, 1, '#F0A0A0'), px(7, 11, 2, 1, '#5F3F1F'),
    px(2, 11, 1, 1, '#5F3F1F'), px(13, 11, 1, 1, '#5F3F1F'),
    px(3, 12, 1, 1, '#5F3F1F'), px(12, 12, 1, 1, '#5F3F1F'),
    px(5, 6, 1, 1, '#1F1F1F'), px(10, 6, 1, 1, '#1F1F1F'),
  ]),

  pig: () => mkIcon([
    px(2, 4, 12, 7, '#F0A0A0'), px(3, 11, 10, 3, '#F0A0A0'),
    px(2, 7, 1, 1, '#F0A0A0'), px(13, 7, 1, 1, '#F0A0A0'),
    px(6, 9, 4, 2, '#E58080'), px(7, 9, 2, 1, '#C56060'),
    px(5, 6, 1, 1, '#1F1F1F'), px(10, 6, 1, 1, '#1F1F1F'),
    px(3, 13, 1, 1, '#F0A0A0'), px(12, 13, 1, 1, '#F0A0A0'),
    px(5, 3, 2, 2, '#F0A0A0'), px(9, 3, 2, 2, '#F0A0A0'),
    px(5, 4, 1, 1, '#E58080'), px(10, 4, 1, 1, '#E58080'),
  ]),

  chicken: () => mkIcon([
    px(5, 3, 6, 5, '#FFFFFF'),
    px(4, 5, 1, 3, '#FFFFFF'), px(11, 5, 1, 3, '#FFFFFF'),
    px(3, 7, 1, 4, '#FFFFFF'), px(12, 7, 1, 4, '#FFFFFF'),
    px(4, 11, 8, 2, '#FFFFFF'),
    px(6, 4, 1, 1, '#1F1F1F'), px(10, 4, 1, 1, '#1F1F1F'),
    px(7, 6, 2, 1, '#E14B4B'),
    px(5, 7, 1, 1, '#FCDB05'), px(10, 7, 1, 1, '#FCDB05'),
    px(4, 12, 1, 1, '#FCDB05'), px(6, 12, 1, 1, '#FCDB05'),
    px(10, 12, 1, 1, '#FCDB05'), px(12, 12, 1, 1, '#FCDB05'),
  ]),

  sheep: () => mkIcon([
    px(2, 4, 12, 4, '#F0F0F0'), px(2, 8, 12, 2, '#D0D0D0'),
    px(2, 10, 12, 2, '#F0F0F0'), px(2, 12, 12, 2, '#D0D0D0'),
    px(1, 5, 1, 1, '#F0F0F0'), px(14, 5, 1, 1, '#F0F0F0'),
    px(4, 4, 2, 2, '#FFFFFF'), px(10, 4, 2, 2, '#FFFFFF'),
    px(6, 4, 4, 1, '#D0D0D0'), px(4, 9, 2, 1, '#D0D0D0'),
    px(10, 9, 2, 1, '#D0D0D0'),
    px(5, 6, 1, 1, '#1F1F1F'), px(10, 6, 1, 1, '#1F1F1F'),
    px(7, 11, 2, 1, '#F0A0A0'),
  ]),

  bee: () => mkIcon([
    px(4, 4, 2, 2, '#FFFFFF'), px(10, 4, 2, 2, '#FFFFFF'),
    px(2, 6, 12, 4, '#FCDB05'),
    px(3, 6, 1, 4, '#1F1F1F'), px(7, 6, 1, 4, '#1F1F1F'),
    px(11, 6, 1, 4, '#1F1F1F'),
    px(4, 5, 2, 1, '#F0F0F0'), px(10, 5, 2, 1, '#F0F0F0'),
    px(5, 11, 6, 1, '#1F1F1F'),
    px(5, 6, 1, 1, '#1F1F1F'), px(10, 6, 1, 1, '#1F1F1F'),
  ]),

  phantom: () => mkIcon([
    px(3, 3, 10, 6, '#3F3550'),
    px(1, 5, 2, 2, '#3F3550'), px(13, 5, 2, 2, '#3F3550'),
    px(2, 9, 12, 2, '#5F4F7F'),
    px(5, 4, 1, 1, '#B287F5'), px(10, 4, 1, 1, '#B287F5'),
    px(4, 6, 1, 1, '#FFFFFF'), px(10, 6, 1, 1, '#FFFFFF'),
    px(7, 11, 1, 1, '#B287F5'), px(8, 11, 1, 1, '#B287F5'),
    px(3, 9, 1, 1, '#1F1F2A'), px(12, 9, 1, 1, '#1F1F2A'),
  ]),

  shulker: () => mkIcon([
    px(2, 4, 12, 9, '#9D6FE6'),
    px(3, 4, 10, 1, '#B287F5'), px(3, 12, 10, 1, '#7A4FCC'),
    px(2, 7, 1, 1, '#7A4FCC'), px(13, 7, 1, 1, '#7A4FCC'),
    px(3, 13, 10, 2, '#3F2F5F'), px(4, 13, 8, 1, '#5F4F7F'),
    px(6, 7, 1, 2, '#FFFFFF'), px(9, 7, 1, 2, '#FFFFFF'),
    px(6, 8, 1, 1, '#1F1F2A'), px(9, 8, 1, 1, '#1F1F2A'),
  ]),

  elytra: () => mkIcon([
    px(1, 3, 4, 5, '#5F4F7F'), px(4, 4, 3, 4, '#7A6A99'),
    px(7, 4, 2, 4, '#5F4F7F'), px(9, 4, 2, 4, '#3F2F5F'),
    px(11, 3, 4, 5, '#5F4F7F'),
    px(2, 5, 1, 2, '#9D90A5'), px(13, 5, 1, 2, '#9D90A5'),
    px(3, 8, 4, 2, '#3F2F5F'), px(9, 8, 4, 2, '#3F2F5F'),
    px(4, 10, 3, 1, '#1F1F2A'), px(9, 10, 3, 1, '#1F1F2A'),
    px(6, 11, 4, 1, '#B287F5'),
  ]),

  dragonEgg: () => mkIcon([
    px(5, 1, 6, 2, '#1A1A1F'), px(4, 3, 8, 3, '#1A1A1F'),
    px(3, 6, 10, 4, '#1A1A1F'), px(4, 10, 8, 4, '#1A1A1F'),
    px(5, 14, 6, 1, '#1A1A1F'),
    px(4, 2, 1, 1, '#3F2F5F'), px(11, 2, 1, 1, '#3F2F5F'),
    px(3, 4, 1, 1, '#3F2F5F'), px(12, 4, 1, 1, '#3F2F5F'),
    px(6, 5, 1, 1, '#5F4F7F'), px(10, 5, 1, 1, '#5F4F7F'),
    px(5, 8, 1, 1, '#3F2F5F'), px(11, 8, 1, 1, '#3F2F5F'),
    px(6, 12, 1, 1, '#3F2F5F'), px(9, 12, 1, 1, '#3F2F5F'),
  ]),

  witherSkull: () => mkIcon([
    px(5, 2, 6, 7, '#1F1F1F'), px(4, 9, 8, 3, '#1F1F1F'),
    px(5, 12, 6, 2, '#1F1F1F'),
    px(4, 4, 2, 2, '#FFFFFF'), px(10, 4, 2, 2, '#FFFFFF'),
    px(6, 5, 1, 1, '#1F1F1F'), px(9, 5, 1, 1, '#1F1F1F'),
    px(3, 7, 1, 1, '#1F1F1F'), px(12, 7, 1, 1, '#1F1F1F'),
    px(7, 9, 2, 2, '#1F1F1F'),
    px(5, 12, 1, 1, '#5F5F5F'), px(10, 12, 1, 1, '#5F5F5F'),
    px(6, 13, 1, 1, '#5F5F5F'), px(9, 13, 1, 1, '#5F5F5F'),
  ]),

  netherStar: () => mkIcon([
    px(7, 1, 2, 1, '#FCDB05'), px(6, 2, 4, 1, '#FCDB05'),
    px(5, 3, 6, 1, '#FCDB05'), px(4, 4, 8, 2, '#FCDB05'),
    px(3, 6, 10, 1, '#FCDB05'), px(4, 7, 8, 2, '#FCDB05'),
    px(5, 9, 6, 1, '#FCDB05'), px(6, 10, 4, 1, '#FCDB05'),
    px(7, 11, 2, 1, '#FCDB05'),
    px(7, 5, 2, 1, '#FFFFFF'), px(7, 8, 2, 1, '#FFE34A'),
    px(4, 6, 1, 1, '#FFE34A'), px(11, 6, 1, 1, '#FFE34A'),
  ]),

  // ── main-page decorations (used as CSS data URLs) ───────────────────────────
  chest: () => mkIcon([
    px(0, 0, 16, 5, '#A87F4D'), px(0, 3, 16, 1, '#6F4F2A'),
    px(2, 1, 1, 2, '#6F4F2A'), px(5, 1, 1, 2, '#6F4F2A'),
    px(9, 1, 1, 2, '#6F4F2A'), px(12, 1, 1, 2, '#6F4F2A'),
    px(6, 5, 4, 3, '#3F3F3F'), px(7, 5, 2, 1, '#7F7F7F'),
    px(0, 8, 16, 8, '#7A5A2A'),
    px(0, 11, 16, 1, '#3F2820'), px(0, 14, 16, 1, '#3F2820'),
    px(2, 9, 1, 2, '#3F2820'), px(7, 10, 1, 2, '#3F2820'),
    px(11, 9, 1, 2, '#3F2820'),
  ]),

  pickaxe: () => mkIcon([
    px(7, 1, 2, 4, '#888888'), px(6, 2, 4, 1, '#888888'),
    px(8, 1, 2, 1, '#D4D4D4'), px(10, 1, 1, 4, '#888888'),
    px(6, 4, 4, 1, '#5A5A5A'), px(7, 5, 2, 1, '#5A5A5A'),
    px(8, 5, 1, 7, '#6F4F2A'), px(7, 5, 2, 1, '#6F4F2A'),
    px(6, 11, 4, 1, '#6F4F2A'), px(7, 12, 2, 1, '#A87F4D'),
  ]),

  sword: () => mkIcon([
    px(7, 1, 2, 8, '#D4D4D4'), px(6, 2, 4, 1, '#D4D4D4'),
    px(7, 9, 2, 1, '#3F2F5F'), px(6, 10, 4, 1, '#6F4F2A'),
    px(7, 11, 2, 3, '#6F4F2A'), px(6, 12, 4, 1, '#6F4F2A'),
    px(7, 1, 2, 1, '#F0F0F0'), px(8, 9, 1, 1, '#888888'),
  ]),
}

export function renderIcon(name: IconName): React.ReactElement | null {
  // PNG icon (Mojang vanilla texture, inlined as base64 data URL).
  const png = PNG_ICONS[name]
  if (png) {
    return React.createElement('img', {
      src: png,
      alt: name,
      className: 'mcskin-svg',
      style: { width: '100%', height: '100%', imageRendering: 'pixelated' },
    })
  }
  // SVG icon (hand-built pixel art, rendered as <svg> with crispEdges).
  const factory = MC_ICONS[name]
  return factory ? factory() : null
}

/** Returns true if the icon name is backed by a Mojang PNG texture. */
export function isPngIcon(name: string): boolean {
  return Object.prototype.hasOwnProperty.call(PNG_ICONS, name)
}
