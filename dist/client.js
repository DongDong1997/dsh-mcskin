import * as React$1 from "react";

//#region src/client/palettes.ts
/**
* Expand a single McPalette semantic spec into the full --dsw-alias-* +
* --dsw-specific-* token map. Each semantic key maps 1:1 to one token name
* with its DSH color value, so the patch can be diffed against the design
* system at a glance.
*/
function buildTokens(p) {
	return {
		"--dsw-alias-bg-base": p.bgBase,
		"--dsw-alias-bg-layer-1": p.bgL1,
		"--dsw-alias-bg-layer-2": p.bgL2,
		"--dsw-alias-bg-layer-3": p.bgL3,
		"--dsw-alias-bg-overlay": p.bgOverlay,
		"--dsw-alias-bg-module-platform": p.bgModule,
		"--dsw-alias-bg-multi-select": p.bgMulti,
		"--dsw-alias-bg-skeleton": p.bgSkeleton,
		"--dsw-alias-bg-mask-1": p.bgMask1,
		"--dsw-alias-bg-mask-2": p.bgMask2,
		"--dsw-alias-bg-mask-3": p.bgMask3,
		"--dsw-alias-bg-mask-photo": p.bgMaskPhoto,
		"--dsw-alias-bg-mask-drop": p.bgMaskDrop,
		"--dsw-alias-border-l1": p.borderL1,
		"--dsw-alias-border-l2": p.borderL2,
		"--dsw-alias-border-l3": p.borderL3,
		"--dsw-alias-border-l4": p.borderL4,
		"--dsw-alias-border-l2-darkmode-thin": p.borderL2DT,
		"--dsw-alias-border-inverted": p.borderInv,
		"--dsw-alias-border-inverted2": p.borderInv2,
		"--dsw-alias-brand-primary": p.brand,
		"--dsw-alias-brand-primary-invert": p.brandInv,
		"--dsw-alias-brand-text": p.brandText,
		"--dsw-alias-brand-primary-new-colorprimary-new-color": p.brand,
		"--dsw-alias-button-contrast-fill": p.btnContrast,
		"--dsw-alias-button-elevated-fill": p.btnElev,
		"--dsw-alias-button-floating-fill": p.btnFloat,
		"--dsw-alias-button-floating-hover": p.btnFloatH,
		"--dsw-alias-button-ghost-active-border": p.btnGhostB,
		"--dsw-alias-button-ghost-active-fill": p.btnGhostF,
		"--dsw-alias-button-ghost-active-hover": p.btnGhostH,
		"--dsw-alias-button-info-fill": p.btnInfo,
		"--dsw-alias-button-info-hover": p.btnInfoH,
		"--dsw-alias-button-primary-fill": p.brand,
		"--dsw-alias-button-primary-hover": p.btnInfoH,
		"--dsw-alias-button-primary-dimmed": p.btnPrimDim,
		"--dsw-alias-button-tool-bar-fill": p.btnTB,
		"--dsw-alias-button-tool-bar-fill-invisible": p.btnTBI,
		"--dsw-alias-button-tool-bar-hover": p.btnTBH,
		"--dsw-alias-interactive-bg-active": p.intActive,
		"--dsw-alias-interactive-bg-hover": p.intHover,
		"--dsw-alias-interactive-bg-hover-accent": p.intHoverAcc,
		"--dsw-alias-interactive-bg-hover-danger": p.intHoverDanger,
		"--dsw-alias-interactive-bg-hover-solid": p.intHoverSolid,
		"--dsw-alias-label-primary": p.labelPri,
		"--dsw-alias-label-secondary": p.labelSec,
		"--dsw-alias-label-tertiary": p.labelTer,
		"--dsw-alias-label-caption": p.labelCap,
		"--dsw-alias-label-dimmed": p.labelDim,
		"--dsw-alias-label-primary-bluish": p.labelPriB,
		"--dsw-alias-label-primary-dimmed": p.labelPriD,
		"--dsw-alias-label-primary-foreground": p.labelPriF,
		"--dsw-alias-label-primary-inverted": p.labelPriI,
		"--dsw-alias-markdown-citation": p.mdCitation,
		"--dsw-alias-markdown-code-block": p.mdCode,
		"--dsw-alias-markdown-code-block-banner": p.mdCodeBanner,
		"--dsw-alias-markdown-code-segment-selected": p.mdCodeSegS,
		"--dsw-alias-markdown-code-segment-unselected": p.mdCodeSegU,
		"--dsw-alias-markdown-inline-code": p.mdInline,
		"--dsw-alias-markdown-placeholder": p.mdPlace,
		"--dsw-alias-markdown-tag": p.mdTag,
		"--dsw-alias-scrollbar-bg-l1": p.scrlL1,
		"--dsw-alias-scrollbar-bg-l2": p.scrlL2,
		"--dsw-alias-scrollbar-hover-l1": p.scrlH1,
		"--dsw-alias-scrollbar-hover-l2": p.scrlH2,
		"--dsw-alias-state-business-primary": p.busPri,
		"--dsw-alias-state-business-tertiary": p.busTer,
		"--dsw-alias-state-error-primary": p.errPri,
		"--dsw-alias-state-error-secondary": p.errSec,
		"--dsw-alias-state-success-primary": p.sucPri,
		"--dsw-alias-state-success-secondary": p.sucSec,
		"--dsw-alias-state-success-tertiary": p.sucTer,
		"--dsw-alias-state-warn-label": p.warnLab,
		"--dsw-alias-state-warn-primary": p.warnPri,
		"--dsw-alias-state-warn-secondary": p.warnSec,
		"--dsw-alias-state-warn-tertiary": p.warnTer,
		"--dsw-alias-toast-bg": p.toastBg,
		"--dsw-alias-tooltip-bg": p.tooltipBg,
		"--dsw-specific-bubble": p.bubble,
		"--dsw-specific-bubble-highlight": p.bubbleHL,
		"--dsw-specific-input-major": p.inputMaj,
		"--dsw-specific-login-input": p.loginIn,
		"--dsw-specific-menu": p.menu,
		"--dsw-specific-selector": p.selector,
		"--dsw-specific-sidebar-fill": p.sideFill,
		"--dsw-specific-sidebar-nav-item-active": p.sideNA,
		"--dsw-specific-sidebar-nav-item-active-accent": p.sideNAA,
		"--dsw-specific-sidebar-nav-item-hover": p.sideNH,
		"--dsw-specific-tip": p.tip
	};
}
const PALETTES = {
	classicDay: {
		bgBase: "#A5D75A",
		bgL1: "#C5C5C5",
		bgL2: "#7F7F7F",
		bgL3: "#4A4A4A",
		bgOverlay: "#D5D5D5",
		bgModule: "#B5B5B5",
		bgMulti: "#B5B5B5",
		bgSkeleton: "rgba(0,0,0,0.04)",
		bgMask1: "rgba(0,0,0,0.24)",
		bgMask2: "rgba(0,0,0,0.12)",
		bgMask3: "rgba(0,0,0,0.48)",
		bgMaskPhoto: "rgba(0,0,0,0.88)",
		bgMaskDrop: "rgba(255,255,255,0.7)",
		borderL1: "rgba(0,0,0,0.04)",
		borderL2: "rgba(0,0,0,0.20)",
		borderL3: "rgba(0,0,0,0.32)",
		borderL4: "rgba(0,0,0,0.48)",
		borderInv: "rgba(0,0,0,0)",
		borderInv2: "rgba(0,0,0,0)",
		borderL2DT: "rgba(0,0,0,0.10)",
		brand: "#5BA32F",
		brandInv: "#FFFFFF",
		brandText: "#1F2A14",
		btnContrast: "#3F3F3F",
		btnElev: "#FFFFFF",
		btnFloat: "#FFFFFF",
		btnFloatH: "#D5D5D5",
		btnGhostB: "#5A5A5A",
		btnGhostF: "#D5D5D5",
		btnGhostH: "#C5C5C5",
		btnInfo: "#5BA32F",
		btnInfoH: "#4A8A26",
		btnPrimDim: "#B5D5A0",
		btnTB: "rgba(84,85,87,0.5)",
		btnTBI: "rgba(31,31,31,0.36)",
		btnTBH: "rgba(84,85,87,0.6)",
		intActive: "rgba(91,163,47,0.20)",
		intHover: "rgba(0,0,0,0.06)",
		intHoverAcc: "rgba(91,163,47,0.20)",
		intHoverDanger: "rgba(224,58,58,0.10)",
		intHoverSolid: "#D5D5D5",
		labelPri: "#1F2A14",
		labelSec: "#3F4A35",
		labelTer: "#5A6550",
		labelCap: "#7A8570",
		labelDim: "#A5B0A0",
		labelPriB: "#1F2A14",
		labelPriD: "#2A3520",
		labelPriF: "#FFFFFF",
		labelPriI: "#FFFFFF",
		mdCitation: "#D5D5D5",
		mdCode: "#2D2D2D",
		mdCodeBanner: "#1F1F1F",
		mdCodeSegS: "#4F4F4F",
		mdCodeSegU: "#2D2D2D",
		mdInline: "#D5D5D5",
		mdPlace: "#D5D5D5",
		mdTag: "#D5D5D5",
		scrlL1: "#7A7A7A",
		scrlL2: "#5A5A5A",
		scrlH1: "#5A5A5A",
		scrlH2: "#4A4A4A",
		busPri: "#5BA32F",
		busTer: "#D5EBC2",
		errPri: "#E03A3A",
		errSec: "#FF5050",
		sucPri: "#17DD62",
		sucSec: "#3FB97F",
		sucTer: "#D2F5DC",
		warnLab: "#E29033",
		warnPri: "#FCDB05",
		warnSec: "#FFE34A",
		warnTer: "#FEF5E7",
		toastBg: "#3F3F3F",
		tooltipBg: "#2A2A2A",
		bubble: "#DAF5C9",
		bubbleHL: "#C2E8B0",
		inputMaj: "#FFFFFF",
		loginIn: "#F5F5F5",
		menu: "#5A5A5A",
		selector: "#D5D5D5",
		sideFill: "linear-gradient(to bottom, #7EBD52 0%, #7EBD52 6px, #5A8C24 6px, #5A8C24 7px, #866043 7px, #866043 100%)",
		sideNA: "#5BA32F",
		sideNAA: "#7BB84F",
		sideNH: "#A37855",
		tip: "#D5D5D5"
	},
	classicNight: {
		bgBase: "#0F0F12",
		bgL1: "#252528",
		bgL2: "#15151A",
		bgL3: "#0A0A0E",
		bgOverlay: "#1F1F24",
		bgModule: "#1A1A1F",
		bgMulti: "#1A1A1F",
		bgSkeleton: "rgba(255,255,255,0.08)",
		bgMask1: "rgba(0,0,0,0.5)",
		bgMask2: "rgba(0,0,0,0.2)",
		bgMask3: "rgba(0,0,0,0.48)",
		bgMaskPhoto: "rgba(0,0,0,0.92)",
		bgMaskDrop: "rgba(39,39,48,0.7)",
		borderL1: "rgba(255,255,255,0.06)",
		borderL2: "rgba(255,255,255,0.14)",
		borderL3: "rgba(255,255,255,0.20)",
		borderL4: "rgba(255,255,255,0.28)",
		borderInv: "rgba(255,255,255,0.06)",
		borderInv2: "rgba(255,255,255,0.08)",
		borderL2DT: "rgba(255,255,255,0.06)",
		brand: "#A042E0",
		brandInv: "#1A0F2A",
		brandText: "#E5DAEC",
		btnContrast: "#E0E0E0",
		btnElev: "#2A2A2F",
		btnFloat: "#1F1F24",
		btnFloatH: "#2F2F35",
		btnGhostB: "#A0A0A8",
		btnGhostF: "#2A2A2F",
		btnGhostH: "#1F1F24",
		btnInfo: "#A042E0",
		btnInfoH: "#B858FF",
		btnPrimDim: "#3A2A4F",
		btnTB: "rgba(151,157,166,0.5)",
		btnTBI: "rgba(255,255,255,0.16)",
		btnTBH: "rgba(151,157,166,0.6)",
		intActive: "rgba(160,66,224,0.20)",
		intHover: "rgba(255,255,255,0.08)",
		intHoverAcc: "rgba(160,66,224,0.24)",
		intHoverDanger: "rgba(255,80,80,0.16)",
		intHoverSolid: "#2A2A2F",
		labelPri: "#E5DAEC",
		labelSec: "#B0AABF",
		labelTer: "#8A85A0",
		labelCap: "#6A6580",
		labelDim: "#4A4560",
		labelPriB: "#E5DAEC",
		labelPriD: "#C5BAD8",
		labelPriF: "#0A0510",
		labelPriI: "#0A0510",
		mdCitation: "#1F1F24",
		mdCode: "#15151A",
		mdCodeBanner: "#0A0A0E",
		mdCodeSegS: "#2A2A2F",
		mdCodeSegU: "#15151A",
		mdInline: "#2A2A2F",
		mdPlace: "#2A2A2F",
		mdTag: "#2A2A2F",
		scrlL1: "#3A3A40",
		scrlL2: "#2A2A30",
		scrlH1: "#4A4A50",
		scrlH2: "#3A3A40",
		busPri: "#A042E0",
		busTer: "#3A2A4F",
		errPri: "#FF5050",
		errSec: "#FF8080",
		sucPri: "#5DEC8C",
		sucSec: "#3FB97F",
		sucTer: "#1F3F2A",
		warnLab: "#FF8B3D",
		warnPri: "#FCDB05",
		warnSec: "#FFE34A",
		warnTer: "#3F3500",
		toastBg: "#1F1F24",
		tooltipBg: "#2A2A2F",
		bubble: "#252528",
		bubbleHL: "#2F2F35",
		inputMaj: "#1F1F24",
		loginIn: "#15151A",
		menu: "#2A2A2F",
		selector: "#1F1F24",
		sideFill: "linear-gradient(to bottom, #5F4F7F 0%, #5F4F7F 6px, #3F2F5F 6px, #3F2F5F 7px, #1A0F2A 7px, #1A0F2A 100%)",
		sideNA: "#A042E0",
		sideNAA: "#B858FF",
		sideNH: "#4F5057",
		tip: "#252528"
	},
	modernDay: {
		bgBase: "#F5EFE3",
		bgL1: "#EAE0CB",
		bgL2: "#D4B98C",
		bgL3: "#B8956A",
		bgOverlay: "#E0D5C0",
		bgModule: "#E5DAC0",
		bgMulti: "#E5DAC0",
		bgSkeleton: "rgba(0,0,0,0.04)",
		bgMask1: "rgba(0,0,0,0.24)",
		bgMask2: "rgba(0,0,0,0.12)",
		bgMask3: "rgba(0,0,0,0.48)",
		bgMaskPhoto: "rgba(0,0,0,0.88)",
		bgMaskDrop: "rgba(255,255,255,0.7)",
		borderL1: "rgba(0,0,0,0.04)",
		borderL2: "rgba(168,139,106,0.40)",
		borderL3: "rgba(168,139,106,0.55)",
		borderL4: "rgba(168,139,106,0.70)",
		borderInv: "rgba(0,0,0,0)",
		borderInv2: "rgba(0,0,0,0)",
		borderL2DT: "rgba(0,0,0,0.10)",
		brand: "#3FB97F",
		brandInv: "#FFFFFF",
		brandText: "#2D2418",
		btnContrast: "#A88B6A",
		btnElev: "#FFFCF5",
		btnFloat: "#FFFCF5",
		btnFloatH: "#EFE5D2",
		btnGhostB: "#5A4A30",
		btnGhostF: "#EFE5D2",
		btnGhostH: "#E5DAC0",
		btnInfo: "#3FB97F",
		btnInfoH: "#2FA56A",
		btnPrimDim: "#D2EBDC",
		btnTB: "rgba(84,85,87,0.5)",
		btnTBI: "rgba(31,31,31,0.36)",
		btnTBH: "rgba(84,85,87,0.6)",
		intActive: "rgba(63,185,127,0.16)",
		intHover: "rgba(0,0,0,0.05)",
		intHoverAcc: "rgba(63,185,127,0.16)",
		intHoverDanger: "rgba(225,75,75,0.10)",
		intHoverSolid: "#EFE5D2",
		labelPri: "#2D2418",
		labelSec: "#5A4A30",
		labelTer: "#7A6A4A",
		labelCap: "#8A7A60",
		labelDim: "#B0A088",
		labelPriB: "#2D2418",
		labelPriD: "#3F3525",
		labelPriF: "#FFFCF5",
		labelPriI: "#FFFCF5",
		mdCitation: "#EFE5D2",
		mdCode: "#D4B98C",
		mdCodeBanner: "#C5A878",
		mdCodeSegS: "#B8956A",
		mdCodeSegU: "#D4B98C",
		mdInline: "#E5DAC0",
		mdPlace: "#EFE5D2",
		mdTag: "#E5DAC0",
		scrlL1: "#B8956A",
		scrlL2: "#A88B6A",
		scrlH1: "#A88B6A",
		scrlH2: "#8A7A60",
		busPri: "#3FB97F",
		busTer: "#D2EBDC",
		errPri: "#E14B4B",
		errSec: "#FF7070",
		sucPri: "#3FB97F",
		sucSec: "#2FA56A",
		sucTer: "#D2EBDC",
		warnLab: "#E2A632",
		warnPri: "#F4B400",
		warnSec: "#FFD24A",
		warnTer: "#FEF3D9",
		toastBg: "#5A4A30",
		tooltipBg: "#3F3525",
		bubble: "#FFFCF5",
		bubbleHL: "#EFE5D2",
		inputMaj: "#FFFCF5",
		loginIn: "#F5EFE3",
		menu: "#E5DAC0",
		selector: "#EFE5D2",
		sideFill: "linear-gradient(to bottom, #3FB97F 0%, #3FB97F 6px, #1F7A52 6px, #1F7A52 7px, #EFE5D2 7px, #EFE5D2 100%)",
		sideNA: "#3FB97F",
		sideNAA: "#5DD597",
		sideNH: "#D4B98C",
		tip: "#EFE5D2"
	},
	modernNight: {
		bgBase: "#1F2125",
		bgL1: "#26282E",
		bgL2: "#16181C",
		bgL3: "#0F1014",
		bgOverlay: "#2A2D33",
		bgModule: "#26282E",
		bgMulti: "#26282E",
		bgSkeleton: "rgba(255,255,255,0.08)",
		bgMask1: "rgba(0,0,0,0.5)",
		bgMask2: "rgba(0,0,0,0.2)",
		bgMask3: "rgba(0,0,0,0.48)",
		bgMaskPhoto: "rgba(0,0,0,0.92)",
		bgMaskDrop: "rgba(39,39,48,0.7)",
		borderL1: "rgba(255,255,255,0.06)",
		borderL2: "rgba(255,255,255,0.16)",
		borderL3: "rgba(255,255,255,0.22)",
		borderL4: "rgba(255,255,255,0.30)",
		borderInv: "rgba(255,255,255,0.06)",
		borderInv2: "rgba(255,255,255,0.08)",
		borderL2DT: "rgba(255,255,255,0.06)",
		brand: "#B287F5",
		brandInv: "#1A0F2A",
		brandText: "#EAE4D9",
		btnContrast: "#EAE4D9",
		btnElev: "#26282E",
		btnFloat: "#1F2125",
		btnFloatH: "#2F323A",
		btnGhostB: "#888880",
		btnGhostF: "#26282E",
		btnGhostH: "#2A2D33",
		btnInfo: "#B287F5",
		btnInfoH: "#9D6FE6",
		btnPrimDim: "#3F3550",
		btnTB: "rgba(151,157,166,0.5)",
		btnTBI: "rgba(255,255,255,0.16)",
		btnTBH: "rgba(151,157,166,0.6)",
		intActive: "rgba(178,135,245,0.20)",
		intHover: "rgba(255,255,255,0.08)",
		intHoverAcc: "rgba(178,135,245,0.24)",
		intHoverDanger: "rgba(255,80,80,0.16)",
		intHoverSolid: "#26282E",
		labelPri: "#EAE4D9",
		labelSec: "#B0AAA0",
		labelTer: "#8A8478",
		labelCap: "#6A6458",
		labelDim: "#4A4438",
		labelPriB: "#EAE4D9",
		labelPriD: "#C5BFB5",
		labelPriF: "#0A0B0E",
		labelPriI: "#0A0B0E",
		mdCitation: "#26282E",
		mdCode: "#16181C",
		mdCodeBanner: "#0F1014",
		mdCodeSegS: "#26282E",
		mdCodeSegU: "#16181C",
		mdInline: "#26282E",
		mdPlace: "#26282E",
		mdTag: "#26282E",
		scrlL1: "#3F4046",
		scrlL2: "#2A2B30",
		scrlH1: "#4F5057",
		scrlH2: "#3A3B40",
		busPri: "#B287F5",
		busTer: "#3F3550",
		errPri: "#FF5050",
		errSec: "#FF8080",
		sucPri: "#5DEC8C",
		sucSec: "#3FB97F",
		sucTer: "#1F3F2A",
		warnLab: "#FFD24A",
		warnPri: "#FF8B3D",
		warnSec: "#FFA85F",
		warnTer: "#3F2A0F",
		toastBg: "#3F3525",
		tooltipBg: "#26282E",
		bubble: "#26282E",
		bubbleHL: "#2F323A",
		inputMaj: "#26282E",
		loginIn: "#16181C",
		menu: "#2A2D33",
		selector: "#26282E",
		sideFill: "linear-gradient(to bottom, #B287F5 0%, #B287F5 6px, #5F4F7F 6px, #5F4F7F 7px, #26282E 7px, #26282E 100%)",
		sideNA: "#B287F5",
		sideNAA: "#C49DFF",
		sideNH: "#2F323A",
		tip: "#26282E"
	},
	darkDay: {
		bgBase: "#DBDE8E",
		bgL1: "#C5C880",
		bgL2: "#A7A66E",
		bgL3: "#7A6A99",
		bgOverlay: "#C5C880",
		bgModule: "#C5C880",
		bgMulti: "#C5C880",
		bgSkeleton: "rgba(0,0,0,0.04)",
		bgMask1: "rgba(0,0,0,0.24)",
		bgMask2: "rgba(0,0,0,0.12)",
		bgMask3: "rgba(0,0,0,0.48)",
		bgMaskPhoto: "rgba(0,0,0,0.88)",
		bgMaskDrop: "rgba(255,255,255,0.7)",
		borderL1: "rgba(0,0,0,0.04)",
		borderL2: "rgba(0,0,0,0.20)",
		borderL3: "rgba(0,0,0,0.32)",
		borderL4: "rgba(0,0,0,0.48)",
		borderInv: "rgba(0,0,0,0)",
		borderInv2: "rgba(0,0,0,0)",
		borderL2DT: "rgba(0,0,0,0.10)",
		brand: "#6B2DBC",
		brandInv: "#FFFFFF",
		brandText: "#1A0F2A",
		btnContrast: "#7A6A99",
		btnElev: "#F0F1B0",
		btnFloat: "#F0F1B0",
		btnFloatH: "#DBDE8E",
		btnGhostB: "#7A6A99",
		btnGhostF: "#DBDE8E",
		btnGhostH: "#C5C880",
		btnInfo: "#6B2DBC",
		btnInfoH: "#5A249F",
		btnPrimDim: "#C2B5E0",
		btnTB: "rgba(84,85,87,0.5)",
		btnTBI: "rgba(31,31,31,0.36)",
		btnTBH: "rgba(84,85,87,0.6)",
		intActive: "rgba(107,45,188,0.20)",
		intHover: "rgba(0,0,0,0.06)",
		intHoverAcc: "rgba(107,45,188,0.20)",
		intHoverDanger: "rgba(224,58,58,0.10)",
		intHoverSolid: "#C5C880",
		labelPri: "#1A0F2A",
		labelSec: "#3F2F4F",
		labelTer: "#5A4A60",
		labelCap: "#7A6A80",
		labelDim: "#9D90A5",
		labelPriB: "#1A0F2A",
		labelPriD: "#2F1F45",
		labelPriF: "#F0F1B0",
		labelPriI: "#F0F1B0",
		mdCitation: "#C5C880",
		mdCode: "#A7A66E",
		mdCodeBanner: "#7A6A99",
		mdCodeSegS: "#7A6A99",
		mdCodeSegU: "#A7A66E",
		mdInline: "#C5C880",
		mdPlace: "#C5C880",
		mdTag: "#C5C880",
		scrlL1: "#A7A66E",
		scrlL2: "#7A6A99",
		scrlH1: "#7A6A99",
		scrlH2: "#5A4A6A",
		busPri: "#6B2DBC",
		busTer: "#C2B5E0",
		errPri: "#E03A3A",
		errSec: "#FF5050",
		sucPri: "#5DECF5",
		sucSec: "#3FB9C5",
		sucTer: "#D2EFF5",
		warnLab: "#FF8B3D",
		warnPri: "#9D6FE6",
		warnSec: "#B58DFF",
		warnTer: "#E2D0FA",
		toastBg: "#3F2F4F",
		tooltipBg: "#2F1F45",
		bubble: "#F0F1B0",
		bubbleHL: "#DBDE8E",
		inputMaj: "#F0F1B0",
		loginIn: "#DBDE8E",
		menu: "#7A6A99",
		selector: "#C5C880",
		sideFill: "linear-gradient(to bottom, #DBDE8E 0%, #DBDE8E 6px, #A7A66E 6px, #A7A66E 7px, #7A6A99 7px, #7A6A99 100%)",
		sideNA: "#6B2DBC",
		sideNAA: "#8A4DD5",
		sideNH: "#A7A66E",
		tip: "#C5C880"
	},
	darkNight: {
		bgBase: "#0A0A12",
		bgL1: "#15151F",
		bgL2: "#08080E",
		bgL3: "#000000",
		bgOverlay: "#1A1A22",
		bgModule: "#15151F",
		bgMulti: "#15151F",
		bgSkeleton: "rgba(255,255,255,0.08)",
		bgMask1: "rgba(0,0,0,0.5)",
		bgMask2: "rgba(0,0,0,0.2)",
		bgMask3: "rgba(0,0,0,0.48)",
		bgMaskPhoto: "rgba(0,0,0,0.95)",
		bgMaskDrop: "rgba(10,10,18,0.7)",
		borderL1: "rgba(255,255,255,0.06)",
		borderL2: "rgba(255,255,255,0.14)",
		borderL3: "rgba(255,255,255,0.20)",
		borderL4: "rgba(255,255,255,0.28)",
		borderInv: "rgba(255,255,255,0.06)",
		borderInv2: "rgba(255,255,255,0.08)",
		borderL2DT: "rgba(255,255,255,0.06)",
		brand: "#B287F5",
		brandInv: "#1A0F2A",
		brandText: "#E5DAEC",
		btnContrast: "#E5DAEC",
		btnElev: "#15151F",
		btnFloat: "#0A0A12",
		btnFloatH: "#1A1A22",
		btnGhostB: "#8888A0",
		btnGhostF: "#1A1A22",
		btnGhostH: "#15151F",
		btnInfo: "#B287F5",
		btnInfoH: "#C49DFF",
		btnPrimDim: "#3F2F5F",
		btnTB: "rgba(151,157,166,0.5)",
		btnTBI: "rgba(255,255,255,0.16)",
		btnTBH: "rgba(151,157,166,0.6)",
		intActive: "rgba(178,135,245,0.20)",
		intHover: "rgba(255,255,255,0.08)",
		intHoverAcc: "rgba(178,135,245,0.24)",
		intHoverDanger: "rgba(255,80,80,0.16)",
		intHoverSolid: "#15151F",
		labelPri: "#E5DAEC",
		labelSec: "#B0AABF",
		labelTer: "#8A85A0",
		labelCap: "#6A6580",
		labelDim: "#4A4560",
		labelPriB: "#E5DAEC",
		labelPriD: "#C5BAD8",
		labelPriF: "#0A0510",
		labelPriI: "#0A0510",
		mdCitation: "#15151F",
		mdCode: "#08080E",
		mdCodeBanner: "#000000",
		mdCodeSegS: "#1A1A22",
		mdCodeSegU: "#08080E",
		mdInline: "#1A1A22",
		mdPlace: "#1A1A22",
		mdTag: "#1A1A22",
		scrlL1: "#2A2A35",
		scrlL2: "#15151F",
		scrlH1: "#3A3A45",
		scrlH2: "#2A2A35",
		busPri: "#B287F5",
		busTer: "#3F2F5F",
		errPri: "#FF5050",
		errSec: "#FF8080",
		sucPri: "#5DECF5",
		sucSec: "#3FB9C5",
		sucTer: "#1F3F45",
		warnLab: "#FFD24A",
		warnPri: "#C490FF",
		warnSec: "#D5A5FF",
		warnTer: "#3F2F5F",
		toastBg: "#1A0F2A",
		tooltipBg: "#15151F",
		bubble: "#15151F",
		bubbleHL: "#1F1F2A",
		inputMaj: "#15151F",
		loginIn: "#0A0A12",
		menu: "#1A1A22",
		selector: "#15151F",
		sideFill: "linear-gradient(to bottom, #B287F5 0%, #B287F5 6px, #3F2F5F 6px, #3F2F5F 7px, #0A0A12 7px, #0A0A12 100%)",
		sideNA: "#B287F5",
		sideNAA: "#C49DFF",
		sideNH: "#1F1F2A",
		tip: "#15151F"
	}
};

