'use client'

import { useState, useMemo } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter, Link } from '@/i18n/navigation'
import { Search, ArrowRight, ArrowLeft } from 'lucide-react'
import styles from './search.module.css'

interface SearchItem {
  title: string
  section: string
  sectionKey: 'svc' | 'about' | 'team' | 'news' | 'contact' | 'lang'
  desc: string
  hash: string
  keywords: string
}

function buildIndex(
  tSvc: ReturnType<typeof useTranslations>,
  tTeam: ReturnType<typeof useTranslations>,
  tNews: ReturnType<typeof useTranslations>,
  tContact: ReturnType<typeof useTranslations>,
  tAbout: ReturnType<typeof useTranslations>,
  tLang: ReturnType<typeof useTranslations>,
  tSearch: ReturnType<typeof useTranslations>,
): SearchItem[] {
  return [
    {
      title: tSvc('items.softlanding.title'),
      section: tSearch('svcLabel'),
      sectionKey: 'svc',
      desc: tSvc('items.softlanding.desc'),
      hash: 'servicios',
      keywords: [tSvc('items.softlanding.title'), tSvc('items.softlanding.tag'), 'softlanding', 'empresa', 'expansion', 'headhunting', 'reclutamiento', 'constitución'].join(' '),
    },
    {
      title: tSvc('items.legales.title'),
      section: tSearch('svcLabel'),
      sectionKey: 'svc',
      desc: tSvc('items.legales.desc'),
      hash: 'servicios',
      keywords: [tSvc('items.legales.title'), tSvc('items.legales.tag'), 'legal', 'laboral', 'contrato', 'migracion', 'corporativo', 'propiedad intelectual', 'datos'].join(' '),
    },
    {
      title: tSvc('items.contabilidad.title'),
      section: tSearch('svcLabel'),
      sectionKey: 'svc',
      desc: tSvc('items.contabilidad.desc'),
      hash: 'servicios',
      keywords: [tSvc('items.contabilidad.title'), tSvc('items.contabilidad.tag'), 'contabilidad', 'impuestos', 'declaraciones', 'fiscal', 'facturacion', 'budget', 'forecast'].join(' '),
    },
    {
      title: tSvc('items.payroll.title'),
      section: tSearch('svcLabel'),
      sectionKey: 'svc',
      desc: tSvc('items.payroll.desc'),
      hash: 'servicios',
      keywords: [tSvc('items.payroll.title'), tSvc('items.payroll.tag'), 'payroll', 'nomina', 'salarios', 'treasury', 'tesoreria', 'divisas'].join(' '),
    },
    {
      title: tSvc('items.comercio.title'),
      section: tSearch('svcLabel'),
      sectionKey: 'svc',
      desc: tSvc('items.comercio.desc'),
      hash: 'servicios',
      keywords: [tSvc('items.comercio.title'), tSvc('items.comercio.tag'), 'comercio exterior', 'aduanas', 'logistica', 'importacion', 'exportacion', 'aranceles'].join(' '),
    },
    {
      title: tSvc('items.auditoria.title'),
      section: tSearch('svcLabel'),
      sectionKey: 'svc',
      desc: tSvc('items.auditoria.desc'),
      hash: 'servicios',
      keywords: [tSvc('items.auditoria.title'), tSvc('items.auditoria.tag'), 'auditoria', 'estados financieros', 'niif', 'ifrs', 'diagnostico'].join(' '),
    },
    {
      title: tAbout('mision.title') + ' & ' + tAbout('vision.title'),
      section: tSearch('aboutLabel'),
      sectionKey: 'about',
      desc: tAbout('mision.text').substring(0, 120) + '…',
      hash: 'sobre',
      keywords: [tAbout('mision.title'), tAbout('vision.title'), tAbout('valores.title'), 'sobre', 'empresa', 'quienes somos', 'acerca', 'saeta', 'daniela nebel', 'mission', 'vision', 'values'].join(' '),
    },
    {
      title: tTeam('heading'),
      section: tSearch('teamLabel'),
      sectionKey: 'team',
      desc: tTeam('sub'),
      hash: 'team',
      keywords: ['team', 'equipo', 'daniela nebel', 'maritza cantú', 'edith chávez', 'nayeli martinez', 'leslie soto', 'eduardo lópez', 'alfredo galindo', 'directivos', 'ceo', 'cfo', 'cao'].join(' '),
    },
    {
      title: tNews('heading'),
      section: tSearch('newsLabel'),
      sectionKey: 'news',
      desc: tNews('upcomingEvents'),
      hash: 'noticias',
      keywords: [tNews('heading'), tNews('eyebrow'), 'noticias', 'eventos', 'actualidad', 'blog', 'news', 'events', 'nachrichten'].join(' '),
    },
    {
      title: tLang('heading'),
      section: tSearch('langLabel'),
      sectionKey: 'lang',
      desc: tLang('sub'),
      hash: 'idiomas',
      keywords: [tLang('heading'), 'idiomas', 'español', 'english', 'deutsch', 'aleman', 'ingles', 'languages', 'sprachen', 'cobertura'].join(' '),
    },
    {
      title: tContact('heading'),
      section: tSearch('contactLabel'),
      sectionKey: 'contact',
      desc: tContact('sub'),
      hash: 'contacto',
      keywords: [tContact('heading'), tContact('eyebrow'), 'contacto', 'consulta', 'email', 'telefono', 'oficina', 'puebla', 'cdmx', 'contact', 'kontakt', 'kostenlos', 'gratis'].join(' '),
    },
  ]
}

