import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>

      {/* ── Bloque superior: LIMA puro con ícono de pausa (video) ── */}
      <div className={styles.videoBlock}>
        <div className={styles.videoBg}>
          <div className="img-placeholder" style={{ width: '100%', height: '100%' }}>
            <span>VIDEO / IMAGEN HERO — 1920×1080</span>
          </div>
        </div>

        {/* Ícono de pausa del video */}
        <div className={styles.pauseIcon}>
          <div className={styles.pauseBar} />
          <div className={styles.pauseBar} />
        </div>
      </div>

      {/* ── Bloque inferior: Foto oscura con banderas de idiomas ── */}
      <div className={styles.lowerBlock}>
        <div className={styles.photoBg}>
          <div className="img-placeholder" style={{ width: '100%', height: '100%' }}>
            <span>FOTO PRESENTACIÓN — 1920×600</span>
          </div>
        </div>

        <div className={styles.photoOverlay} />

        <div className={styles.bgText}>SAETA</div>

        {/* Tres idiomas con banderas */}
        <div className={styles.langRow}>
          <a href="#" className={styles.langItem}>
            <span className={styles.flag}>🇲🇽</span>
            <span className={styles.langName}>Español</span>
          </a>
          <a href="#" className={styles.langItem}>
            <span className={styles.flag}>🇩🇪</span>
            <span className={styles.langName}>Deutsch</span>
          </a>
          <a href="#" className={styles.langItem}>
            <span className={styles.flag}>🇺🇸</span>
            <span className={styles.langName}>English</span>
          </a>
        </div>
      </div>

    </section>
  )
}