import './About.css'

export function About() {
  return (
    <section id="nosotros" className="about">
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__title">Quiénes somos</h2>
          <p className="about__text">
            En <strong>Beitjala</strong> somos una productora de eventos con más de una década
            de experiencia creando experiencias memorables. Nuestro equipo combina
            creatividad, planificación detallada y un trato cercano para que cada
            evento —ya sea una boda íntima o un congreso corporativo— supere las
            expectativas.
          </p>
          <p className="about__text">
            Creemos que los mejores eventos nacen de la escucha y la colaboración.
            Por eso trabajamos contigo desde el primer día: definiendo el concepto,
            el presupuesto y cada detalle hasta el cierre del evento.
          </p>
          <ul className="about__stats">
            <li>
              <span className="about__stat-value">+500</span>
              <span className="about__stat-label">Eventos realizados</span>
            </li>
            <li>
              <span className="about__stat-value">+12</span>
              <span className="about__stat-label">Años de experiencia</span>
            </li>
            <li>
              <span className="about__stat-value">100%</span>
              <span className="about__stat-label">Dedicación</span>
            </li>
          </ul>
        </div>
        <div className="about__visual">
          <img
            src="/equipo-nosotros.png"
            alt="Equipo de Beitjala, productora de eventos. Personal profesional uniformado en un evento."
            className="about__image"
          />
        </div>
      </div>
    </section>
  )
}
