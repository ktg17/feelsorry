import { Link } from 'react-router-dom'

export default function GoingForward() {
  return (
    <div className="page" style={{ display: 'flex', flexDirection: 'column',
      alignItems: 'center', minHeight: '85vh', justifyContent: 'center', textAlign: 'center' }}>

      <h1 className="h1" style={{ marginBottom: 22 }}>where we go from here</h1>

      <div className="card" style={{ maxWidth: 560, textAlign: 'left', fontSize: 15.5,
        lineHeight: 1.8, marginBottom: 20 }}>
        I just wanted to be understood by someone I care about. or else…
        <br /><br />
        that's really all this was. not to win the argument, not to prove a point — just to be read properly by you, for once.
        <br /><br />
        I'm not asking for anything back right now. take your time. I'm not going anywhere.
      </div>

      <p className="lead" style={{ marginBottom: 32 }}>
        whenever you're ready, I'm here.
      </p>

      <Link to="/message" className="btn">say whatever you want to say →</Link>

      <div style={{ marginTop: 24 }}>
        <Link to="/tease" style={{ color: 'var(--muted)', fontSize: 13 }}>← back</Link>
      </div>
    </div>
  )
}
