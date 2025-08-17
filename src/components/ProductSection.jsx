import React from 'react'
import '../styles/productSection.css'

const ProductSection = () => {
  const products = [
    {
      title: 'Precision Brackets',
      description: 'Custom-engineered brackets for any application',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=300&h=200&fit=crop&crop=center',
      features: ['Aluminum & Steel', 'Custom Finishes', '±0.005" Tolerance']
    },
    {
      title: 'Motor Mounts',
      description: 'High-strength motor mounting solutions',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=200&fit=crop&crop=center',
      features: ['Vibration Dampening', 'Multiple Materials', 'Quick Delivery']
    },
    {
      title: 'Custom Enclosures',
      description: 'Protective housings for electronic components',
      image: 'https://images.unsplash.com/photo-1581092786450-7103d47117ab?w=300&h=200&fit=crop&crop=center',
      features: ['IP Rated Options', 'EMI Shielding', 'Custom Cutouts']
    }
  ]

  const processes = [
    {
      step: '01',
      title: 'Upload Design',
      description: 'Upload your CAD files and get instant pricing'
    },
    {
      step: '02',
      title: 'Manufacturing',
      description: 'We machine your parts with precision CNC equipment'
    },
    {
      step: '03',
      title: 'Quality Check',
      description: 'Every part is inspected before shipping'
    },
    {
      step: '04',
      title: 'Fast Delivery',
      description: 'Parts shipped as fast as next day'
    }
  ]

  return (
    <section className="product-section">
      <div className="container">
        <div className="products-header">
          <h2>Our Manufacturing Capabilities</h2>
          <p>From prototypes to production runs, we deliver precision parts with speed and quality</p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-content">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <ul className="product-features">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="process-section">
          <h2>How It Works</h2>
          <div className="process-grid">
            {processes.map((process, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{process.step}</div>
                <h3>{process.title}</h3>
                <p>{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Upload your design and get instant pricing for your custom parts</p>
          <div className="cta-buttons">
            <button className="btn-primary">Get Instant Quote</button>
            <button className="btn-secondary">View Material Library</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductSection
