import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import ProductSection from './components/ProductSection'
import Footer from './components/Footer'

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
