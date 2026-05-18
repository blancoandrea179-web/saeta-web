import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'SAETA OC — Consultoría Empresarial Internacional',
  description:
    'Soluciones integrales en consultoría empresarial: softlanding, legal, fiscal, comercio exterior y auditoría. Tu brújula corporativa.',
  keywords: 'consultoría empresarial, softlanding, fiscal, legal, comercio exterior, auditoría, Puebla, CDMX',
  openGraph: {
    title: 'SAETA OC — Consultoría Empresarial Internacional',
    description: 'Descomplicamos los procesos corporativos. Tu brújula empresarial.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
