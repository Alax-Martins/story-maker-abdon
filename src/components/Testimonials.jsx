import { Star } from 'lucide-react'

const testimonials = [
  {
    text: 'Meus stories nunca mais foram os mesmos. O engajamento triplicou e as vendas pelo Instagram cresceram 40%!',
    author: 'Juliana Mendes',
    client: '@marca.beauty',
  },
  {
    text: 'Profissionalismo impecável. Entregou exatamente a identidade que eu queria para minha marca nos stories.',
    author: 'Rafael Costa',
    client: '@studio.co',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-mocha font-light tracking-[0.25em] uppercase text-xs mb-3">Feedback</p>
          <h2 className="font-serif-main text-4xl sm:text-5xl font-semibold text-espresso">Depoimentos</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <div key={item.author} className="testimonial-card bg-offwhite rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#8B7355" className="text-mocha" />
                ))}
              </div>

              <p className="text-mocha/80 font-light italic leading-relaxed mb-6">"{item.text}"</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center">
                  <span className="font-serif-main text-sm font-semibold text-espresso">
                    {item.author.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-espresso">{item.author}</p>
                  <p className="text-xs text-mocha/60 font-light">{item.client}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}