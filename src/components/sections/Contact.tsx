'use client'

import { useState } from 'react'
import styles from './Contact.module.css'
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', empresa: '', email: '', telefono: '', servicio: '', mensaje: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    const { nombre, empresa, email, telefono, servicio, mensaje } = form
    if (!nombre || !empresa || !email || !telefono || !servicio || !mensaje) {
      setError('Por favor completa todos los campos antes de enviar.')
      return
    }
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setSent(true)
  }

  return (
    <section id="contacto" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.grid}>

          {/* Left — info */}
          <div className={styles.info}>
            <span className="eyebrow">Ponte en contacto</span>
            <div className="lime-bar" />
            <h2 className="section-title">Hablemos de tu empresa</h2>
            <p className="section-sub" style={{ marginTop: '16px' }}>
              Agenda una consulta gratuita con nuestro equipo. Analizamos tu situación
              sin costo y te proponemos el plan de acción más adecuado.
            </p>

            <div className={styles.contacts}>
              {[
                { icon: Phone,  label: 'Teléfono', value: '+52 222 533 9586', href: 'tel:+522225339586' },
                { icon: Mail,   label: 'Correo',   value: 'contacto@saetaoc.com', href: 'mailto:contacto@saetaoc.com' },
                { icon: MapPin, label: 'Puebla',   value: 'Corporativo Alsur Av. Atlixcayotl 6518 Int. 8 Col. Lomas de Angelopolis C.P. 72830 San Andrés Cholula, Puebla.', href: 'https://share.google/6cWT8k3yhZEQN7io6' },
                { icon: MapPin, label: 'CDMX',     value: 'German Centre Av. Santa Fe 170 Int. 1-2-04 Col. Lomas de Santa Fe C.P. 01376', href: 'https://share.google/ChHKSUTG89EqnNaqa' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                  <div className={styles.contactIcon}><Icon size={18} /></div>
                  <div>
                    <span className={styles.contactLabel}>{label}</span>
                    <span className={styles.contactValue}>{value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className={styles.formWrap}>
            {sent ? (
              <div className={styles.success}>
                <CheckCircle size={48} color="var(--lime)" />
                <h3>¡Mensaje enviado!</h3>
                <p>Nos pondremos en contacto contigo en menos de 24 horas hábiles.</p>
                <button className="btn btn--primary" onClick={() => setSent(false)}>Enviar otro mensaje</button>
              </div>
            ) : (
              <div className={styles.form}>
                <h3 className={styles.formTitle}>Consulta gratuita</h3>
                <p className={styles.formSub}>Sin compromiso · Respuesta en 24 hrs</p>

                {error && (
                  <p style={{ color: 'red', fontSize: '0.85rem', marginBottom: '12px' }}>{error}</p>
                )}

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>Nombre completo *</label>
                    <input required className={styles.input} name="nombre" placeholder="Tu nombre" value={form.nombre} onChange={handleChange} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Empresa *</label>
                    <input required className={styles.input} name="empresa" placeholder="Nombre de tu empresa" value={form.empresa} onChange={handleChange} />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>Correo electrónico *</label>
                    <input required className={styles.input} type="email" name="email" placeholder="correo@ejemplo.com" value={form.email} onChange={handleChange} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Teléfono *</label>
                    <input required className={styles.input} name="telefono" placeholder="+52 222 000 0000" value={form.telefono} onChange={handleChange} />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Servicio de interés *</label>
                  <select required className={styles.input} name="servicio" value={form.servicio} onChange={handleChange}>
                    <option value="">Selecciona un servicio</option>
                    <option>Softlanding</option>
                    <option>Legales</option>
                    <option>Contabilidad</option>
                    <option>Payroll & Treasury</option>
                    <option>Comercio Exterior</option>
                    <option>Auditoría</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Mensaje *</label>
                  <textarea
                    required
                    className={`${styles.input} ${styles.textarea}`}
                    name="mensaje"
                    rows={4}
                    placeholder="Cuéntanos brevemente sobre tu empresa y lo que necesitas..."
                    value={form.mensaje}
                    onChange={handleChange}
                  />
                </div>

                <button className={`btn btn--primary ${styles.submitBtn}`} onClick={handleSubmit}>
                  Enviar solicitud <Send size={16} />
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}