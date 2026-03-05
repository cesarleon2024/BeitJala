import './Services.css'

const services = [
  {
    icon: '💒',
    title: 'Bodas y celebraciones',
    description: 'Coordinación integral de bodas: diseño, catering, música, decoración y logística para que tu día sea perfecto.',
  },
  {
    icon: '🏢',
    title: 'Eventos corporativos',
    description: 'Convenciones, lanzamientos, team building y reuniones de negocio con producción profesional y tecnología de punta.',
  },
  {
    icon: '🎉',
    title: 'Fiestas privadas',
    description: 'Cumpleaños, aniversarios y fiestas temáticas. Creamos la atmósfera que imaginas con cada detalle cuidado.',
  },
  {
    icon: '🎤',
    title: 'Conferencias y seminarios',
    description: 'Producción audiovisual, escenarios, iluminación y gestión de ponentes para eventos formativos y de networking.',
  },
  {
    icon: '🍽️',
    title: 'Catering y banquetería',
    description: 'Menús a medida, servicio de bar y coordinación gastronómica para cualquier tipo de evento y número de invitados.',
  },
  {
    icon: '🎨',
    title: 'Diseño y decoración',
    description: 'Concepto visual, floristería, montaje y ambientación para que el espacio refleje la identidad de tu evento.',
  },
]

export function Services() {
  return (
    <section id="servicios" className="services">
      <div className="services__container">
        <h2 className="services__title">Nuestros servicios</h2>
        <p className="services__intro">
          Ofrecemos producción integral de eventos: desde la idea hasta el cierre.
          Cada servicio puede contratarse por separado o como paquete completo.
        </p>
        <ul className="services__grid">
          {services.map((service) => (
            <li key={service.title} className="services__card">
              <span className="services__icon" aria-hidden>{service.icon}</span>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
