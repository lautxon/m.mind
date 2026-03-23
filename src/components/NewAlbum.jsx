import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Play, Disc3, FileText, Sparkles } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const tracks = [
  { number: '01', title: 'Ecos del Silencio', duration: '4:23', excerpt: 'Un viaje introspectivo sobre la soledad y el autodescubrimiento.' },
  { number: '02', title: 'Lluvia de Noviembre', duration: '3:45', excerpt: 'Melancolía urbana capturada en acordes menores.' },
  { number: '03', title: 'Raíces', duration: '5:12', excerpt: 'Conexión con los orígenes y la tierra que nos vio nacer.' },
  { number: '04', title: 'Horizontes', duration: '4:01', excerpt: 'Esperanza y renovación al amanecer.' },
]

const compositionNotes = `
  Este álbum nació durante las largas noches de invierno, cuando el silencio de la ciudad 
  se convertía en mi único compañero. Cada canción es un fragmento de ese tiempo suspendido, 
  un diálogo entre la guitarra y el alma.
  
  Las composiciones mezclan folk contemporáneo con elementos de música ambiental, creando 
  paisajes sonoros que invitan a la reflexión.
`

export default function NewAlbum() {
  const containerRef = useRef(null)
  const albumRef = useRef(null)
  const notesRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(albumRef.current, {
        scrollTrigger: {
          trigger: albumRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      })

      gsap.from(notesRef.current, {
        scrollTrigger: {
          trigger: notesRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      id="nuevo-disco"
      ref={containerRef}
      className="py-24 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent-glow uppercase tracking-widest text-sm">Nuevo Lanzamiento</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            <span className="bg-gradient-to-r from-white to-accent-glow bg-clip-text text-transparent">
              Ecos del Tiempo
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Disponible en todas las plataformas digitales
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Album Cover */}
          <div ref={albumRef} className="space-y-8">
            <div className="aspect-square rounded-2xl overflow-hidden grayscale contrast-125 shadow-2xl shadow-blue-500/20">
              <img
                src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=600&h=600&fit=crop&sat=-100"
                alt="Ecos del Tiempo - Álbum"
                className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Tracklist */}
            <div className="bg-deep-blue-700/30 backdrop-blur-sm rounded-2xl p-6 border border-deep-blue-600">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Disc3 className="w-5 h-5 text-accent-glow" />
                Lista de Canciones
              </h3>
              <div className="space-y-4">
                {tracks.map((track) => (
                  <div 
                    key={track.number}
                    className="group flex items-center gap-4 p-3 rounded-xl hover:bg-deep-blue-600/50 transition-all cursor-pointer"
                  >
                    <span className="text-accent-glow font-mono text-sm">{track.number}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white group-hover:text-accent-glow transition-colors">
                        {track.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{track.excerpt}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 text-sm">{track.duration}</span>
                      <button className="w-10 h-10 rounded-full bg-deep-blue-600 flex items-center justify-center group-hover:bg-accent-glow transition-colors">
                        <Play className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Composition Notes */}
          <div ref={notesRef} className="bg-deep-blue-700/30 backdrop-blur-sm rounded-2xl p-8 border border-deep-blue-600">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-accent-glow" />
              Notas de Composición
            </h3>
            
            <div className="prose prose-invert max-w-none">
              {compositionNotes.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-400 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-deep-blue-600">
              <div className="flex items-start gap-3 p-4 bg-deep-blue-800/50 rounded-xl">
                <Sparkles className="w-5 h-5 text-accent-glow flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Proceso Creativo</h4>
                  <p className="text-sm text-gray-400">
                    Grabado de forma independiente durante 2025. Producción artesanal 
                    con equipamiento analógico y digital, buscando capturar la esencia 
                    íntima de cada composición.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
