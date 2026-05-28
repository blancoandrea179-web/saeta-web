import { useTranslations } from 'next-intl'
import styles from './Services.module.css'
import {
  Scale, BarChart2, Globe, FileSearch,
  TrendingUp, Layers, ArrowRight
} from 'lucide-react'

const serviceKeys = ['softlanding', 'legales', 'contabilidad', 'payroll', 'comercio', 'auditoria'] as const
const serviceIcons = [TrendingUp, Scale, BarChart2, Layers, Globe, FileSearch]

export default function Services() {
  const t = useTranslations('services')

  const services = serviceKeys.map((key, i) => ({
    icon: serviceIcons[i],
    title: t(`items.${key}.title`),
    desc:  t(`items.${key}.desc`),
    tag:   t(`items.${key}.tag`),
  }))

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
              <button className={styles.cardLink} />
            </div>
          ))}
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
