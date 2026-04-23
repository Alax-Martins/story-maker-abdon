import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  const links = [
    { label: 'Sobre', id: 'sobre' },
    { label: 'Portfólio', id: 'portfolio' },
    { label: 'Depoimentos', id: 'depoimentos' },
    { label: 'Contato', id: 'contato' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-offwhite/90 backdrop-blur-md border-b border-sand/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => goTo('hero')}
          className="font-serif-main text-2xl font-semibold tracking-wide text-espresso"
        >
          Story Maker
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm font-light tracking-wider uppercase text-mocha">
          {links.map((link) => (
            <button key={link.id} onClick={() => goTo(link.id)} className="nav-link">
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-mocha p-2 rounded-lg hover:bg-sand/40"
          aria-label="Abrir menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`${open ? 'block' : 'hidden'} md:hidden bg-offwhite border-t border-sand/50 px-6 py-4`}>
        <div className="flex flex-col gap-4 text-sm font-light tracking-wider uppercase text-mocha">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => goTo(link.id)}
              className="text-left hover:text-espresso transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}