import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ITeaseYou() {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="page" style={{ display: 'flex', flexDirection: 'column',
      alignItems: 'center', minHeight: '85vh', justifyContent: 'center', textAlign: 'center' }}>

      {!revealed ? (
        <>
          <h1 className="h1" style={{ marginBottom: 16 }}>
            quick reminder before we continue —
          </h1>
          <p className="lead" style={{ margin: '0 auto 32px' }}>
            I still hate you btw. just so we're clear.
          </p>
          <button className="btn" onClick={() => setRevealed(true)}>
            wait what →
          </button>
        </>
      ) : (
        <div style={{ animation: 'fadeUp .5s ease both' }}>
          <h1 className="h1" style={{ marginBottom: 16 }}>
            okay fine, I don't actually hate you
          </h1>
          <p className="lead" style={{ maxWidth: 480, margin: '0 auto 20px', lineHeight: 1.75 }}>
            you know that. it's just our thing — I say it, you roll your eyes,
            and somehow it's never actually meant.
          </p>
          <p style={{ maxWidth: 460, margin: '0 auto 32px', color: 'var(--muted)',
            fontSize: 15, lineHeight: 1.75 }}>
            I just wanted one page in here that felt like us — not just the serious stuff.
            so: I hate you. (I don't. obviously.)
          </p>
          <Link to="/forward" className="btn">okay, continuing →</Link>
        </div>
      )}
    </div>
  )
}
