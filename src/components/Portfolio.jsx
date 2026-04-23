const items = [
  { title: 'Lançamento', client: '@marca.beauty', bg: 'from-mocha/20 to-warm' },
  { title: 'Bastidores', client: '@studio.co', bg: 'from-sand to-cream' },
  { title: 'Promoção', client: '@cafe.artesanal', bg: 'from-warm/40 to-mocha/20' },
  { title: 'Storytelling', client: '@moda.atelie', bg: 'from-cream to-sand/80' },
  { title: 'Engajamento', client: '@wellness.br', bg: 'from-mocha/15 to-warm/50' },
  { title: 'Rebranding', client: '@organica.vida', bg: 'from-sand/60 to-mocha/10' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-offwhite">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-mocha font-light tracking-[0.25em] uppercase text-xs mb-3">Trabalhos</p>
          <h2 className="font-serif-main text-4xl sm:text-5xl font-semibold text-espresso">Portfólio</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`portfolio-card rounded-2xl overflow-hidden aspect-9/16 bg-linear-to-br ${item.bg} flex items-end p-5 ${index >= 3 ? 'hidden lg:flex' : ''}`}
            >
              <div>
                <p className="text-espresso font-serif-main text-lg font-semibold">{item.title}</p>
                <p className="text-mocha/70 text-xs font-light">{item.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}