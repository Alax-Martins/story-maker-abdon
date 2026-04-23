import { Sparkles } from 'lucide-react'

export default function Hero() {
  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-24 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-warm/20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-sand/40 blur-2xl animate-pulse"></div>

      <div className="max-w-3xl text-center relative z-10">
        <p className="text-mocha font-light tracking-[0.3em] uppercase text-sm mb-6">
          ✦ Story Maker ✦
        </p>

        <h1 className="font-serif-main text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight mb-6 text-espresso">
          Sua marca merece
          <br />
          uma boa história
        </h1>

        <p className="text-mocha font-light text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Crio stories que conectam, encantam e convertem — com estética e estratégia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => goTo('contato')}
            className="btn-primary inline-flex items-center justify-center gap-2 bg-espresso text-offwhite px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase"
          >
            <Sparkles size={16} />
            <span>Vamos Conversar</span>
          </button>

          <button
            onClick={() => goTo('portfolio')}
            className="inline-flex items-center justify-center gap-2 border border-mocha/40 text-mocha px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase hover:bg-sand/30 transition-all"
          >
            Ver Portfólio
          </button>
        </div>
      </div>
    </section>
  )
}