// components/VideoSection.jsx
import React from 'react'
import '../styles/videoSection.css'

// Image with fallback handling
const ImageWithFallback = ({ src, alt, className, fallbackSrc }) => {
  const [imgSrc, setImgSrc] = React.useState(src)
  const [hasError, setHasError] = React.useState(false)

  const handleError = () => {
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

const VideoSection = () => {
  // Fixed working image URLs for precision parts
const showcaseParts = [
  {
    src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=120&q=80",
    alt: "Precision Part 1"  // ← NEW URL
  },
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=120&q=80",
    alt: "Precision Part 2"  // ← SAME
  },
  {
    src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=120&q=80",
    alt: "Precision Part 3"  // ← SAME
  },
  {
    src: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=120&q=80",
    alt: "Precision Part 4"  // ← NEW URL
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=120&q=80",
    alt: "Customer Enclosure"  // ← NEW URL
  }
]
  return (
    <section className="video-section">
      <div className="container">
        <h2>Precision CNC Parts Shipped as Fast as Tomorrow</h2>
        
        <div className="parts-showcase">
          {showcaseParts.map((part, index) => (
            <div key={index} className="part-item showcase-part">
              <ImageWithFallback
                src={part.src}
                alt={part.alt}
                className="showcase-img"
              />
              <div className="part-overlay">
                <span>{part.alt}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="video-content">
          <p>Upload your CAD file, and we'll take care of machining, finishing, and shipping—accurate parts delivered fast, no stress</p>
          
          <div className="video-container">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/E1czmX6bjFA?t=10"
              title="Vignam Text to Simulations"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <button className="upload-btn">
            <span className="upload-icon">📤</span>
            UPLOAD YOUR DESIGN
          </button>
        </div>

        <div className="stats">
          <div className="stat">
            <div className="stat-number">12+</div>
            <div className="stat-label">YEARS OF DELIVERING PERFECT DETAILS</div>
          </div>
          <div className="stat">
            <div className="stat-number">OVER 100,000</div>
            <div className="stat-label">PARTS MANUFACTURED ANNUALLY</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
