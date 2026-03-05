import './Hero.css'

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg" aria-hidden />
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__eyebrow">Productora de eventos</p>
        <h1 className="hero__title">
          Creamos momentos
          <br />
          <span className="hero__title-accent">inolvidables</span>
        </h1>
        <p className="hero__subtitle">
          Bodas, eventos corporativos, fiestas y celebraciones. Diseño, coordinación
          y producción integral para que tu evento supere todas las expectativas.
        </p>
        <div className="hero__actions">
          <a href="#contacto" className="hero__cta hero__cta--primary">
            Planificar mi evento
          </a>
          <a href="#servicios" className="hero__cta hero__cta--secondary">
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  )
}
