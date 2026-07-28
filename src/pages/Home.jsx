import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page" style={{ display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', minHeight: '85vh', textAlign: 'center' }}>

      <p style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 18, letterSpacing: 0.5 }}>
        for dhruviieee
      </p>

      <h1 className="h1" style={{ marginBottom: 18 }}>
        hey. I wanted to say something properly —
        <br />not just over text.
      </h1>

      <p className="lead" style={{ margin: '0 auto 40px' }}>
        take a minute, if you have one.
      </p>

      <Link to="/apology" className="btn">okay →</Link>
    </div>
  )
}
