import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span>★ Forge</span>
              <p>Revolutionizing manufacturing with speed and precision</p>
            </div>
            <div className="footer-location">
              <p>📍 Montreal, Canada</p>
              <p>📧 hello@forge.ca</p>
              <p>📞 +1 (514) 123-4567</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#cnc">CNC Machining</a></li>
              <li><a href="#prototyping">Rapid Prototyping</a></li>
              <li><a href="#production">Production Runs</a></li>
              <li><a href="#finishing">Surface Finishing</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Materials</h4>
            <ul>
              <li><a href="#aluminum">Aluminum</a></li>
              <li><a href="#steel">Steel & Stainless</a></li>
              <li><a href="#brass">Brass & Copper</a></li>
              <li><a href="#plastics">Engineering Plastics</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#quality">Quality Standards</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#design-guide">Design Guidelines</a></li>
              <li><a href="#material-guide">Material Guide</a></li>
              <li><a href="#tolerance">Tolerance Standards</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; 2025 Forge Manufacturing. All rights reserved.</p>
          </div>
          <div className="footer-bottom-right">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
