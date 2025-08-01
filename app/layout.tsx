import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Inter, Orbitron, Audiowide, Space_Grotesk, Exo_2, Rajdhani } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "👽 Alien Weather Reporter - Intergalactic Forecasts",
  description: "The universe doesn't care about your umbrella, but we report anyway.",
  generator: "v0.dev",
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
})

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo-2",
})

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-inter: ${inter.style.fontFamily};
  --font-orbitron: ${orbitron.style.fontFamily};
  --font-audiowide: ${audiowide.style.fontFamily};
  --font-space-grotesk: ${spaceGrotesk.style.fontFamily};
  --font-exo-2: ${exo2.style.fontFamily};
  --font-rajdhani: ${rajdhani.style.fontFamily};
}
        `}</style>
      </head>
      <body
        className={`${inter.variable} ${orbitron.variable} ${audiowide.variable} ${spaceGrotesk.variable} ${exo2.variable} ${rajdhani.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
