export const PALETTES = {
  natural: {
    id: 'natural',
    name: 'Lujo natural',
    primary: '#1B4332',
    primaryAlt: '#2F5D50',
    background: '#FFFFFF',
    accent: '#D4AF37',
    accentAlt: '#C9A86A',
  },
  premium: {
    id: 'premium',
    name: 'Premium y sofisticado',
    primary: '#0D0D0D',
    primaryAlt: '#1a1a1a',
    background: '#FFFFFF',
    accent: '#D4AF37',
    accentAlt: '#D4AF37',
  },
  organic: {
    id: 'organic',
    name: 'Orgánico y cálido',
    primary: '#556B2F',
    primaryAlt: '#556B2F',
    background: '#F5F1E3',
    accent: '#C26A4A',
    accentAlt: '#C26A4A',
  },
  corporate: {
    id: 'corporate',
    name: 'Corporativo elegante',
    primary: '#0A3D62',
    primaryAlt: '#0A3D62',
    background: '#FFFFFF',
    accent: '#B87333',
    accentAlt: '#B87333',
  },
  night: {
    id: 'night',
    name: 'Noche elegante',
    primary: '#0D0D0D',
    primaryAlt: '#1a1a1a',
    background: '#FFFFFF',
    accent: '#D4AF37',
    accentAlt: '#D4AF37',
  },
}

export function applyPalette(palette) {
  const root = document.documentElement
  root.style.setProperty('--color-primary', palette.primary)
  root.style.setProperty('--color-primary-alt', palette.primaryAlt)
  root.style.setProperty('--color-bg', palette.background)
  root.style.setProperty('--color-accent', palette.accent)
  root.style.setProperty('--color-accent-alt', palette.accentAlt)
}
