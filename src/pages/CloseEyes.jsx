import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CloseEyes() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 26000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="page" style={{ display: 'flex', flexDirection: 'column',
      alignItems: 'center', minHeight: '85vh', justifyContent: 'center', textAlign: 'center' }}>

      <p style={{
        fontSize: 'clamp(26px, 5.4vw, 44px)',
        fontWeight: 800,
        lineHeight: 1.3,
        maxWidth: 640,
        marginBottom: 26,
        animation: 'fadeUp .8s ease both',
      }}>
        whenever I listen to this song,
        <br />I imagine you.
      </p>

      <p className="lead" style={{
        fontSize: 17, margin: '0 auto 34px', maxWidth: 460,
        animation: 'fadeUp .8s ease .5s both',
      }}>
        so dhruviieee — close your eyes for a moment. just listen.
        no reading, no replying. I'll wait right here.
      </p>

      <div style={{ fontSize: 30, animation: 'bob 3s ease-in-out infinite' }}>🎧</div>

      {ready ? (
        <>
          <p className="lead" style={{ marginTop: 34, marginBottom: 18, animation: 'fadeUp .6s ease both' }}>
            okay. you can open them now.
          </p>
          <Link to="/tease" className="btn" style={{ animation: 'fadeUp .6s ease .15s both' }}>
            continue →
          </Link>
        </>
      ) : (
        <p style={{ marginTop: 34, color: 'var(--muted)', fontSize: 13 }}>
          stay a little longer…
        </p>
      )}
    </div>
  )
}
