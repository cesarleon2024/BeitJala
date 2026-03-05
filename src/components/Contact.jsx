import { useState } from 'react'
import './Contact.css'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacto" className="contact">
      <div className="contact__container">
        <div className="contact__info">
          <h2 className="contact__title">Hablemos de tu evento</h2>
          <p className="contact__text">
            Cuéntanos tu idea, fecha aproximada y tipo de evento. Te respondemos
            en menos de 24 horas con una propuesta a medida.
          </p>
          <ul className="contact__details">
            <li>
              <span className="contact__label">Email</span>
              <a href="mailto:hola@beitjala.com">hola@beitjala.com</a>
            </li>
            <li>
              <span className="contact__label">Teléfono</span>
              <a href="tel:+34900123456">+34 900 123 456</a>
            </li>
            <li>
              <span className="contact__label">Ubicación</span>
              <span>Madrid, España</span>
            </li>
          </ul>
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
          {sent ? (
            <div className="contact__success">
              <p>¡Mensaje enviado! Te contactaremos pronto.</p>
            </div>
          ) : (
            <>
              <div className="contact__row">
                <label htmlFor="name">Nombre *</label>
                <input id="name" name="name" type="text" required placeholder="Tu nombre" />
              </div>
              <div className="contact__row">
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" required placeholder="tu@email.com" />
              </div>
              <div className="contact__row">
                <label htmlFor="event">Tipo de evento</label>
                <select id="event" name="event">
                  <option value="">Selecciona...</option>
                  <option value="boda">Boda</option>
                  <option value="corporativo">Evento corporativo</option>
                  <option value="fiesta">Fiesta privada</option>
                  <option value="conferencia">Conferencia / Seminario</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div className="contact__row">
                <label htmlFor="message">Mensaje *</label>
                <textarea id="message" name="message" required rows={4} placeholder="Cuéntanos sobre tu evento, fecha aproximada y número de invitados..." />
              </div>
              <button type="submit" className="contact__submit">
                Enviar mensaje
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}
