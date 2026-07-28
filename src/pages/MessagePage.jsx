import { useState } from 'react'

export default function MessagePage() {
  const [msg, setMsg] = useState('')
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const submit = async () => {
    if (!msg.trim()) return
    setSending(true)
    setError('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '9beae33d-a04b-4e1e-aefb-18824ca67f83',
          subject: '💬 she replied on feelsorry site',
          from_name: 'dhruviieee',
          message: msg,
        }),
      })
      const data = await res.json()
      if (data.success) { setSent(true); setMsg('') }
      else setError('something went wrong — try again')
    } catch { setError('something went wrong — try again') }
    setSending(false)
  }

  const field = {
    width: '100%', fontFamily: 'inherit', fontSize: 15,
    padding: '13px 16px', borderRadius: 14,
    border: '1.5px solid var(--border)', background: 'var(--card)',
    color: 'var(--text)', outline: 'none', resize: 'none',
    boxSizing: 'border-box',
  }

  return (
    <div className="page" style={{ display: 'flex', flexDirection: 'column',
      alignItems: 'center', minHeight: '85vh', justifyContent: 'center', textAlign: 'center' }}>

      <h1 className="h1" style={{ marginBottom: 12 }}>whenever you're ready</h1>
      <p className="lead" style={{ margin: '0 auto 28px' }}>
        say whatever you want — or nothing at all. either is okay.
      </p>

      <div className="card" style={{ width: 'min(92vw, 480px)', textAlign: 'left' }}>
        {!sent ? (
          <>
            <textarea value={msg} onChange={e => setMsg(e.target.value)}
              placeholder="type here…" rows={5}
              style={{ ...field, marginBottom: 6 }} />
            {error && <p style={{ color: '#e08a8a', fontSize: 13, marginBottom: 8 }}>{error}</p>}
            <button className="btn" onClick={submit}
              disabled={!msg.trim() || sending}
              style={{ width: '100%', marginTop: 10 }}>
              {sending ? 'sending…' : 'send'}
            </button>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '10px 0' }}>
            <p style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>sent.</p>
            <p style={{ color: 'var(--muted)', fontSize: 14 }}>thank you for reading all of this.</p>
          </div>
        )}
      </div>
    </div>
  )
}
