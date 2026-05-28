'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Menu, X, Search } from 'lucide-react'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Inicio',    href: '#inicio' },
  { label: 'Equipo',    href: '#team' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Noticias & Eventos',  href: '#noticias' },
  { label: 'Idioma',    href: '#idiomas' },
  { label: 'Contacto',  href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery]           = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus()
    else setQuery('')
  }, [searchOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setSearchOpen(false); setQuery('') }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const handleLink = (href: string) => {
    setMenuOpen(false)
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    setSearchOpen(false)
    setQuery('')
  }

  const handleMobileSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    setMenuOpen(false)
    setQuery('')
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>

        <a href="/" className={styles.logo}>
          <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 19L16 7L28 19" stroke={scrolled ? '#cfe000' : '#2a2a2a'} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 28L16 16L28 28" stroke={scrolled ? '#cfe000' : '#2a2a2a'} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        <nav className={`${styles.nav} ${searchOpen ? styles.navHidden : ''}`}>
          {navLinks.map((l) => (
            <button key={l.href + l.label} className={styles.navLink} onClick={() => handleLink(l.href)}>
              {l.label}
            </button>
          ))}
        </nav>

        <form
          className={`${styles.searchWrap} ${searchOpen ? styles.searchWrapOpen : ''}`}
          onSubmit={handleSearch}
        >
          <input
            ref={inputRef}
            type="text"
            className={styles.searchInput}
            placeholder="Buscar en SAETA OC..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
          <button type="submit" className={styles.searchSubmit}>
            <Search size={16} />
          </button>
        </form>

        <button
          className={styles.searchBtn}
          onClick={() => { setSearchOpen(!searchOpen); setQuery('') }}
          aria-label="Buscar"
        >
          {searchOpen ? <X size={20} /> : <Search size={20} />}
        </button>

        <button className={styles.toggle} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        {navLinks.map((l) => (
          <button key={l.href + l.label} className={styles.drawerLink} onClick={() => handleLink(l.href)}>
            {l.label}
          </button>
        ))}
        <form className={styles.drawerSearch} onSubmit={handleMobileSearch}>
          <input
            type="text"
            className={styles.drawerSearchInput}
            placeholder="Buscar en la página..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className={styles.drawerSearchBtn}>
            <Search size={16} />
          </button>
        </form>
        <a href="#contacto" className={`btn btn--dark ${styles.drawerCta}`}
          onClick={(e) => { e.preventDefault(); handleLink('#contacto') }}>
          Consulta Gratis
        </a>
      </div>
    </header>
  )
}