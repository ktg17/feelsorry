import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const PARTS = [
  "I read what you said back to me, and I want you to know I actually heard it.",
  "you said sometimes even when someone's right, people have already made up their mind, and it becomes hard to change that. I think that's exactly what I did to you. I'd already decided something, and I made it hard for you to reach me.",
  "you said you weren't trying to hurt me, and I believe that. I don't think you meant it the way it landed. but it still landed hard, and I think it's fair that both of those things can be true at once.",
  "I also get now that when you said 'clarify and leave the rest', that's not you not caring. that's you protecting yourself after being misunderstood before. I just wish I'd been someone you didn't have to protect yourself from. I'd like to think I'm usually better than that, with you.",
  "I want to be that person going forward. someone you don't have to brace yourself around.",
]

export default function Understanding() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    PARTS.forEach((_, i) => setTimeout(() => setVisible(v => v + 1), i * 1500))
  }, [])

  return (
    <div className="page" style={{ display: 'flex', flexDirection: 'column',
      alignItems: 'center', minHeight: '85vh', justifyContent: 'center' }}>

      <h1 className="h1" style={{ marginBottom: 28, textAlign: 'center' }}>
        what I understand now
      </h1>

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
        <Link to="/closeeyes" className="btn" style={{ marginTop: 32, animation: 'fadeUp .5s ease both' }}>
          continue →
        </Link>
      )}

      <div style={{ marginTop: 24 }}>
        <Link to="/apology" style={{ color: 'var(--muted)', fontSize: 13 }}>← back</Link>
      </div>
    </div>
  )
}
