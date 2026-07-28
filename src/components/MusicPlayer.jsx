import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

const IMAGINE_ROUTE = '/closeeyes'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const startedRef = useRef(false)
  const [playing, setPlaying] = useState(false)
  const { pathname } = useLocation()

  const fadeTo = (audio, target, onDone) => {
    clearInterval(audio._fade)
    audio._fade = setInterval(() => {
      const step = target > audio.volume ? 0.02 : -0.02
      audio.volume = Math.min(1, Math.max(0, +(audio.volume + step).toFixed(2)))
      if (Math.abs(audio.volume - target) < 0.02) {
        audio.volume = target
        clearInterval(audio._fade)
        onDone?.()
      }
    }, 40)
  }

  useEffect(() => {
    const audio = new Audio()
    audio.loop = true
    audio.volume = 0
    audioRef.current = audio

    const tryStart = () => {
      startedRef.current = true
      audio.play().then(() => { fadeTo(audio, 0.32); setPlaying(true) }).catch(() => {})
    }
    window.addEventListener('pointerdown', tryStart, { once: true })

    return () => {
      window.removeEventListener('pointerdown', tryStart)
      clearInterval(audio._fade)
      audio.pause()
    }
  }, [])

  // Swap the track when entering or leaving the close-your-eyes page.
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const src = pathname === IMAGINE_ROUTE ? '/imagine.mp3' : '/sorry.mp3'
    if (audio.getAttribute('src') === src) return

    const swap = () => {
      audio.setAttribute('src', src)
      audio.load()
      if (!startedRef.current) return
      audio.play().then(() => { fadeTo(audio, 0.32); setPlaying(true) }).catch(() => {})
    }

    if (audio.getAttribute('src') && playing) fadeTo(audio, 0, swap)
    else swap()
  }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      fadeTo(audio, 0, () => audio.pause())
      setPlaying(false)
    } else {
      startedRef.current = true
      audio.play().then(() => { fadeTo(audio, 0.32); setPlaying(true) }).catch(() => {})
    }
  }

  return (
    <button onClick={toggle} aria-label="toggle music"
      style={{
        position: 'fixed', bottom: 20, right: 20, zIndex: 60,
        width: 46, height: 46, borderRadius: '50%',
        border: '1px solid var(--border)',
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(10px)', color: 'var(--accent)',
        fontSize: 17, cursor: 'pointer',
        display: 'grid', placeItems: 'center',
      }}>
      {playing ? '♪' : '♫'}
    </button>
  )
}
