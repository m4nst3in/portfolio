import SlideAnimation from "@/components/slideInAnimation";

export default function About() {
  const isPortuguese = navigator.language.startsWith('pt');

  return (
    <>
      <section className="pb-5 w-full bg-gray-950" id="about">
        <header className="mx-6 pt-6 md:mx-10">
          <h1 className="text-green-500 font-bold text-3xl md:text-5xl">
            {isPortuguese ? "Sobre" : "About"}
          </h1>
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-white to-sky-500 md:w-20 md:h-2"></div>
        </header>
        <div className="mx-6 md:ml-10 md:mr-40 mt-8">
          <SlideAnimation>
            <p className="text-sky-100 font-[400] text-md mt-3">
              {isPortuguese ? "Sou um desenvolvedor full-stack em C# de 17 anos, focado principalmente em aplicações desktop, e estou nessa área há mais de dois anos." : "I'm a 17-year-old full-stack C# developer, mainly focusing on desktop applications, and I've been doing this for over two years now."}
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-sky-100 font-[400] text-md mt-3">
              {isPortuguese ? "Trabalhei em alguns projetos, aprendendo a criar aplicações desktop e web. Gosto de aprender e estou sempre disponível para aprendizados." : "I've worked on some projects, learning how to create desktop and web applications. I like to learn and I'm always available for apprenticeships."}
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-sky-100 font-[400] text-md mt-3">
              {isPortuguese ? "No futuro, pretendo me juntar a uma grande equipe para ganhar experiência e ajudar a alcançar seus objetivos." : "In the future, I intend to join a great team to earn experience and help meet your goals."}
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-sky-100 font-[400] text-md mt-3">
              {isPortuguese ? "Meu objetivo é usar minhas habilidades para ajudar no desenvolvimento de projetos, especialmente no back-end." : "My aim is to use my skills to make things better, especially on the back-end."}
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-sky-100 font-[400] text-md mt-3">
              {isPortuguese ? "Tenho boas habilidades de comunicação, sou fluente em Inglês, Espanhol e Português, e tenho boas habilidades de liderança para organizar um projeto." : "I'm a good comunicating person, i know English, Spanish and Portuguese and i think myself as a leader, helping organize a project."}
            </p>
          </SlideAnimation>
        </div>
      </section>
    </>
  );
}