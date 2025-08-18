import React, { FC } from 'react'
import '../styles/footer.css'

// Type definitions for better structure
interface FooterLink {
  href: string
  text: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

const Footer: FC = () => {
  // Updated structured data for Vignam's scientific simulation platform
  const footerSections: FooterSection[] = [
    {
      title: "Simulations",
      links: [
        { href: "#physics", text: "Physics Simulations" },
        { href: "#chemistry", text: "Chemistry Models" },
        { href: "#biology", text: "Biology Systems" },
        { href: "#mathematics", text: "Math Visualizations" }
      ]
    },
    {
      title: "Subjects", 
      links: [
        { href: "#mechanics", text: "Classical Mechanics" },
        { href: "#thermodynamics", text: "Thermodynamics" },
        { href: "#quantum", text: "Quantum Physics" },
        { href: "#molecular", text: "Molecular Biology" }
      ]
    },
    {
      title: "Platform",
      links: [
        { href: "#about", text: "About Vignam" },
        { href: "#features", text: "Platform Features" },
        { href: "#pricing", text: "Pricing Plans" },
        { href: "#support", text: "Support Center" }
      ]
    },
    {
      title: "Resources",
      links: [
        { href: "#documentation", text: "Documentation" },
        { href: "#tutorials", text: "Video Tutorials" },
        { href: "#api", text: "Developer API" },
        { href: "#community", text: "Community Forum" }
      ]
    },
    {
      title: "Education",
      links: [
        { href: "#teachers", text: "For Educators" },
        { href: "#students", text: "For Students" },
        { href: "#institutions", text: "For Institutions" },
        { href: "#research", text: "Research Partners" }
      ]
    }
  ]

  const contactInfo = {
    location: "🌍 Global Platform",
    email: "📧 hello@vignam.edu",
    phone: "📞 +1 (555) VIGNAM-1",
    website: "🔗 www.vignam.edu"
  }

  const legalLinks: FooterLink[] = [
    { href: "#privacy", text: "Privacy Policy" },
    { href: "#terms", text: "Terms of Service" },
    { href: "#accessibility", text: "Accessibility" }
  ]

  const socialLinks: FooterLink[] = [
    { href: "#twitter", text: "Twitter" },
    { href: "#linkedin", text: "LinkedIn" },
    { href: "#youtube", text: "YouTube" },
    { href: "#github", text: "GitHub" }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-main">
            <div className="footer-logo">
              <span>⚡ Vignam</span>
              <p>Transforming scientific education through interactive simulations</p>
            </div>
            <div className="footer-location">
              <p>{contactInfo.location}</p>
              <p>{contactInfo.email}</p>
              <p>{contactInfo.phone}</p>
              <p>{contactInfo.website}</p>
            </div>
            <div className="footer-social">
              <h4>Connect With Us</h4>
              <div className="social-links">
                {socialLinks.map((social: FooterLink, index: number) => (
                  <a key={index} href={social.href} className="social-link">
                    {social.text}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {footerSections.map((section: FooterSection, index: number) => (
            <div key={index} className="footer-section">
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link: FooterLink, linkIndex: number) => (
                  <li key={linkIndex}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h3>Stay Updated with Latest Simulations</h3>
            <p>Get notified about new interactive simulations and educational content</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; 2025 Vignam Scientific Simulations. All rights reserved.</p>
            <p className="footer-tagline">Empowering minds through interactive science education</p>
          </div>
          <div className="footer-bottom-right">
            {legalLinks.map((link: FooterLink, index: number) => (
              <a key={index} href={link.href}>{link.text}</a>
            ))}
          </div>
        </div>

        <div className="footer-credits">
          <p>Built with ❤️ for educators and students worldwide</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
