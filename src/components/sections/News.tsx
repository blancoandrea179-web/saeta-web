import styles from './News.module.css'
import { Calendar, ArrowRight, Tag } from 'lucide-react'

const news = [
  {
    date: 'Mayo 2025',
    tag: 'Fiscal',
    title: 'Nuevas disposiciones del SAT para empresas con operaciones internacionales',
    excerpt: 'El SAT emitió actualizaciones relevantes sobre precios de transferencia y obligaciones para empresas con vinculación en el extranjero. Conozca cómo le afecta.',
    img: '800×500',
  },
  {
    date: 'Abril 2025',
    tag: 'Comercio Exterior',
    title: 'Cambios en el régimen de importación temporal: lo que debes saber',
    excerpt: 'El gobierno federal actualizó las reglas generales de comercio exterior. Analizamos los puntos clave y cómo adaptarse antes de la fecha límite.',
    img: '800×500',
  },
  {
    date: 'Marzo 2025',
    tag: 'Softlanding',
    title: 'SAETA fortalece su presencia en el German Centre CDMX',
    excerpt: 'Ampliamos nuestras instalaciones en Santa Fe para atender mejor a empresas de habla alemana que buscan establecerse en México con un proceso sin fricciones.',
    img: '800×500',
  },
]

const events = [
  {
    date: { day: '12', month: 'Jun' },
    title: 'Webinar: Precios de Transferencia 2025',
    desc: 'Sesión gratuita con nuestro equipo fiscal.',
  },
  {
    date: { day: '24', month: 'Jun' },
    title: 'Taller de Comercio Exterior en Puebla',
    desc: 'Tres horas de formación práctica en nuestras oficinas.',
  },
  {
    date: { day: '08', month: 'Jul' },
    title: 'Networking Empresarial SAETA-Cámaras',
    desc: 'Conecta con empresarios nacionales e internacionales.',
  },
]

export default function News() {
  return (
    <section id="noticias" className={`section ${styles.news}`}>
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className="eyebrow">Actualidad</span>
            <div className="lime-bar" />
            <h2 className="section-title">Noticias &amp; Eventos</h2>
          </div>
          <a href="#" className="btn btn--dark">Ver todo <ArrowRight size={15} /></a>
        </div>

        <div className={styles.layout}>

          {/* News cards */}
          <div className={styles.newsGrid}>
            {news.map((n, i) => (
              <article key={n.title} className={`${styles.card} ${i === 0 ? styles.featured : ''}`}>
                {/* Image */}
                <div className={styles.cardImg}>
                  <div className="img-placeholder" style={{ width: '100%', height: '100%' }}>
                    <span>{n.img}</span>
                  </div>
                  <span className={styles.cardTag}>
                    <Tag size={11} /> {n.tag}
                  </span>
                </div>
                {/* Body */}
                <div className={styles.cardBody}>
                  <span className={styles.cardDate}>
                    <Calendar size={13} /> {n.date}
                  </span>
                  <h3 className={styles.cardTitle}>{n.title}</h3>
                  <p className={styles.cardExcerpt}>{n.excerpt}</p>
                  <button className={styles.readMore}>
                    Leer más <ArrowRight size={13} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Events sidebar */}
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
