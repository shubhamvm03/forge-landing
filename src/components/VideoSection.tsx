import React, { FC, useState, useMemo } from 'react'
import '../styles/videoSection.css'

// Type definitions
interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  fallbackSrc?: string
}

interface ShowcasePart {
  src: string
  alt: string
  category?: string
}

interface Statistic {
  number: string
  label: string
  icon?: string
}

// Image with fallback handling component
const ImageWithFallback: FC<ImageWithFallbackProps> = ({ src, alt, className, fallbackSrc }) => {
  const [imgSrc, setImgSrc] = useState<string>(src)
  const [hasError, setHasError] = useState<boolean>(false)

  const handleError = (): void => {
    if (!hasError) {
      setHasError(true)
      setImgSrc(fallbackSrc || `https://via.placeholder.com/120x120/667eea/white?text=${encodeURIComponent(alt)}`)
    }
  }

  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      className={className}
      onError={handleError}
      loading="lazy"
    />
  )
}

const VideoSection: FC = () => {
  // Updated showcase for scientific simulations
  const showcaseParts: ShowcasePart[] = useMemo(() => [
    {
      src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=120&q=80",
      alt: "Physics Simulation",
      category: "Physics"
    },
    {
      src: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?auto=format&fit=crop&w=120&q=80",
      alt: "Chemistry Model",
      category: "Chemistry"
    },
    {
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=120&q=80",
      alt: "Biology System",
      category: "Biology"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
      alt: "Math Visualization",
      category: "Mathematics"
    },
    {
      src: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=120&q=80",
      alt: "Engineering Model",
      category: "Engineering"
    }
  ], [])

  // Updated statistics for simulation platform
  const statistics: Statistic[] = useMemo(() => [
    {
      number: "10,000+",
      label: "ACTIVE LEARNERS WORLDWIDE",
      icon: "👥"
    },
    {
      number: "500+",
      label: "INTERACTIVE SIMULATIONS",
      icon: "🔬"
    },
    {
      number: "50+",
      label: "PARTNER UNIVERSITIES",
      icon: "🎓"
    }
  ], [])

  // Handle button click with proper typing
  const handleStartLearning = (): void => {
    console.log('Starting learning journey...')
    // Add navigation logic here
  }

  return (
    <section className="video-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Featured</span>
          <h2>Interactive Scientific Simulations at Your Fingertips</h2>
          <p className="section-subtitle">
            Explore our comprehensive library of educational simulations designed by experts
          </p>
        </div>
        
        {/* Showcase Grid */}
        <div className="parts-showcase">
          {showcaseParts.map((part: ShowcasePart, index: number) => (
            <div key={index} className="part-item showcase-part">
              <ImageWithFallback
                src={part.src}
                alt={part.alt}
                className="showcase-img"
                fallbackSrc={`https://via.placeholder.com/120x120/667eea/white?text=${encodeURIComponent(part.category || 'Sim')}`}
              />
              <div className="part-overlay">
                <span className="part-title">{part.alt}</span>
                {part.category && (
                  <span className="part-category">{part.category}</span>
                )}
              </div>
              <div className="hover-effect">
                <button className="quick-view-btn">
                  🔍 Quick View
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Video Content */}
        <div className="video-content">
          <div className="video-intro">
            <h3>See Vignam in Action</h3>
            <p>
              Discover how our text-to-simulation technology transforms complex scientific concepts 
              into interactive learning experiences that engage and educate.
            </p>
          </div>
          
          <div className="video-container">
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/E1czmX6bjFA?t=10"
                title="Vignam Text to Simulations - Interactive Scientific Learning"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-info">
              <div className="video-meta">
                <span className="video-duration">3:45</span>
                <span className="video-views">25K views</span>
              </div>
            </div>
          </div>

          <div className="action-section">
            <button 
              className="start-learning-btn"
              onClick={handleStartLearning}
            >
              <span className="btn-icon">🚀</span>
              <span className="btn-text">Start Learning Today</span>
            </button>
            <p className="action-note">
              Join thousands of students and educators transforming science education
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="stats">
          {statistics.map((stat: Statistic, index: number) => (
            <div key={index} className="stat">
              <div className="stat-container">
                {stat.icon && (
                  <div className="stat-icon">{stat.icon}</div>
                )}
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bottom-cta">
          <h3>Ready to Transform Your Teaching?</h3>
          <p>Get started with our free trial and explore unlimited simulations</p>
          <div className="cta-buttons">
            <button className="btn-primary">Free Trial</button>
            <button className="btn-secondary">Schedule Demo</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
