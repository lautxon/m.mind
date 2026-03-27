import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ShoppingBag, Shirt, Image, ScrollText, CreditCard } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const merchItems = [
  {
    id: 1,
    name: 'Remera "Ecos del Tiempo"',
    type: 'Indumentaria',
    price: '€25',
    icon: Shirt,
    description: 'Algodón 100%. Diseño con arte del álbum.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop&sat=-100',
  },
  {
    id: 2,
    name: 'Poster Firmado',
    type: 'Coleccionable',
    price: '€15',
    icon: Image,
    description: 'Poster A3 con firma autógrafa. Edición limitada.',
    image: 'https://images.unsplash.com/photo-1534126511673-b6899657816a?w=400&h=500&fit=crop&sat=-100',
  },
  {
    id: 3,
    name: 'Vinilo "Ecos del Tiempo"',
    type: 'Música',
    price: '€35',
    icon: ShoppingBag,
    description: 'Edición en vinilo negro. Incluye descarga digital.',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&h=500&fit=crop&sat=-100',
  },
  {
    id: 4,
    name: 'Ilustración Original',
    type: 'Arte',
    price: '€80',
    icon: Image,
    description: 'Ilustración hecha a mano por el artista. Única.',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=500&fit=crop&sat=-100',
  },
  {
    id: 5,
    name: 'Hoodie Tour 2026',
    type: 'Indumentaria',
    price: '€45',
    icon: Shirt,
    description: 'Sudadera con capucha. Fechas del tour en la espalda.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop&sat=-100',
  },
  {
    id: 6,
    name: 'Libro de Letras',
    type: 'Coleccionable',
    price: '€20',
    icon: ScrollText,
    description: 'Letras anotadas y proceso creativo de cada canción.',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=500&fit=crop&sat=-100',
  },
]

const MERCADO_PAGO_URL = 'https://www.mercadopago.com.ar'

export default function Merchandise() {
  const containerRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
          },
          opacity: 0,
          y: 40,
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
      id="merch"
      ref={containerRef}
      className="py-24 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent-glow uppercase tracking-widest text-sm flex items-center justify-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            Tienda Oficial
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            <span className="bg-gradient-to-r from-white to-accent-glow bg-clip-text text-transparent">
              Merchandising
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Ilustraciones, indumentaria y coleccionables exclusivos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (itemsRef.current[index] = el)}
              className="group bg-deep-blue-700/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-deep-blue-600 hover:border-accent-glow/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden grayscale contrast-125">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute top-3 right-3 bg-deep-blue-900/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-accent-glow font-semibold">{item.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-xs text-accent-glow uppercase tracking-wider">
                  {item.type}
                </span>
                <h3 className="text-lg font-bold mt-2 mb-2 text-white">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {item.description}
                </p>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent-glow to-blue-500 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-blue-400 transition-all duration-300">
                    <ShoppingBag className="w-4 h-4" />
                    Comprar
                  </button>
                  <a
                    href={MERCADO_PAGO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#009EE3] py-3 rounded-xl font-semibold hover:bg-[#0088cc] transition-all duration-300"
                  >
                    <CreditCard className="w-4 h-4" />
                    Pagar con Mercado Pago
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
