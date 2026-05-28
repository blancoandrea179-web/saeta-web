import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { locale } = await req.json()
  const response = NextResponse.json({ ok: true })
  response.cookies.set('locale', locale, { path: '/' })
  return response
}