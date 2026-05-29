'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import styles from './News.module.css'
import { Calendar, ArrowRight, Tag, ImagePlus, ChevronLeft, ChevronRight } from 'lucide-react'

type Tab = 'noticias' | 'eventos'

interface EventData {
  id: string
  tag: string
  title: string
  date: string
  description: string
  images: string[]
}

const news = [
  {
    date: '2 de abril de 2026',
    tag: 'Comercio Exterior',
    title: 'Adición de la Regla 2.2.26 BIS: Aviso Automático de Importación para Productos de Aluminio',
    excerpt: 'La Secretaría de Economía publicó la Regla 2.2.26 BIS, que establece la obligación de tramitar un aviso automático de importación para 42 fracciones arancelarias de aluminio. La medida busca fortalecer la trazabilidad del origen del material y prevenir prácticas de triangulación comercial.',
    img: '/images/noticia.png',
    href: 'https://www.linkedin.com/pulse/adici%C3%B3n-de-la-regla-2226-bis-aviso-autom%C3%A1tico-para-gonzalez-sanchez-nqzxe/',
  },
]

const upcomingEvents = [
  { date: { day: '28', month: 'May' }, title: 'WeinFest',                   desc: '28 de mayo de 2026' },
  { date: { day: '25', month: 'Jun' }, title: '4to Aniversario SAETA',      desc: '25 de junio de 2026' },
  { date: { day: '–',  month: '–'   }, title: 'Congreso Comercio Exterior', desc: '' },
]

const events: EventData[] = [
  {
    id: 'oktoberfest',
    tag: 'Evento',
    title: 'Oktoberfest',
    date: '',
    description: '',
    images: [
      '/images/oktober1.jpeg',
      '/images/oktuber2.jpeg',
      '/images/oktuber3.jpeg',
      '/images/oktuber4.jpeg',
      '/images/oktuber5.jpeg',
      '/images/oktuber6.jpeg',
    ],
  },
  {
    id: 'cena-gala-camexa',
    tag: 'CAMEXA',
    title: 'Cena Gala CAMEXA',
    date: '',
    description: '',
    images: [],
  },
  {
    id: 'brindis-camexa',
    tag: 'CAMEXA',
    title: 'Brindis Año Nuevo CAMEXA',
    date: '',
    description: '',
    images: [],
  },
  {
    id: 'conferencias-daniela',
    tag: 'Conferencia',
    title: 'Conferencias Daniela Nebel',
    date: '',
    description: '',
    images: [],
  },
]

function EventCard({ e, t }: { e: EventData; t: ReturnType<typeof useTranslations<'news'>> }) {
  const [imgIdx, setImgIdx] = useState(0)
  const hasImages = e.images.length > 0
  const hasMultiple = e.images.length > 1

  const prev = (ev: React.MouseEvent) => {
    ev.stopPropagation()
    setImgIdx(i => (i - 1 + e.images.length) % e.images.length)
  }
  const next = (ev: React.MouseEvent) => {
    ev.stopPropagation()
    setImgIdx(i => (i + 1) % e.images.length)
  }

  return (
    <article className={styles.eventCard}>
      <div className={styles.eventCardImg}>
        {hasImages ? (
          <>
            <img key={imgIdx} src={e.images[imgIdx]} alt={`${e.title} ${imgIdx + 1}`} />
            {hasMultiple && (
              <>
                <button className={`${styles.carouselBtn} ${styles.carouselBtnPrev}`} onClick={prev} aria-label="Imagen anterior">
                  <ChevronLeft size={18} />
                </button>
                <button className={`${styles.carouselBtn} ${styles.carouselBtnNext}`} onClick={next} aria-label="Imagen siguiente">
                  <ChevronRight size={18} />
                </button>
                <div className={styles.carouselDots}>
                  {e.images.map((_, i) => (
                    <button
                      key={i}
                      className={`${styles.dot} ${i === imgIdx ? styles.dotActive : ''}`}
                      onClick={(ev) => { ev.stopPropagation(); setImgIdx(i) }}
                      aria-label={`Imagen ${i + 1}`}
                    />
                  ))}
                </div>
                <span className={styles.carouselCounter}>{imgIdx + 1} / {e.images.length}</span>
              </>
            )}
          </>
        ) : (
          <div className={styles.eventCardImgPlaceholder}>
            <ImagePlus size={38} strokeWidth={1.2} />
            <span>{t('imageComing')}</span>
          </div>
        )}
        <span className={styles.cardTag}>
          <Tag size={11} /> {e.tag}
        </span>
      </div>
      <div className={styles.eventCardBody}>
        {e.date && (
          <span className={styles.cardDate}>
            <Calendar size={13} /> {e.date}
          </span>
        )}
        <h3 className={styles.eventCardTitle}>{e.title}</h3>
        {e.description ? (
          <p className={styles.eventCardDesc}>{e.description}</p>
        ) : (
          <p className={styles.eventCardDescPlaceholder}>{t('descComing')}</p>
        )}
      </div>
    </article>
  )
}

export default function News() {
  const t = useTranslations('news')
  const [activeTab, setActiveTab] = useState<Tab>('noticias')

  return (
    <section id="noticias" className={`section ${styles.news}`}>
      <div className="container">

        <div className={styles.header}>
          <div>
            <span className="eyebrow">{t('eyebrow')}</span>
            <div className="lime-bar" />
            <h2 className="section-title">{t('heading')}</h2>
          </div>

          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${activeTab === 'noticias' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('noticias')}
            >
              {t('tabNews')}
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'eventos' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('eventos')}
            >
              {t('tabEvents')}
            </button>
          </div>
        </div>

        {activeTab === 'noticias' && (
          <div className={styles.layout}>

            <div className={styles.newsGrid}>
              {news.map((n, i) => (
                <article key={n.title} className={`${styles.card} ${i === 0 ? styles.featured : ''}`}>
                  <div className={styles.cardImg}>
                    <img
                      src={n.img}
                      alt={n.title}
                      style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                    />
                    <span className={styles.cardTag}>
                      <Tag size={11} /> {n.tag}
                    </span>
                  </div>
                  <div className={styles.cardBody}>
                    <span className={styles.cardDate}>
                      <Calendar size={13} /> {n.date}
                    </span>
                    <h3 className={styles.cardTitle}>{n.title}</h3>
                    <p className={styles.cardExcerpt}>{n.excerpt}</p>
                    <a
                      href={n.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.readMore}
                    >
                      {t('readMore')} <ArrowRight size={13} />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.sidebar}>
              <h3 className={styles.sidebarTitle}>{t('upcomingEvents')}</h3>
              <div className={styles.eventsList}>
                {upcomingEvents.map((e) => (
                  <div key={e.title} className={styles.event}>
                    <div className={styles.eventDate}>
                      <span className={styles.eventDay}>{e.date.day}</span>
                      <span className={styles.eventMonth}>{e.date.month}</span>
                    </div>
                    <div>
                      <h4 className={styles.eventTitle}>{e.title}</h4>
                      <p className={styles.eventDesc}>{e.desc || t('comingSoon')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {activeTab === 'eventos' && (
          <div className={styles.eventsGrid}>
            {events.map((e) => (
              <EventCard key={e.id} e={e} t={t} />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
