import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home.jsx'
import Apology from './pages/Apology.jsx'
import Understanding from './pages/Understanding.jsx'
import CloseEyes from './pages/CloseEyes.jsx'
import ITeaseYou from './pages/ITeaseYou.jsx'
import GoingForward from './pages/GoingForward.jsx'
import MessagePage from './pages/MessagePage.jsx'
import MusicPlayer from './components/MusicPlayer.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <MusicPlayer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apology" element={<Apology />} />
        <Route path="/understanding" element={<Understanding />} />
        <Route path="/closeeyes" element={<CloseEyes />} />
        <Route path="/tease" element={<ITeaseYou />} />
        <Route path="/forward" element={<GoingForward />} />
        <Route path="/message" element={<MessagePage />} />
      </Routes>
    </>
  )
}