//#endregion
//#region src/client/themeEntries.ts
const THEME_ENTRIES = [
	{
		id: "mc-classic-day",
		name: "经典原版",
		mode: "日间",
		style: "classic",
		colorScheme: "light",
		palette: PALETTES.classicDay,
		desc: "草方块绿 + 圆石灰。阳光普照的草原与森林。",
		icons: [
			"grassBlock",
			"dirt",
			"cow",
			"chicken",
			"fox",
			"apple"
		]
	},
	{
		id: "mc-classic-night",
		name: "经典原版",
		mode: "夜晚",
		style: "classic",
		colorScheme: "dark",
		palette: PALETTES.classicNight,
		desc: "黑曜石黑 + 末影紫。深夜洞穴与下界。",
		icons: [
			"obsidian",
			"cobblestone",
			"creeper",
			"wolf",
			"soulSand",
			"goldIngot"
		]
	},
	{
		id: "mc-modern-day",
		name: "现代 MC",
		mode: "日间",
		style: "modern",
		colorScheme: "light",
		palette: PALETTES.modernDay,
		desc: "橡木米 + 祖母绿。柔和森林小屋。",
		icons: [
			"oakPlank",
			"emerald_ore",
			"sheep",
			"pig",
			"glass",
			"lantern"
		]
	},
	{
		id: "mc-modern-night",
		name: "现代 MC",
		mode: "夜晚",
		style: "modern",
		colorScheme: "dark",
		palette: PALETTES.modernNight,
		desc: "深板岩 + 紫晶紫。暮色森林小屋。",
		icons: [
			"deepslate",
			"amethyst",
			"bee",
			"wolf",
			"potion",
			"lantern"
		]
	},
	{
		id: "mc-dark-day",
		name: "暗夜 MC",
		mode: "日间",
		style: "dark",
		colorScheme: "light",
		palette: PALETTES.darkDay,
		desc: "末地石米黄 + 龙紫。漂泊的末地。",
		icons: [
			"endstone",
			"purpurBlock",
			"chorusFruit",
			"shulker",
			"axolotl",
			"elytra"
		]
	},
	{
		id: "mc-dark-night",
		name: "暗夜 MC",
		mode: "夜晚",
		style: "dark",
		colorScheme: "dark",
		palette: PALETTES.darkNight,
		desc: "虚空黑 + 末影紫。末地深处的幽光。",
		icons: [
			"bedrock",
			"dragonEgg",
			"witherSkull",
			"warden",
			"phantom",
			"netherStar"
		]
	}
];

