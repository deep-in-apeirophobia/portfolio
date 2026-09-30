// The PICO-8 16-colour palette. Every colour on the page comes from this list.
export const PICO = {
	K: '#000000', // black
	N: '#1D2B53', // dark blue
	P: '#7E2553', // dark purple
	D: '#008751', // dark green
	U: '#AB5236', // brown
	g: '#5F574F', // dark grey
	L: '#C2C3C7', // light grey
	W: '#FFF1E8', // white
	R: '#FF004D', // red
	O: '#FFA300', // orange
	Y: '#FFEC27', // yellow
	E: '#00E436', // green
	B: '#29ADFF', // blue
	V: '#83769C', // lavender
	I: '#FF77A8', // pink
	S: '#FFCCAA', // peach
} as const

export type PixelMap = readonly string[]

// 16x24 player sprite: a developer holding a laptop. '.' is transparent.
export const HERO_SPRITE: PixelMap = [
	'....KKKKKKK.....',
	'...KgggggggK....',
	'..KgggggggggK...',
	'..KggggggggggK..',
	'..KgSSSSSSSggK..',
	'..KSSSSSSSSSgK..',
	'..KSSKSSSSKSSK..',
	'..KSSKSSSSKSSK..',
	'..KISSSSSSSSIK..',
	'...KSSSUUSSSK...',
	'....KKSSSSKK....',
	'...KBBKSSKBBK...',
	'..KBBBBKKBBBBK..',
	'.KBBBWBBBBWBBBK.',
	'.KBNBWBBBBWBNBK.',
	'.KBNKLLLLLLKNBK.',
	'.KSSKLLLWLLKSSK.',
	'.KSSKLLLLLLKSSK.',
	'..KKKKKKKKKKKK..',
	'...KVVVKKVVVK...',
	'...KVVVKKVVVK...',
	'...KVVVKKVVVK...',
	'..KKKKK..KKKKK..',
	'..KKKKK..KKKKK..',
]

export const CLOUD: PixelMap = [
	'.......WWWW...........',
	'.....WWWWWWWW.........',
	'....WWWWWWWWWW..WWW...',
	'..WWWWWWWWWWWWWWWWWW..',
	'.WWWWWWWWWWWWWWWWWWWW.',
	'WWWWWWWWWWWWWWWWWWWWWW',
	'LLWWWWWWWWWWWWWWWWWWLL',
	'.LLLLWWLLLLLLLLWWLLLL.',
]

export const MOON: PixelMap = [
	'...YYYY...',
	'.YYYYYY...',
	'.YYYYY....',
	'YYYYY.....',
	'YYYYY.....',
	'YYYYY.....',
	'YYYYYY....',
	'.YYYYYY...',
	'.YYYYYYYY.',
	'...YYYY...',
]

export const CHEST: PixelMap = [
	'..KKKKKKKKKK..',
	'.KUUUUUUUUUUK.',
	'KUOUUUUUUUUOUK',
	'KUOUUUUUUUUOUK',
	'KKKKKKYYKKKKKK',
	'KUOUUUYYUUUOUK',
	'KUOUUUKKUUUOUK',
	'KUOUUUUUUUUOUK',
	'KUOUUUUUUUUOUK',
	'KKKKKKKKKKKKKK',
]

export const BUSH: PixelMap = [
	'.....KKKK.........',
	'...KKEEEEKK..KKK..',
	'..KEEEEEEEEKKEEEK.',
	'.KEEEWEEEEEEEEEEEK',
	'KEEEEEEEEDEEEEEEEK',
	'KEEDEEEEEEEEEDEEEK',
	'KDEEEEDEEEEEEEEEDK',
]

export const SAVE_CRYSTAL: PixelMap = [
	'.....KK.....',
	'....KWBK....',
	'...KWBBBK...',
	'..KWBBBBNK..',
	'.KWBBBBBBNK.',
	'KWBBBBBBBBNK',
	'KBWBBBBBBNNK',
	'.KBWBBBBNNK.',
	'..KBBBBNNK..',
	'...KBBNNK...',
	'....KBNK....',
	'.....KK.....',
]

