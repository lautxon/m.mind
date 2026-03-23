import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Play, Disc } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power3.out',
      })

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      })

      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1.5,
        delay: 0.5,
        ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      id="inicio" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-blue-950 via-deep-blue-900 to-deep-blue-950" />
      
      {/* Content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-accent-glow bg-clip-text text-transparent">
              M.MIND
            </span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed"
          >
            Cantautor independiente. 
            <span className="text-accent-glow"> Historias en canciones</span>, 
            <span className="text-accent-glow"> alma en cada verso</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#nuevo-disco"
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-accent-glow to-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-blue-500/30"
            >
              <Disc className="w-5 h-5" />
              Nuevo Álbum
            </a>
            <a
              href="#tour"
              className="flex items-center justify-center gap-2 border border-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:border-accent-glow hover:text-accent-glow transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              Ver Tour
            </a>
          </div>
        </div>

        {/* Artist Image */}
        <div 
          ref={imageRef}
          className="relative"
        >
          <div className="aspect-[3/4] rounded-2xl overflow-hidden grayscale contrast-125">
            <img
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=800&fit=crop&sat=-100"
              alt="M.MIND - Cantautor"
              className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-deep-blue-950 via-transparent to-transparent rounded-2xl" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-accent-glow rounded-full" />
        </div>
      </div>
    </section>
  )
}
