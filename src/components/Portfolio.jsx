import './Portfolio.css'

const projects = [
  { id: 1, image: '/portfolio-1.png', title: 'Mesa formal y banquete', category: 'Bodas' },
  { id: 2, image: '/portfolio-2.png', title: 'Estación de café y bebidas', category: 'Corporativo' },
  { id: 3, image: '/portfolio-3.png', title: 'Buffet rústico con flores', category: 'Bodas' },
  { id: 4, image: '/portfolio-4.png', title: 'Terraza con bar y fuegos', category: 'Eventos' },
  { id: 5, image: '/portfolio-5.png', title: 'Recepción con luces colgantes', category: 'Bodas' },
  { id: 6, image: '/portfolio-6.png', title: 'Cena junto a la piscina', category: 'Bodas' },
]

export function Portfolio() {
  return (
    <section id="portafolio" className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Nuestros eventos</h2>
        <p className="portfolio__intro">
          Una muestra de los eventos que hemos producido. Cada uno con un concepto
          único y una ejecución impecable.
        </p>
        <ul className="portfolio__grid">
          {projects.map((project) => (
            <li key={project.id} className="portfolio__item">
              <div className="portfolio__card">
                <img
                  src={project.image}
                  alt=""
                  className="portfolio__image"
                />
                <div className="portfolio__card-overlay">
                  <span className="portfolio__category">{project.category}</span>
                  <h3 className="portfolio__card-title">{project.title}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="portfolio__cta-wrap">
          <a href="#contacto" className="portfolio__cta">
            ¿Tu evento puede ser el próximo?
          </a>
        </div>
      </div>
    </section>
  )
}
