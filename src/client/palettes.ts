// 6 palettes (3 styles x 2 colorSchemes) for dsh-mcskin. Each palette is a
// semantic color spec that gets fully expanded into DSH --dsw-alias-* +
// --dsw-specific-* tokens via buildTokens() in mcskin.ts. The semantic shape
// keeps each palette human-editable; a typo in one entry only affects one
// palette's tone instead of one token across all six themes.

export interface McPalette {
  bgBase: string
  bgL1: string
  bgL2: string
  bgL3: string
  bgOverlay: string
  bgModule: string
  bgMulti: string
  bgSkeleton: string
  bgMask1: string
  bgMask2: string
  bgMask3: string
  bgMaskPhoto: string
  bgMaskDrop: string
  borderL1: string
  borderL2: string
  borderL3: string
  borderL4: string
  borderInv: string
  borderInv2: string
  borderL2DT: string
  brand: string
  brandInv: string
  brandText: string
  btnContrast: string
  btnElev: string
  btnFloat: string
  btnFloatH: string
  btnGhostB: string
  btnGhostF: string
  btnGhostH: string
  btnInfo: string
  btnInfoH: string
  btnPrimDim: string
  btnTB: string
  btnTBI: string
  btnTBH: string
  intActive: string
  intHover: string
  intHoverAcc: string
  intHoverDanger: string
  intHoverSolid: string
  labelPri: string
  labelSec: string
  labelTer: string
  labelCap: string
  labelDim: string
  labelPriB: string
  labelPriD: string
  labelPriF: string
  labelPriI: string
  mdCitation: string
  mdCode: string
  mdCodeBanner: string
  mdCodeSegS: string
  mdCodeSegU: string
  mdInline: string
  mdPlace: string
  mdTag: string
  scrlL1: string
  scrlL2: string
  scrlH1: string
  scrlH2: string
  busPri: string
  busTer: string
  errPri: string
  errSec: string
  sucPri: string
  sucSec: string
  sucTer: string
  warnLab: string
  warnPri: string
  warnSec: string
  warnTer: string
  toastBg: string
  tooltipBg: string
  bubble: string
  bubbleHL: string
  inputMaj: string
  loginIn: string
  menu: string
  selector: string
  /** CSS gradient. The 6-7px top strip is the biome accent color; the
   *  remainder is the main sidebar block color. */
  sideFill: string
  sideNA: string
  sideNAA: string
  sideNH: string
  tip: string
}

