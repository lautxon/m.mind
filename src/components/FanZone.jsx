import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MessageCircle, Heart, Send, Music } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const initialComments = [
  {
    id: 1,
    user: 'María G.',
    avatar: 'M',
    comment: 'Tu canción "Raíces" me hizo llorar. Gracias por poner en palabras lo que siento.',
    song: 'Raíces',
    likes: 24,
    date: '2 días atrás',
  },
  {
    id: 2,
    user: 'Carlos R.',
    avatar: 'C',
    comment: '¿Cuándo vas a sacar el video completo de "Horizontes"? Estoy ansioso!',
    song: 'Horizontes',
    likes: 18,
    date: '5 días atrás',
  },
  {
    id: 3,
    user: 'Ana P.',
    avatar: 'A',
    comment: 'El concierto en Madrid fue inolvidable. ¿Vas a volver a España este año?',
    song: 'Presentación en vivo',
    likes: 31,
    date: '1 semana atrás',
  },
]

export default function FanZone() {
  const containerRef = useRef(null)
  const formRef = useRef(null)
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState({ user: '', comment: '', song: '' })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newComment.user || !newComment.comment) return

    const comment = {
      id: Date.now(),
      user: newComment.user,
      avatar: newComment.user.charAt(0).toUpperCase(),
      comment: newComment.comment,
      song: newComment.song || 'General',
      likes: 0,
      date: 'Ahora mismo',
    }

    setComments([comment, ...comments])
    setNewComment({ user: '', comment: '', song: '' })
  }

  const handleLike = (id) => {
    setComments(comments.map(c => 
      c.id === id ? { ...c, likes: c.likes + 1 } : c
    ))
  }

  return (
    <section 
      id="fans"
      ref={containerRef}
      className="py-24 px-6 relative"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent-glow uppercase tracking-widest text-sm flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Comunidad
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            <span className="bg-gradient-to-r from-white to-accent-glow bg-clip-text text-transparent">
              Zona de Fans
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Preguntas, comentarios y mensajes sobre las canciones y presentaciones.
          </p>
        </div>

        {/* Comment Form */}
        <div 
          ref={formRef}
          className="bg-deep-blue-700/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-deep-blue-600 mb-12"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-accent-glow" />
            Deja tu mensaje
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Tu nombre</label>
                <input
                  type="text"
                  value={newComment.user}
                  onChange={(e) => setNewComment({ ...newComment, user: e.target.value })}
                  className="w-full bg-deep-blue-800 border border-deep-blue-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-glow transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Canción (opcional)</label>
                <input
                  type="text"
                  value={newComment.song}
                  onChange={(e) => setNewComment({ ...newComment, song: e.target.value })}
                  className="w-full bg-deep-blue-800 border border-deep-blue-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-glow transition-colors"
                  placeholder="Ej: Ecos del Silencio"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-2">Tu mensaje</label>
              <textarea
                rows={4}
                value={newComment.comment}
                onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                className="w-full bg-deep-blue-800 border border-deep-blue-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-glow transition-colors resize-none"
                placeholder="Escribe tu pregunta o comentario..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent-glow to-blue-500 py-4 rounded-xl font-semibold hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              <Send className="w-5 h-5" />
              Enviar Mensaje
            </button>
          </form>
        </div>

        {/* Comments List */}
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-deep-blue-700/30 backdrop-blur-sm rounded-xl p-6 border border-deep-blue-600 hover:border-accent-glow/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-glow to-blue-600 flex items-center justify-center font-bold text-white flex-shrink-0">
                  {comment.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-white">{comment.user}</h4>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <Music className="w-3 h-3" />
                        <span>{comment.song}</span>
                        <span>•</span>
                        <span>{comment.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{comment.comment}</p>
                  <button 
                    onClick={() => handleLike(comment.id)}
                    className="flex items-center gap-2 mt-4 text-gray-500 hover:text-accent-glow transition-colors"
                  >
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{comment.likes}</span>
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
