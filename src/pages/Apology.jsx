import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const PARTS = [
  "I've been thinking about what happened, and I owe you a proper apology — not a half one.",
  "I doubted you without really giving you the space to explain first. I let an assumption turn into something bigger than it needed to be, and that wasn't fair to you.",
  "and when you did explain — I still held onto that doubt for a bit instead of just trusting what you told me. that's on me.",
  "I also reacted badly when you were trying to just be honest with me. I said things that came out harsher than I meant, and I know that hurt you — you told me it did, and I believe you.",
  "you didn't deserve to feel like you had to defend yourself to me, or like understanding you was optional for me. it wasn't. it isn't.",
  "I'm sorry. genuinely.",
]

export default function Apology() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    PARTS.forEach((_, i) => setTimeout(() => setVisible(v => v + 1), i * 1400))
  }, [])

  return (
    <div className="page" style={{ display: 'flex', flexDirection: 'column',
      alignItems: 'center', minHeight: '85vh', justifyContent: 'center' }}>

      <h1 className="h1" style={{ marginBottom: 28, textAlign: 'center' }}>I'm sorry.</h1>

      <div style={{ maxWidth: 560, width: '100%', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {PARTS.map((text, i) => (
          <div key={i} className="card" style={{
            fontSize: 15.5, lineHeight: 1.75, textAlign: 'left',
            opacity: visible > i ? 1 : 0,
            transform: visible > i ? 'translateY(0)' : 'translateY(14px)',
            transition: 'opacity .7s ease, transform .7s ease',
          }}>
            {text}
          </div>
        ))}
      </div>

      {visible >= PARTS.length && (
        <Link to="/understanding" className="btn" style={{ marginTop: 32, animation: 'fadeUp .5s ease both' }}>
          continue →
        </Link>
      )}
    </div>
  )
}
