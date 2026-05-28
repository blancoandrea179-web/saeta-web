import { useTranslations } from 'next-intl'
import styles from './Languages.module.css'

const langKeys = ['es', 'en', 'de'] as const
const flags = {
  es: 'https://flagcdn.com/mx.svg',
  en: 'https://flagcdn.com/us.svg',
  de: 'https://flagcdn.com/de.svg',
}
const hrefs = { es: '/es', en: '/en', de: '/de' }

export default function Languages() {
  const t = useTranslations('languages')

  return (
    <section id="idiomas" className={`section section--dark ${styles.languages}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">{t('eyebrow')}</span>
          <div className="lime-bar" />
          <h2 className="section-title section-title--white">{t('heading')}</h2>
          <p className="section-sub section-sub--white" style={{ marginTop: '16px' }}>
            {t('sub')}
          </p>
        </div>

        <div className={styles.grid}>
          {langKeys.map((locale) => (
            <a key={locale} href={hrefs[locale]} className={styles.card}>
              <div className={styles.cardTop}>
                <img src={flags[locale]} alt={t(`${locale}.lang`)} width={48} height={36} style={{ borderRadius: '4px', objectFit: 'cover' }} />
                <span className={styles.badge}>{t(`${locale}.label`)}</span>
              </div>
              <div className={styles.langCode}>{t(`${locale}.code`)}</div>
              <h3 className={styles.langName}>{t(`${locale}.lang`)}</h3>
              <p className={styles.langDesc}>{t(`${locale}.desc`)}</p>
            </a>
          ))}
        </div>

        <div className={styles.offices}>
          <div className={styles.officeTitle}>{t('officesTitle')}</div>
          <div className={styles.officeGrid}>
            <div className={styles.office}>
              <span className={styles.officeCity}>🏢 {t('pueblaCity')}</span>
              <span className={styles.officeAddr}>{t('pueblaAddr')}</span>
            </div>
            <div className={styles.officeDivider} />
            <div className={styles.office}>
              <span className={styles.officeCity}>🏢 {t('cdmxCity')}</span>
              <span className={styles.officeAddr}>{t('cdmxAddr')}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