const sectionColors: Record<string, string> = {
  svc:     styles.badgeLime,
  about:   styles.badgeGray,
  team:    styles.badgeDark,
  news:    styles.badgeAmber,
  contact: styles.badgeLime,
  lang:    styles.badgeGray,
}

export default function SearchClient({ initialQuery }: { initialQuery: string }) {
  const t       = useTranslations('search')
  const tSvc    = useTranslations('services')
  const tTeam   = useTranslations('team')
  const tNews   = useTranslations('news')
  const tContact = useTranslations('contact')
  const tAbout  = useTranslations('about')
  const tLang   = useTranslations('languages')

  const router = useRouter()
  const [query, setQuery] = useState(initialQuery)

  const searchIndex = useMemo(
    () => buildIndex(tSvc, tTeam, tNews, tContact, tAbout, tLang, t),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  const results = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return []
    return searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.keywords.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q),
    )
  }, [query, searchIndex])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.replace(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  const handleSuggestion = (term: string) => {
    setQuery(term)
    router.replace(`/search?q=${encodeURIComponent(term)}`)
  }

  const suggestions = [
    tSvc('items.softlanding.title'),
    tSvc('items.legales.title'),
    tSvc('items.contabilidad.title'),
    tSvc('items.auditoria.title'),
    tContact('heading'),
  ]

  return (
    <main className={styles.main}>
      <div className="container">

        <Link href="/" className={styles.back}>
          <ArrowLeft size={14} />
          {t('back')}
        </Link>

        {/* Search form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('placeholder')}
            autoFocus
            autoComplete="off"
          />
          <button type="submit" className={styles.submit}>
            <Search size={18} />
          </button>
        </form>

        {/* Title */}
        <div className={styles.header}>
          {query.trim() ? (
            <>
              <h1 className={styles.title}>
                {t('titlePre')}{' '}
                <span className={styles.titleQuery}>"{query.trim()}"</span>
              </h1>
              {results.length > 0 && (
                <p className={styles.count}>
                  {t('resultCount', { count: results.length })}
                </p>
              )}
            </>
          ) : (
            <h1 className={styles.title}>{t('noQuery')}</h1>
          )}
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className={styles.results}>
            {results.map((item) => (
              <Link key={item.hash + item.title} href={`/#${item.hash}`} className={styles.result}>
                <div className={styles.resultLeft}>
                  <span className={`${styles.resultSection} ${sectionColors[item.sectionKey]}`}>
                    {item.section}
                  </span>
                  <span className={styles.resultTitle}>{item.title}</span>
                  <span className={styles.resultUrl}>saetaoc.com/#{item.hash}</span>
                </div>
                <ArrowRight size={18} className={styles.resultArrow} />
              </Link>
            ))}
          </div>
        )}

        {/* Empty state */}
        {query.trim() && results.length === 0 && (
          <div className={styles.empty}>
            <span className={styles.emptyIcon}>🔍</span>
            <p className={styles.emptyText}>
              {t('noResults')}{' '}
              <strong>"{query.trim()}"</strong>
            </p>
            <p className={styles.emptySub}>{t('noResultsSub')}</p>
            <div className={styles.suggestions}>
              {suggestions.map((s) => (
                <button
                  key={s}
                  className={styles.suggestion}
                  onClick={() => handleSuggestion(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* No query yet — show all sections as suggestions */}
        {!query.trim() && (
          <div className={styles.empty}>
            <p className={styles.emptyText}>{t('noQuerySub')}</p>
            <div className={styles.suggestions}>
              {suggestions.map((s) => (
                <button
                  key={s}
                  className={styles.suggestion}
                  onClick={() => handleSuggestion(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  )
}
