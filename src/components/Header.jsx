import { useState } from 'react'
import './Header.css'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#portafolio', label: 'Portafolio' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__container">
        <a href="#inicio" className="header__logo" aria-label="Beitjala - Inicio">
          <img src="/logo.png" alt="Banquetería Beit Jala - بيت جالا" className="header__logo-img" />
        </a>
        <button
          type="button"
          className="header__menu-btn"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contacto" className="header__cta" onClick={() => setMenuOpen(false)}>
            Cotizar evento
          </a>
        </nav>
      </div>
    </header>
  )
}
