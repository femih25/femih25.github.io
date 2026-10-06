import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import AmazonMusic from './pages/AmazonMusic.jsx'
import KnightLab from './pages/KnightLab.jsx'
import CFRadar from './pages/CFRadar.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <div>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/amazon-music" element={<AmazonMusic />} />
        <Route path="/knight-lab" element={<KnightLab />} />
        <Route path="/campaign-finance-radar" element={<CFRadar />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App