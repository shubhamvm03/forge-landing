import React, { Suspense, useRef, useEffect, useState, useMemo, FC } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, useProgress, Html } from '@react-three/drei'
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader'
import * as THREE from 'three'
import '../styles/hero.css'

// Type definitions
interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  fallbackSrc?: string
}

interface ServiceItem {
  number: string
  service: string
  icon: string
}

interface PartImage {
  src: string
  alt: string
}

interface CanvasErrorBoundaryState {
  hasError: boolean
}

interface CanvasErrorBoundaryProps {
  children: React.ReactNode
}

// Image with fallback handling
const ImageWithFallback: FC<ImageWithFallbackProps> = ({ src, alt, className, fallbackSrc }) => {
  const [imgSrc, setImgSrc] = useState<string>(src)
  const [hasError, setHasError] = useState<boolean>(false)

  const handleError = (): void => {
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
const Loader: FC = () => {
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

// Enhanced Model Component with proper typing
const Model3D: FC = () => {
  const meshRef = useRef<THREE.Group>(null!)
  const [exrTexture, setExrTexture] = useState<THREE.Texture | null>(null)
  
  // GLTF loading with proper typing
  const gltf = useGLTF('/models/landing_page_motor.glb')

  // Load EXR texture
  useEffect(() => {
    const loader = new EXRLoader()
    loader.load(
      '/textures/metallic-texture.exr',
      (texture: THREE.DataTexture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping
        texture.flipY = false
        setExrTexture(texture)
      },
      undefined,
      (error: unknown) => {
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
      Object.values(gltf.materials).forEach((material: THREE.Material) => {
        if (material instanceof THREE.MeshStandardMaterial || material instanceof THREE.MeshPhysicalMaterial) {
          material.envMap = exrTexture
          material.metalness = 1.0
          material.roughness = 0.1
          material.needsUpdate = true
        }
      })
    }
  }, [exrTexture, gltf?.materials])

  // If GLB model loaded successfully
  if (gltf?.scene) {
    return (
      <primitive 
        ref={meshRef} 
        object={gltf.scene} 
        scale={[1.5, 1.5, 1.5]} 
        position={[0, 0, 0]} 
      />
    )
  }

  // Enhanced fallback - looks like scientific equipment
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

// Error Boundary for Canvas (Class Component with TypeScript)
class CanvasErrorBoundary extends React.Component<CanvasErrorBoundaryProps, CanvasErrorBoundaryState> {
  constructor(props: CanvasErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): CanvasErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log('Canvas Error:', error, errorInfo)
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div className="canvas-fallback">
          <div className="fallback-content">
            <div className="fallback-icon">🔬</div>
            <p>3D Model Loading...</p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Main Hero Component
const Hero: FC = () => {
  // Updated services for Vignam's scientific simulation platform
  const services = useMemo<ServiceItem[]>(() => [
    { number: '01.', service: 'Physics Simulations', icon: '⚡' },
    { number: '02.', service: 'Chemistry Models', icon: '🧪' },
    { number: '03.', service: 'Biology Systems', icon: '🧬' },
    { number: '04.', service: 'Interactive Learning', icon: '🎓' }
  ], [])

  // Updated images for scientific simulations
  const partImages = useMemo<PartImage[]>(() => [
    {
      src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=120&q=80",
      alt: "Physics Simulation"
    },
    {
      src: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?auto=format&fit=crop&w=100&q=80", 
      alt: "Chemistry Lab"
    },
    {
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=100&q=80",
      alt: "Biology Model"
    }
  ], [])

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-left">
          <div className="about-tag">• About •</div>
          <h1 className="hero-title">
            Revolutionizing<br />
            Scientific Learning with<br />
            Interactive <span className="italic">Simulations</span>
          </h1>
          
          <div className="service-list">
            {services.map((service: ServiceItem, index: number) => (
              <div key={index} className="service-item">
                <span className="number">{service.number}</span>
                <span className="service">{service.service}</span>
                <span className="icon">{service.icon}</span>
              </div>
            ))}
          </div>

          <div className="hero-parts">
            <div className="part-images">
              {partImages.map((image: PartImage, index: number) => (
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
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&q=80"
              alt="Dr. Sarah Chen"
              className="profile-img"
              fallbackSrc="https://via.placeholder.com/60x60/667eea/white?text=SC"
            />
            <div className="profile-info">
              <h3>Dr. Sarah Chen</h3>
              <p>Chief Scientific Officer at Vignam</p>
            </div>
          </div>

          <div className="description">
            <p>
              At Vignam, we believe that scientific learning should be interactive, engaging, and accessible to everyone. That's why we built a revolutionary platform that transforms complex scientific concepts into immersive simulations—delivered instantly through any web browser. Whether you're teaching physics, chemistry, or biology, we remove the barriers to understanding so you can focus on inspiring the next generation of scientists.
            </p>
            <p>
              We develop cutting-edge simulation technology backed by advanced algorithms and a comprehensive library of scientific models. From basic physics demonstrations to complex molecular dynamics, our platform delivers accurate, real-time simulations with precision. You can also customize simulations to match your curriculum through our adaptive learning system—your own personalized teaching laboratory, without the equipment costs.
            </p>
          </div>

          <div className="quality-note">
            <small>EVERY SIMULATION MATTERS — WE CRAFT EACH EXPERIENCE WITH SCIENTIFIC ACCURACY, EDUCATIONAL VALUE, AND INTERACTIVE ENGAGEMENT</small>
          </div>

          <div className="canvas-container">
            <CanvasErrorBoundary>
              <Canvas 
                camera={{ position: [0, 0, 5], fov: 50 }}
                onCreated={({ gl }: { gl: THREE.WebGLRenderer }) => {
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
            </CanvasErrorBoundary>
          </div>
        </div>
      </div>
    </section>
  )
}

// Preload the model outside the component to prevent re-loading
useGLTF.preload('/models/landing_page_motor.glb')

export default Hero
