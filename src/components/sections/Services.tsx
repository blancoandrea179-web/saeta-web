import styles from './Services.module.css'
import {
  Scale, BarChart2, Globe, FileSearch,
  TrendingUp, Layers, ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: TrendingUp,
    title: 'Softlanding',
    desc: 'Acompañamiento integral para empresas extranjeras que desean establecerse en México o Latinoamérica. Gestionamos los trámites legales, fiscales y administrativos.',
    tag: 'Internacional',
  },
  {
    icon: Scale,
    title: 'Consultoría Legal',
    desc: 'Asesoría jurídica corporativa, contratos, protección de propiedad intelectual y cumplimiento normativo para empresas nacionales e internacionales.',
    tag: 'Legal',
  },
  {
    icon: BarChart2,
    title: 'Consultoría Fiscal',
    desc: 'Optimización fiscal, planeación tributaria, declaraciones y cumplimiento ante el SAT. Reducimos tu carga impositiva de forma transparente y legal.',
    tag: 'Fiscal',
  },
  {
    icon: Globe,
    title: 'Comercio Exterior',
    desc: 'Gestión de importaciones y exportaciones, trámites aduaneros, regímenes especiales y estrategias de internacionalización para tu negocio.',
    tag: 'Comercio',
  },
  {
    icon: FileSearch,
    title: 'Auditoría',
    desc: 'Revisión y dictaminación de estados financieros, auditorías internas, análisis de riesgos y control interno para asegurar la salud de tu empresa.',
    tag: 'Auditoría',
  },
  {
    icon: Layers,
    title: 'Consultoría Financiera',
    desc: 'Planeación financiera, reestructuración de deuda, valuación de empresas, y análisis de viabilidad para proyectos de inversión.',
    tag: 'Finanzas',
  },
]

export default function Services() {
  return (
    <section id="servicios" className={`section section--gray ${styles.services}`}>
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className="eyebrow">Lo que hacemos</span>
            <div className="lime-bar" />
            <h2 className="section-title">Nuestros servicios</h2>
          </div>
          <p className="section-sub">
            Ofrecemos un ecosistema completo de soluciones corporativas bajo un mismo techo,
            adaptándonos al 100% a las necesidades de cada cliente.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {services.map(({ icon: Icon, title, desc, tag }, i) => (
            <div key={title} className={styles.card} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className={styles.cardTop}>
                <div className={styles.iconBox}>
                  <Icon size={24} />
                </div>
                <span className={styles.cardTag}>{tag}</span>
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
              <button className={styles.cardLink}>
                Más información <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className={styles.ctaBanner}>
          <div>
            <h3 className={styles.ctaTitle}>¿Necesitas un servicio personalizado?</h3>
            <p className={styles.ctaSub}>Nos adaptamos a tu empresa, industria y objetivos específicos.</p>
          </div>
          <a href="#contacto" className="btn btn--primary">
            Habla con un experto <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  )
}
