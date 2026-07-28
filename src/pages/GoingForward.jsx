import { Link } from 'react-router-dom'

export default function GoingForward() {
  return (
    <div className="page" style={{ display: 'flex', flexDirection: 'column',
      alignItems: 'center', minHeight: '85vh', justifyContent: 'center', textAlign: 'center' }}>

      <h1 className="h1" style={{ marginBottom: 22 }}>where we go from here</h1>

      <div className="card" style={{ maxWidth: 560, textAlign: 'left', fontSize: 15.5,
        lineHeight: 1.8, marginBottom: 20 }}>
        I'm not writing this expecting things to just go back to normal right away. I know that's not really how it works.
        <br /><br />
        I just didn't want to let this sit unresolved, or leave you thinking I don't take it seriously. I do — because you do too, to me.
        <br /><br />
        take whatever time you need. I'm not going anywhere, and I'm not going to push you to respond faster than you're ready to.
      </div>

      <p className="lead" style={{ marginBottom: 32 }}>
        whenever you're ready — I'm here.
      </p>

      <Link to="/message" className="btn">say whatever you want to say →</Link>

      <div style={{ marginTop: 24 }}>
        <Link to="/understanding" style={{ color: 'var(--muted)', fontSize: 13 }}>← back</Link>
      </div>
    </div>
  )
}
