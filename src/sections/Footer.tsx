export default function Footer() {
  return (
    <footer className="bg-gray-900 w-full">
      <header className="mx-6 pt-6 md:mx-10">
        <a href="m4nst3in.github.io" className="text-2xl md:text-4xl font-semibold tracking-tight text-white flex flex-row">
        <p className="text-green-400 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-200" >m4ns<span className="text-white">.dev</span></p> 
        </a>
        <div className="h-1 w-14 rounded-full bg-gradient-to-r from-white to-sky-500 md:w-20 md:h-2 pt-1"></div>
      </header>
      <div className="mx-6 md:mx-10">
        <div className="flex flex-col md:flex-row mt-5">
          <a
            className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300"
            href="#"
          >
            Start
          </a>
          <a
            className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300"
            href="#about"
          >
            About
          </a>
          <a
            className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300"
            href="#education"
          >
            Education
          </a>
          <a
            className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="text-white mt-2 mx-2 hover:text-sky-300 transition-all duration-300"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="mt-8 w-full relative bottom-0 text-center flex items-center justify-center py-2 bg-gray-700">
        <p className="text-gray-400">
          Made by <a
            className="text-sky-300 hover:underline"
            href="m4nst3in.github.io"
          > M4nsT3in</a>.
        </p>
      </div>
    </footer>
  );
}
