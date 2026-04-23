import { Layers, PenTool, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Layers,
    title: 'Design de Stories',
    text: 'Templates personalizados que traduzem a identidade visual da sua marca em cada frame.',
  },
  {
    icon: PenTool,
    title: 'Copywriting',
    text: 'Textos estratégicos que engajam, geram conexão e levam seu público à ação.',
  },
  {
    icon: BarChart3,
    title: 'Estratégia',
    text: 'Planejamento de conteúdo alinhado aos objetivos do seu negócio e comportamento do público.',
  },
]

export default function Services() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-mocha font-light tracking-[0.25em] uppercase text-xs mb-3">O que faço</p>
          <h2 className="font-serif-main text-4xl sm:text-5xl font-semibold text-espresso">Serviços</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="bg-offwhite rounded-2xl p-8 portfolio-card">
                <div className="w-12 h-12 rounded-full bg-sand flex items-center justify-center mb-5">
                  <Icon size={22} className="text-espresso" />
                </div>
                <h3 className="font-serif-main text-xl font-semibold mb-3 text-espresso">{service.title}</h3>
                <p className="text-mocha/70 font-light text-sm leading-relaxed">{service.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}