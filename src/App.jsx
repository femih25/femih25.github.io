import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import AmazonMusic from './pages/AmazonMusic.jsx'
import KnightLab from './pages/KnightLab.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/amazon-music" element={<AmazonMusic />} />
        <Route path="/knight-lab" element={<KnightLab />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App