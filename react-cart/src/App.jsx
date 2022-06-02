import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Mens from './pages/Mens'
import Womens from './pages/Womens'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import Footer from './components/Footer/Footer'
import Cart from './pages/Cart'
import Career from './pages/Career'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/career" element={<Career />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
