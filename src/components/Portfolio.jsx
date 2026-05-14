import video1 from '../assets/videos/cha_revelacao.mp4';
import video2 from '../assets/videos/jantar_de_noivado.mp4';
import video3 from '../assets/videos/aniversario_alice.mp4';
import video4 from '../assets/videos/cha_de_panela.mp4';
import video5 from '../assets/videos/casamento_civil.mp4';
import video6 from '../assets/videos/niver_maria_eduarda.mp4'; 

const items = [
  {
    title: 'Chá Revelação',
    client: '@beatriiz_nunes',
    bg: 'from-mocha/20 to-warm',
    video: video1
  },
  {
    title: 'Noivado',
    client: '@micafigueiredo_',
    bg: 'from-sand to-cream',
    video: video2
  },
  {
    title: 'Aniversário',
    client: '@sarahlarrubyanne',
    bg: 'from-warm/40 to-mocha/20',
    video: video3
  },
  {
    title: 'Chá de Panela',
    client: '@natalia_santiago03',
    bg: 'from-cream to-sand/80',
    video: video4
  },
  {
    title: 'Casamento Cívil',
    client: '@micafigueiredo_',
    bg: 'from-mocha/15 to-warm/50',
    video: video5
  },
  {
    title: 'Aniversário',
    client: '@organica.vida',
    bg: 'from-sand/60 to-mocha/10',
    video: video6
  },
];

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
            <div key={item.title} className="flex flex-col items-center">
              <div
                className={`portfolio-card rounded-2xl overflow-hidden aspect-9/16 bg-linear-to-br ${item.bg} ${index >= 3 ? 'hidden lg:block' : ''}`}
              >
                <video src={item.video} controls className="w-full h-full object-cover rounded-2xl" />
              </div>
              <div className="mt-3 text-center">
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
