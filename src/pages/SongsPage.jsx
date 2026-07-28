import { Link } from 'react-router-dom'

const SONGS = [
  {
    title: 'Maybe',
    artist: '(the one that\'s playing right now)',
    note: "this whole song, honestly. the way it admits fault without making excuses — that's kind of exactly how I feel right now.",
  },
  {
    title: 'add your song here',
    artist: 'artist name',
    note: "reason this one reminds me of you — edit this in the code, or just leave a blank for now.",
  },
  {
    title: 'add another song here',
    artist: 'artist name',
    note: "same here — swap this out for something real whenever you want.",
  },
]

export default function SongsPage() {
  return (
    <div className="page" style={{ display: 'flex', flexDirection: 'column',
      alignItems: 'center', minHeight: '85vh', justifyContent: 'center', textAlign: 'center' }}>

      <h1 className="h1" style={{ marginBottom: 10 }}>songs that remind me of you</h1>
      <p className="lead" style={{ margin: '0 auto 32px' }}>
        not a big list. just a few that stuck.
      </p>

      <div style={{ maxWidth: 560, width: '100%', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {SONGS.map((s, i) => (
          <div key={i} className="card" style={{ textAlign: 'left' }}>
            <p style={{ fontSize: 16, fontWeight: 700, marginBottom: 2 }}>{s.title}</p>
            <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 10 }}>{s.artist}</p>
            <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--text)' }}>{s.note}</p>
          </div>
        ))}
      </div>

      <Link to="/forward" className="btn" style={{ marginTop: 32 }}>continue →</Link>

      <div style={{ marginTop: 20 }}>
        <Link to="/tease" style={{ color: 'var(--muted)', fontSize: 13 }}>← back</Link>
      </div>
    </div>
  )
}
