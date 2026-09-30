import { Fraunces, Kablammo, Shrikhand, Sniglet } from 'next/font/google'

// Shrikhand: fat, bouncy, upright-italic display face with ball terminals. The closest Google Fonts
// cousin to the swollen hand lettering of Fillmore / Avalon posters (and Peter Max / Yellow Submarine).
export const shrikhand = Shrikhand({ weight: '400', subsets: ['latin'], display: 'swap', variable: '--psy-display' })
// Kablammo: blobby, cartoon-wobbly letters with a variable "MORF" axis: we animate that axis so the
// letterforms slowly melt and re-form like oil in a liquid light show.
export const kablammo = Kablammo({ subsets: ['latin'], display: 'swap', variable: '--psy-melt', axes: ['MORF'] })
// Sniglet: rounded, soft, hand-cut-feeling sans for the small "billing" lines, labels and chips.
export const sniglet = Sniglet({ weight: ['400', '800'], subsets: ['latin'], display: 'swap', variable: '--psy-bill' })
// Fraunces (SOFT + WONK axes): a "Cooper Black era" soft serif. Readable body copy that still feels 1960s–70s.
export const fraunces = Fraunces({ subsets: ['latin'], display: 'swap', variable: '--psy-body', axes: ['SOFT', 'WONK', 'opsz'] })
