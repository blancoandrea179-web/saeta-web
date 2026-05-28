import styles from './News.module.css'
import { Calendar, ArrowRight, Tag } from 'lucide-react'

const news = [
  {
    date: '2 de abril de 2026',
    tag: 'Comercio Exterior',
    title: 'Adición de la Regla 2.2.26 BIS: Aviso Automático de Importación para Productos de Aluminio',
    excerpt: 'La Secretaría de Economía publicó la Regla 2.2.26 BIS, que establece la obligación de tramitar un aviso automático de importación para 42 fracciones arancelarias de aluminio. La medida busca fortalecer la trazabilidad del origen del material y prevenir prácticas de triangulación comercial.',
    img: '800×500',
    href: 'https://www.linkedin.com/pulse/adici%C3%B3n-de-la-regla-2226-bis-aviso-autom%C3%A1tico-para-gonzalez-sanchez-nqzxe/',
  },
]

const events = [
  {
    date: { day: '28', month: 'May' },
    title: 'WeinFest',
    desc: '28 de mayo de 2026',
  },
  {
    date: { day: '25', month: 'Jun' },
    title: '4to Aniversario SAETA',
    desc: '25 de junio de 2026',
  },
  {
    date: { day: '–', month: '–' },
    title: 'Congreso Comercio Exterior',
    desc: 'Próximamente',
  },
]

export default function News() {
  return (
    <section id="noticias" className={`section ${styles.news}`}>
      <div className="container">

        <div className={styles.header}>
          <div>
            <span className="eyebrow">Actualidad</span>
            <div className="lime-bar" />
            <h2 className="section-title">Noticias &amp; Eventos</h2>
          </div>
          <a href="#" className="btn btn--dark">Ver todo <ArrowRight size={15} /></a>
        </div>

        <div className={styles.layout}>

          <div className={styles.newsGrid}>
            {news.map((n, i) => (
              <article key={n.title} className={`${styles.card} ${i === 0 ? styles.featured : ''}`}>
                <div className={styles.cardImg}>
                  <div className="img-placeholder" style={{ width: '100%', height: '100%' }}>
                    <span>{n.img}</span>
                  </div>
                  <span className={styles.cardTag}>
                    <Tag size={11} /> {n.tag}
                  </span>
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.cardDate}>
                    <Calendar size={13} /> {n.date}
                  </span>
                  <h3 className={styles.cardTitle}>{n.title}</h3>
                  <p className={styles.cardExcerpt}>{n.excerpt}</p>
                  <a
                    href={n.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.readMore}
                  >
                    Leer más <ArrowRight size={13} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.sidebar}>
            <h3 className={styles.sidebarTitle}>Próximos eventos</h3>
            <div className={styles.eventsList}>
              {events.map((e) => (
                <div key={e.title} className={styles.event}>
                  <div className={styles.eventDate}>
                    <span className={styles.eventDay}>{e.date.day}</span>
                    <span className={styles.eventMonth}>{e.date.month}</span>
                  </div>
                  <div>
                    <h4 className={styles.eventTitle}>{e.title}</h4>
                    <p className={styles.eventDesc}>{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#contacto" className={`btn btn--primary ${styles.sidebarCta}`}>
              Registrarme
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}