//#endregion
//#region src/client/pngIcons.tsx
const PNG_ICONS = {
	"anvil": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAAnRSTlMAAHaTzTgAAABeSURBVHjaXc8xCsAwDENRHyuLlz/+Ufc/TCFNDK3HJ5BRVRWoiVDvYZKoF1rNtgOLJIJcODl9oBuNOoDZN2ASMdOxY+VCR7cMCJh8S79ftsT+bWEAFWDNFqDpXlX1AHGbLVY1sLoQAAAAAElFTkSuQmCC",
	"axolotl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAJFBMVEUAAACyjGuielaTdFmLZUN7YEhxVU1gTDtUQzlQPzA8LSEnIC1P9SmZAAAAAXRSTlMAQObYZgAAAWVJREFUeNrt0b1qwzAUhuHTH1qSMXfgTw5ei1Jh2lHQG4gQIlsnkzE0CJFMhULw6CWYZAp0CO4t5OYqp1uwREtLpzxgT68PH5i+4UqP9IPTrqKAa44kt9rMghcgkWutg8GlRJrFggsAmd8QCFQKCaQQxlhLHTgHkIAx41x3oA7QOAjmPOqghAKkUCIU1M7ew99f1JvNgkKS4Vg2zm0pBMMxamu6L/RpR5LxtNa6O+hRRWAcweCWZoSncdJY073h/eOx3SD9hfAGZC8IXmjJfB4e2UryOfbWLCmETda8WU+2ndcxkNDWaAyAtH2dBJCcH381ZywFGJcngWBKmTawQnAFoU4vGLO2y43/l3szsXa+qAX9VFkU5StFcM5HdxTBvGiQazacUcSqKIpniiumJUXcrArOKWxaMI/C3liWZTmFla0p/ULPP1U02FE/GtCWGoqovs7Evm810QkUH3EM/mXD2dmf+AQofm8jNq2skwAAAABJRU5ErkJggg==",
	"beacon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAHlBMVEX////u///W//7E//7M7PCc8u1v49xJ1cwry8ArubCw6MYmAAAAV0lEQVR42gXBwU0AQRAEMfdwH/IPF2kLGwDA/EJg/B0qhXCkSiVOIkXygXrO4Ix69QqOeFVPcRLAzLG5bTuWg+222+AD88MwZ8ZmDB+MNuBjaAzsAwD8AxUIMSZhV4BeAAAAAElFTkSuQmCC",
	"book": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIVBMVEUAAADW1ta3t7eZmZlbW1tlSxdUPhNSLhBEJQoxIQQWEAXuGgy6AAAAAXRSTlMAQObYZgAAAFNJREFUeNp1zzkOwCAMRNGJiZfx/Q8cEYyAgunel1wY15E86Wo82MedUaXTVKsYgd8xS3A/0IgXIMW12KQB6Y+4DUpjVJnMxCgbZ4lileIqmdevPwDZA8LCX6b6AAAAAElFTkSuQmCC",
	"bookshelf": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAV1BMVEVjKAV3MAeRERG8FhZpVDN8Yj7Mpmy8mGKzjFGbd0KfhE0nHhE2KhUsIhNBMRoxY6MqTnoxW44RjmsMa1CJiYm1tbWomwqJfgh1jhFecg1VaAlJSUk/Pz95EYrOAAAAlElEQVR42gXBW3LCMBQFwZkrhTIQ85H9r5GqPGxCYenQ7VKEo4NAnJ0GaULIKWN2Umx8wtnHNHT3UIHLmH8rp1FDAIMNYFRBCFcxSBXJLeivIJbnhIASEHtUXh9BCEdz6QRXf5ySehWP3d6T3bbeWuh+JQfAdgndZ437HWgtbNC0ioBwjTBSVeFb5vhP1IFLCCgBhDf+ck47xheS/gAAAABJRU5ErkJggg==",
	"bucket": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAAnRSTlMAAHaTzTgAAABdSURBVHjabc/BCcBACETRNGUn3u3hF2MNlmQ3CUxWsoSdmw8d8DrHlG0kM6uGDCICSOyFcPcACJsC9wiYGusyhRzo7qpkg1tALag/MJAC3Qg0r5uuFHwyCyPK+fEHwvlD+oD5xgIAAAAASUVORK5CYII=",
	"cat": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAgBAMAAABQs2O3AAAAG1BMVEUAAADhuUXAeDKSaYMWFSQSEB0MCxUHBw0EBAfgt+sRAAAAAXRSTlMAQObYZgAAASVJREFUeNrN0EFqxDAMQFEvhvYchV6kjBx6AEXdZmFJvUAtL7sa+9iVM5hOZkK67ScgAg8LFEJ4gqnad+hhxNgnS7jphDhAmtLUJ2wBwABCX+oDvC1o5Qqymu2DdgVmtawgShhxdB7jZ2v+U8s6GOgXZHx7fQEysyjZTMW9oNwATWf4EAdAqi1zBywaRpZniGQeTFKqdJBFLTwGUcslzwhgajfgvX9X0F9AcGD7gKhUTg6aF0ZNs2heAUxaEzrYWd/WFZNeEhwBsvwInpfT0m8ZQgQqxg/ADLxIDmYpJnEPJOqnhaSl5ukeqAKYZHPA4oAQt0BkXA5JHfCM8Q6MwzDlYsqE8wYwj50kZpaF5y1AdHAUeOEwSX+AGY8Bn+NyCARpCf+8H3vTi3EV3mH5AAAAAElFTkSuQmCC",
	"clock": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAJ1BMVEUAAAD797f99V///wD61krMzADpsRXclhOyZBFJaNg6U6x1KAIYFhaXvgRuAAAAAXRSTlMAQObYZgAAAGtJREFUeNpFykEOxDAIQ9GGcYmh3P+84walscTiP3H1qF1npBlwiG6e6XB+nXnfmVuo/mmReLo9Y0G4pB8i3o5swAvD8gCrylBVXPAYxjC46RqmQXMNU7BEpOwWcIoMkxRsUXW3iJTdm3b+AXJGBLvumfVeAAAAAElFTkSuQmCC",
	"crafting_table": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAHlBMVEW8mGKuaTyeWTJzOSBVOCRLKxhBIw4aFQ0ZFAwOCwZHZAmgAAAAaElEQVR42nWPUQoDUQgDE9dEvf+FCy5vaSk7+OOAxKBn2tfimmoM4OASBgYD88EYtJnKTElKuuFgBpMUmQzj4m5HXytS9zzizKuQlPo+UVAMkSvuWK3e2PKm3ND1/3r9lit0TZ36PdMft8EDNpiNkFcAAAAASUVORK5CYII=",
	"diamond": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIVBMVEUAAAD////V//ah++hK7dks4NggxbUaqqcckZoRcnoUXlN/hNeyAAAAAXRSTlMAQObYZgAAAFxJREFUeNqNjzkOxDAMAyORS1n8/4MXyGEnQIpMN1Po2L7S3f3wiMi+O4mUbw4kKK8QGUl6OQmUyldIAhgrhABw1BWSrKqSxjnELEmqucW/I2Ae4kEC8jbxzvubfzBNAqq5tnU2AAAAAElFTkSuQmCC",
	"diamond_axe": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAIVBMVEUAAAAz68srx6wnspqJZyceindoTh5JNhUOPzYoHgsIJSBnmo+OAAAAAXRSTlMAQObYZgAAAD9JREFUeNpjQAEcDVBGowRUQFgDKmBsngBmLFQOngBmcC03tYLIlU2GMNg9uRZABIAqwAKZUONKcAkwzGRABQB0ogw79ps+WQAAAABJRU5ErkJggg==",
	"diamond_ore": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAHlBMVEV/f3+Pj4+NrbEjlpge0NaioqLV//Z359FnZ2d0dHTXUAaKAAAAeElEQVR42gXBgQHAIAzDMLvAmvz/8CQEaWlaVKBEFZoUaHIlabMHUBmzZ2RsKdDEoVgAab4N/baptH577xnuAcDEeTOJg++RvSPNtwUszBC695zxPQjlNs6YtAUA1WaPAjXB7rf3HovOnpR37owA7ajg0BYAoAKA/g9mA6MdO18tAAAAAElFTkSuQmCC",
	"diamond_pickaxe": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAHlBMVEUAAAAz68srx6wnspqJZydoTh5JNhUOPzYoHgsIJSBDqdTeAAAAAXRSTlMAQObYZgAAAEVJREFUeNpjwArKywvANLuQsXoqmFU509gDKplkCaHZIowmgBkpDZMnQAQYgAywAMOkCRABhokTIAIMnFABqBYoowPNZgA7zw9D/CrJmgAAAABJRU5ErkJggg==",
	"diamond_sword": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAJFBMVEUAAAAOPzYIJSAz68uk/fArx6weincVY1VoTh5JNhUoHguJZycazUdMAAAAAXRSTlMAQObYZgAAAExJREFUGNN1jsENwDAMAgGndpLuv29/jZFa/+4QwkA/ks5jyPky8cHxwyQAxslZNAaYiux9Zlb4A0XjNcVu1r0hvYacGwB0Rq0OSC4ehwkBE0lygnsAAAAASUVORK5CYII=",
	"dolphin": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAALVBMVEUAAACmuc2dssmKmrGlutCSo7qAhqL///8ICR9rcY7D0uO9y92wxNm/0Nuwwc1gXoMBAAAAAXRSTlMAQObYZgAAAadJREFUeNrt0uFuqzAMhuF8nxO2s9q+/8s9MUmTQkfpNGm/eNRWFsivFGhq9Hb7+rrd1Lr0iFnrrUy4VY4UvKRmBHI+DOitUsJWR4ElAm4rT49yC+T7zYPAv+UooBrnU7XuIGBWA+OYw3xAZ4GgiILjdcAfpKRNDzS5mwHVXQCOEZgFfTsAgmiBrE0m85i6gyMAZCmFBGqARYRkkaqQjF/pDgJpQ+TjU8KySPj8EPlRwFEx1uNLVG7dWwEz742+7Wa94CeBiXRPGznrS3nogX02h7PtGQD2AeZMMgdutUvzcgr+FJCpcCjyLC0iqETqkIYiUqpY6oUxlkqkjADAFao02AMHWAFu39gfvHfct4X9vrv34SngjrRSRfy1oDqnNLikZh9wc+8BM5Aw0zGdBlTpZjNguvk5DWTVPANUWynnlAbnQWA+WKG2LZnTjwJL7MXWMqc04FUA4LomrCQmEti+C74KpFd8BYc3+7fwXgB04hcBUCCtgJQDd/LddwGQIvGJBCNAliIPShmJdG7s7pWQzgHwYIMHNOmcB9vxu3S5XC6Xy+Wv/Qe/wSwD+8Xs5QAAAABJRU5ErkJggg==",
	"emerald": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAIVBMVEUAAADb/+uv/c2C9q1B84QX3WIAqiwAlSkAexgAUwAALQC5+lfcAAAAAXRSTlMAQObYZgAAAENJREFUeNpjwApmzoTQnCKuE8CMiSpuUWABIRW31AUghmqQWhmUYdaGxgg2a4UyPEpBDIZpFe1WEAPTgTJgsGoVVpsBDRwS6h42ddsAAAAASUVORK5CYII=",
	"emerald_ore": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAJFBMVEV/f390dHRSa1AX3WIAexjZ/+tB84QXxUQ3Wz4cmCloaGiPj48mkEo8AAAAfElEQVR42gXBgQHAIAzDMKcUBvX//05ClYRMAgBUoUrVhEDtlUBqLwBgNRS62iQEsC6oBkD0nFfJZCJh7tn9LoEqSNU9/b5bSe0FtRff0wRYHVitglSNwhiQ4Zw7SQAA6bP7gZCkivTX78sEpfYiuU8TIWG1jIIKgCaoBH4ExwQBmQbUuQAAAABJRU5ErkJggg==",
	"fox": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAgCAMAAABjCgsuAAAAJFBMVEUAAADMaSDifCHnj0EGBA6OPyRWPzTn2dO0j4PVtp/59PSwUSLPM9ctAAAAAXRSTlMAQObYZgAAAU9JREFUeNql1NFuwyAQRFFmwPEu8///22W1rWvXjSzl8gCOOFEkTNqDEM2onRtRTY/AmDO21nQD/Ao0TVKTTUl/Qez39qwC0eVDRoAs07FXFSJ2/ACyx4Dc3Mz/A8QBekSYZ3aAElh19ivw6hawk5+AGI8AkDHDuTYx4W5umGv4OgzpCvRTm5FnswqASEoB1dOWJfA/QCLmmOydMYGStqrdpQyVVgeo82eEVm3S3OdexTL3F2CGrD0Je4R7ABK72d5+t2f3gL3To8+AZ8quv2cfYycxovQgAPPIABBEvv/HN9WhfgPwDJivJ9n+K/fLEihFXrFvII1xWiSQCmiBTr4FOAOwJ6ldArBtdYW3LQFBWQgz5QPZ+xmogBKsEMDMwOoEJLWcogKA+SJIgU4+AX6Azv4GoP7W3EwAlwmABK/XGC8za7YWsTquv0WSsFoCX6aOFNCtdrKrAAAAAElFTkSuQmCC",
	"furnace": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAFVBMVEVQTk6RkZGFhYV3d3doaGhdW1s8OztCEpz6AAAAdklEQVR42k2PuQ0DARACh2/7L9nynQNHiE8CAA64O+4AttXO2rgDFimZ5doBKkuLJDcBYjlrJC09rmvntPHGwaxakje7cJFc6VVznL4Yv9yAJLl1Yxsgj/OoW49bnOrNKXDeuify60Rb1iS/6UvjsHZN+b9/AB9cpQKIH34ARQAAAABJRU5ErkJggg==",
	"glass": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWklEQVQ4y2O48Orlf3Lxigs3/zOAGA0NDQzkYKwGkGJg9brtqAaQ6hoUA0DOIdULGC4gFXcfPEuZAQPvguFiADnxD7OULBcgqyfbBSiZCUSAMMg0GE0MhukDAIj/+eJKhLbdAAAAAElFTkSuQmCC",
	"horse": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAXVBMVEUAAAD////b29vOzs68vLy0tLSlpaWWlpZ+fn6Ja11+YVRgYGBzWEtnTUBJSUlXQDZKNStINCs2NDcrKi01JB00IxwuHhgtHRchHiEoGhQkFhAcDwoaDgkPDw8AAAD8YI6OAAAAAXRSTlMAQObYZgAAAyxJREFUeNrtlF1v3DYQRc8Z0jbQBn1qgQL5/3+wBZL4Q7xNd6AV9GBnHeTRR1zxXlLDnR1yxQcffPBrkOYuEguAR95BsbMWP8OkSdI9/twCBCOByCh45jYGjQIUQWsY5vbOGgQkgURQ31nEksOE2/EhKziSRekWLNs8cQu1bVmfk1BFks8r29aGV7n/zt/fG8CY6L9WUKj8oxYorDcrP5+YX4GJkULBUAukzW1neCJoW7HC1bxJPpHjsRkQbzk9M3JpwRgLgNy+d8fDLYoLit4cTjAowQLAOVWLG5BgdwgdM2Gqt8X3BZbImDXm3V+P9efXkDHHGBtvURWpVCxTqVE4xlN4gkSEHy5QrjJlUjrpmA6L8fyaoAQg8ak9tarjGTETwzaADUIQjs1SIgAGmlgGBAJMZRUAC3PExwixx44V/nh4fH7I88O338Qvv3+Tpui8O08GASPq/hv6mH5asWQjSLEmHEjgIBCEyE7xZR36bnukXj1vdscP3lKTVzGmRTtO3K/k2VnFK7jfEyCEMyuBZL2WQYwdJjQP3cVLy1KScwYJJ446GAh9kUVgmDiYhQBljw8ITWgZ26wBq1hjkVWuBKiCBCFA8JyFp1tWYBFqsfYaFOiemwTlQhDoT1PrMIWxyliIooq2Pn58jhCxoFLAwtprMIQgGggm++Pd26p14kotYlLZa7CXX0ISmiMN28dssJGNQDjXAAmAqABtEQ65aBUJnGtgMGiuKQsC0WMvQ+gecq4BihBDACgQkNK0TAARQTxqAEJCcj65ISJQAMI5t6MGKipot10DKGkVXmB7gf/bizlqsB8iCW2y7xnKFfEFfOFFYGNY5cCZAMhpAwPBIAaOuVZKT4POHFs1WAEzYMWAUGwGLLZjZ+14YwrJdd0tYAmrBC2gB7KhACHItemEFIsA1goICixqFQlkn0KKJRhQEsYQZQFCBliKEaORUrA2EKAARZQg3gG55oBA7SoScAHh+v1ywSDpBYirWFCwiiAEbIGsoqdXxY7uC72HEPASy/EKiEGuIz0dcJ/umw+BhB0hevo7JrZtFNy9TAwgV6KcRiQeNoBgQID/AFfD3/jAJlkvAAAAAElFTkSuQmCC",
	"panda": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAIVBMVEXn5+cAAAAKCg0TExkAAAAbGyL///8/QEOSkpKrq6vZ2deaV/w/AAAAAnRSTlP/AOW3MEoAAAKnSURBVHja7ZVbkuMgDEVlCXcj7X/BE3EJ4mWSqZrPOUmwIXUPAsoJXX9F6sAI/Rf8S0FWNaCaBxB9IATIw+DA4jcQMHPyRhisAgtKHrwFLMKcWO5bxC1SdL3AjN7AoIh3AvF8MYgIJ34xCKpi2oYQeBqIC5i9CQH1oATkDYKS90ZgYHbNSYD5Q+AlsPjL4Y+CXHkLPHnj5ZbKo8BiBdaOkQWv4RjL8dOOepxmTXltIG1xuW+/tfuWpvB8dKLOnEuFPmDU8i+IyC8SVfQVdQJ1msAbnJGR+cVN9QuAmxLHNJQBBFbml59fyZbl98c7yBhZZ7i84Zu9GwIjMtQvGaDjEXtRJLhe5mO3N4PAzBj5zsAlY1re9Xr5mKqSdQK1AotkzUCzCHePpapp+VzeFptqCNRADA5DZbRerw3lQCI/GBRDwVYw9r7iusous7MTWHxmMIq84LFcBIbdx03NrIKUGAKeBTYyCcAlktgFzqaCALXM2MVgI7BRgG4UYXgPkQ8CNERKjuLrk8BWAQpRKx+is0BtRrWKVLUa9SRQJJAtedZZyQcBq7pA40li5lDCeBIkZu1hTuyoAfedBYlH5oFVEL/f6UDdwS3Ip488GsRBuY/wC2ncDe+RAM+fDBHuDSE4VrCdHyoIvjBECfslnOMgStgvoZ6W5g51YNjFowIuJE9vFFHA6uiXoGaqa96HRULRh70hAfGHEwro3KESjCuAQBUPWsuHIv52HjaB4sevLaEpILQRCqLb8lAAzchDTwA3ExhGflwAwESTYZKaMy0ADh+2h0lHbD3GKKAmTnRbsOzhIUXjJlp/jhrHSB+JXUASIK827eLzChgkwEAjfjCg/kh3Di/iuxVEflPCaW7ELRYwAMOaHI2ILwYGi8Ja1Wt8mT4U+238A9pXP1y3zhnGAAAAAElFTkSuQmCC",
	"parrot": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA3lBMVEX///8AAACuiXYLhP8HgPv/7QjyBATrAADtAADvAQHwAgLuAADsAADxAwP0BgbqAADzBQXpAADoAAAASvLjAADiAADIAADBAADKAgLnAAD1BwfkAAD4CgrmAADvx7n2zsD40MLxybv+6QT/6wb/6gUAefQDXP8DfPf65QD/8Av/7Af75gH/8Qz96AMAcewAdfAAdvEAePMBevUAefP+6wX3gwNhpJn/6QXuAQD2CAj3CQn5Cwv7DQ0Ab+oCe/b85wL3s5vuqpLrp4/zr5f1sZkAAADEAADFAAAlJSUPDw90pPd2AAAAAnRSTlP/AOW3MEoAAAE9SURBVHja1c/ZUoMwFIDh4EJysnBC6gYtrm3AYuu+79qqff8XEokM1s7QC6/8LzJnkm8yCZnOYISkKVAxKwfKeMu2qm0Rb++4qS19Q4oCH1ECZcSl2damm6RhQIryR+zvZzgoN9V49DpONGfAAXknwVsM7h+6vcM0Gzrw9Pwy8qUgP7L22Fp7ZN3L4UaqFQVkfpOJW2YzXCQmnBSRciHU/gKMUsM+ir4BX5oGGAFwn9T5i6QuUSGCkIxq7n7ChUbOdFABHagAFSDrrDoAPD8YhGFcAd7uQNswCBlV7v7uXtbPDa9AFAdCUOAMmAPLWe8k3e0OKiBAyDDU11JK986l1Fqb9oYV8FFrJhVXKtbk73kLc869WtyRq/OzJpCTy4tT0lBaDe8eel/NiBroZuC9eX4z8NaiOWB9owT/t08gxhzPm4lPMQAAAABJRU5ErkJggg==",
	"redstone": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAD1BMVEXmIAi9IAikGAiUFABzDABFTPGwAAAAV0lEQVR42gXBgWHDQBAEIebcf8fRbwAAQLLELHZQR51I2sns3haVtps9UgX4u+24DdgvcgmwecfegGnOzLwZ4/CT+2QmKS2jbykCwztbvtHMJCYZDADAP7Y+Nw/1IQEFAAAAAElFTkSuQmCC",
	"shears": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAG1BMVEUAAADV1dWoqKhwcHCmTz+LQzZvNStCQkJcLR/CipSaAAAAAXRSTlMAQObYZgAAAEhJREFUeNqVzDESgEAIQ9EQJHD/EzvoDGypv3spgu+JZjztba6DbRtfr21c/pg7ADR6HYZTNY8FSGOQkiLWgEfUGA5kc8vEn26f6QFCsmQsWgAAAABJRU5ErkJggg==",
	"totem_of_undying": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAHlBMVEUAAAD9++747qXq24TRp11B5n/Fh0IAu0agWyOFQA8RGs9sAAAAAXRSTlMAQObYZgAAAF1JREFUeNptzkkOwDAMAsDYEGr+/+FK6RJXKjfPATz+UyvtxsoWIyIT3kAmyAYxyZgN5hE5jwZigvKetAD5ni7QoERZV69dGQmw7PcxklQrrRWPLZTk8QV6dPFTeAJoLQLslSF6LQAAAABJRU5ErkJggg==",
	"trident": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbUlEQVQ4y2NgoAeYNm3afxCgSPONGzfABoBoog3DpRkkTrQBZGsGgezs7P96cQH/0TUT7Q2Q5oi5fWBD0DWDDCfKAIfKTDBGdglRmsXcLcEaQTQIgzTBMNE2gzSSHO8wf480zWQHGCy6yNYMBACktqum4kbbjgAAAABJRU5ErkJggg==",
	"turtle": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABACAMAAADlCI9NAAAAMFBMVEUAAAD////K0JHCt4ComnNHv0qUi2OCiFQ/pEI4jTopfUkwcj8gakMlZDMbWzExMTA/pVLKAAAAAXRSTlMAQObYZgAAA/JJREFUeNrNmOFy5CAIgFNBhAW993/bU7Sp2c3+2cTefdOpTXZavlFQ6bajwiyKUMHtXyBckRMBKt/QxHY77JwJoFmNboZUQSTENQKxwoQVOgoQQoAA6OEREBBxgUB0EiFS2nZ6TAAC8LgzawQSUToKAEAIGEId1wh4/scdZtHsdAGAUOnfYJXAZMAsBwEc8fuAawRUvv4wq3/9+RKdBeAgAEsEskqFhVlYKpp/BHBfgDEFSwSypkS9ACklzZMAoVNjo0NHgfUAhAYG9BFgpQBzZETAE4Hgw3KByBEwwKsAAAL8ygzEFmebSIQeG9wCKa0UEI4M4SgAANMSAMBaAY4AcCqAvyHAwoyAsE2gG7S34zRYLCBY2Sb6/uAzUEdanAMqInQ86nsOukDPwpUCqqInAgjjGgS4WqAh9CJACAEDIK0RwA6JEpHKz9HMiNvvEjkygof9N3CMDAFhm5GKX5anGkRcdC1l5pbrL9cl4QFVvCzWdC8xsoQQXgSEJUZuetij9yvSkhmQAPAkoK7gBhEBAJkxtO8reiNhQMAnAQ/vMCLvLBAQFp63YmrEyF2ARbx5dIjGcK9A3whlmxn5zyyVHnbZlVBF9UWAB8LSm3c/EhYJVIhEnwUix9jii44KcAe8tSf0GSYiVSH8hmP72ON7eFVmhIDM+LIP7G3z7UfVXgHNgH/Ag8DeQd9i8EEV4N5BnwqsZ+qgLwn4tmfMnhXmy561UaRRtJHfCECA6wLdwOe6x9fcDEp7LT5qXimQPeSj0x+cop2SK2cCUwd9ScCyZnuMf4o9/MkfctZu4x9sr0wd9CWBZGZkpWNkZomIUmpPbpLS+V+eOuhLAtgo3+AOUWqM4nsjECBcENBcDAfUwYEVz0Mz4bElmRXVbWbvoD8WKCUPAUrf0BDIpSIi3cDrQ0rZZqYO+uMZyEYj/tGALGftFzN7NKwfTDdvRKq5JESEgwAgYvIVEOF+PHwG6sCnAnhRIBdEgDQDgFhyHvH3HHCDbWbvoK8J0IkAdQF79PjD4GFHAdo7aPo8CbNRIkoT7ZHMtx9VE+4GzGKqz0k4luDjJKxRzE5nwKy6qbCMOuw/POXA1EFfWAJLJwLJvnMg8qgCji85MHXQHwvoWwEdAnFUQRwCM/sNZWf7ROAkByYBj+8GLvABF2agmE1laFbuFijlfQ54FQibMI8iYNGy3cuoAnwSwL0KhNmMKz6I6O1L4PtAojTTXngVqBuINcTjrxAoeDIDWIZAZcyAyAqB3A8jTDP+Yjcw7wx81NsFchV4cxxXgXEZVGlovybeXgVmbwQ8nk+BG6hPwIIqyEanNyKyPC7FIqUhoo3tP+Hr4u//Bfy8TizC0LlwAAAAAElFTkSuQmCC",
	"warden": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAOVBMVEUAAADR1ra7w5sp3+uir4aBmYhudXsAkpVAV2wFYl0HSFcDQVAXKC8GLjcLISoRGyERFRoNEhcFBBJsUoYuAAAAAXRSTlMAQObYZgAABmBJREFUeNrtmeuC2ygMhWMChIlWHLPv/7ArIbyNg6eJL9P0h0+42U6tzxIig3t5UCkFBexEDBku6fKTKiIAnBIDKJ8AMAQiNf8xgKIA5ZMAhaicAO8D3C7XjwJcb7fbZz3wJQSfnQN0/SwA004PlBUC4EQAjIUvdJMQfB0JgG+NG0FwLgDmjMxEav+6DwBLxr4Vp8TtGzmL+Ys8/k4AEaYGosYg6mGQ1APJzmWmq1k/LATIGUA2+zLuXRPdMLg4AVwuxwIgAyUX0wg8E4ABFgGMt1ZlSiG49wDQAMoo/Zc0ojkAwCkGpx5wISYGXgMkjdgKD1jYcyn/KIcdNkEr6wOJQkiM3gP7syADtavNWID8NA3BYJFF4DWAPf8KD2SY+VE76QVgJmgMhkEjgHcAKIV1AEADmQAwt28xsAgcFIIeYCxSszJ0AMYgsvM4HiDDDAvFqBjQowaB+Ur4A3MACoBmvwrdHGC2lZD5p+aAUmj4pbPDR8ES0ZLwZ+ZABtT3yythQ2SewI5biPAAIN2XITwAaN8GHAKXdwFICdb+GLVZMI1R5kJKsNHxIeh/jmcyFvWAjg8EWCcwG9gHALp14GgR3e93IpZeRX9wV2YysyJp7/QRALpVBClJKP44AKlaEOgTITDDUww+4gFzfZuMH/CAmtXmpk16DXC93I7OAmqJ8J4HZGN+PTYEN/pln3uA3v7X4XOgWr6bXgJc6dDIEyUS2YEWapes2BW7NHmA+AAAZiLmO0svn1r0wA61teYuNbdvNLO6M7/RhfcCqLJI7y9NE7VTmZH1w8zSkH4BaEmgBESc9wHkjCwVaq6aKtJV6VFB1kZUyjjWkygTgDjhIgh5H0EBitWCkccCKdBWVW1Lr9brt/QABtAYrntdYNZVZtTEy29LYN0DgGgvwEwjWNRQJkHLo96/4wqArA3YkoIbzmzXZsIPAZi4/Fslg179XnH69TwIAIXVuIm70C/8kVzt8/1+GADk2VXiB5RezGUuWxz3A7RYm32Ingj6EOTfAuRtHhgLcr0nE9vbEhhb/45y0vS7Mb9Xn8ArtmacAUjH6G/W/1/SnUns0wNALp1WAQDT4K05YM9PvOgBE94E6LfBvWIIsQPQNJyHAP0dVq2IllpEi99h5p7NhKVx3gJgj7UMMAwDloLRTqIjWAHQr269MLhBvYDalTJqMTELnZlGAazfCkA2s3vpu3L2UochuYEte+3Zh0GpVEDJebZmrANgIvouBMG5IUkNblCW0jQqj540B2QQIetorQfGNge+DYF3ziVplMG7AaXJuVBLDUEmpATK1T42hOBeP8sAYjVKFYbgvQDkig3n5KSrHgAo5SSFMrB5Et7vvBwC73z0Zk7GzQAQnFwwgEzBZSclUH4PYCmjmXlxFQtiNXrvFEQqgDIaQPBeCIoRUAhk9t8EGJ8WW0i6T8NnAB+DAEQpwQMwD+iBXtvxN+HYUtmBRZLuaAxzgOjVlvfSpxgMIAMxphDTdgCTmE01xb1UFwcnDGCeA4QgEGLdR0oJkwcokTJsBjAHmNUwOOFw2odKNFuIUgzqAjFGlAgteGBi0mv7PDA4LyZFPmkz5fb83S8l9X2UARPj4eUlEcW4CQDtKTB4H8SwcESp0jvp5gBMnIQhJk4sQmkCQy9tBEADcD6YSR+9OUM6F54A1AmJmdQmpvChOoHTRgCo+QrgFcL7KJ06w/swB4Dt2km655fZCsD7ADTDnBTpvQBoleEcACyq9ot+Sn5cvrAZYKwAQRNJbNdUl+JTDGk+sVBYinyq+ZlGqejX1jUeSImiT3WtC8qg1... (line truncated to 2000 chars)",
	"wolf": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAgCAMAAACVQ462AAAAUVBMVEUAAADBvr7Kx8jTz8/d2ts5ODWnj36Mb1KajIiVhnn///+heFstLShJQjnJwcKBdm3V0NASFBY5PD/k2NnUtaTOr5aUe2jEq5yalZGfmpawqqeNy/TaAAAAAXRSTlMAQObYZgAAAedJREFUeNrd0sFqXEcURdG9b72GBJxggu3up///t0ZkZtDI1ttJwIgWamvgYdagThVFHWpwF8BaLh3WyC0fPjztTw9PLBbDxFsDQB55qHJrro5cHUBGflogjkrKrYWPjKiG3LEB1FhBxA25LhQBlHvGNSbQcNSMN18NfMn7NoWO4RAntG7fJwElcc+Y/v5xrY+/YUR5W3BUL3mPI8dJqW9D6TEdotIxEpJU6LGetYMbG3lSgdNzEBQjVIsgPFQJweG1LbbVN+A0/BcRlBxAAUEWiJFyS4Bzko+80PR8ZRVA+2PZKvNY398M0sHBK7ZXgqJa7RmXan/mTUHEa3t7XAgVLrS3cz66cGnnjU9/ffr85TO/xM8Fx4AyHH9zAr7xg4t8jp8b8GWt4VQc26vr4R2b3wWgTgAQGj/YsT/Kr3Ptuw+8Y4MPxBPAH0xfeWW/wvuGWwmv7bLzrnG5nOHBGdcMurZt0xn9d7N0W9vDWtw1iofGFfWMMBCoQjDQM8hdg4HITkgAAkAvB/er3DcUhoB1nRAQxREBM4i7psw6ALhYIEHBEYQAJHfNl/18Pu9fLlxJbKACCoEKY4/7ZsojZUeuCEWEFBFVRty1XeVP+BpAREAUGQQBXC/EXfKGmIEEZkxcrh78T/0D7+sQKbNOmzIAAAAASUVORK5CYII="
};