// 8x8 inventory item icons, used for stack chips and the tech list.
export const ICONS: PixelMap[] = [
	// heart
	[
		'.KK.KK..',
		'KRWKRRK.',
		'KRRRRRRK',
		'KRRRRRRK',
		'.KRRRRK.',
		'..KRRK..',
		'...KK...',
		'........',
	],
	// coin
	[
		'..KKKK..',
		'.KYYYYK.',
		'KYYWYYOK',
		'KYYWYYOK',
		'KYYWYYOK',
		'KYYYYYOK',
		'.KYOOOK.',
		'..KKKK..',
	],
	// gem
	[
		'.KKKKKK.',
		'KBWBBBNK',
		'KWBBBBNK',
		'.KBBBNK.',
		'.KBBBNK.',
		'..KBNK..',
		'...KK...',
		'........',
	],
	// potion
	[
		'..KKKK..',
		'...WK...',
		'..KWWK..',
		'.KEEEEK.',
		'KEWEEEDK',
		'KEEEEEDK',
		'.KDDDDK.',
		'..KKKK..',
	],
	// star
	[
		'...KK...',
		'..KYYK..',
		'KKKYYKKK',
		'KYYWYYYK',
		'.KYYYYK.',
		'.KYKKYK.',
		'KYK..KYK',
		'KK....KK',
	],
	// mushroom-ish power-up
	[
		'..KKKK..',
		'.KIIWIK.',
		'KIWWIIIK',
		'KIIIIWWK',
		'KKKKKKKK',
		'.KSKKSK.',
		'.KSSSSK.',
		'..KKKK..',
	],
	// key
	[
		'.KKK....',
		'KYYYK...',
		'KYKYKKKK',
		'KYYYYYYK',
		'.KKKKYKY',
		'.....KYK',
		'......K.',
		'........',
	],
	// shield
	[
		'KKKKKKKK',
		'KLLWLLgK',
		'KLRRRRgK',
		'KLRWRRgK',
		'KLLRRLgK',
		'.KLLLgK.',
		'..KLgK..',
		'...KK...',
	],
]

export const Q_BLOCK: PixelMap = [
	'KKKKKKKKKKKKKKKK',
	'KOYYYYYYYYYYYYOK',
	'KYKYYYYYYYYYYKYK',
	'KYYYYUUUUUYYYYYK',
	'KYYYUUKKKUUKYYYK',
	'KYYYUUKYYUUKYYYK',
	'KYYYYKKYYUUKYYYK',
	'KYYYYYYYUUKKYYYK',
	'KYYYYYYUUKKYYYYK',
	'KYYYYYYUUKYYYYYK',
	'KYYYYYYYKKYYYYYK',
	'KYYYYYYUUYYYYYYK',
	'KYYYYYYUUKYYYYYK',
	'KYKYYYYYKKYYYYKK',
	'KOYYYYYYYYYYYYOK',
	'KKKKKKKKKKKKKKKK',
]

export const BRICK_BLOCK: PixelMap = [
	'KKKKKKKKKKKKKKKK',
	'KOOOOOOKOOOOOOOK',
	'KUUUUUUKUUUUUUUK',
	'KUUUUUUKUUUUUUUK',
	'KKKKKKKKKKKKKKKK',
	'KOOKOOOOOOOKOOOK',
	'KUUKUUUUUUUKUUUK',
	'KUUKUUUUUUUKUUUK',
	'KKKKKKKKKKKKKKKK',
	'KOOOOOOKOOOOOOOK',
	'KUUUUUUKUUUUUUUK',
	'KUUUUUUKUUUUUUUK',
	'KKKKKKKKKKKKKKKK',
	'KOOKOOOOOOOKOOOK',
	'KUUKUUUUUUUKUUUK',
	'KKKKKKKKKKKKKKKK',
]
