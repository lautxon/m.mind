import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Play, Camera, Film } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const photos = [
  { src: 'https://images.unsplash.com/photo-1470229173992-7e94f0946c6d?w=400&h=500&fit=crop&sat=-100', alt: 'Concierto en vivo' },
  { src: 'https://images.unsplash.com/photo-1533174072545-7f4b6f24b47c?w=400&h=500&fit=crop&sat=-100', alt: 'Sesión de fotos' },
  { src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=500&fit=crop&sat=-100', alt: 'Estudio de grabación' },
  { src: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=500&fit=crop&sat=-100', alt: 'Guitarra acústica' },
  { src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=500&fit=crop&sat=-100', alt: 'DJ set' },
  { src: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=400&h=500&fit=crop&sat=-100', alt: 'Piano en concierto' },
]

const videos = [
  { title: 'Ecos del Silencio - Video Oficial', thumbnail: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=600&h=340&fit=crop&sat=-100', duration: '4:23' },
  { title: 'Lluvia de Noviembre - Live Session', thumbnail: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=340&fit=crop&sat=-100', duration: '3:45' },
  { title: 'Detrás de Escena - Grabación', thumbnail: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600&h=340&fit=crop&sat=-100', duration: '12:30' },
]

export default function Media() {
  const containerRef = useRef(null)
  const photosRef = useRef([])
  const videosRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      photosRef.current.forEach((photo, index) => {
        gsap.from(photo, {
          scrollTrigger: {
            trigger: photo,
            start: 'top 90%',
          },
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
        })
      })

      videosRef.current.forEach((video, index) => {
        gsap.from(video, {
          scrollTrigger: {
            trigger: video,
            start: 'top 90%',
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power3.out',
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      id="media"
      ref={containerRef}
      className="py-24 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Photos Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-accent-glow uppercase tracking-widest text-sm flex items-center justify-center gap-2">
              <Camera className="w-4 h-4" />
              Galería
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              <span className="bg-gradient-to-r from-white to-accent-glow bg-clip-text text-transparent">
                Fotografías
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                ref={(el) => (photosRef.current[index] = el)}
                className="group aspect-[3/4] rounded-xl overflow-hidden grayscale contrast-125 cursor-pointer"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div>
          <div className="text-center mb-12">
            <span className="text-accent-glow uppercase tracking-widest text-sm flex items-center justify-center gap-2">
              <Film className="w-4 h-4" />
              Videos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              <span className="bg-gradient-to-r from-white to-accent-glow bg-clip-text text-transparent">
                Contenido Visual
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                ref={(el) => (videosRef.current[index] = el)}
                className="group bg-deep-blue-700/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-deep-blue-600 hover:border-accent-glow/50 transition-all cursor-pointer"
              >
                <div className="relative aspect-video grayscale contrast-125">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-accent-glow/90 flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs font-mono">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white group-hover:text-accent-glow transition-colors">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
