import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Calendar, Ticket, CheckCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const shows = [
  {
    date: '15 ABR 2026',
    venue: 'Teatro Gran Rex',
    city: 'Buenos Aires, AR',
    price: '$25.000',
    ticketsAvailable: true,
    ticketsLeft: 47,
  },
  {
    date: '22 ABR 2026',
    venue: 'Auditorio Nacional',
    city: 'Ciudad de México, MX',
    price: '$850 MXN',
    ticketsAvailable: true,
    ticketsLeft: 120,
  },
  {
    date: '05 MAY 2026',
    venue: 'WiZink Center',
    city: 'Madrid, ES',
    price: '€35',
    ticketsAvailable: true,
    ticketsLeft: 12,
  },
  {
    date: '12 MAY 2026',
    venue: 'Olympia',
    city: 'París, FR',
    price: '€40',
    ticketsAvailable: true,
    ticketsLeft: 8,
  },
  {
    date: '20 MAY 2026',
    venue: 'Roundhouse',
    city: 'Londres, UK',
    price: '£35',
    ticketsAvailable: false,
    ticketsLeft: 0,
  },
  {
    date: '03 JUN 2026',
    venue: 'El Convento',
    city: 'Santiago, CL',
    price: '$30.000 CLP',
    ticketsAvailable: true,
    ticketsLeft: 200,
  },
]

export default function Tour() {
  const containerRef = useRef(null)
  const showsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      showsRef.current.forEach((show, index) => {
        gsap.from(show, {
          scrollTrigger: {
            trigger: show,
            start: 'top 90%',
          },
          opacity: 0,
          x: -30,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      id="tour"
      ref={containerRef}
      className="py-24 px-6 relative"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent-glow uppercase tracking-widest text-sm">Tour 2026</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            <span className="bg-gradient-to-r from-white to-accent-glow bg-clip-text text-transparent">
              Presentación del Disco
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            "Ecos del Tiempo" en vivo. Una experiencia íntima y única.
          </p>
        </div>

        <div className="space-y-4">
          {shows.map((show, index) => (
            <div
              key={show.date + show.city}
              ref={(el) => (showsRef.current[index] = el)}
              className="group bg-deep-blue-700/30 backdrop-blur-sm rounded-xl p-6 border border-deep-blue-600 hover:border-accent-glow/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                {/* Date */}
                <div className="flex items-center gap-3 md:w-40">
                  <Calendar className="w-5 h-5 text-accent-glow flex-shrink-0" />
                  <span className="font-mono text-white font-semibold">{show.date}</span>
                </div>

                {/* Venue & City */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <h3 className="font-semibold text-white group-hover:text-accent-glow transition-colors">
                      {show.venue}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm pl-6">{show.city}</p>
                </div>

                {/* Price & Tickets */}
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <span className="text-accent-glow font-semibold text-lg">{show.price}</span>
                    {show.ticketsAvailable ? (
                      <p className="text-xs text-green-400 mt-1">
                        {show.ticketsLeft < 20 ? (
                          <span className="flex items-center gap-1 justify-end">
                            <CheckCircle className="w-3 h-3" />
                            ¡Últimos {show.ticketsLeft}!
                          </span>
                        ) : (
                          'Disponible'
                        )}
                      </p>
                    ) : (
                      <p className="text-xs text-red-400 mt-1">Agotado</p>
                    )}
                  </div>

                  <button
                    disabled={!show.ticketsAvailable}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                      show.ticketsAvailable
                        ? 'bg-gradient-to-r from-accent-glow to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-deep-blue-800 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <Ticket className="w-4 h-4" />
                    {show.ticketsAvailable ? 'Entradas' : 'Agotado'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
