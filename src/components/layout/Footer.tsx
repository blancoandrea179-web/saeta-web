import styles from './Footer.module.css'

const links = {
  empresa: [
    { label: 'Inicio',       href: '#inicio' },
    { label: 'Sobre SAETA',  href: '#sobre' },
    { label: 'Equipo',       href: '#' },
    { label: 'Vacantes',     href: 'https://www.linkedin.com/company/saeta-orientaci%C3%B3n-corporativa-s-c/jobs/' },
  ],
  servicios: [
    { label: 'Softlanding',        href: '#servicios' },
    { label: 'Consultoría Legal',  href: '#servicios' },
    { label: 'Consultoría Fiscal', href: '#servicios' },
    { label: 'Comercio Exterior',  href: '#servicios' },
    { label: 'Auditoría',          href: '#servicios' },
  ],
  legal: [
    { label: 'Aviso de Privacidad', href: '/privacidad' },
    { label: 'Términos & Condiciones', href: '/terminos' },
    { label: 'Política de Cookies',    href: '/cookies' },
  ],
  social: [
    { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/daniela-saetaoc/' },
    { label: 'Facebook',  href: 'https://www.facebook.com/saetaoc' },
    { label: 'Instagram', href: 'https://www.instagram.com/saeta.oc' },
    { label: 'TikTok',    href: 'https://www.tiktok.com/@saeta384' },
  ],
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} />

      <div className={`container ${styles.top}`}>

        {/* Brand con chevron apuntando ARRIBA */}
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
          <p className={styles.tagline}>
            Tu brújula corporativa.<br />
            Descomplicamos los procesos para que puedas crecer.
          </p>
          <div className={styles.socialRow}>
            {links.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Empresa</h4>
          <ul className={styles.colList}>
            {links.empresa.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Servicios</h4>
          <ul className={styles.colList}>
            {links.servicios.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Legal</h4>
          <ul className={styles.colList}>
            {links.legal.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
          </ul>
          <div style={{ marginTop: '24px' }}>
            <h4 className={styles.colTitle}>Contacto</h4>
            <p className={styles.contactText}>+52 222 533 9586</p>
            <p className={styles.contactText}>contacto@saetaoc.com</p>
          </div>
        </div>

      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <span>© {new Date().getFullYear()} SAETA OC · Todos los derechos reservados.</span>
            <span>Hecho con ♥ en México 🇲🇽</span>
          </div>
        </div>
      </div>
    </footer>
  )
}