//#endregion
//#region src/client/icons.tsx
const px = (x, y, w, h, c) => [
	x,
	y,
	w,
	h,
	c
];
function svgFrame(children) {
	return React$1.createElement("svg", {
		viewBox: "0 0 16 16",
		shapeRendering: "crispEdges",
		xmlns: "http://www.w3.org/2000/svg",
		className: "mcskin-svg"
	}, children);
}
function mkIcon(rects) {
	const kids = [];
	for (let i = 0; i < rects.length; i++) {
		const r = rects[i];
		kids.push(React$1.createElement("rect", {
			key: "r" + i,
			x: r[0],
			y: r[1],
			width: r[2],
			height: r[3],
			fill: r[4]
		}));
	}
	return svgFrame(kids);
}
const MC_ICONS = {
	grassBlock: () => mkIcon([
		px(0, 0, 16, 5, "#7EBD52"),
		px(0, 5, 16, 11, "#866043"),
		px(1, 3, 1, 1, "#A0DA68"),
		px(3, 2, 2, 1, "#A0DA68"),
		px(7, 3, 1, 1, "#A0DA68"),
		px(10, 2, 2, 1, "#A0DA68"),
		px(13, 3, 1, 1, "#A0DA68"),
		px(2, 4, 1, 1, "#5A8C24"),
		px(8, 4, 1, 1, "#5A8C24"),
		px(12, 4, 1, 1, "#5A8C24"),
		px(3, 7, 2, 1, "#6F4A30"),
		px(9, 9, 1, 1, "#6F4A30"),
		px(12, 11, 2, 1, "#6F4A30"),
		px(1, 12, 1, 1, "#6F4A30"),
		px(7, 14, 2, 1, "#6F4A30"),
		px(14, 13, 1, 1, "#6F4A30")
	]),
	dirt: () => mkIcon([
		px(0, 0, 16, 16, "#866043"),
		px(1, 1, 1, 1, "#A07850"),
		px(4, 1, 2, 1, "#A07850"),
		px(8, 1, 1, 1, "#A07850"),
		px(12, 2, 1, 1, "#A07850"),
		px(14, 1, 1, 1, "#A07850"),
		px(2, 5, 1, 1, "#6F4A30"),
		px(6, 5, 2, 1, "#6F4A30"),
		px(11, 6, 1, 1, "#6F4A30"),
		px(3, 9, 1, 1, "#6F4A30"),
		px(8, 10, 2, 1, "#6F4A30"),
		px(13, 8, 1, 1, "#6F4A30"),
		px(1, 12, 1, 1, "#6F4A30"),
		px(5, 13, 1, 1, "#6F4A30"),
		px(10, 14, 1, 1, "#6F4A30")
	]),
	cobblestone: () => mkIcon([
		px(0, 0, 16, 16, "#7F7F7F"),
		px(0, 0, 6, 4, "#999999"),
		px(6, 0, 5, 5, "#6F6F6F"),
		px(11, 0, 5, 3, "#999999"),
		px(0, 4, 4, 4, "#6F6F6F"),
		px(4, 5, 2, 5, "#999999"),
		px(10, 5, 6, 4, "#6F6F6F"),
		px(0, 8, 3, 3, "#999999"),
		px(3, 10, 7, 3, "#6F6F6F"),
		px(10, 9, 6, 4, "#999999"),
		px(0, 13, 5, 3, "#999999"),
		px(5, 13, 4, 3, "#6F6F6F"),
		px(9, 13, 7, 3, "#999999")
	]),
	obsidian: () => mkIcon([
		px(0, 0, 16, 16, "#1A0F2A"),
		px(1, 1, 1, 1, "#3F2F5F"),
		px(3, 1, 2, 1, "#3F2F5F"),
		px(7, 1, 1, 1, "#3F2F5F"),
		px(10, 1, 2, 1, "#3F2F5F"),
		px(13, 1, 1, 1, "#3F2F5F"),
		px(2, 4, 1, 1, "#0A0510"),
		px(12, 4, 1, 1, "#0A0510"),
		px(5, 5, 2, 1, "#5A4A6A"),
		px(9, 5, 1, 1, "#5A4A6A"),
		px(3, 7, 1, 1, "#0A0510"),
		px(10, 8, 2, 1, "#0A0510"),
		px(1, 10, 1, 1, "#3F2F5F"),
		px(4, 11, 1, 1, "#3F2F5F"),
		px(13, 11, 1, 1, "#3F2F5F"),
		px(2, 13, 1, 1, "#5A4A6A"),
		px(8, 14, 2, 1, "#5A4A6A"),
		px(14, 13, 1, 1, "#3F2F5F")
	]),
	oakPlank: () => mkIcon([
		px(0, 0, 16, 16, "#A87F4D"),
		px(0, 3, 16, 1, "#6F4F2A"),
		px(0, 7, 16, 1, "#6F4F2A"),
		px(0, 11, 16, 1, "#6F4F2A"),
		px(0, 15, 16, 1, "#6F4F2A"),
		px(2, 1, 1, 2, "#6F4F2A"),
		px(5, 1, 1, 2, "#6F4F2A"),
		px(9, 1, 1, 2, "#6F4F2A"),
		px(12, 1, 1, 2, "#6F4F2A"),
		px(3, 5, 1, 2, "#6F4F2A"),
		px(7, 5, 1, 2, "#6F4F2A"),
		px(11, 5, 1, 2, "#6F4F2A"),
		px(1, 9, 1, 2, "#6F4F2A"),
		px(8, 9, 1, 2, "#6F4F2A"),
		px(13, 9, 1, 2, "#6F4F2A"),
		px(3, 13, 1, 2, "#6F4F2A"),
		px(6, 13, 1, 2, "#6F4F2A"),
		px(10, 13, 1, 2, "#6F4F2A")
	]),
	deepslate: () => mkIcon([
		px(0, 0, 16, 16, "#4F5057"),
		px(0, 0, 6, 5, "#3F4046"),
		px(6, 0, 5, 5, "#5F6067"),
		px(11, 0, 5, 5, "#3F4046"),
		px(0, 5, 4, 5, "#5F6067"),
		px(4, 5, 6, 5, "#3F4046"),
		px(10, 5, 6, 5, "#5F6067"),
		px(0, 10, 5, 3, "#3F4046"),
		px(5, 10, 6, 3, "#5F6067"),
		px(11, 10, 5, 6, "#3F4046"),
		px(0, 13, 8, 3, "#5F6067"),
		px(8, 13, 3, 3, "#3F4046")
	]),
	endstone: () => mkIcon([
		px(0, 0, 16, 16, "#DBDE8E"),
		px(2, 1, 2, 1, "#C5C880"),
		px(6, 1, 1, 1, "#C5C880"),
		px(10, 1, 2, 1, "#C5C880"),
		px(14, 1, 1, 1, "#C5C880"),
		px(3, 4, 2, 1, "#F0F1B0"),
		px(8, 4, 1, 1, "#F0F1B0"),
		px(12, 5, 1, 1, "#F0F1B0"),
		px(1, 7, 1, 1, "#A7A66E"),
		px(5, 8, 2, 1, "#A7A66E"),
		px(11, 8, 1, 1, "#A7A66E"),
		px(4, 11, 2, 1, "#F0F1B0"),
		px(9, 12, 1, 1, "#F0F1B0"),
		px(13, 11, 2, 1, "#F0F1B0"),
		px(2, 14, 1, 1, "#A7A66E"),
		px(7, 14, 1, 1, "#A7A66E"),
		px(12, 14, 2, 1, "#A7A66E")
	]),
	bedrock: () => mkIcon([
		px(0, 0, 16, 16, "#3F3F3F"),
		px(1, 0, 1, 1, "#1F1F1F"),
		px(4, 0, 2, 1, "#1F1F1F"),
		px(8, 0, 1, 1, "#1F1F1F"),
		px(12, 0, 2, 1, "#1F1F1F"),
		px(0, 2, 1, 1, "#5F5F5F"),
		px(5, 2, 1, 1, "#5F5F5F"),
		px(10, 2, 1, 1, "#5F5F5F"),
		px(3, 4, 1, 1, "#1F1F1F"),
		px(7, 5, 2, 1, "#1F1F1F"),
		px(12, 5, 1, 1, "#1F1F1F"),
		px(0, 7, 1, 1, "#5F5F5F"),
		px(4, 7, 1, 1, "#5F5F5F"),
		px(10, 7, 2, 1, "#5F5F5F"),
		px(1, 10, 1, 1, "#1F1F1F"),
		px(6, 10, 1, 1, "#1F1F1F"),
		px(12, 10, 2, 1, "#1F1F1F"),
		px(3, 12, 1, 1, "#5F5F5F"),
		px(8, 12, 1, 1, "#5F5F5F"),
		px(13, 12, 1, 1, "#5F5F5F"),
		px(0, 14, 2, 1, "#1F1F1F"),
		px(5, 14, 2, 1, "#1F1F1F"),
		px(10, 14, 1, 1, "#1F1F1F"),
		px(13, 14, 2, 1, "#1F1F1F")
	]),
	purpurBlock: () => mkIcon([
		px(0, 0, 16, 16, "#7A6A99"),
		px(1, 0, 1, 1, "#9D90A5"),
		px(4, 0, 1, 1, "#9D90A5"),
		px(8, 0, 1, 1, "#9D90A5"),
		px(12, 0, 1, 1, "#9D90A5"),
		px(0, 2, 1, 1, "#5A4A6A"),
		px(5, 2, 1, 1, "#5A4A6A"),
		px(9, 3, 1, 1, "#5A4A6A"),
		px(12, 2, 1, 1, "#5A4A6A"),
		px(15, 2, 1, 1, "#5A4A6A"),
		px(3, 5, 1, 1, "#9D90A5"),
		px(7, 5, 1, 1, "#9D90A5"),
		px(11, 5, 1, 1, "#9D90A5"),
		px(1, 8, 1, 1, "#5A4A6A"),
		px(5, 8, 1, 1, "#5A4A6A"),
		px(10, 8, 1, 1, "#5A4A6A"),
		px(14, 9, 1, 1, "#5A4A6A"),
		px(3, 12, 1, 1, "#9D90A5"),
		px(8, 12, 1, 1, "#9D90A5"),
		px(13, 12, 1, 1, "#9D90A5"),
		px(1, 14, 1, 1, "#5A4A6A"),
		px(5, 14, 1, 1, "#5A4A6A"),
		px(10, 14, 1, 1, "#5A4A6A")
	]),
	emerald: () => mkIcon([
		px(6, 1, 4, 1, "#3FB97F"),
		px(4, 2, 2, 1, "#3FB97F"),
		px(10, 2, 2, 1, "#3FB97F"),
		px(3, 3, 1, 1, "#3FB97F"),
		px(12, 3, 1, 1, "#3FB97F"),
		px(2, 4, 1, 4, "#3FB97F"),
		px(13, 4, 1, 4, "#3FB97F"),
		px(3, 8, 1, 4, "#3FB97F"),
		px(12, 8, 1, 4, "#3FB97F"),
		px(4, 12, 2, 1, "#3FB97F"),
		px(10, 12, 2, 1, "#3FB97F"),
		px(6, 13, 4, 1, "#3FB97F"),
		px(7, 2, 2, 2, "#7BE5AF"),
		px(7, 8, 2, 2, "#7BE5AF"),
		px(6, 5, 4, 1, "#5DEC8C"),
		px(6, 10, 4, 1, "#5DEC8C"),
		px(7, 4, 2, 1, "#1F7A52"),
		px(7, 11, 2, 1, "#1F7A52")
	]),
	goldIngot: () => mkIcon([
		px(1, 4, 14, 1, "#FCDB05"),
		px(3, 5, 10, 1, "#FCDB05"),
		px(4, 6, 8, 1, "#FCDB05"),
		px(3, 7, 10, 1, "#FCDB05"),
		px(2, 8, 12, 1, "#FCDB05"),
		px(1, 9, 14, 1, "#FCDB05"),
		px(2, 10, 12, 1, "#FCDB05"),
		px(2, 5, 1, 1, "#E29033"),
		px(12, 5, 1, 1, "#E29033"),
		px(3, 8, 1, 1, "#FFE34A"),
		px(12, 8, 1, 1, "#FFE34A"),
		px(4, 6, 1, 1, "#FFE34A"),
		px(11, 6, 1, 1, "#FFE34A"),
		px(2, 9, 1, 1, "#E29033"),
		px(13, 9, 1, 1, "#E29033")
	]),
	ironingot: () => mkIcon([
		px(1, 4, 14, 1, "#D4D4D4"),
		px(3, 5, 10, 1, "#D4D4D4"),
		px(4, 6, 8, 1, "#D4D4D4"),
		px(3, 7, 10, 1, "#D4D4D4"),
		px(2, 8, 12, 1, "#D4D4D4"),
		px(1, 9, 14, 1, "#D4D4D4"),
		px(2, 10, 12, 1, "#D4D4D4"),
		px(2, 5, 1, 1, "#888888"),
		px(12, 5, 1, 1, "#888888"),
		px(3, 8, 1, 1, "#F0F0F0"),
		px(12, 8, 1, 1, "#F0F0F0"),
		px(4, 6, 1, 1, "#F0F0F0"),
		px(11, 6, 1, 1, "#F0F0F0"),
		px(2, 9, 1, 1, "#888888"),
		px(13, 9, 1, 1, "#888888")
	]),
	amethyst: () => mkIcon([
		px(0, 0, 16, 16, "#3F2F5F"),
		px(5, 2, 6, 4, "#B287F5"),
		px(4, 6, 8, 2, "#B287F5"),
		px(5, 8, 6, 2, "#9D6FE6"),
		px(4, 10, 8, 2, "#B287F5"),
		px(5, 12, 6, 2, "#9D6FE6"),
		px(6, 4, 1, 1, "#D5A5FF"),
		px(9, 4, 1, 1, "#D5A5FF"),
		px(7, 7, 2, 1, "#D5A5FF"),
		px(6, 11, 1, 1, "#D5A5FF"),
		px(10, 12, 1, 1, "#D5A5FF"),
		px(3, 6, 1, 1, "#5F4F7F"),
		px(12, 7, 1, 1, "#5F4F7F")
	]),
	wheat: () => mkIcon([
		px(7, 1, 2, 1, "#E2A632"),
		px(6, 2, 4, 1, "#E2A632"),
		px(7, 3, 2, 1, "#F4B400"),
		px(6, 4, 4, 1, "#F4B400"),
		px(5, 5, 6, 1, "#F4B400"),
		px(6, 6, 4, 1, "#E2A632"),
		px(7, 7, 2, 1, "#F4B400"),
		px(6, 8, 4, 1, "#F4B400"),
		px(5, 9, 6, 1, "#F4B400"),
		px(7, 10, 2, 8, "#A88B3D"),
		px(8, 10, 1, 8, "#7A5A1A")
	]),
	apple: () => mkIcon([
		px(4, 4, 8, 2, "#E14B4B"),
		px(3, 6, 10, 4, "#E14B4B"),
		px(4, 10, 8, 4, "#A02828"),
		px(5, 12, 6, 1, "#A02828"),
		px(3, 6, 1, 1, "#FF7070"),
		px(12, 6, 1, 1, "#FF7070"),
		px(7, 1, 2, 2, "#5BA32F"),
		px(8, 1, 1, 3, "#3F7A1F"),
		px(9, 2, 1, 1, "#A8451A")
	]),
	bread: () => mkIcon([
		px(2, 5, 12, 5, "#C5A050"),
		px(1, 6, 14, 4, "#C5A050"),
		px(2, 5, 1, 1, "#A0803F"),
		px(13, 5, 1, 1, "#A0803F"),
		px(4, 7, 1, 1, "#A0803F"),
		px(8, 8, 1, 1, "#A0803F"),
		px(11, 7, 1, 1, "#A0803F"),
		px(3, 9, 1, 1, "#DFB060"),
		px(10, 9, 1, 1, "#DFB060")
	]),
	potion: () => mkIcon([
		px(6, 1, 4, 1, "#5A4A30"),
		px(6, 2, 4, 1, "#888880"),
		px(5, 3, 1, 2, "#888880"),
		px(10, 3, 1, 2, "#888880"),
		px(5, 5, 1, 1, "#1F1F24"),
		px(10, 5, 1, 1, "#1F1F24"),
		px(4, 6, 8, 1, "#B287F5"),
		px(4, 7, 1, 1, "#9D6FE6"),
		px(11, 7, 1, 1, "#9D6FE6"),
		px(3, 8, 10, 5, "#9D6FE6"),
		px(4, 13, 8, 1, "#7A4FCC"),
		px(5, 9, 1, 1, "#D5A5FF"),
		px(10, 9, 1, 1, "#D5A5FF"),
		px(7, 11, 2, 1, "#D5A5FF")
	]),
	lantern: () => mkIcon([
		px(7, 0, 2, 2, "#3F3F3F"),
		px(6, 2, 4, 1, "#3F3F3F"),
		px(5, 3, 6, 1, "#5F5F5F"),
		px(4, 4, 8, 7, "#3F3F3F"),
		px(5, 4, 6, 7, "#FCDB05"),
		px(6, 5, 4, 5, "#FFE34A"),
		px(5, 4, 1, 1, "#888888"),
		px(10, 4, 1, 1, "#888888"),
		px(7, 7, 2, 1, "#FFFFFF"),
		px(7, 11, 2, 1, "#3F3F3F"),
		px(6, 12, 4, 1, "#3F3F3F"),
		px(5, 13, 1, 2, "#5F5F5F"),
		px(10, 13, 1, 2, "#5F5F5F")
	]),
	chorusFruit: () => mkIcon([
		px(3, 4, 10, 1, "#9D6FE6"),
		px(2, 5, 12, 1, "#9D6FE6"),
		px(2, 6, 12, 4, "#B287F5"),
		px(3, 10, 10, 1, "#9D6FE6"),
		px(4, 11, 8, 1, "#7A4FCC"),
		px(5, 5, 1, 1, "#D5A5FF"),
		px(10, 5, 1, 1, "#D5A5FF"),
		px(5, 8, 1, 1, "#D5A5FF"),
		px(10, 8, 1, 1, "#D5A5FF"),
		px(7, 6, 2, 2, "#D5A5FF")
	]),
	soulSand: () => mkIcon([
		px(0, 0, 16, 16, "#5A3B29"),
		px(2, 1, 1, 1, "#7A5A3F"),
		px(5, 1, 2, 1, "#7A5A3F"),
		px(9, 1, 1, 1, "#7A5A3F"),
		px(12, 2, 1, 1, "#7A5A3F"),
		px(14, 1, 1, 1, "#7A5A3F"),
		px(3, 4, 1, 1, "#3F2820"),
		px(7, 4, 2, 1, "#3F2820"),
		px(11, 5, 1, 1, "#3F2820"),
		px(1, 7, 2, 1, "#3F2820"),
		px(6, 7, 1, 1, "#3F2820"),
		px(10, 8, 2, 1, "#3F2820"),
		px(3, 10, 1, 1, "#3F2820"),
		px(8, 10, 1, 1, "#3F2820"),
		px(13, 11, 2, 1, "#3F2820"),
		px(1, 13, 1, 1, "#3F2820"),
		px(5, 14, 2, 1, "#3F2820"),
		px(11, 14, 1, 1, "#3F2820"),
		px(4, 6, 1, 1, "#FF8B3D"),
		px(8, 6, 1, 1, "#FF8B3D"),
		px(12, 9, 1, 1, "#FF8B3D")
	]),
	creeper: () => mkIcon([
		px(3, 1, 10, 6, "#5BA32F"),
		px(2, 7, 12, 4, "#5BA32F"),
		px(3, 11, 10, 4, "#5BA32F"),
		px(4, 6, 2, 2, "#1F2A14"),
		px(10, 6, 2, 2, "#1F2A14"),
		px(6, 8, 4, 3, "#1F2A14"),
		px(6, 8, 1, 1, "#5BA32F"),
		px(9, 8, 1, 1, "#5BA32F"),
		px(3, 1, 1, 1, "#7EBD52"),
		px(12, 1, 1, 1, "#7EBD52"),
		px(3, 11, 1, 1, "#3F7A1F"),
		px(12, 11, 1, 1, "#3F7A1F"),
		px(4, 14, 1, 1, "#3F7A1F"),
		px(11, 14, 1, 1, "#3F7A1F")
	]),
	enderman: () => mkIcon([
		px(5, 0, 6, 3, "#1A0F2A"),
		px(4, 3, 8, 1, "#1A0F2A"),
		px(3, 4, 10, 5, "#1A0F2A"),
		px(5, 6, 1, 1, "#B287F5"),
		px(10, 6, 1, 1, "#B287F5"),
		px(3, 9, 1, 1, "#1A0F2A"),
		px(12, 9, 1, 1, "#1A0F2A"),
		px(2, 10, 2, 4, "#1A0F2A"),
		px(12, 10, 2, 4, "#1A0F2A"),
		px(4, 14, 1, 1, "#1A0F2A"),
		px(11, 14, 1, 1, "#1A0F2A"),
		px(5, 14, 1, 1, "#3F2F5F"),
		px(10, 14, 1, 1, "#3F2F5F")
	]),
	cow: () => mkIcon([
		px(2, 3, 12, 8, "#FFFFFF"),
		px(4, 4, 2, 2, "#5F3F1F"),
		px(10, 4, 2, 2, "#5F3F1F"),
		px(3, 7, 2, 3, "#5F3F1F"),
		px(10, 7, 2, 3, "#5F3F1F"),
		px(5, 9, 1, 2, "#5F3F1F"),
		px(10, 9, 1, 2, "#5F3F1F"),
		px(6, 11, 4, 1, "#F0A0A0"),
		px(7, 11, 2, 1, "#5F3F1F"),
		px(2, 11, 1, 1, "#5F3F1F"),
		px(13, 11, 1, 1, "#5F3F1F"),
		px(3, 12, 1, 1, "#5F3F1F"),
		px(12, 12, 1, 1, "#5F3F1F"),
		px(5, 6, 1, 1, "#1F1F1F"),
		px(10, 6, 1, 1, "#1F1F1F")
	]),
	pig: () => mkIcon([
		px(2, 4, 12, 7, "#F0A0A0"),
		px(3, 11, 10, 3, "#F0A0A0"),
		px(2, 7, 1, 1, "#F0A0A0"),
		px(13, 7, 1, 1, "#F0A0A0"),
		px(6, 9, 4, 2, "#E58080"),
		px(7, 9, 2, 1, "#C56060"),
		px(5, 6, 1, 1, "#1F1F1F"),
		px(10, 6, 1, 1, "#1F1F1F"),
		px(3, 13, 1, 1, "#F0A0A0"),
		px(12, 13, 1, 1, "#F0A0A0"),
		px(5, 3, 2, 2, "#F0A0A0"),
		px(9, 3, 2, 2, "#F0A0A0"),
		px(5, 4, 1, 1, "#E58080"),
		px(10, 4, 1, 1, "#E58080")
	]),
	chicken: () => mkIcon([
		px(5, 3, 6, 5, "#FFFFFF"),
		px(4, 5, 1, 3, "#FFFFFF"),
		px(11, 5, 1, 3, "#FFFFFF"),
		px(3, 7, 1, 4, "#FFFFFF"),
		px(12, 7, 1, 4, "#FFFFFF"),
		px(4, 11, 8, 2, "#FFFFFF"),
		px(6, 4, 1, 1, "#1F1F1F"),
		px(10, 4, 1, 1, "#1F1F1F"),
		px(7, 6, 2, 1, "#E14B4B"),
		px(5, 7, 1, 1, "#FCDB05"),
		px(10, 7, 1, 1, "#FCDB05"),
		px(4, 12, 1, 1, "#FCDB05"),
		px(6, 12, 1, 1, "#FCDB05"),
		px(10, 12, 1, 1, "#FCDB05"),
		px(12, 12, 1, 1, "#FCDB05")
	]),
	sheep: () => mkIcon([
		px(2, 4, 12, 4, "#F0F0F0"),
		px(2, 8, 12, 2, "#D0D0D0"),
		px(2, 10, 12, 2, "#F0F0F0"),
		px(2, 12, 12, 2, "#D0D0D0"),
		px(1, 5, 1, 1, "#F0F0F0"),
		px(14, 5, 1, 1, "#F0F0F0"),
		px(4, 4, 2, 2, "#FFFFFF"),
		px(10, 4, 2, 2, "#FFFFFF"),
		px(6, 4, 4, 1, "#D0D0D0"),
		px(4, 9, 2, 1, "#D0D0D0"),
		px(10, 9, 2, 1, "#D0D0D0"),
		px(5, 6, 1, 1, "#1F1F1F"),
		px(10, 6, 1, 1, "#1F1F1F"),
		px(7, 11, 2, 1, "#F0A0A0")
	]),
	bee: () => mkIcon([
		px(4, 4, 2, 2, "#FFFFFF"),
		px(10, 4, 2, 2, "#FFFFFF"),
		px(2, 6, 12, 4, "#FCDB05"),
		px(3, 6, 1, 4, "#1F1F1F"),
		px(7, 6, 1, 4, "#1F1F1F"),
		px(11, 6, 1, 4, "#1F1F1F"),
		px(4, 5, 2, 1, "#F0F0F0"),
		px(10, 5, 2, 1, "#F0F0F0"),
		px(5, 11, 6, 1, "#1F1F1F"),
		px(5, 6, 1, 1, "#1F1F1F"),
		px(10, 6, 1, 1, "#1F1F1F")
	]),
	phantom: () => mkIcon([
		px(3, 3, 10, 6, "#3F3550"),
		px(1, 5, 2, 2, "#3F3550"),
		px(13, 5, 2, 2, "#3F3550"),
		px(2, 9, 12, 2, "#5F4F7F"),
		px(5, 4, 1, 1, "#B287F5"),
		px(10, 4, 1, 1, "#B287F5"),
		px(4, 6, 1, 1, "#FFFFFF"),
		px(10, 6, 1, 1, "#FFFFFF"),
		px(7, 11, 1, 1, "#B287F5"),
		px(8, 11, 1, 1, "#B287F5"),
		px(3, 9, 1, 1, "#1F1F2A"),
		px(12, 9, 1, 1, "#1F1F2A")
	]),
	shulker: () => mkIcon([
		px(2, 4, 12, 9, "#9D6FE6"),
		px(3, 4, 10, 1, "#B287F5"),
		px(3, 12, 10, 1, "#7A4FCC"),
		px(2, 7, 1, 1, "#7A4FCC"),
		px(13, 7, 1, 1, "#7A4FCC"),
		px(3, 13, 10, 2, "#3F2F5F"),
		px(4, 13, 8, 1, "#5F4F7F"),
		px(6, 7, 1, 2, "#FFFFFF"),
		px(9, 7, 1, 2, "#FFFFFF"),
		px(6, 8, 1, 1, "#1F1F2A"),
		px(9, 8, 1, 1, "#1F1F2A")
	]),
	elytra: () => mkIcon([
		px(1, 3, 4, 5, "#5F4F7F"),
		px(4, 4, 3, 4, "#7A6A99"),
		px(7, 4, 2, 4, "#5F4F7F"),
		px(9, 4, 2, 4, "#3F2F5F"),
		px(11, 3, 4, 5, "#5F4F7F"),
		px(2, 5, 1, 2, "#9D90A5"),
		px(13, 5, 1, 2, "#9D90A5"),
		px(3, 8, 4, 2, "#3F2F5F"),
		px(9, 8, 4, 2, "#3F2F5F"),
		px(4, 10, 3, 1, "#1F1F2A"),
		px(9, 10, 3, 1, "#1F1F2A"),
		px(6, 11, 4, 1, "#B287F5")
	]),
	dragonEgg: () => mkIcon([
		px(5, 1, 6, 2, "#1A1A1F"),
		px(4, 3, 8, 3, "#1A1A1F"),
		px(3, 6, 10, 4, "#1A1A1F"),
		px(4, 10, 8, 4, "#1A1A1F"),
		px(5, 14, 6, 1, "#1A1A1F"),
		px(4, 2, 1, 1, "#3F2F5F"),
		px(11, 2, 1, 1, "#3F2F5F"),
		px(3, 4, 1, 1, "#3F2F5F"),
		px(12, 4, 1, 1, "#3F2F5F"),
		px(6, 5, 1, 1, "#5F4F7F"),
		px(10, 5, 1, 1, "#5F4F7F"),
		px(5, 8, 1, 1, "#3F2F5F"),
		px(11, 8, 1, 1, "#3F2F5F"),
		px(6, 12, 1, 1, "#3F2F5F"),
		px(9, 12, 1, 1, "#3F2F5F")
	]),
	witherSkull: () => mkIcon([
		px(5, 2, 6, 7, "#1F1F1F"),
		px(4, 9, 8, 3, "#1F1F1F"),
		px(5, 12, 6, 2, "#1F1F1F"),
		px(4, 4, 2, 2, "#FFFFFF"),
		px(10, 4, 2, 2, "#FFFFFF"),
		px(6, 5, 1, 1, "#1F1F1F"),
		px(9, 5, 1, 1, "#1F1F1F"),
		px(3, 7, 1, 1, "#1F1F1F"),
		px(12, 7, 1, 1, "#1F1F1F"),
		px(7, 9, 2, 2, "#1F1F1F"),
		px(5, 12, 1, 1, "#5F5F5F"),
		px(10, 12, 1, 1, "#5F5F5F"),
		px(6, 13, 1, 1, "#5F5F5F"),
		px(9, 13, 1, 1, "#5F5F5F")
	]),
	netherStar: () => mkIcon([
		px(7, 1, 2, 1, "#FCDB05"),
		px(6, 2, 4, 1, "#FCDB05"),
		px(5, 3, 6, 1, "#FCDB05"),
		px(4, 4, 8, 2, "#FCDB05"),
		px(3, 6, 10, 1, "#FCDB05"),
		px(4, 7, 8, 2, "#FCDB05"),
		px(5, 9, 6, 1, "#FCDB05"),
		px(6, 10, 4, 1, "#FCDB05"),
		px(7, 11, 2, 1, "#FCDB05"),
		px(7, 5, 2, 1, "#FFFFFF"),
		px(7, 8, 2, 1, "#FFE34A"),
		px(4, 6, 1, 1, "#FFE34A"),
		px(11, 6, 1, 1, "#FFE34A")
	]),
	chest: () => mkIcon([
		px(0, 0, 16, 5, "#A87F4D"),
		px(0, 3, 16, 1, "#6F4F2A"),
		px(2, 1, 1, 2, "#6F4F2A"),
		px(5, 1, 1, 2, "#6F4F2A"),
		px(9, 1, 1, 2, "#6F4F2A"),
		px(12, 1, 1, 2, "#6F4F2A"),
		px(6, 5, 4, 3, "#3F3F3F"),
		px(7, 5, 2, 1, "#7F7F7F"),
		px(0, 8, 16, 8, "#7A5A2A"),
		px(0, 11, 16, 1, "#3F2820"),
		px(0, 14, 16, 1, "#3F2820"),
		px(2, 9, 1, 2, "#3F2820"),
		px(7, 10, 1, 2, "#3F2820"),
		px(11, 9, 1, 2, "#3F2820")
	]),
	pickaxe: () => mkIcon([
		px(7, 1, 2, 4, "#888888"),
		px(6, 2, 4, 1, "#888888"),
		px(8, 1, 2, 1, "#D4D4D4"),
		px(10, 1, 1, 4, "#888888"),
		px(6, 4, 4, 1, "#5A5A5A"),
		px(7, 5, 2, 1, "#5A5A5A"),
		px(8, 5, 1, 7, "#6F4F2A"),
		px(7, 5, 2, 1, "#6F4F2A"),
		px(6, 11, 4, 1, "#6F4F2A"),
		px(7, 12, 2, 1, "#A87F4D")
	]),
	sword: () => mkIcon([
		px(7, 1, 2, 8, "#D4D4D4"),
		px(6, 2, 4, 1, "#D4D4D4"),
		px(7, 9, 2, 1, "#3F2F5F"),
		px(6, 10, 4, 1, "#6F4F2A"),
		px(7, 11, 2, 3, "#6F4F2A"),
		px(6, 12, 4, 1, "#6F4F2A"),
		px(7, 1, 2, 1, "#F0F0F0"),
		px(8, 9, 1, 1, "#888888")
	])
};
function renderIcon(name) {
	const png = PNG_ICONS[name];
	if (png) return React$1.createElement("img", {
		src: png,
		alt: name,
		className: "mcskin-svg",
		style: {
			width: "100%",
			height: "100%",
			imageRendering: "pixelated"
		}
	});
	const factory = MC_ICONS[name];
	return factory ? factory() : null;
}

