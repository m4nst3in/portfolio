export default function Footer() {
  const isPortuguese = navigator.language.startsWith('pt');
  return (
    <footer className="bg-gray-900 w-full">
      <header className="mx-6 pt-6 md:mx-10">
        <a href="#" className="text-2xl md:text-4xl font-semibold tracking-tight text-white flex flex-row">
          <p className="text-green-400 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-200">m4ns<span className="text-white">.dev</span></p>
        </a>
        <div className="h-1 w-14 rounded-full bg-gradient-to-r from-white to-sky-500 md:w-20 md:h-2 pt-1"></div>
      </header>
      <div className="mx-6 md:mx-10">
        <div className="flex flex-col md:flex-row mt-5">
          <a
            className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300"
            href="#"
          >
            {isPortuguese ? 'Início' : 'Start'}
          </a>
          <a
            className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300"
            href="#about"
          >
            {isPortuguese ? 'Sobre' : 'About'}
          </a>
          <a
            className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300"
            href="#skills"
          >
            {isPortuguese ? 'Habilidades' : 'Skills'}
          </a>
          <a
            className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300"
            href="#experience"
          >
            {isPortuguese ? 'Experiência' : 'Experience'}
          </a>
          <a
            className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300"
            href="#education"
          >
            {isPortuguese ? 'Educação' : 'Education'}
          </a>
          <a
            className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300"
            href="#projects"
          >
            {isPortuguese ? 'Projetos' : 'Projects'}
          </a>
        </div>
        </div>
        </footer>
    );
    }
