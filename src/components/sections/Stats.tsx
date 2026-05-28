import { useTranslations } from 'next-intl'
import styles from './Stats.module.css'

const statKeys = [
  { key: 'clientes', value: '+60' },
  { key: 'anos',     value: '+5' },
  { key: 'oficinas', value: '2' },
  { key: 'areas',    value: '7' },
] as const

export default function Stats() {
  const t = useTranslations('stats')

  return (
    <section className={`section section--dark ${styles.stats}`}>
      <div className={styles.topBorder} />

      <div className="container">
        <div className={styles.grid}>
          {statKeys.map(({ key, value }) => (
            <div key={key} className={styles.item}>
              <strong className={styles.value}>{value}</strong>
              <span className={styles.label}>{t(`${key}.label`)}</span>
              <span className={styles.sub}>{t(`${key}.sub`)}</span>
            </div>
          ))}
        </div>

        <p className={styles.tagline}>
          <em>{t('tagline')}</em>
          <span>{t('taglineAuthor')}</span>
        </p>
      </div>
    </section>
  )
}
