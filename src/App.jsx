import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Music, Menu, X } from 'lucide-react'
import Hero from './components/Hero'
import NewAlbum from './components/NewAlbum'
import Tour from './components/Tour'
import Media from './components/Media'
import FanZone from './components/FanZone'
import Merchandise from './components/Merchandise'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    gsap.to(navRef.current, {
      scrollTrigger: {
        trigger: navRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      backgroundColor: 'rgba(5, 8, 16, 0.95)',
      backdropFilter: 'blur(10px)',
    })
  }, [])

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nuevo Disco', href: '#nuevo-disco' },
    { name: 'Tour', href: '#tour' },
    { name: 'Media', href: '#media' },
    { name: 'Fans', href: '#fans' },
    { name: 'Merch', href: '#merch' },
  ]

  return (
    <div className="relative">
      {/* Navigation */}
      <nav 
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 text-xl font-bold">
              <Music className="w-8 h-8 text-accent-glow" />
              <span className="bg-gradient-to-r from-white to-accent-glow bg-clip-text text-transparent">
                M.MIND
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-accent-glow transition-colors duration-300 text-sm uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-deep-blue-800/95 backdrop-blur-lg border-t border-deep-blue-600">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-accent-glow transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <NewAlbum />
        <Tour />
        <Media />
        <FanZone />
        <Merchandise />
      </main>

      <Footer />
    </div>
  )
}

export default App
