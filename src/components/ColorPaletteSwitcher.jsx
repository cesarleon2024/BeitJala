import { useState } from 'react'
import { PALETTES } from '../theme'
import './ColorPaletteSwitcher.css'

export function ColorPaletteSwitcher({ currentPaletteId, onSelectPalette }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="palette-switcher">
      <button
        type="button"
        className="palette-switcher__toggle"
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? 'Cerrar selector de colores' : 'Abrir selector de colores'}
        title="Cambiar paleta de colores"
      >
        <span className="palette-switcher__icon" aria-hidden>🎨</span>
        <span className="palette-switcher__label">Colores</span>
      </button>
      {isOpen && (
        <div className="palette-switcher__panel">
          <p className="palette-switcher__title">Elige una paleta</p>
          <ul className="palette-switcher__list">
            {Object.entries(PALETTES).map(([id, palette]) => (
              <li key={id}>
                <button
                  type="button"
                  className={`palette-switcher__option ${currentPaletteId === id ? 'palette-switcher__option--active' : ''}`}
                  onClick={() => {
                    onSelectPalette(id)
                  }}
                >
                  <span
                    className="palette-switcher__preview"
                    style={{
                      background: `linear-gradient(135deg, ${palette.primary} 0%, ${palette.accent} 50%, ${palette.background} 100%)`,
                    }}
                  />
                  <span className="palette-switcher__name">{palette.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
