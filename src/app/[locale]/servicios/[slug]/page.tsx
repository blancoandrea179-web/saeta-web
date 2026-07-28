import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { BarChart2, Wallet, Globe, Scale, ArrowLeft, ArrowRight } from 'lucide-react'
import styles from './servicio.module.css'

const categoryIcons = {
  financieros: BarChart2,
  nomina: Wallet,
  comercio: Globe,
  legales: Scale,
} as const

type Slug = keyof typeof categoryIcons

interface Category {
  id: string
  title: string
  tag: string
  desc: string
  items: { title: string; points: string[] }[]
}

function getCategory(t: Awaited<ReturnType<typeof getTranslations>>, slug: string): Category | null {
  const categories = t.raw('categories') as Category[]
  return categories.find((c) => c.id === slug) ?? null
}

export async function generateMetadata(
  { params }: { params: { locale: string; slug: string } }
): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'services' })
  const cat = getCategory(t, params.slug)
  if (!cat) return {}
  return {
    title: `${cat.title} — SAETA OC`,
    description: cat.desc,
  }
}

export default async function ServicioDetalle(
  { params }: { params: { locale: string; slug: string } }
) {
  const { locale, slug } = params

  const t = await getTranslations({ locale, namespace: 'services' })
  const cat = getCategory(t, slug)
  if (!cat) notFound()

  const Icon = categoryIcons[slug as Slug] ?? BarChart2

  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <Link href="/#servicios" className={styles.back}>
            <ArrowLeft size={15} />
            {t('detailBack')}
          </Link>

          <div className={styles.heroHead}>
            <div className={styles.iconBox}>
              <Icon size={34} />
            </div>
            <div>
              <span className={styles.eyebrow}>{t('detailEyebrow')}</span>
              <h1 className={styles.title}>{cat.title}</h1>
              <span className={styles.tag}>{cat.tag}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`container ${styles.body}`}>
        <ol className={styles.list}>
          {cat.items.map((item, i) => (
            <li key={item.title} className={styles.item}>
              <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              <div className={styles.itemContent}>
                <h2 className={styles.itemTitle}>{item.title}</h2>
                {item.points.length > 0 && (
                  <ul className={styles.pointList}>
                    {item.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.ctaRow}>
          <Link href="/#contacto" className="btn btn--primary">
            {t('cta.btn')} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  )
}
