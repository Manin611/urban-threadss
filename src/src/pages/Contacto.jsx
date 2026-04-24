import { useState } from 'react'
import { guardarMensaje } from '../services/contactoService'
import styles from './Contacto.module.css'

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    asunto: '',
    mensaje: '',
  })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    guardarMensaje(formData)
    setEnviado(true)
    setFormData({ nombre: '', apellidos: '', email: '', asunto: '', mensaje: '' })
    setTimeout(() => setEnviado(false), 3000)
  }

  const infoItems = [
    {
      icon: 'fa-location-dot',
      label: 'DIRECCIÓN',
      lines: ['Calle Urban Style 123', '28001 Madrid, España'],
    },
    {
      icon: 'fa-phone',
      label: 'TELÉFONO',
      lines: ['+34 91 123 45 67'],
    },
    {
      icon: 'fa-envelope',
      label: 'EMAIL',
      lines: ['info@urbanthreads.com'],
    },
    {
      icon: 'fa-clock',
      label: 'HORARIO',
      lines: ['Lun - Vie: 9:00 - 18:00', 'Sáb: 10:00 - 14:00'],
    },
  ]

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>CONTACTO</h1>
        <p className={styles.subtitle}>¿Tienes alguna pregunta? Nos encantaría escucharte</p>
      </div>

      <div className={styles.content}>
        {/* Información de contacto */}
        <div className={styles.info}>
          <h2 className={styles.infoTitle}>INFORMACIÓN DE CONTACTO</h2>
          {infoItems.map(({ icon, label, lines }) => (
            <div className={styles.infoItem} key={label}>
              <div className={styles.infoIcon}>
                <i className={`fas ${icon}`}></i>
              </div>
              <div>
                <p className={styles.infoLabel}>{label}</p>
                {lines.map((line, i) => (
                  <p key={i} className={styles.infoLine}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Formulario */}
        <div className={styles.formBox}>
          <h2 className={styles.formTitle}>ENVÍANOS UN MENSAJE</h2>

          <div className={styles.demo}>
            <strong>Demo:</strong> Este es un formulario de demostración. Los mensajes no se enviarán realmente.
          </div>

          {enviado && (
            <div className={styles.success}>¡Mensaje guardado correctamente en localStorage!</div>
          )}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>NOMBRE</label>
                <input
                  className={styles.input}
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>APELLIDOS</label>
                <input
                  className={styles.input}
                  type="text"
                  name="apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>EMAIL</label>
              <input
                className={styles.input}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>ASUNTO</label>
              <select
                className={styles.input}
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un asunto</option>
                <option value="pedido">Pedido</option>
                <option value="devolucion">Devolución</option>
                <option value="tallas">Guía de tallas</option>
                <option value="envio">Envío</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>MENSAJE</label>
              <textarea
                className={`${styles.input} ${styles.textarea}`}
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={6}
                required
              />
            </div>

            <button type="submit" className={styles.btn}>
              ENVIAR MENSAJE
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Contacto
