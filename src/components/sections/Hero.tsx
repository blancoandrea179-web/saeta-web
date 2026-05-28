'use client'

import styles from './Hero.module.css'

async function setLocale(locale: string) {
  await fetch('/api/locale', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ locale }),
  })
  window.location.reload()
}

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>

      <div className={styles.videoBlock}>
        <video
          className={styles.videoBg}
          src="/images/SAETA-Intro 2.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      <div className={styles.langRow}>

        <button onClick={() => setLocale('es')} className={styles.langItem}>
          <div className={styles.flagCircle}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="64" height="64" preserveAspectRatio="xMidYMid slice">
              <rect width="1" height="2" x="0" fill="#006847"/>
              <rect width="1" height="2" x="1" fill="#ffffff"/>
              <rect width="1" height="2" x="2" fill="#ce1126"/>
              <ellipse cx="1.5" cy="1" rx="0.28" ry="0.32" fill="#8B6914"/>
              <ellipse cx="1.5" cy="1" rx="0.18" ry="0.22" fill="#5C8A3C"/>
            </svg>
          </div>
          <span className={styles.langName}>Español</span>
        </button>

        <button onClick={() => setLocale('de')} className={styles.langItem}>
          <div className={styles.flagCircle}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="64" height="64" preserveAspectRatio="xMidYMid slice">
              <rect width="3" height="0.667" y="0"     fill="#000000"/>
              <rect width="3" height="0.667" y="0.667" fill="#DD0000"/>
              <rect width="3" height="0.667" y="1.333" fill="#FFCE00"/>
            </svg>
          </div>
          <span className={styles.langName}>Deutsch</span>
        </button>

        <button onClick={() => setLocale('en')} className={styles.langItem}>
          <div className={styles.flagCircle}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 100" width="64" height="64" preserveAspectRatio="xMidYMid slice">
              <rect width="190" height="100" fill="#B22234"/>
              <rect width="190" height="7.7" y="7.7"  fill="#fff"/>
              <rect width="190" height="7.7" y="23.1" fill="#fff"/>
              <rect width="190" height="7.7" y="38.5" fill="#fff"/>
              <rect width="190" height="7.7" y="53.8" fill="#fff"/>
              <rect width="190" height="7.7" y="69.2" fill="#fff"/>
              <rect width="190" height="7.7" y="84.6" fill="#fff"/>
              <rect width="76"  height="53.8" fill="#3C3B6E"/>
            </svg>
          </div>
          <span className={styles.langName}>English</span>
        </button>

      </div>

    </section>
  )
}