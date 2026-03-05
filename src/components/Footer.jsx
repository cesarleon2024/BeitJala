import './Footer.css'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#portafolio', label: 'Portafolio' },
  { href: '#contacto', label: 'Contacto' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <a href="#inicio" className="footer__logo" aria-label="Beitjala - Inicio">
            <img src="/logo.png" alt="Banquetería Beit Jala - بيت جالا" className="footer__logo-img" />
          </a>
          <nav className="footer__nav">
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer__social">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Facebook">Facebook</a>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} Beitjala. Productora de eventos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
