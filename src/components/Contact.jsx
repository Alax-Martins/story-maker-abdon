import { useState } from 'react'
import { Send, Camera, MessageCircle, Mail, ArrowLeft } from 'lucide-react'

const CHANNELS = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    icon: MessageCircle,
    bg: 'bg-[#25D366]',
    hover: 'hover:bg-[#1ebe5d]',
    buildUrl: ({ name, message }) => {
      const text = `Olá! Sou ${name}.\n\n${message}`
      return `https://api.whatsapp.com/send?phone=5561999081931&text=${encodeURIComponent(text)}`
    },
  },

  {
    id: 'email',
    label: 'E-mail',
    icon: Mail,
    bg: 'bg-[#2C1A0E] ',
    hover: 'hover:opacity-90',
    buildUrl: ({ name, email, message }) => {
      const subject = `Contato de ${name}`
      const body = `Olá!\n\nMeu nome é ${name} e meu e-mail é ${email}.\n\n${message}`
      return `https://mail.google.com/mail/?view=cm&fs=1&to=anajuliaabdonstorymaker@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    },
  },

  {
    id: 'instagram',
    label: 'Instagram',
    icon: Camera,
    bg: 'bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
    hover: 'hover:opacity-90',
    buildUrl: () => `https://www.instagram.com/anaabdon.storymaker`,
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [step, setStep] = useState('form') // 'form' | 'choose' | 'sent'

  const handleSubmit = (e) => {
    e.preventDefault()
    setStep('choose')
  }

  const handleSend = (channel) => {
    const url = channel.buildUrl(formData)
    window.open(url, '_blank', 'noopener,noreferrer')
    setStep('sent')
    setTimeout(() => {
      setStep('form')
      setFormData({ name: '', email: '', message: '' })
    }, 5000)
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

        {/* STEP 1 — formulário */}
        {step === 'form' && (
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
          </form>
        )}

        {/* STEP 2 — escolher canal */}
        {step === 'choose' && (
          <div className="text-left space-y-6">
            {/* Resumo da mensagem */}
            <div className="rounded-2xl bg-sand/30 border border-sand/60 px-6 py-5">
              <p className="text-xs font-medium tracking-wider uppercase text-mocha/50 mb-2">Sua mensagem</p>
              <p className="text-espresso font-light text-sm">
                <span className="font-medium">{formData.name}</span> · {formData.email}
              </p>
              <p className="text-mocha/60 font-light text-sm mt-1 line-clamp-2">{formData.message}</p>
            </div>

            {/* Botões de canal */}
            <div>
              <p className="text-xs font-medium tracking-wider uppercase text-mocha/70 mb-4 text-center">
                Por onde quer enviar?
              </p>
              <div className="grid grid-cols-3 gap-3">
                {CHANNELS.map((ch) => {
                  const Icon = ch.icon
                  return (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => handleSend(ch)}
                      className={`${ch.bg} ${ch.hover} text-white flex flex-col items-center gap-2.5 py-5 px-3 rounded-2xl font-medium tracking-wider uppercase text-xs transition-all duration-200 shadow-sm`}
                    >
                      <Icon size={22} />
                      {ch.label}
                    </button>
                  )
                })}
              </div>
              <p className="text-center text-xs text-mocha/40 font-light mt-4 leading-relaxed">
                ✦ Instagram abrirá seu perfil — envie uma DM com sua mensagem.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setStep('form')}
              className="flex items-center gap-1.5 text-mocha/50 hover:text-mocha text-xs font-light tracking-wider uppercase transition-colors mx-auto"
            >
              <ArrowLeft size={13} /> Editar mensagem
            </button>
          </div>
        )}

        {/* STEP 3 — enviado */}
        {step === 'sent' && (
          <div className="py-16 flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-sand/40 flex items-center justify-center text-2xl">✦</div>
            <p className="text-espresso font-semibold text-lg">Você foi redirecionada!</p>
            <p className="text-mocha/50 font-light text-sm text-center leading-relaxed max-w-xs">
              Caso a janela não tenha aberto, verifique o bloqueador de pop-ups do seu navegador.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}