import styles from './About.module.css'
import { Target, Eye, Heart, Briefcase } from 'lucide-react'

const tabs = [
  {
    icon: Target,
    title: 'Misión',
    text: 'Proporcionar soluciones integrales en contabilidad, asesoría fiscal y legal, comercio exterior y auditoría en un solo lugar. Somos el socio estratégico que se adapta al 100% a las necesidades de cada cliente.',
  },
  {
    icon: Eye,
    title: 'Visión',
    text: 'Ser empresa líder en todas las áreas que abarcamos, destacando tanto a nivel profesional y técnico como personal, valorando a cada colaborador y asegurándonos de su bienestar.',
  },
  {
    icon: Heart,
    title: 'Valores',
    text: 'Profesionalismo, respeto, confianza, puntualidad, humildad, honestidad, transparencia y sobre todo, empatía. Siempre buscando mejorar individualmente y como equipo.',
  },
  {
    icon: Briefcase,
    title: 'Únete',
    text: 'Buscamos talento comprometido. Si quieres ser parte de una empresa en constante crecimiento internacional, revisa nuestras vacantes en LinkedIn.',
  },
]

export default function About() {
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
              ¡Hola! mi nombre es <strong>Daniela Nebel</strong>, fundadora y CEO de SAETA.
            </p>
            <p className={styles.ceoDesc}>
              Nuestro objetivo es <em>descomplicarte</em> a través de nuestra consultoría
              internacional: softlanding, legal, financiera, fiscal, comercio exterior y auditoría.
            </p>
            <p className={styles.ceoWelcome}>¡Bienvenidos!</p>
          </div>

          <div className={styles.ceoPhoto}>
            <div className="img-placeholder" style={{ width: '100%', height: '100%', borderRadius: '16px' }}>
              <span>FOTO CEO — 500×600</span>
            </div>
          </div>
        </div>

        <div className={styles.separator}>
          <h2 className={styles.sectionHeading}>DESCOMPLICANDO LOS PROCESOS...</h2>
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

        {/* Bloques de navegación — TEAM SAETA apunta a #team */}
        <div className={styles.navGrid}>
          {[
            { label: 'ORGANIGRAMA', href: '#sobre' },
            { label: 'TEAM SAETA',  href: '#team' },
            { label: 'SERVICIOS',   href: '#servicios' },
            { label: 'CONTACTO',    href: '#contacto' },
          ].map((item) => (
            <a key={item.label} href={item.href} className={styles.navCard}>
              <div className={styles.navCardImg}>
                <div className="img-placeholder" style={{ width: '100%', height: '100%' }}>
                  <span>{item.label}</span>
                </div>
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