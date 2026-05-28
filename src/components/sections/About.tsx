import { useTranslations } from 'next-intl'
import styles from './About.module.css'
import { Target, Eye, Heart, Briefcase } from 'lucide-react'

export default function About() {
  const t = useTranslations('about')

  const tabs = [
    { icon: Target,    title: t('mision.title'), text: t('mision.text') },
    { icon: Eye,       title: t('vision.title'), text: t('vision.text') },
    { icon: Heart,     title: t('valores.title'), text: t('valores.text') },
    { icon: Briefcase, title: t('unete.title'), text: t('unete.text') },
  ]

  const navItems = [
    { label: t('nav.organigrama'), href: '#sobre',     img: '/images/Organigrama SAETA.png' },
    { label: t('nav.team'),        href: '#team',      img: '/images/TEAM SAETA.png' },
    { label: t('nav.servicios'),   href: '#servicios', img: '/images/Servicios SAETA.jpg' },
    { label: t('nav.contacto'),    href: '#contacto',  img: '/images/Contacto.png' },
  ]

  return (
    <section id="sobre" className={styles.about}>

      <div className={styles.waveTop}>
        <svg viewBox="0 0 1440 110" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,55 C360,110 1080,0 1440,55 L1440,0 L0,0 Z" fill="#cfe000" />
        </svg>
      </div>

      <div className="container">

        <div className={styles.centerChevron}>
          <svg width="48" height="42" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 19L16 7L28 19" stroke="#cfe000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 28L16 16L28 28" stroke="#cfe000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className={styles.heroIntro}>
          <div className={styles.introText}>
            <p className={styles.ceoGreeting}>
              {t('greeting1')}<strong>Daniela Nebel</strong>{t('greeting2')}
            </p>
            <p className={styles.ceoDesc}>{t('desc')}</p>
            <p className={styles.ceoWelcome}>{t('welcome')}</p>
          </div>

          <div className={styles.ceoPhoto}>
            <img
              src="/images/Foto dani (1).png"
              alt="Daniela Nebel — Fundadora & CEO de SAETA"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        </div>

        <div className={styles.separator}>
          <h2 className={styles.sectionHeading}>{t('heading')}</h2>
        </div>

        <div className={styles.cards}>
          {tabs.map(({ icon: Icon, title, text }) => (
            <div key={title} className={styles.card}>
              <div className={styles.cardIcon}><Icon size={22} /></div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardText}>{text}</p>
            </div>
          ))}
        </div>

        <div className={styles.navGrid}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className={styles.navCard}>
              <div className={styles.navCardImg}>
                <img
                  src={item.img}
                  alt={item.label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
                />
              </div>
              <div className={styles.navCardLabel}>{item.label}</div>
            </a>
          ))}
        </div>

      </div>

      <div className={styles.waveBottom}>
        <svg viewBox="0 0 1440 110" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,55 C360,0 1080,110 1440,55 L1440,110 L0,110 Z" fill="#cfe000" />
        </svg>
      </div>

    </section>
  )
}
