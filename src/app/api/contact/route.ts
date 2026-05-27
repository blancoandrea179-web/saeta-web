import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { nombre, empresa, email, telefono, servicio, mensaje } = await req.json()

  await resend.emails.send({
    from: 'SAETA Web <onboarding@resend.dev>',
    to: 'contacto@saetaoc.com',
    subject: `Nueva consulta de ${nombre}`,
    html: `
      <h2>Nueva solicitud de contacto</h2>
      <p><b>Nombre:</b> ${nombre}</p>
      <p><b>Empresa:</b> ${empresa}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Teléfono:</b> ${telefono}</p>
      <p><b>Servicio:</b> ${servicio}</p>
      <p><b>Mensaje:</b> ${mensaje}</p>
    `,
  })

  return NextResponse.json({ ok: true })
}

