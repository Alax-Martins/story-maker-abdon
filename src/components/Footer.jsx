import { Camera, MessageCircle, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-espresso text-offwhite/70">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-serif-main text-lg text-offwhite/90">Story Maker</p>

        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/anaabdon.storymaker" target="_blank" rel="noopener noreferrer" className="hover:text-offwhite transition-colors p-2 hover:bg-offwhite/20 rounded-lg" aria-label="Instagram">
            <Camera size={20} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5561999081931&text=" target="_blank" rel="noopener noreferrer" className="hover:text-offwhite transition-colors p-2 hover:bg-offwhite/20 rounded-lg" aria-label="WhatsApp">
            <MessageCircle size={20} />
          </a>
          {/* <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anajuliaabdonstorymaker@gmail.com&su=Teste&body=Olá!">Enviar e-mail</a> */}

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anajuliaabdonstorymaker@gmail.com&su=&body=Olá!" target="_blank" rel="noopener noreferrer" className="hover:text-offwhite transition-colors p-2 hover:bg-offwhite/20 rounded-lg" aria-label="E-mail">
            <Mail size={20} />
          </a>
        </div>

        <p className="text-xs font-light">© 2026 Todos os direitos reservados</p>
      </div>
    </footer>
  )
}