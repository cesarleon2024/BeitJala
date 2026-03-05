import { useState, useEffect } from 'react'
import { PALETTES, applyPalette } from './theme'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ColorPaletteSwitcher } from './components/ColorPaletteSwitcher'

const DEFAULT_PALETTE_ID = 'natural'

function App() {
  const [paletteId, setPaletteId] = useState(() => {
    try {
      return localStorage.getItem('beitjala-palette') || DEFAULT_PALETTE_ID
    } catch {
      return DEFAULT_PALETTE_ID
    }
  })

  const palette = PALETTES[paletteId] || PALETTES.natural

  useEffect(() => {
    applyPalette(palette)
  }, [palette])

  function handleSelectPalette(id) {
    setPaletteId(id)
    try {
      localStorage.setItem('beitjala-palette', id)
    } catch {}
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
      <ColorPaletteSwitcher
        currentPaletteId={paletteId}
        onSelectPalette={handleSelectPalette}
      />
    </>
  )
}

export default App
