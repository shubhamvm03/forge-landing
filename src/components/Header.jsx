// components/Header.jsx
import React from 'react'
import '../styles/header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="logo-icon">★</span>
          <span className="logo-text">Forge</span>
        </div>
        <nav className="nav">
          <div className="location">
            <span className="location-icon">📍</span>
            Canada, Montreal
          </div>
          <div className="nav-links">
            <a href="#manufacture" className="nav-link">Manufacture</a>
            <a href="#tool-library" className="nav-link">Tool library</a>
            <a href="#contact" className="nav-link contact-btn">Get in touch</a>
          </div>
          <div className="language-toggle">
            <span className="active">Eng</span> / <span>Fra</span>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
