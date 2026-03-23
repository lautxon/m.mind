import { Music, Mail, Globe, Video, Headphones } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-deep-blue-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Bio */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <Music className="w-6 h-6 text-accent-glow" />
              <span className="text-lg font-bold bg-gradient-to-r from-white to-accent-glow bg-clip-text text-transparent">
                M.MIND
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cantautor independiente creando historias en canciones. 
              Cada álbum es un viaje, cada concierto una experiencia única.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#nuevo-disco" className="text-gray-400 hover:text-accent-glow transition-colors">Nuevo Álbum</a></li>
              <li><a href="#tour" className="text-gray-400 hover:text-accent-glow transition-colors">Tour 2026</a></li>
              <li><a href="#media" className="text-gray-400 hover:text-accent-glow transition-colors">Media</a></li>
              <li><a href="#merch" className="text-gray-400 hover:text-accent-glow transition-colors">Tienda</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Seguime</h4>
            <div className="flex items-center gap-4 mb-4">
              <a href="#" className="w-10 h-10 rounded-full bg-deep-blue-700 flex items-center justify-center text-gray-400 hover:text-accent-glow hover:bg-deep-blue-600 transition-all">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-deep-blue-700 flex items-center justify-center text-gray-400 hover:text-accent-glow hover:bg-deep-blue-600 transition-all">
                <Video className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-deep-blue-700 flex items-center justify-center text-gray-400 hover:text-accent-glow hover:bg-deep-blue-600 transition-all">
                <Headphones className="w-5 h-5" />
              </a>
              <a href="mailto:contacto@mmind.com" className="w-10 h-10 rounded-full bg-deep-blue-700 flex items-center justify-center text-gray-400 hover:text-accent-glow hover:bg-deep-blue-600 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              contacto@mmind.com
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-deep-blue-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 M.MIND. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Diseño y desarrollo artesanal.
          </p>
        </div>
      </div>
    </footer>
  )
}
