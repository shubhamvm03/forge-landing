import React, { FC, useState, useEffect } from 'react'
import '../styles/header.css'

// Type definitions
interface NavLink {
  href: string
  text: string
  className?: string
}

interface Language {
  code: string
  name: string
  active: boolean
}

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [activeLanguage, setActiveLanguage] = useState<string>('eng')

  // Navigation links with proper typing
  const navLinks: NavLink[] = [
    { href: "#simulations", text: "Simulations" },
    { href: "#features", text: "Features" },
    { href: "#pricing", text: "Pricing" },
    { href: "#contact", text: "Get Started", className: "contact-btn" }
  ]

  // Language options
  const languages: Language[] = [
    { code: "eng", name: "Eng", active: activeLanguage === "eng" },
    { code: "fra", name: "Fra", active: activeLanguage === "fra" }
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle language toggle
  const handleLanguageChange = (langCode: string): void => {
    setActiveLanguage(langCode)
  }

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <div className="logo-container">
            <div className="logo-icon">
              <span className="icon-primary">⚡</span>
              <span className="icon-secondary">🔬</span>
            </div>
            <div className="logo-text-container">
              <span className="logo-text">Vignam</span>
              <span className="logo-tagline">Scientific Simulations</span>
            </div>
          </div>
        </div>

        <nav className="nav">
          <div className="location">
            <span className="location-icon">📍</span>
            <span className="location-text">Global Platform</span>
          </div>

          <div className="nav-links">
            {navLinks.map((link: NavLink, index: number) => (
              <a 
                key={index}
                href={link.href} 
                className={`nav-link ${link.className || ''}`}
              >
                {link.text}
              </a>
            ))}
          </div>

          <div className="language-toggle">
            {languages.map((lang: Language, index: number) => (
              <React.Fragment key={lang.code}>
                <span 
                  className={`language-option ${lang.active ? 'active' : ''}`}
                  onClick={() => handleLanguageChange(lang.code)}
                >
                  {lang.name}
                </span>
                {index < languages.length - 1 && <span className="separator">/</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <div className="mobile-menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
