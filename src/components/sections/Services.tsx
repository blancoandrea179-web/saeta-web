import styles from './Services.module.css'
import {
  Scale, BarChart2, Globe, FileSearch,
  TrendingUp, Layers, ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: TrendingUp,
    title: 'Softlanding',
    desc: 'Constitución, capacitaciones para la comprensión de regulaciones legales y fiscales locales y sobre el cumplimiento normativo, Headhunting y reclutamiento de empleados locales.',
    tag: 'Internacional',
  },
  {
    icon: Scale,
    title: 'Legales',
    desc: 'Laboral, Seguridad Social, Corporativo, Mercantil, Civil, M&A, Migratorio, Propiedad Intelectual, Protección de Datos, Antilavado de Dinero y Gestión de Licencias y Permisos.',
    tag: 'Legal',
  },
  {
    icon: BarChart2,
    title: 'Contabilidad',
    desc: 'Declaraciones Mensuales y Anuales, Trámites Fiscales, Asesoría General, Precios de Transferencia, Controlling, Forecasting, Budget, Planning y Facturación.',
    tag: 'Fiscal',
  },
  {
    icon: Layers,
    title: 'Payroll & Treasury',
    desc: 'Nómina, Treasury (manejo de cuentas bancarias en distintas divisas).',
    tag: 'Finanzas',
  },
  {
    icon: Globe,
    title: 'Comercio Exterior',
    desc: 'Asesoría en materia aduanera fiscal y de comercio exterior. Soluciones en logística internacional y empresarial, cumplimiento con normas oficiales, auditoría por Data Stage, auditoría y diagnóstico en el control de los activos fijos, auditoría preventiva de operaciones de comercio exterior. Cumplimiento de permisos y reglas no arancelaria.',
    tag: 'Comercio',
  },
  {
    icon: FileSearch,
    title: 'Auditoría',
    desc: 'Auditoría de Estados Financieros, Auditoría para efectos fiscales, Normas Internacionales de Información Financiera.',
    tag: 'Auditoría',
  },
]

export default function Services() {
  return (
    <section id="servicios" className={`section section--gray ${styles.services}`}>
      <div className="container">

        <div className={styles.header}>
          <div>
            <span className="eyebrow">Lo que hacemos</span>
            <div className="lime-bar" />
            <h2 className="section-title">Nuestros servicios</h2>
          </div>
          <p className="section-sub">
            Somos una empresa líder que brinda servicios de consultoría empresarial.
            Personalizamos nuestros servicios para adaptarnos a ti y funcionar como tu compañero.
            "Descomplicamos" los procesos corporativos para hacerlos fáciles, claros y transparentes.
            Los servicios principales que brindamos: softlanding, orientación legal, fiscal, financiera,
            auditora, payroll y comercio exterior.
          </p>
        </div>

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