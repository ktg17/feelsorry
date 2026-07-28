import { Link } from 'react-router-dom'

export default function ITeaseYou() {
  return (
    <div className="page" style={{ display: 'flex', flexDirection: 'column',
      alignItems: 'center', minHeight: '85vh', justifyContent: 'center', textAlign: 'center' }}>

      <p style={{
        fontSize: 'clamp(28px, 6vw, 46px)',
        fontWeight: 800,
        color: 'var(--text)',
        lineHeight: 1.3,
        maxWidth: 600,
      }}>
        I still hate you btw.
      </p>

      <Link to="/forward" className="btn" style={{ marginTop: 40 }}>
        continue →
      </Link>
    </div>
  )
}
