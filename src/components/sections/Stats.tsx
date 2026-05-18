import styles from './Stats.module.css'

const stats = [
  { value: '+300', label: 'Clientes satisfechos', sub: 'empresas nacionales e internacionales' },
  { value: '+10',  label: 'Años de experiencia', sub: 'en consultoría corporativa' },
  { value: '3',    label: 'Países de presencia', sub: 'México, Alemania y EE.UU.' },
  { value: '6',    label: 'Áreas de servicio', sub: 'bajo un mismo techo' },
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