//#endregion
//#region src/client/picker.tsx
function McSkinCard(props) {
	const t = props.entry;
	return React$1.createElement("button", {
		className: "mcskin-card" + (props.active ? " active" : ""),
		onClick: props.onPick,
		type: "button"
	}, React$1.createElement("div", { className: "mcskin-card-head" }, React$1.createElement("p", { className: "mcskin-card-title" }, t.name), React$1.createElement("p", { className: "mcskin-card-mode" }, t.mode)), React$1.createElement("div", { className: "mcskin-icons" }, t.icons.map(function(iconName, i) {
		return React$1.createElement("div", {
			key: iconName + "-" + i,
			className: "mcskin-icon-tile",
			title: iconName
		}, renderIcon(iconName));
	})), React$1.createElement("div", { className: "mcskin-card-desc" }, t.desc), React$1.createElement("div", { className: "mcskin-card-foot" }, props.active ? "✓ 已启用" : "点击应用"));
}
function CreeperFace() {
	return renderIcon("creeper");
}
function PickerRoot(props) {
	const initialSnap = props.theme.getTheme();
	const [activeId, setActiveId] = React$1.useState(initialSnap.active.id);
	React$1.useEffect(function() {
		const handler = function(snap) {
			setActiveId(snap.active.id);
		};
		return props.ctx.on("theme/change", handler);
	}, []);
	return React$1.createElement("div", { className: "mcskin-root" }, React$1.createElement("div", { className: "mcskin-header" }, React$1.createElement("div", { style: {
		width: "36px",
		height: "36px",
		flexShrink: 0
	} }, React$1.createElement(CreeperFace, null)), React$1.createElement("h2", { className: "mcskin-title" }, "🎮 Minecraft 主题")), React$1.createElement("p", { className: "mcskin-subtitle" }, "在 3 种风格 × 2 套明暗中自由切换。色板按 MC 方块配色定制，叠加高优先级 token 覆盖以胜过其他主题插件。侧栏显示方块条带，主页控件（设置、品牌、输入框、发送、新会话）也会换成 MC 元素。"), React$1.createElement("div", { className: "mcskin-grid" }, props.themes.map(function(t) {
		return React$1.createElement(McSkinCard, {
			key: t.id,
			entry: t,
			active: activeId === t.id,
			onPick: function() {
				props.theme.setTheme(t.id);
			}
		});
	})), React$1.createElement("div", { className: "mcskin-footer" }, React$1.createElement("span", { style: {
		color: "var(--dsw-alias-label-tertiary)",
		fontSize: "12px"
	} }, "当前：" + activeId), React$1.createElement("button", {
		className: "mcskin-btn",
		type: "button",
		onClick: function() {
			try {
				localStorage.removeItem("mcskin.theme");
			} catch (e) {}
			props.theme.setTheme("system");
		}
	}, "↩ 恢复默认（系统主题）")));
}

