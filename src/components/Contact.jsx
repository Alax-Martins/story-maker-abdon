import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSuccess(false), 4000)
  }

  return (
    <section id="contato" className="py-24 px-6 bg-offwhite">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-mocha font-light tracking-[0.25em] uppercase text-xs mb-3">Próximo passo</p>
        <h2 className="font-serif-main text-4xl sm:text-5xl font-semibold text-espresso mb-6">
          Vamos criar juntos?
        </h2>
        <p className="text-mocha/70 font-light mb-10 leading-relaxed">
          Me conta sobre o seu projeto e vamos transformar seus stories em uma experiência incrível para o seu público.
        </p>

        <form onSubmit={handleSubmit} className="text-left space-y-5">
          <div>
            <label className="block text-xs font-medium tracking-wider uppercase text-mocha/70 mb-2">Nome</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Seu nome"
              className="w-full px-5 py-3.5 rounded-xl bg-cream border border-sand/60 text-espresso placeholder-mocha/40 font-light focus:outline-none focus:border-mocha transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium tracking-wider uppercase text-mocha/70 mb-2">E-mail</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="seu@email.com"
              className="w-full px-5 py-3.5 rounded-xl bg-cream border border-sand/60 text-espresso placeholder-mocha/40 font-light focus:outline-none focus:border-mocha transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium tracking-wider uppercase text-mocha/70 mb-2">Mensagem</label>
            <textarea
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Conte sobre seu projeto..."
              className="w-full px-5 py-3.5 rounded-xl bg-cream border border-sand/60 text-espresso placeholder-mocha/40 font-light focus:outline-none focus:border-mocha transition-colors resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full bg-espresso text-offwhite py-4 rounded-xl font-medium tracking-wider uppercase text-sm flex items-center justify-center gap-2"
          >
            <Send size={16} />
            Enviar Mensagem
          </button>

          {success && (
            <div className="text-center py-4 rounded-xl bg-sand/40 text-mocha font-light text-sm">
              ✦ Mensagem enviada com sucesso! Entrarei em contato em breve.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}