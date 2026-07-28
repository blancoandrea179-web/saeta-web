import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import styles from './Services.module.css'
import { BarChart2, Wallet, Globe, Scale, ArrowRight } from 'lucide-react'

interface Category {
  id: string
  title: string
  tag: string
  desc: string
  items: { title: string; points: string[] }[]
}

const categoryIcons: Record<string, typeof BarChart2> = {
  financieros: BarChart2,
  nomina: Wallet,
  comercio: Globe,
  legales: Scale,
}

export default function Services() {
  const t = useTranslations('services')
  const categories = t.raw('categories') as Category[]

  return (
    <section id="servicios" className={`section section--gray ${styles.services}`}>
      <div className="container">

        <div className={styles.header}>
          <div>
            <span className="eyebrow">{t('eyebrow')}</span>
            <div className="lime-bar" />
            <h2 className="section-title">{t('heading')}</h2>
          </div>
          <p className="section-sub">{t('sub')}</p>
        </div>

        <div className={styles.grid}>
          {categories.map((cat, i) => {
            const Icon = categoryIcons[cat.id] ?? BarChart2
            return (
              <Link
                key={cat.id}
                href={`/servicios/${cat.id}`}
                className={styles.card}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className={styles.cardTop}>
                  <div className={styles.iconBox}>
                    <Icon size={24} />
                  </div>
                  <span className={styles.cardTag}>{cat.tag}</span>
                </div>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
                <p className={styles.cardDesc}>{cat.desc}</p>
                <span className={styles.cardLink}>
                  {t('detailsLink')} <ArrowRight size={14} />
                </span>
              </Link>
            )
          })}
        </div>

        <div className={styles.ctaBanner}>
          <div>
            <h3 className={styles.ctaTitle}>{t('cta.title')}</h3>
            <p className={styles.ctaSub}>{t('cta.sub')}</p>
          </div>
          <a href="#contacto" className="btn btn--primary">
            {t('cta.btn')} <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  )
}
