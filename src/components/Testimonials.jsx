import './Testimonials.css'

const testimonials = [
  {
    quote: 'Beitjala hizo de nuestra boda un sueño. Cada detalle estuvo cuidado y el equipo fue increíblemente profesional y cercano.',
    author: 'María y Carlos',
    role: 'Boda en finca',
  },
  {
    quote: 'Contratamos la producción del evento corporativo anual. Resultado impecable: desde el escenario hasta el catering. Los recomendamos sin dudar.',
    author: 'Ana Rodríguez',
    role: 'Directora de RRHH, TechCorp',
  },
  {
    quote: 'La fiesta de nuestros 25 años de matrimonio fue mágica. Gracias por hacerla posible con tanto cariño y profesionalidad.',
    author: 'Familia Martínez',
    role: 'Aniversario',
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">Lo que dicen de nosotros</h2>
        <p className="testimonials__intro">
          Clientas y clientes que confiaron en nosotros para sus eventos más especiales.
        </p>
        <ul className="testimonials__list">
          {testimonials.map((t, i) => (
            <li key={i} className="testimonials__card">
              <blockquote className="testimonials__quote">"{t.quote}"</blockquote>
              <footer className="testimonials__author">
                <strong>{t.author}</strong>
                <span>{t.role}</span>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
