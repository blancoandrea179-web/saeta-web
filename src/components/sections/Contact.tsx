'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import styles from './Contact.module.css'
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react'

export default function Contact() {
  const t = useTranslations('contact')
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
      setError(t('required'))
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

          <div className={styles.info}>
            <span className="eyebrow">{t('eyebrow')}</span>
            <div className="lime-bar" />
            <h2 className="section-title">{t('heading')}</h2>
            <p className="section-sub" style={{ marginTop: '16px' }}>{t('sub')}</p>

            <div className={styles.contacts}>
              {[
                { icon: Phone,  label: t('phone'), value: '+52 222 533 9586',         href: 'tel:+522225339586' },
                { icon: Mail,   label: t('email'), value: 'contacto@saetaoc.com',     href: 'mailto:contacto@saetaoc.com' },
                { icon: MapPin, label: 'Puebla',   value: 'Corporativo Alsur Av. Atlixcayotl 6518 Int. 8 Col. Lomas de Angelopolis C.P. 72830 San Andrés Cholula, Puebla.', href: 'https://share.google/6cWT8k3yhZEQN7io6' },
                { icon: MapPin, label: 'CDMX',     value: 'German Centre Av. Santa Fe 170 Int. 1-2-04 Col. Lomas de Santa Fe C.P. 01376',                                  href: 'https://share.google/ChHKSUTG89EqnNaqa' },
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

          <div className={styles.formWrap}>
            {sent ? (
              <div className={styles.success}>
                <CheckCircle size={48} color="var(--lime)" />
                <h3>{t('successHeading')}</h3>
                <p>{t('successSub')}</p>
                <button className="btn btn--primary" onClick={() => setSent(false)}>{t('successBtn')}</button>
              </div>
            ) : (
              <div className={styles.form}>
                <h3 className={styles.formTitle}>{t('formTitle')}</h3>
                <p className={styles.formSub}>{t('formSub')}</p>

                {error && (
                  <p style={{ color: 'red', fontSize: '0.85rem', marginBottom: '12px' }}>{error}</p>
                )}

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>{t('nombre')}</label>
                    <input required className={styles.input} name="nombre" placeholder={t('nombrePlaceholder')} value={form.nombre} onChange={handleChange} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>{t('empresa')}</label>
                    <input required className={styles.input} name="empresa" placeholder={t('empresaPlaceholder')} value={form.empresa} onChange={handleChange} />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>{t('emailLabel')}</label>
                    <input required className={styles.input} type="email" name="email" placeholder={t('emailPlaceholder')} value={form.email} onChange={handleChange} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>{t('telefono')}</label>
                    <input required className={styles.input} name="telefono" placeholder={t('telefonoPlaceholder')} value={form.telefono} onChange={handleChange} />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>{t('servicio')}</label>
                  <select required className={styles.input} name="servicio" value={form.servicio} onChange={handleChange}>
                    <option value="">{t('servicioDefault')}</option>
                    <option>{t('svc1')}</option>
                    <option>{t('svc2')}</option>
                    <option>{t('svc3')}</option>
                    <option>{t('svc4')}</option>
                    <option>{t('svc5')}</option>
                    <option>{t('svc6')}</option>
                    <option>{t('otro')}</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>{t('mensaje')}</label>
                  <textarea
                    required
                    className={`${styles.input} ${styles.textarea}`}
                    name="mensaje"
                    rows={4}
                    placeholder={t('mensajePlaceholder')}
                    value={form.mensaje}
                    onChange={handleChange}
                  />
                </div>

                <button className={`btn btn--primary ${styles.submitBtn}`} onClick={handleSubmit}>
                  {t('submit')} <Send size={16} />
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
