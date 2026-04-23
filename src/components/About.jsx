import { Camera } from 'lucide-react'

export default function About() {
  return (
    <section id="sobre" className="py-24 px-6 bg-offwhite">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="w-full aspect-4/5 rounded-2xl bg-linear-to-br from-sand via-warm to-mocha/30 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-offwhite/90">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-offwhite/20 flex items-center justify-center">
                  <Camera size={40} />
                </div>
                <p className="font-serif-main text-xl italic">Sua foto aqui</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-mocha font-light tracking-[0.25em] uppercase text-xs mb-3">Sobre mim</p>
          <h2 className="font-serif-main text-4xl sm:text-5xl font-semibold mb-6 text-espresso">
            Olá, prazer!
          </h2>
          <p className="text-mocha/80 font-light leading-relaxed mb-6">
            Sou Story Maker e ajudo marcas a se posicionarem no digital através de stories autênticos e estratégicos.
            Meu trabalho une design, copywriting e storytelling para criar conteúdos que geram conexão real com o público.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-10">
            <div className="text-center">
              <p className="font-serif-main text-3xl font-semibold text-espresso">150+</p>
              <p className="text-xs text-mocha/60 font-light mt-1 uppercase tracking-wider">Clientes</p>
            </div>
            <div className="text-center">
              <p className="font-serif-main text-3xl font-semibold text-espresso">3k+</p>
              <p className="text-xs text-mocha/60 font-light mt-1 uppercase tracking-wider">Stories</p>
            </div>
            <div className="text-center">
              <p className="font-serif-main text-3xl font-semibold text-espresso">5+</p>
              <p className="text-xs text-mocha/60 font-light mt-1 uppercase tracking-wider">Anos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}