import styles from './Languages.module.css'

const languages = [
  {
    flag: '🇲🇽',
    code: 'ES',
    lang: 'Español',
    label: 'Principal',
    desc: 'Nuestra lengua operativa. Atendemos a empresas nacionales y latinoamericanas con total fluidez.',
    href: '#',
  },
  {
    flag: '🇺🇸',
    code: 'EN',
    lang: 'English',
    label: 'International',
    desc: 'We serve international companies expanding into Mexico with full English-language advisory support.',
    href: '#',
  },
  {
    flag: '🇩🇪',
    code: 'DE',
    lang: 'Deutsch',
    label: 'International',
    desc: 'Wir begleiten deutschsprachige Unternehmen bei ihrer Expansion nach Mexiko und Lateinamerika.',
    href: '#',
  },
]

export default function Languages() {
  return (
    <section id="idiomas" className={`section section--dark ${styles.languages}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Cobertura global</span>
          <div className="lime-bar" />
          <h2 className="section-title section-title--white">
            Hablamos tu idioma
          </h2>
          <p className="section-sub section-sub--white" style={{ marginTop: '16px' }}>
            SAETA opera en tres idiomas para eliminar las barreras de comunicación
            en cada proceso corporativo.
          </p>
        </div>

        <div className={styles.grid}>
          {languages.map((l) => (
            <a key={l.code} href={l.href} className={styles.card}>
              {/* Flag & badge */}
              <div className={styles.cardTop}>
                <span className={styles.flag}>{l.flag}</span>
                <span className={styles.badge}>{l.label}</span>
              </div>
              {/* Code & name */}
              <div className={styles.langCode}>{l.code}</div>
              <h3 className={styles.langName}>{l.lang}</h3>
              <p className={styles.langDesc}>{l.desc}</p>
              <div className={styles.cardArrow}>→</div>
            </a>
          ))}
        </div>

        {/* Office locations strip */}
        <div className={styles.offices}>
          <div className={styles.officeTitle}>Nuestras oficinas</div>
          <div className={styles.officeGrid}>
            <div className={styles.office}>
              <span className={styles.officeCity}>🏢 Puebla</span>
              <span className={styles.officeAddr}>
                Corporativo Al Sur, Piso 8<br />
                Blvrd de los Reyes, 72830 San Bernardino Tlaxcalancingo, Pue.
              </span>
            </div>
            <div className={styles.officeDivider} />
            <div className={styles.office}>
              <span className={styles.officeCity}>🏢 Ciudad de México</span>
              <span className={styles.officeAddr}>
                German Centre, Piso 1 — Oficina 1-2-04<br />
                Av. Santa Fe 170, Santa Fe, Álvaro Obregón, 01376 CDMX.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