export const PALETTES: Record<string, McPalette> = {
  classicDay: {
    bgBase: '#A5D75A', bgL1: '#C5C5C5', bgL2: '#7F7F7F', bgL3: '#4A4A4A',
    bgOverlay: '#D5D5D5', bgModule: '#B5B5B5', bgMulti: '#B5B5B5', bgSkeleton: 'rgba(0,0,0,0.04)',
    bgMask1: 'rgba(0,0,0,0.24)', bgMask2: 'rgba(0,0,0,0.12)', bgMask3: 'rgba(0,0,0,0.48)',
    bgMaskPhoto: 'rgba(0,0,0,0.88)', bgMaskDrop: 'rgba(255,255,255,0.7)',
    borderL1: 'rgba(0,0,0,0.04)', borderL2: 'rgba(0,0,0,0.20)', borderL3: 'rgba(0,0,0,0.32)', borderL4: 'rgba(0,0,0,0.48)',
    borderInv: 'rgba(0,0,0,0)', borderInv2: 'rgba(0,0,0,0)', borderL2DT: 'rgba(0,0,0,0.10)',
    brand: '#5BA32F', brandInv: '#FFFFFF', brandText: '#1F2A14',
    btnContrast: '#3F3F3F', btnElev: '#FFFFFF', btnFloat: '#FFFFFF', btnFloatH: '#D5D5D5',
    btnGhostB: '#5A5A5A', btnGhostF: '#D5D5D5', btnGhostH: '#C5C5C5',
    btnInfo: '#5BA32F', btnInfoH: '#4A8A26', btnPrimDim: '#B5D5A0',
    btnTB: 'rgba(84,85,87,0.5)', btnTBI: 'rgba(31,31,31,0.36)', btnTBH: 'rgba(84,85,87,0.6)',
    intActive: 'rgba(91,163,47,0.20)', intHover: 'rgba(0,0,0,0.06)', intHoverAcc: 'rgba(91,163,47,0.20)',
    intHoverDanger: 'rgba(224,58,58,0.10)', intHoverSolid: '#D5D5D5',
    labelPri: '#1F2A14', labelSec: '#3F4A35', labelTer: '#5A6550', labelCap: '#7A8570', labelDim: '#A5B0A0',
    labelPriB: '#1F2A14', labelPriD: '#2A3520', labelPriF: '#FFFFFF', labelPriI: '#FFFFFF',
    mdCitation: '#D5D5D5', mdCode: '#2D2D2D', mdCodeBanner: '#1F1F1F',
    mdCodeSegS: '#4F4F4F', mdCodeSegU: '#2D2D2D',
    mdInline: '#D5D5D5', mdPlace: '#D5D5D5', mdTag: '#D5D5D5',
    scrlL1: '#7A7A7A', scrlL2: '#5A5A5A', scrlH1: '#5A5A5A', scrlH2: '#4A4A4A',
    busPri: '#5BA32F', busTer: '#D5EBC2',
    errPri: '#E03A3A', errSec: '#FF5050',
    sucPri: '#17DD62', sucSec: '#3FB97F', sucTer: '#D2F5DC',
    warnLab: '#E29033', warnPri: '#FCDB05', warnSec: '#FFE34A', warnTer: '#FEF5E7',
    toastBg: '#3F3F3F', tooltipBg: '#2A2A2A',
    bubble: '#DAF5C9', bubbleHL: '#C2E8B0',
    inputMaj: '#FFFFFF', loginIn: '#F5F5F5', menu: '#5A5A5A', selector: '#D5D5D5',
    sideFill: 'linear-gradient(to bottom, #7EBD52 0%, #7EBD52 6px, #5A8C24 6px, #5A8C24 7px, #866043 7px, #866043 100%)',
    sideNA: '#5BA32F', sideNAA: '#7BB84F', sideNH: '#A37855', tip: '#D5D5D5',
  },

  classicNight: {
    bgBase: '#0F0F12', bgL1: '#252528', bgL2: '#15151A', bgL3: '#0A0A0E',
    bgOverlay: '#1F1F24', bgModule: '#1A1A1F', bgMulti: '#1A1A1F', bgSkeleton: 'rgba(255,255,255,0.08)',
    bgMask1: 'rgba(0,0,0,0.5)', bgMask2: 'rgba(0,0,0,0.2)', bgMask3: 'rgba(0,0,0,0.48)',
    bgMaskPhoto: 'rgba(0,0,0,0.92)', bgMaskDrop: 'rgba(39,39,48,0.7)',
    borderL1: 'rgba(255,255,255,0.06)', borderL2: 'rgba(255,255,255,0.14)', borderL3: 'rgba(255,255,255,0.20)', borderL4: 'rgba(255,255,255,0.28)',
    borderInv: 'rgba(255,255,255,0.06)', borderInv2: 'rgba(255,255,255,0.08)', borderL2DT: 'rgba(255,255,255,0.06)',
    brand: '#A042E0', brandInv: '#1A0F2A', brandText: '#E5DAEC',
    btnContrast: '#E0E0E0', btnElev: '#2A2A2F', btnFloat: '#1F1F24', btnFloatH: '#2F2F35',
    btnGhostB: '#A0A0A8', btnGhostF: '#2A2A2F', btnGhostH: '#1F1F24',
    btnInfo: '#A042E0', btnInfoH: '#B858FF', btnPrimDim: '#3A2A4F',
    btnTB: 'rgba(151,157,166,0.5)', btnTBI: 'rgba(255,255,255,0.16)', btnTBH: 'rgba(151,157,166,0.6)',
    intActive: 'rgba(160,66,224,0.20)', intHover: 'rgba(255,255,255,0.08)', intHoverAcc: 'rgba(160,66,224,0.24)',
    intHoverDanger: 'rgba(255,80,80,0.16)', intHoverSolid: '#2A2A2F',
    labelPri: '#E5DAEC', labelSec: '#B0AABF', labelTer: '#8A85A0', labelCap: '#6A6580', labelDim: '#4A4560',
    labelPriB: '#E5DAEC', labelPriD: '#C5BAD8', labelPriF: '#0A0510', labelPriI: '#0A0510',
    mdCitation: '#1F1F24', mdCode: '#15151A', mdCodeBanner: '#0A0A0E',
    mdCodeSegS: '#2A2A2F', mdCodeSegU: '#15151A',
    mdInline: '#2A2A2F', mdPlace: '#2A2A2F', mdTag: '#2A2A2F',
    scrlL1: '#3A3A40', scrlL2: '#2A2A30', scrlH1: '#4A4A50', scrlH2: '#3A3A40',
    busPri: '#A042E0', busTer: '#3A2A4F',
    errPri: '#FF5050', errSec: '#FF8080',
    sucPri: '#5DEC8C', sucSec: '#3FB97F', sucTer: '#1F3F2A',
    warnLab: '#FF8B3D', warnPri: '#FCDB05', warnSec: '#FFE34A', warnTer: '#3F3500',
    toastBg: '#1F1F24', tooltipBg: '#2A2A2F',
    bubble: '#252528', bubbleHL: '#2F2F35',
    inputMaj: '#1F1F24', loginIn: '#15151A', menu: '#2A2A2F', selector: '#1F1F24',
    sideFill: 'linear-gradient(to bottom, #5F4F7F 0%, #5F4F7F 6px, #3F2F5F 6px, #3F2F5F 7px, #1A0F2A 7px, #1A0F2A 100%)',
    sideNA: '#A042E0', sideNAA: '#B858FF', sideNH: '#4F5057', tip: '#252528',
  },

  modernDay: {
    bgBase: '#F5EFE3', bgL1: '#EAE0CB', bgL2: '#D4B98C', bgL3: '#B8956A',
    bgOverlay: '#E0D5C0', bgModule: '#E5DAC0', bgMulti: '#E5DAC0', bgSkeleton: 'rgba(0,0,0,0.04)',
    bgMask1: 'rgba(0,0,0,0.24)', bgMask2: 'rgba(0,0,0,0.12)', bgMask3: 'rgba(0,0,0,0.48)',
    bgMaskPhoto: 'rgba(0,0,0,0.88)', bgMaskDrop: 'rgba(255,255,255,0.7)',
    borderL1: 'rgba(0,0,0,0.04)', borderL2: 'rgba(168,139,106,0.40)', borderL3: 'rgba(168,139,106,0.55)', borderL4: 'rgba(168,139,106,0.70)',
    borderInv: 'rgba(0,0,0,0)', borderInv2: 'rgba(0,0,0,0)', borderL2DT: 'rgba(0,0,0,0.10)',
    brand: '#3FB97F', brandInv: '#FFFFFF', brandText: '#2D2418',
    btnContrast: '#A88B6A', btnElev: '#FFFCF5', btnFloat: '#FFFCF5', btnFloatH: '#EFE5D2',
    btnGhostB: '#5A4A30', btnGhostF: '#EFE5D2', btnGhostH: '#E5DAC0',
    btnInfo: '#3FB97F', btnInfoH: '#2FA56A', btnPrimDim: '#D2EBDC',
    btnTB: 'rgba(84,85,87,0.5)', btnTBI: 'rgba(31,31,31,0.36)', btnTBH: 'rgba(84,85,87,0.6)',
    intActive: 'rgba(63,185,127,0.16)', intHover: 'rgba(0,0,0,0.05)', intHoverAcc: 'rgba(63,185,127,0.16)',
    intHoverDanger: 'rgba(225,75,75,0.10)', intHoverSolid: '#EFE5D2',
    labelPri: '#2D2418', labelSec: '#5A4A30', labelTer: '#7A6A4A', labelCap: '#8A7A60', labelDim: '#B0A088',
    labelPriB: '#2D2418', labelPriD: '#3F3525', labelPriF: '#FFFCF5', labelPriI: '#FFFCF5',
    mdCitation: '#EFE5D2', mdCode: '#D4B98C', mdCodeBanner: '#C5A878',
    mdCodeSegS: '#B8956A', mdCodeSegU: '#D4B98C',
    mdInline: '#E5DAC0', mdPlace: '#EFE5D2', mdTag: '#E5DAC0',
    scrlL1: '#B8956A', scrlL2: '#A88B6A', scrlH1: '#A88B6A', scrlH2: '#8A7A60',
    busPri: '#3FB97F', busTer: '#D2EBDC',
    errPri: '#E14B4B', errSec: '#FF7070',
    sucPri: '#3FB97F', sucSec: '#2FA56A', sucTer: '#D2EBDC',
    warnLab: '#E2A632', warnPri: '#F4B400', warnSec: '#FFD24A', warnTer: '#FEF3D9',
    toastBg: '#5A4A30', tooltipBg: '#3F3525',
    bubble: '#FFFCF5', bubbleHL: '#EFE5D2',
    inputMaj: '#FFFCF5', loginIn: '#F5EFE3', menu: '#E5DAC0', selector: '#EFE5D2',
    sideFill: 'linear-gradient(to bottom, #3FB97F 0%, #3FB97F 6px, #1F7A52 6px, #1F7A52 7px, #EFE5D2 7px, #EFE5D2 100%)',
    sideNA: '#3FB97F', sideNAA: '#5DD597', sideNH: '#D4B98C', tip: '#EFE5D2',
  },

  modernNight: {
    bgBase: '#1F2125', bgL1: '#26282E', bgL2: '#16181C', bgL3: '#0F1014',
    bgOverlay: '#2A2D33', bgModule: '#26282E', bgMulti: '#26282E', bgSkeleton: 'rgba(255,255,255,0.08)',
    bgMask1: 'rgba(0,0,0,0.5)', bgMask2: 'rgba(0,0,0,0.2)', bgMask3: 'rgba(0,0,0,0.48)',
    bgMaskPhoto: 'rgba(0,0,0,0.92)', bgMaskDrop: 'rgba(39,39,48,0.7)',
    borderL1: 'rgba(255,255,255,0.06)', borderL2: 'rgba(255,255,255,0.16)', borderL3: 'rgba(255,255,255,0.22)', borderL4: 'rgba(255,255,255,0.30)',
    borderInv: 'rgba(255,255,255,0.06)', borderInv2: 'rgba(255,255,255,0.08)', borderL2DT: 'rgba(255,255,255,0.06)',
    brand: '#B287F5', brandInv: '#1A0F2A', brandText: '#EAE4D9',
    btnContrast: '#EAE4D9', btnElev: '#26282E', btnFloat: '#1F2125', btnFloatH: '#2F323A',
    btnGhostB: '#888880', btnGhostF: '#26282E', btnGhostH: '#2A2D33',
    btnInfo: '#B287F5', btnInfoH: '#9D6FE6', btnPrimDim: '#3F3550',
    btnTB: 'rgba(151,157,166,0.5)', btnTBI: 'rgba(255,255,255,0.16)', btnTBH: 'rgba(151,157,166,0.6)',
    intActive: 'rgba(178,135,245,0.20)', intHover: 'rgba(255,255,255,0.08)', intHoverAcc: 'rgba(178,135,245,0.24)',
    intHoverDanger: 'rgba(255,80,80,0.16)', intHoverSolid: '#26282E',
    labelPri: '#EAE4D9', labelSec: '#B0AAA0', labelTer: '#8A8478', labelCap: '#6A6458', labelDim: '#4A4438',
    labelPriB: '#EAE4D9', labelPriD: '#C5BFB5', labelPriF: '#0A0B0E', labelPriI: '#0A0B0E',
    mdCitation: '#26282E', mdCode: '#16181C', mdCodeBanner: '#0F1014',
    mdCodeSegS: '#26282E', mdCodeSegU: '#16181C',
    mdInline: '#26282E', mdPlace: '#26282E', mdTag: '#26282E',
    scrlL1: '#3F4046', scrlL2: '#2A2B30', scrlH1: '#4F5057', scrlH2: '#3A3B40',
    busPri: '#B287F5', busTer: '#3F3550',
    errPri: '#FF5050', errSec: '#FF8080',
    sucPri: '#5DEC8C', sucSec: '#3FB97F', sucTer: '#1F3F2A',
    warnLab: '#FFD24A', warnPri: '#FF8B3D', warnSec: '#FFA85F', warnTer: '#3F2A0F',
    toastBg: '#3F3525', tooltipBg: '#26282E',
    bubble: '#26282E', bubbleHL: '#2F323A',
    inputMaj: '#26282E', loginIn: '#16181C', menu: '#2A2D33', selector: '#26282E',
    sideFill: 'linear-gradient(to bottom, #B287F5 0%, #B287F5 6px, #5F4F7F 6px, #5F4F7F 7px, #26282E 7px, #26282E 100%)',
    sideNA: '#B287F5', sideNAA: '#C49DFF', sideNH: '#2F323A', tip: '#26282E',
  },

  darkDay: {
    bgBase: '#DBDE8E', bgL1: '#C5C880', bgL2: '#A7A66E', bgL3: '#7A6A99',
    bgOverlay: '#C5C880', bgModule: '#C5C880', bgMulti: '#C5C880', bgSkeleton: 'rgba(0,0,0,0.04)',
    bgMask1: 'rgba(0,0,0,0.24)', bgMask2: 'rgba(0,0,0,0.12)', bgMask3: 'rgba(0,0,0,0.48)',
    bgMaskPhoto: 'rgba(0,0,0,0.88)', bgMaskDrop: 'rgba(255,255,255,0.7)',
    borderL1: 'rgba(0,0,0,0.04)', borderL2: 'rgba(0,0,0,0.20)', borderL3: 'rgba(0,0,0,0.32)', borderL4: 'rgba(0,0,0,0.48)',
    borderInv: 'rgba(0,0,0,0)', borderInv2: 'rgba(0,0,0,0)', borderL2DT: 'rgba(0,0,0,0.10)',
    brand: '#6B2DBC', brandInv: '#FFFFFF', brandText: '#1A0F2A',
    btnContrast: '#7A6A99', btnElev: '#F0F1B0', btnFloat: '#F0F1B0', btnFloatH: '#DBDE8E',
    btnGhostB: '#7A6A99', btnGhostF: '#DBDE8E', btnGhostH: '#C5C880',
    btnInfo: '#6B2DBC', btnInfoH: '#5A249F', btnPrimDim: '#C2B5E0',
    btnTB: 'rgba(84,85,87,0.5)', btnTBI: 'rgba(31,31,31,0.36)', btnTBH: 'rgba(84,85,87,0.6)',
    intActive: 'rgba(107,45,188,0.20)', intHover: 'rgba(0,0,0,0.06)', intHoverAcc: 'rgba(107,45,188,0.20)',
    intHoverDanger: 'rgba(224,58,58,0.10)', intHoverSolid: '#C5C880',
    labelPri: '#1A0F2A', labelSec: '#3F2F4F', labelTer: '#5A4A60', labelCap: '#7A6A80', labelDim: '#9D90A5',
    labelPriB: '#1A0F2A', labelPriD: '#2F1F45', labelPriF: '#F0F1B0', labelPriI: '#F0F1B0',
    mdCitation: '#C5C880', mdCode: '#A7A66E', mdCodeBanner: '#7A6A99',
    mdCodeSegS: '#7A6A99', mdCodeSegU: '#A7A66E',
    mdInline: '#C5C880', mdPlace: '#C5C880', mdTag: '#C5C880',
    scrlL1: '#A7A66E', scrlL2: '#7A6A99', scrlH1: '#7A6A99', scrlH2: '#5A4A6A',
    busPri: '#6B2DBC', busTer: '#C2B5E0',
    errPri: '#E03A3A', errSec: '#FF5050',
    sucPri: '#5DECF5', sucSec: '#3FB9C5', sucTer: '#D2EFF5',
    warnLab: '#FF8B3D', warnPri: '#9D6FE6', warnSec: '#B58DFF', warnTer: '#E2D0FA',
    toastBg: '#3F2F4F', tooltipBg: '#2F1F45',
    bubble: '#F0F1B0', bubbleHL: '#DBDE8E',
    inputMaj: '#F0F1B0', loginIn: '#DBDE8E', menu: '#7A6A99', selector: '#C5C880',
    sideFill: 'linear-gradient(to bottom, #DBDE8E 0%, #DBDE8E 6px, #A7A66E 6px, #A7A66E 7px, #7A6A99 7px, #7A6A99 100%)',
    sideNA: '#6B2DBC', sideNAA: '#8A4DD5', sideNH: '#A7A66E', tip: '#C5C880',
  },

  darkNight: {
    bgBase: '#0A0A12', bgL1: '#15151F', bgL2: '#08080E', bgL3: '#000000',
    bgOverlay: '#1A1A22', bgModule: '#15151F', bgMulti: '#15151F', bgSkeleton: 'rgba(255,255,255,0.08)',
    bgMask1: 'rgba(0,0,0,0.5)', bgMask2: 'rgba(0,0,0,0.2)', bgMask3: 'rgba(0,0,0,0.48)',
    bgMaskPhoto: 'rgba(0,0,0,0.95)', bgMaskDrop: 'rgba(10,10,18,0.7)',
    borderL1: 'rgba(255,255,255,0.06)', borderL2: 'rgba(255,255,255,0.14)', borderL3: 'rgba(255,255,255,0.20)', borderL4: 'rgba(255,255,255,0.28)',
    borderInv: 'rgba(255,255,255,0.06)', borderInv2: 'rgba(255,255,255,0.08)', borderL2DT: 'rgba(255,255,255,0.06)',
    brand: '#B287F5', brandInv: '#1A0F2A', brandText: '#E5DAEC',
    btnContrast: '#E5DAEC', btnElev: '#15151F', btnFloat: '#0A0A12', btnFloatH: '#1A1A22',
    btnGhostB: '#8888A0', btnGhostF: '#1A1A22', btnGhostH: '#15151F',
    btnInfo: '#B287F5', btnInfoH: '#C49DFF', btnPrimDim: '#3F2F5F',
    btnTB: 'rgba(151,157,166,0.5)', btnTBI: 'rgba(255,255,255,0.16)', btnTBH: 'rgba(151,157,166,0.6)',
    intActive: 'rgba(178,135,245,0.20)', intHover: 'rgba(255,255,255,0.08)', intHoverAcc: 'rgba(178,135,245,0.24)',
    intHoverDanger: 'rgba(255,80,80,0.16)', intHoverSolid: '#15151F',
    labelPri: '#E5DAEC', labelSec: '#B0AABF', labelTer: '#8A85A0', labelCap: '#6A6580', labelDim: '#4A4560',
    labelPriB: '#E5DAEC', labelPriD: '#C5BAD8', labelPriF: '#0A0510', labelPriI: '#0A0510',
    mdCitation: '#15151F', mdCode: '#08080E', mdCodeBanner: '#000000',
    mdCodeSegS: '#1A1A22', mdCodeSegU: '#08080E',
    mdInline: '#1A1A22', mdPlace: '#1A1A22', mdTag: '#1A1A22',
    scrlL1: '#2A2A35', scrlL2: '#15151F', scrlH1: '#3A3A45', scrlH2: '#2A2A35',
    busPri: '#B287F5', busTer: '#3F2F5F',
    errPri: '#FF5050', errSec: '#FF8080',
    sucPri: '#5DECF5', sucSec: '#3FB9C5', sucTer: '#1F3F45',
    warnLab: '#FFD24A', warnPri: '#C490FF', warnSec: '#D5A5FF', warnTer: '#3F2F5F',
    toastBg: '#1A0F2A', tooltipBg: '#15151F',
    bubble: '#15151F', bubbleHL: '#1F1F2A',
    inputMaj: '#15151F', loginIn: '#0A0A12', menu: '#1A1A22', selector: '#15151F',
    sideFill: 'linear-gradient(to bottom, #B287F5 0%, #B287F5 6px, #3F2F5F 6px, #3F2F5F 7px, #0A0A12 7px, #0A0A12 100%)',
    sideNA: '#B287F5', sideNAA: '#C49DFF', sideNH: '#1F1F2A', tip: '#15151F',
  },
}
