// components/Hero.jsx
import React, { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, useProgress, Html } from '@react-three/drei'
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader'
import * as THREE from 'three'
import '../styles/hero.css'

// Image with fallback handling
const ImageWithFallback = ({ src, alt, className, fallbackSrc }) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setImgSrc(fallbackSrc || `https://via.placeholder.com/100x100/667eea/white?text=${encodeURIComponent(alt)}`)
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

// Loading Screen Component
const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <div className="loading-text">
          <p>Loading 3D Model...</p>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p>{Math.round(progress)}%</p>
        </div>
      </div>
    </Html>
  )
}

// Enhanced Model Component
const Model3D = () => {
  const meshRef = useRef()
  const [modelError, setModelError] = useState(false)
  const [exrTexture, setExrTexture] = useState(null)

  // Try to load GLB model with error handling
  let gltf
  try {
    gltf = useGLTF('/models/landing_page_motor.glb')
  } catch (error) {
    console.log('GLB Model failed to load:', error)
    setModelError(true)
  }

  // Load EXR texture
  useEffect(() => {
    const loader = new EXRLoader()
    loader.load(
      '/textures/metallic-texture.exr',
      (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping
        texture.flipY = false
        setExrTexture(texture)
      },
      undefined,
      (error) => {
        console.log('EXR texture failed to load:', error)
      }
    )
  }, [])

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  // Apply EXR texture to materials
  useEffect(() => {
    if (exrTexture && gltf?.materials) {
      Object.values(gltf.materials).forEach((material) => {
        if (material.isMeshStandardMaterial || material.isMeshPhysicalMaterial) {
          material.envMap = exrTexture
          material.metalness = 1.0
          material.roughness = 0.1
          material.needsUpdate = true
        }
      })
    }
  }, [exrTexture, gltf])

  // If GLB model loaded successfully
  if (gltf?.scene && !modelError) {
    return (
      <primitive 
        ref={meshRef} 
        object={gltf.scene} 
        scale={[1.5, 1.5, 1.5]} 
        position={[0, 0, 0]} 
      />
    )
  }

  // Enhanced fallback - looks like industrial machinery
  return (
    <group ref={meshRef}>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 1, 1.5, 8]} />
        <meshStandardMaterial 
          color="#2d3748" 
          metalness={0.9} 
          roughness={0.1}
          envMap={exrTexture}
        />
      </mesh>
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[1.2, 0.3, 1.2]} />
        <meshStandardMaterial 
          color="#4a5568" 
          metalness={0.8} 
          roughness={0.2}
          envMap={exrTexture}
        />
      </mesh>
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[1.1, 1.1, 0.2, 16]} />
        <meshStandardMaterial 
          color="#1a202c" 
          metalness={0.9} 
          roughness={0.1}
          envMap={exrTexture}
        />
      </mesh>
    </group>
  )
}

const Hero = () => {
  const services = [
    { number: '01.', service: 'Custom Brackets', icon: '⚡' },
    { number: '02.', service: 'Steel Adapters', icon: '⚙️' },
    { number: '03.', service: 'Motor Mounts', icon: '🔧' },
    { number: '04.', service: 'Enclosures', icon: '📦' }
  ]

  // Fixed working image URLs for CNC parts
  const partImages = [
   {
    src: "https://picsum.photos/120/120?random=101",
    alt: "CNC Part 1"
  },
    {
      src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=100&q=80", 
      alt: "CNC Part 2"
    },
    {
      src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=100&q=80",
      alt: "CNC Part 3"
    }
  ]

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-left">
          <div className="about-tag">• About •</div>
          <h1 className="hero-title">
            Revolutionizing<br />
            Manufacturing with<br />
            Speed and <span className="italic">Precision</span>
          </h1>
          
          <div className="service-list">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <span className="number">{service.number}</span>
                <span className="service">{service.service}</span>
                <span className="icon">{service.icon}</span>
              </div>
            ))}
          </div>

          <div className="hero-parts">
            <div className="part-images">
              {partImages.map((image, index) => (
                <div key={index} className="part-item">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="part-item-img"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=60&q=80"
              alt="Ayrton Senna"
              className="profile-img"
              fallbackSrc="https://via.placeholder.com/60x60/667eea/white?text=AS"
            />
            <div className="profile-info">
              <h3>Ayrton Senna</h3>
              <p>CEO & Senior Partner at Forge</p>
            </div>
          </div>

          <div className="description">
            <p>
              At Forge, we believe that getting custom CNC parts should be fast, reliable, and effortless. That's why we built a fully streamlined platform that turns your CAD files into production-ready parts—delivered in as fast as one day. Whether you're prototyping or scaling, we remove the friction from manufacturing so you can focus on building what matters.
            </p>
            <p>
              We operate high-performance CNC machines backed by in-house automation and a trusted network of suppliers. From one-off prototypes to small production runs, our system is built to deliver precise, high-quality parts with speed. You can also reserve your own dedicated CNC machine through our RM (Reserved Machines) offering—your own production line, without the overhead.
            </p>
          </div>

          <div className="quality-note">
            <small>EVERY DETAIL MATTERS — WE CRAFT EACH PART WITH CARE, ACCURACY, AND A FINISH THAT FEELS JUST RIGHT</small>
          </div>

          <div className="canvas-container">
            <Canvas 
              camera={{ position: [0, 0, 5], fov: 50 }}
              onCreated={({ gl }) => {
                gl.setClearColor('#f9fafb')
              }}
            >
              <Suspense fallback={<Loader />}>
                <ambientLight intensity={0.6} />
                <pointLight position={[10, 10, 10]} intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={0.4} />
                <Model3D />
                <OrbitControls 
                  enableZoom={false} 
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={1}
                />
                <Environment preset="studio" />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
