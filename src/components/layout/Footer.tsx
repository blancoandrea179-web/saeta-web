import { useTranslations } from 'next-intl'
import styles from './Footer.module.css'

const social = [
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/daniela-saetaoc/' },
  { label: 'Facebook',  href: 'https://www.facebook.com/saetaoc' },
  { label: 'Instagram', href: 'https://www.instagram.com/saeta.oc' },
  { label: 'TikTok',    href: 'https://www.tiktok.com/@saeta384' },
]

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} />

      <div className={`container ${styles.top}`}>

        <div className={styles.brand}>
          <div className={styles.logo}>
            <div className={styles.logoChevron}>
              <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 19L16 7L28 19"  stroke="#cfe000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 28L16 16L28 28" stroke="#cfe000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className={styles.logoMain}>SAETA</span>
              <span className={styles.logoSub}>OC</span>
            </div>
          </div>
          <p className={styles.tagline}>{t('tagline')}</p>
          <div className={styles.socialRow}>
            {social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>{t('empresa')}</h4>
          <ul className={styles.colList}>
            <li><a href="#inicio">{t('inicio')}</a></li>
            <li><a href="#sobre">{t('sobre')}</a></li>
            <li><a href="https://www.linkedin.com/company/saeta-orientaci%C3%B3n-corporativa-s-c/jobs/" target="_blank" rel="noopener noreferrer">{t('vacantes')}</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>{t('servicios')}</h4>
          <ul className={styles.colList}>
            <li><a href="#servicios">{t('softlanding')}</a></li>
            <li><a href="#servicios">{t('consultoriaLegal')}</a></li>
            <li><a href="#servicios">{t('consultoriaFiscal')}</a></li>
            <li><a href="#servicios">{t('comercio')}</a></li>
            <li><a href="#servicios">{t('auditoria')}</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>{t('legal')}</h4>
          <ul className={styles.colList}>
            <li><a href="/privacidad">{t('privacidad')}</a></li>
            <li><a href="/terminos">{t('terminos')}</a></li>
            <li><a href="/cookies">{t('cookies')}</a></li>
          </ul>
          <div style={{ marginTop: '24px' }}>
            <h4 className={styles.colTitle}>{t('contacto')}</h4>
            <a href="tel:+522225339586" className={styles.contactText}>+52 222 533 9586</a>
            <a href="mailto:contacto@saetaoc.com" className={styles.contactText}>contacto@saetaoc.com</a>
          </div>
        </div>

      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <span>© {new Date().getFullYear()} SAETA OC · {t('copyright')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
