import { Limelight, Poiret_One, Josefin_Sans, Marcellus } from 'next/font/google'

// Limelight: heavy, high-contrast Deco display face (theatre marquees, Cassandre-era posters).
export const limelight = Limelight({ weight: '400', subsets: ['latin'], display: 'swap', variable: '--deco-display' })
// Poiret One: thin geometric Deco face named after couturier Paul Poiret.
export const poiret = Poiret_One({ weight: '400', subsets: ['latin'], display: 'swap', variable: '--deco-thin' })
// Josefin Sans: geometric, 1920s-inspired sans for wide-tracked capitals (labels, nav).
export const josefin = Josefin_Sans({ weight: ['300', '400', '600', '700'], subsets: ['latin'], display: 'swap', variable: '--deco-caps' })
// Marcellus: flared Roman-inscription serif, readable for body copy.
export const marcellus = Marcellus({ weight: '400', subsets: ['latin'], display: 'swap', variable: '--deco-body' })
