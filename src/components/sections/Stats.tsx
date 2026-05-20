import styles from './Stats.module.css'

const stats = [
  { value: '+60', label: 'Clientes satisfechos', sub: 'empresas nacionales e internacionales' },
  { value: '+5',  label: 'Años de experiencia', sub: 'en consultoría corporativa' },
  { value: '2',    label: 'Oficinas en México', sub: 'Puebla y CDMX' },
  { value: '7',    label: 'Áreas de servicio', sub: 'bajo un mismo techo' },
]

export default function Stats() {
  return (
    <section className={`section section--dark ${styles.stats}`}>
      {/* Lime top border */}
      <div className={styles.topBorder} />

      <div className="container">
        <div className={styles.grid}>
          {stats.map((s, i) => (
            <div key={s.label} className={styles.item}>
              <strong className={styles.value}>{s.value}</strong>
              <span className={styles.label}>{s.label}</span>
              <span className={styles.sub}>{s.sub}</span>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <p className={styles.tagline}>
          <em>&ldquo;Somos la brújula que tu empresa necesita para navegar el mundo corporativo.&rdquo;</em>
          <span>— Daniela Nebel, Fundadora &amp; CEO</span>
        </p>
      </div>
    </section>
  )
}
