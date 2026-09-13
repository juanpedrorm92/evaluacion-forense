import cors from 'cors'
import express from 'express'
import nodemailer from 'nodemailer'

const app = express()
const PORT = Number(process.env.PORT || 3000)

const CONTACT_TO = process.env.CONTACT_TO || 'consultas@centroevaluacionesforense.cl'
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com'
const SMTP_PORT = Number(process.env.SMTP_PORT || 587)
const SMTP_USER = process.env.SMTP_USER || ''
const SMTP_PASS = (process.env.SMTP_PASS || '').replace(/\s+/g, '')
const SMTP_FROM = process.env.SMTP_FROM || SMTP_USER || CONTACT_TO
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '*'

app.use(
  cors({
    origin: ALLOWED_ORIGIN === '*' ? true : ALLOWED_ORIGIN.split(',').map((s) => s.trim()),
  }),
)
app.use(express.json({ limit: '32kb' }))

const recentByIp = new Map()

function isRateLimited(ip) {
  const now = Date.now()
  const windowMs = 60_000
  const max = 5
  const stamps = (recentByIp.get(ip) || []).filter((t) => now - t < windowMs)
  stamps.push(now)
  recentByIp.set(ip, stamps)
  return stamps.length > max
}

function sanitize(value) {
  return String(value || '')
    .trim()
    .slice(0, 2000)
}

app.get('/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/api/contact', async (req, res) => {
  try {
    const ip = req.headers['x-forwarded-for']?.toString().split(',')[0]?.trim() || req.ip || 'unknown'

    if (isRateLimited(ip)) {
      return res.status(429).json({ ok: false, error: 'Demasiados intentos. Intente más tarde.' })
    }

    // Honeypot: bots suelen llenarlo; humanos no lo ven
    if (sanitize(req.body?.website)) {
      return res.json({ ok: true })
    }

    const name = sanitize(req.body?.name).slice(0, 120)
    const email = sanitize(req.body?.email).slice(0, 160)
    const phone = sanitize(req.body?.phone).slice(0, 40)
    const message = sanitize(req.body?.message).slice(0, 2000)

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Complete nombre, correo y mensaje.' })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ ok: false, error: 'Correo electrónico no válido.' })
    }

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.error('SMTP no configurado (SMTP_HOST / SMTP_USER / SMTP_PASS)')
      return res.status(503).json({
        ok: false,
        error: 'El envío de correo no está configurado en el servidor.',
      })
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    const text = [
      'Nueva solicitud de evaluación',
      '',
      `Nombre: ${name}`,
      `Correo: ${email}`,
      phone ? `Teléfono: ${phone}` : null,
      '',
      'Mensaje:',
      message,
    ]
      .filter(Boolean)
      .join('\n')

    await transporter.sendMail({
      from: `"Centro Evaluaciones Forenses" <${SMTP_FROM}>`,
      to: CONTACT_TO,
      replyTo: email,
      subject: `Solicitud de evaluación — ${name}`,
      text,
    })

    return res.json({ ok: true })
  } catch (error) {
    console.error('Error enviando correo:', error)
    return res.status(500).json({
      ok: false,
      error: 'No se pudo enviar el mensaje. Intente nuevamente.',
    })
  }
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`contact-api listening on :${PORT}`)
})
