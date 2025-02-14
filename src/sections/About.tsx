import SlideAnimation from "@/components/slideInAnimation";

export default function About() {
  const isPortuguese = navigator.language.startsWith('pt');

  return (
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
              {isPortuguese ? "Olá. Meu nome é Vinícius, nasci em Teodoro Sampaio, e sou um desenvolvedor de 18 anos, focado principalmente em aplicações web, e estou nessa área há mais de dois anos." : "Hi! I'm Vinicíus, and i was born in Teodoro Sampaio. I'm a 18-year-old full-stack developer, mainly focusing on desktop applications, and I've been doing this for over two years now."}
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-sky-100 font-[400] text-md mt-3">
              {isPortuguese ? "Trabalhei em alguns projetos, aprendendo a criar aplicações desktop e web. Gosto de aprender e estou sempre apto a aprendizados." : "I've worked on some projects, learning how to create desktop and web applications. I like to learn and I'm always available for apprenticeships."}
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-sky-100 font-[400] text-md mt-3">
              {isPortuguese ? "No futuro, pretendo me juntar a uma equipe para ganhar experiência e ajudar a alcançar os objetivos do projeto. Também estou atualmente cursando Análise e Desenvolvimento de Sistemas na Unoeste (FIPP) Presidente Prudente." : "In the future, I intend to join a great team to earn experience and help meet the goals of the project. I'm also right now coursing A.D.S at Unoeste (FIPP) Presidente Prudente."}
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-sky-100 font-[400] text-md mt-3">
              {isPortuguese ? "Meu objetivo é usar minhas habilidades para ajudar no desenvolvimento de projetos, especialmente em aplicações web, e aprender novas competências." : "My aim is to use my skills to make things better, especially on the back-end."}
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-sky-100 font-[400] text-md mt-3">
              {isPortuguese ? "Tenho boas habilidades de comunicação, sou fluente em Inglês e Português, e tenho boas habilidades de liderança para organizar um projeto. Estou atualmente estudando sobre Design Patterns." : "I'm a good comunicating person, i know English and Portuguese and i think myself as a leader, helping organize a project."}
            </p>
          </SlideAnimation>
        </div>
      </section>
  );
}