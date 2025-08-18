import React, { FC } from 'react'
import '../styles/productSection.css'

// Type definitions
interface Product {
  title: string
  description: string
  image: string
  features: string[]
  category?: string
}

interface Process {
  step: string
  title: string
  description: string
  icon?: string
}

interface CTAButton {
  text: string
  className: string
  onClick?: () => void
}

const ProductSection: FC = () => {
  // Updated products for Vignam's scientific simulation platform
  const products: Product[] = [
    {
      title: 'Physics Simulations',
      description: 'Advanced physics modeling and interactive simulations',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop&crop=center',
      features: ['Classical Mechanics', 'Quantum Physics', 'Thermodynamics'],
      category: 'Physics'
    },
    {
      title: 'Chemistry Lab',
      description: 'Virtual chemistry experiments and molecular modeling',
      image: 'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=300&h=200&fit=crop&crop=center',
      features: ['Molecular Dynamics', 'Chemical Reactions', 'Lab Safety'],
      category: 'Chemistry'
    },
    {
      title: 'Biology Models',
      description: 'Interactive biological systems and life science simulations',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center',
      features: ['Cell Biology', 'Genetics', 'Ecosystem Modeling'],
      category: 'Biology'
    }
  ]

  // Updated process for simulation platform
  const processes: Process[] = [
    {
      step: '01',
      title: 'Choose Simulation',
      description: 'Browse our library of pre-built scientific simulations',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Customize Parameters',
      description: 'Adjust variables and settings to fit your learning objectives',
      icon: '⚙️'
    },
    {
      step: '03',
      title: 'Run & Analyze',
      description: 'Execute simulations and analyze results in real-time',
      icon: '📊'
    },
    {
      step: '04',
      title: 'Export Results',
      description: 'Save data, generate reports, and share with your team',
      icon: '📤'
    }
  ]

  // CTA buttons with proper typing
  const ctaButtons: CTAButton[] = [
    {
      text: 'Start Free Trial',
      className: 'btn-primary',
      onClick: () => console.log('Starting free trial...')
    },
    {
      text: 'View Simulation Library',
      className: 'btn-secondary',
      onClick: () => console.log('Opening simulation library...')
    }
  ]

  // Handle button clicks
  const handleButtonClick = (buttonText: string): void => {
    console.log(`${buttonText} clicked`)
    // Add your navigation logic here
  }

  return (
    <section className="product-section">
      <div className="container">
        {/* Products Header */}
        <div className="products-header">
          <span className="section-badge">Simulations</span>
          <h2>Scientific Simulation Suite</h2>
          <p>Explore our comprehensive library of interactive scientific simulations designed for education and research</p>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {products.map((product: Product, index: number) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <img 
                  src={product.image} 
                  alt={product.title}
                  loading="lazy"
                />
                {product.category && (
                  <div className="product-category">{product.category}</div>
                )}
              </div>
              <div className="product-content">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <ul className="product-features">
                  {product.features.map((feature: string, idx: number) => (
                    <li key={idx}>
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className="product-btn"
                  onClick={() => handleButtonClick(`Try ${product.title}`)}
                >
                  Try Simulation
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="process-section">
          <div className="process-header">
            <h2>How Vignam Works</h2>
            <p>Get started with scientific simulations in four simple steps</p>
          </div>
          <div className="process-grid">
            {processes.map((process: Process, index: number) => (
              <div key={index} className="process-step">
                <div className="step-container">
                  <div className="step-number">{process.step}</div>
                  {process.icon && (
                    <div className="step-icon">{process.icon}</div>
                  )}
                </div>
                <h3>{process.title}</h3>
                <p>{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h2>Ready to Transform Your Learning?</h2>
            <p>Join thousands of educators and researchers using Vignam for interactive scientific simulations</p>
            <div className="cta-stats">
              <div className="stat">
                <span className="stat-number">10,000+</span>
                <span className="stat-label">Active Users</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Simulations</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Universities</span>
              </div>
            </div>
          </div>
          <div className="cta-buttons">
            {ctaButtons.map((button: CTAButton, index: number) => (
              <button 
                key={index}
                className={button.className}
                onClick={button.onClick}
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductSection
