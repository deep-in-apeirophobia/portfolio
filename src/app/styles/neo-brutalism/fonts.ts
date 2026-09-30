import { Archivo_Black, Space_Grotesk, Space_Mono } from 'next/font/google'

// Fat, friendly grotesk for headlines: the default "loud" face of 2020s indie SaaS pages.
export const display = Archivo_Black({ weight: '400', subsets: ['latin'], display: 'swap', variable: '--nb-display' })
// Quirky geometric grotesk for body copy, buttons and UI labels.
export const body = Space_Grotesk({ weight: ['400', '500', '700'], subsets: ['latin'], display: 'swap', variable: '--nb-body' })
// Monospace for tiny labels, counters and "system" microcopy.
export const mono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], display: 'swap', variable: '--nb-mono' })