//#endregion
//#region src/client/mainPageCss.ts
function rectsFromIcon(name) {
	const node = renderIcon(name);
	if (!node) return [];
	const kids = node.props.children;
	return (Array.isArray(kids) ? kids : [kids]).map(function(r) {
		return [
			r.props.x,
			r.props.y,
			r.props.width,
			r.props.height,
			r.props.fill
		];
	});
}
function rectsToDataUrl(rects) {
	return "url(\"data:image/svg+xml;utf8," + ("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' shape-rendering='crispEdges'>" + rects.map(function(r) {
		return "<rect x='" + r[0] + "' y='" + r[1] + "' width='" + r[2] + "' height='" + r[3] + "' fill='" + String(r[4]).replace(/#/g, "%23") + "'/>";
	}).join("") + "</svg>") + "\")";
}
const PICKER_AND_DECORATION_CSS = ".mcskin-root{padding:24px 24px 32px;font-family:var(--dsw-font-family);box-sizing:border-box;}.mcskin-header{display:flex;align-items:center;gap:12px;margin-bottom:6px;}.mcskin-title{font-family:\"Press Start 2P\",monospace;font-size:14px;color:var(--dsw-alias-label-primary);margin:0;letter-spacing:.5px;}.mcskin-subtitle{color:var(--dsw-alias-label-tertiary);font-size:13px;margin:0 0 18px;line-height:20px;}.mcskin-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;}@media (max-width:820px){.mcskin-grid{grid-template-columns:repeat(2,minmax(0,1fr));}}@media (max-width:560px){.mcskin-grid{grid-template-columns:1fr;}}.mcskin-card{border:2px solid var(--dsw-alias-border-l2);border-radius:6px;padding:0;cursor:pointer;transition:transform .1s ease,box-shadow .1s ease;font-family:inherit;text-align:left;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);overflow:hidden;box-sizing:border-box;display:flex;flex-direction:column;}.mcskin-card:hover{transform:translateY(-2px);box-shadow:0 4px 14px var(--dsw-alias-bg-mask-2);}.mcskin-card.active{border-color:var(--dsw-alias-brand-primary);box-shadow:0 0 0 3px color-mix(in srgb,var(--dsw-alias-brand-primary) 35%,transparent);}.mcskin-card-head{padding:10px 14px;border-bottom:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);}.mcskin-card-title{font-family:\"Press Start 2P\",monospace;font-size:9px;color:var(--dsw-alias-label-primary);margin:0;letter-spacing:.4px;}.mcskin-card-mode{font-size:11px;color:var(--dsw-alias-label-tertiary);margin-top:6px;}.mcskin-icons{display:grid;grid-template-columns:repeat(3,1fr);gap:4px;padding:10px 14px 6px;}.mcskin-icon-tile{aspect-ratio:1/1;border:1px solid var(--dsw-alias-border-l2);border-radius:3px;display:flex;align-items:center;justify-content:center;background:var(--dsw-alias-bg-layer-2);image-rendering:pixelated;padding:4px;}.mcskin-svg{width:100%;height:100%;image-rendering:pixelated;image-rendering:crisp-edges;}.mcskin-card-desc{padding:6px 14px 10px;color:var(--dsw-alias-label-secondary);font-size:12px;line-height:18px;min-height:54px;}.mcskin-card-foot{padding:6px 14px 10px;color:var(--dsw-alias-label-tertiary);font-size:11px;line-height:16px;border-top:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);}.mcskin-card.active .mcskin-card-foot{color:var(--dsw-alias-brand-primary);}.mcskin-footer{margin-top:24px;display:flex;justify-content:space-between;align-items:center;gap:8px;}.mcskin-btn{padding:8px 16px;border:1px solid var(--dsw-alias-border-l2);border-radius:4px;background:var(--dsw-alias-button-elevated-fill);color:var(--dsw-alias-label-primary);cursor:pointer;font-family:inherit;font-size:13px;}.mcskin-btn:hover{background:var(--dsw-alias-interactive-bg-hover-solid);}body.mcskin-decor::before{content:\"\";position:fixed;top:0;left:0;right:0;height:6px;background:var(--dsw-alias-brand-primary);box-shadow:0 1px 0 rgba(0,0,0,0.18);z-index:99999;pointer-events:none;}body.mcskin-decor::after{content:\"\";position:fixed;bottom:14px;right:14px;width:34px;height:34px;background-image:" + rectsToDataUrl(rectsFromIcon("creeper")) + ";background-size:contain;background-repeat:no-repeat;opacity:0.35;pointer-events:none;z-index:99998;}body.mcskin-decor button[aria-haspopup=\"dialog\"]{position:relative;}body.mcskin-decor button[aria-haspopup=\"dialog\"] > svg{display:none;}body.mcskin-decor button[aria-haspopup=\"dialog\"]::before{content:\"\";display:inline-block;width:18px;height:18px;background-image:" + rectsToDataUrl(rectsFromIcon("chest")) + ";background-size:contain;background-repeat:no-repeat;vertical-align:middle;margin-right:6px;image-rendering:pixelated;}body.mcskin-decor button[class*=\"_brand__\"] > svg{display:none;}body.mcskin-decor button[class*=\"_brand__\"]{position:relative;padding-left:36px;}body.mcskin-decor button[class*=\"_brand__\"]::before{content:\"\";position:absolute;left:6px;top:50%;transform:translateY(-50%);width:24px;height:24px;background-image:" + rectsToDataUrl(rectsFromIcon("grassBlock")) + ";background-size:contain;background-repeat:no-repeat;image-rendering:pixelated;}body.mcskin-decor [class*=\"newSession\"] > svg{display:none;}body.mcskin-decor [class*=\"newSession\"]{position:relative;border:1px solid #6F4F2A !important;box-shadow:inset 0 0 0 1px rgba(255,255,255,0.05);}body.mcskin-decor [class*=\"newSession\"]::before{content:\"\";display:inline-block;width:16px;height:16px;background-image:" + rectsToDataUrl(rectsFromIcon("pickaxe")) + ";background-size:contain;background-repeat:no-repeat;vertical-align:middle;margin-right:4px;image-rendering:pixelated;}body.mcskin-decor [class*=\"primary\"] > svg{display:none;}body.mcskin-decor [class*=\"primary\"]{position:relative;border:2px solid #3FB9C5 !important;box-shadow:inset 0 0 0 1px rgba(255,255,255,0.2),0 1px 0 rgba(0,0,0,0.2);}body.mcskin-decor [class*=\"primary\"]::before{content:\"\";display:block;width:18px;height:18px;background-image:" + rectsToDataUrl(rectsFromIcon("sword")) + ";background-size:contain;background-repeat:no-repeat;margin:0 auto;image-rendering:pixelated;}body.mcskin-decor [class*=\"card__\"]{border:2px solid #6F4F2A !important;box-shadow:inset 0 0 0 2px #A87F4D,inset 0 0 0 4px #6F4F2A,inset 0 4px 8px rgba(0,0,0,0.18) !important;}body.mcskin-decor textarea{font-family:inherit !important;}body.mcskin-decor button[class*=\"close\"] > svg{display:none;}body.mcskin-decor button[class*=\"close\"]{position:relative;color:transparent !important;}body.mcskin-decor button[class*=\"close\"]::before{content:\"\";display:block;width:12px;height:12px;background-image:" + rectsToDataUrl(rectsFromIcon("creeper")) + ";background-size:contain;background-repeat:no-repeat;opacity:0.6;image-rendering:pixelated;}";
/**
* Shiki syntax-highlighting token override per-theme. Each entry maps
* `--shiki-*` to a background+foreground pair tuned for the active theme's
* contrast; theme tokens are laid down before this so the bg matches the
* block-quote rendered surface.
*/
function shikiFor(style) {
	if (style === "classic") return {
		light: {
			"--shiki-foreground": "#E8E8E8",
			"--shiki-background": "#2D2D2D",
			"--shiki-token-constant": "#FCDB05",
			"--shiki-token-string": "#5DEC8C",
			"--shiki-token-comment": "#7A8570",
			"--shiki-token-keyword": "#A042E0",
			"--shiki-token-parameter": "#FF8B3D",
			"--shiki-token-function": "#5DECF5",
			"--shiki-token-string-expression": "#3FB97F",
			"--shiki-token-punctuation": "#B0B0B0",
			"--shiki-token-link": "#FFE34A"
		},
		dark: {
			"--shiki-foreground": "#E5DAEC",
			"--shiki-background": "#15151A",
			"--shiki-token-constant": "#FCDB05",
			"--shiki-token-string": "#5DEC8C",
			"--shiki-token-comment": "#6A6580",
			"--shiki-token-keyword": "#B287F5",
			"--shiki-token-parameter": "#FF8B3D",
			"--shiki-token-function": "#5DECF5",
			"--shiki-token-string-expression": "#3FB97F",
			"--shiki-token-punctuation": "#8888A0",
			"--shiki-token-link": "#FFE34A"
		}
	};
	if (style === "modern") return {
		light: {
			"--shiki-foreground": "#2D2418",
			"--shiki-background": "#FFFCF5",
			"--shiki-token-constant": "#2D8E4A",
			"--shiki-token-string": "#A8451A",
			"--shiki-token-comment": "#8A7A60",
			"--shiki-token-keyword": "#6B2DBC",
			"--shiki-token-parameter": "#E2A632",
			"--shiki-token-function": "#2D8E4A",
			"--shiki-token-string-expression": "#A8451A",
			"--shiki-token-punctuation": "#5A4A30",
			"--shiki-token-link": "#1F7A52"
		},
		dark: {
			"--shiki-foreground": "#EAE4D9",
			"--shiki-background": "#16181C",
			"--shiki-token-constant": "#5DEC8C",
			"--shiki-token-string": "#FFA85F",
			"--shiki-token-comment": "#6A6458",
			"--shiki-token-keyword": "#C49DFF",
			"--shiki-token-parameter": "#FFD24A",
			"--shiki-token-function": "#5DEC8C",
			"--shiki-token-string-expression": "#FFA85F",
			"--shiki-token-punctuation": "#8A8478",
			"--shiki-token-link": "#5DD597"
		}
	};
	return {
		light: {
			"--shiki-foreground": "#1A0F2A",
			"--shiki-background": "#F0F1B0",
			"--shiki-token-constant": "#6B2DBC",
			"--shiki-token-string": "#3F2F4F",
			"--shiki-token-comment": "#7A6A80",
			"--shiki-token-keyword": "#5A249F",
			"--shiki-token-parameter": "#FF8B3D",
			"--shiki-token-function": "#5A249F",
			"--shiki-token-string-expression": "#3F2F4F",
			"--shiki-token-punctuation": "#5A4A60",
			"--shiki-token-link": "#9D6FE6"
		},
		dark: {
			"--shiki-foreground": "#E5DAEC",
			"--shiki-background": "#08080E",
			"--shiki-token-constant": "#C490FF",
			"--shiki-token-string": "#5DECF5",
			"--shiki-token-comment": "#6A6580",
			"--shiki-token-keyword": "#D5A5FF",
			"--shiki-token-parameter": "#FFD24A",
			"--shiki-token-function": "#5DECF5",
			"--shiki-token-string-expression": "#5DECF5",
			"--shiki-token-punctuation": "#8A85A0",
			"--shiki-token-link": "#C49DFF"
		}
	};
}

//#endregion
//#region src/client/mcskin.ts
const name = "dsh-mcskin";
const inject = [];
function apply(ctx) {
	const theme = ctx.theme !== void 0 ? ctx.theme : null;
	const slots = ctx.slots !== void 0 ? ctx.slots : null;
	const styles = ctx.styles !== void 0 ? ctx.styles : null;
	try {
		document.body.classList.add("mcskin-decor");
	} catch (e) {}
	if (theme !== null) {
		for (let i = 0; i < THEME_ENTRIES.length; i++) {
			const t = THEME_ENTRIES[i];
			ctx.effect(function() {
				return theme.register({
					id: t.id,
					colorScheme: t.colorScheme,
					tokens: buildTokens(t.palette)
				});
			});
		}
		const paletteDisposers = {};
		function applyPaletteOverride(id) {
			for (const k of Object.keys(paletteDisposers)) {
				paletteDisposers[k]();
				delete paletteDisposers[k];
			}
			const entry = THEME_ENTRIES.find(function(t) {
				return t.id === id;
			});
			if (!entry) return;
			const flat = buildTokens(entry.palette);
			const layered = {};
			for (const name of Object.keys(flat)) {
				const value = flat[name];
				layered[name] = {
					light: value,
					dark: value
				};
			}
			paletteDisposers[entry.style] = theme.overrideTokens("mcskin-tokens-" + entry.style, layered);
		}
		const shikiDisposers = {};
		function updateShiki(id) {
			let style = null;
			if (id.indexOf("mc-classic-") === 0) style = "classic";
			else if (id.indexOf("mc-modern-") === 0) style = "modern";
			else if (id.indexOf("mc-dark-") === 0) style = "dark";
			for (const k of Object.keys(shikiDisposers)) if (k !== style) {
				shikiDisposers[k]();
				delete shikiDisposers[k];
			}
			if (style !== null && !shikiDisposers[style]) shikiDisposers[style] = theme.overrideTokens("mcskin-shiki-" + style, shikiFor(style));
		}
		ctx.on("theme/change", function(snap) {
			const newId = snap.active.id;
			applyPaletteOverride(newId);
			updateShiki(newId);
			try {
				if (newId.indexOf("mc-") === 0) localStorage.setItem("mcskin.theme", newId);
				else localStorage.removeItem("mcskin.theme");
			} catch (e) {}
		});
		const initialId = theme.getTheme().active.id;
		applyPaletteOverride(initialId);
		updateShiki(initialId);
		try {
			const saved = localStorage.getItem("mcskin.theme");
			if (saved && THEME_ENTRIES.some(function(t) {
				return t.id === saved;
			})) theme.setTheme(saved);
		} catch (e) {}
	}
	if (styles !== null && typeof styles.insert === "function") try {
		styles.insert(PICKER_AND_DECORATION_CSS);
	} catch (e) {}
	if (slots !== null && typeof slots.inject === "function") slots.inject("settings.section", function() {
		return slots.register({
			name: "settings.section",
			id: "mcskin",
			order: 50,
			label: "🎮 Minecraft 主题"
		}, function(ownerProps) {
			return React.createElement(PickerRoot, {
				ctx,
				theme,
				themes: THEME_ENTRIES,
				close: ownerProps.close
			});
		});
	});
}

//#endregion
//#region src/client/index.ts
var client_default = {
	name,
	inject,
	apply
};

//#endregion
export { apply, client_default as default, inject, name };