# Story Maker 📖✨

Um projeto portfolio moderno e elegante para criação e visualização de histórias interativas. Desenvolvido com tecnologias web modernas para oferecer uma experiência de usuário fluida e responsiva.

**[🌐 Acesse o projeto](https://story-maker-abdon.vercel.app)**

---

## 📋 Sobre o Projeto

Story Maker é uma aplicação web que permite explorar e criar histórias de forma interativa. Com um design sofisticado inspirado em tons neutros e acolhedores, a plataforma oferece uma experiência premium de leitura e criação de conteúdo narrativo.

### ✨ Características Principais

- 📱 **Design Responsivo**: Funciona perfeitamente em desktop, tablet e dispositivos móveis
- 🎨 **Interface Elegante**: Paleta de cores personalizadas (cream, sand, mocha, espresso)
- ⚡ **Desempenho Otimizado**: Construído com Vite para carregamento ultra-rápido
- 🎪 **Slider Interativo**: Visualização de histórias com Swiper
- 🔍 **Código Limpo**: Lint com ESLint para manter qualidade de código
- 🎯 **Tipagem TypeScript**: Segurança de tipos em componentes React

---

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 19.2.5** - Biblioteca JavaScript para construção de interfaces
- **Vite 8.0.9** - Build tool ultra-rápido com desenvolvimento em tempo real
- **Tailwind CSS 4.2.4** - Framework CSS utilitário para estilização
- **Swiper 12.1.4** - Carrossel/slider responsivo
- **Lucide React** - Biblioteca de ícones minimalistas

### Desenvolvimento
- **TypeScript** - Superset tipado de JavaScript
- **ESLint** - Ferramenta de linting para qualidade de código
- **PostCSS** - Ferramenta de transformação CSS
- **Autoprefixer** - Adiciona prefixos de vendors automaticamente

---

## 📦 Instalação

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/Alax-Martins/story-maker-abdon.git
cd story-maker-abdon
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

A aplicação abrirá em `http://localhost:5173`

---

## 🛠️ Scripts Disponíveis

```bash
# Servidor de desenvolvimento com HMR
npm run dev

# Build para produção
npm run build

# Verificar código com ESLint
npm run lint

# Visualizar build de produção localmente
npm run preview
```

---

## 🎨 Personalização de Cores

O projeto usa uma paleta de cores customizada definida em `tailwind.config.js`:

```javascript
colors: {
  cream: '#F5F0EB',      // Bege claro
  sand: '#E8DDD3',        // Areia
  warm: '#D4C4B0',        // Quente
  mocha: '#8B7355',       // Café com leite
  espresso: '#5C4A32',    // Café escuro
  offwhite: '#FAF8F5',    // Branco queimado
}
```

---

## 🔤 Tipografia

Duas famílias de fontes customizadas:

- **serif-main**: Cormorant Garamond (títulos e destaques)
- **body**: Outfit (corpo de texto e conteúdo)

---

## 📁 Estrutura do Projeto

```
story-maker-abdon/
├── src/
│   ├── components/     # Componentes React reutilizáveis
│   ├── pages/         # Páginas da aplicação
│   ├── App.jsx        # Componente principal
│   └── index.css      # Estilos globais
├── public/            # Arquivos estáticos
├── index.html         # HTML principal
├── package.json       # Dependências e scripts
├── vite.config.js     # Configuração Vite
├── tailwind.config.js # Configuração Tailwind
├── eslint.config.js   # Configuração ESLint
└── README.md          # Este arquivo
```

---

## 🚢 Deploy

O projeto está hospedado em **Vercel** e é automaticamente implantado a cada push na branch `main`.

Para fazer deploy do seu próprio fork:

1. Faça push do seu código para o GitHub
2. Conecte seu repositório à Vercel
3. Vercel fará o build e deploy automaticamente

**URL de Produção**: https://story-maker-abdon.vercel.app

---

## 📝 Licença

Este projeto está disponível sob licença livre. Sinta-se à vontade para usar, modificar e distribuir conforme necessário.

---

## 👤 Autor

**Alax Martins**
- GitHub: [@Alax-Martins](https://github.com/Alax-Martins)
- Repositório: [story-maker-abdon](https://github.com/Alax-Martins/story-maker-abdon)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

---

## 💬 Suporte

Se encontrar algum problema ou tiver dúvidas:

- Abra uma [issue](https://github.com/Alax-Martins/story-maker-abdon/issues)
- Entre em contato através do GitHub

---

## 🗺️ Roadmap

- [ ] Sistema de autenticação de usuários
- [ ] Banco de dados para armazenar histórias
- [ ] Editor de histórias visual
- [ ] Sistema de comentários e avaliações
- [ ] Tema escuro (dark mode)
- [ ] Funcionalidade de compartilhamento social
- [ ] Busca e filtros avançados

---

**Feito com ❤️ por Alax Martins**
