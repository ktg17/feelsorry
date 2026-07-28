import { Link } from 'react-router-dom'

export default function GoingForward() {
  return (
    <div className="page" style={{ display: 'flex', flexDirection: 'column',
      alignItems: 'center', minHeight: '85vh', justifyContent: 'center', textAlign: 'center' }}>

      <p style={{
        fontSize: 'clamp(26px, 5.4vw, 44px)',
        fontWeight: 800,
        lineHeight: 1.3,
        maxWidth: 680,
        animation: 'fadeUp .8s ease both',
      }}>
        I just wanted to be understood by someone I care about.....
      </p>

      <Link to="/message" className="btn" style={{ marginTop: 44 }}>
        say whatever you want to say →
      </Link>

      <p style={{ marginTop: 46, color: 'var(--muted)', fontSize: 13, lineHeight: 1.7 }}>
        bvv kaiii add ny kranuu,ane  kaal no msg pn ny kryo tneeee.
      </p>
    </div>
  )
}
