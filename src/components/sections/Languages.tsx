import { useTranslations, useLocale } from 'next-intl'
import { MousePointerClick, Check } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import styles from './Languages.module.css'

const langKeys = ['es', 'en', 'de'] as const
const flags = {
  es: 'https://flagcdn.com/mx.svg',
  en: 'https://flagcdn.com/us.svg',
  de: 'https://flagcdn.com/de.svg',
}

export default function Languages() {
  const t = useTranslations('languages')
  const currentLocale = useLocale()

  return (
    <section id="idiomas" className={`section section--dark ${styles.languages}`}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>{t('eyebrow')}</span>
          <div className="lime-bar" />
          <h2 className="section-title section-title--white">{t('heading')}</h2>
          <p className="section-sub section-sub--white" style={{ marginTop: '16px' }}>
            {t('sub')}
          </p>
        </div>

        <div className={styles.clickHint}>
          <MousePointerClick size={14} />
          {t('clickHint')}
        </div>

        <div className={styles.grid}>
          {langKeys.map((locale) => {
            const isActive = locale === currentLocale
            return (
              <Link
                key={locale}
                href="/"
                locale={locale}
                className={`${styles.card} ${isActive ? styles.cardActive : ''}`}
              >
                <div className={styles.cardTop}>
                  <img
                    src={flags[locale]}
                    alt={t(`${locale}.lang`)}
                    width={48}
                    height={36}
                    style={{ borderRadius: '4px', objectFit: 'cover' }}
                  />
                  <div className={styles.badges}>
                    <span className={styles.badge}>{t(`${locale}.label`)}</span>
                    {isActive && (
                      <span className={styles.activeBadge}>
                        <Check size={10} strokeWidth={3} />
                        {currentLocale.toUpperCase()}
                      </span>
                    )}
                  </div>
                </div>
                <div className={styles.langCode}>{t(`${locale}.code`)}</div>
                <h3 className={styles.langName}>{t(`${locale}.lang`)}</h3>
                <p className={styles.langDesc}>{t(`${locale}.desc`)}</p>
              </Link>
            )
          })}
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
