import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'SAETA OC — Consultoría Empresarial Internacional',
  description: 'Soluciones integrales en consultoría empresarial',
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  readonly children: React.ReactNode
  readonly params: { readonly locale: string }
}) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}