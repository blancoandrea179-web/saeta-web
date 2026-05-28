import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SearchClient from './SearchClient'

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string }
}) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--gray-100)' }}>
      <Navbar />
      <SearchClient initialQuery={searchParams.q ?? ''} />
      <Footer />
    </div>
  )
}
