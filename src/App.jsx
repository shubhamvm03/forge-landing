import React from 'react'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import VideoSection from './components/VideoSection.tsx'
import ProductSection from './components/ProductSection.tsx'
import Footer from './components/Footer.tsx'

// Import global styles
import './styles/global.css'
import './styles/responsive.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <VideoSection />
      <ProductSection />
      <Footer />
    </div>
  )
}

export default App
