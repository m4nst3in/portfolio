import Project from "@/components/ProjectCard";
import ssThumbnail1 from "@/assets/images/m4Installers.png";
import ssThumbnail2 from "@/assets/images/portfolio.png";
import ssThumbnail3 from "@/assets/images/vulcan.png";

export default function Projects() {
  const isPortuguese = navigator.language.startsWith('pt');

  return (
      <section className="pb-5 w-full bg-gray-950" id="projects">
          <header className="mx-6 pt-6 md:mx-10">
              <h1 className="text-green-500 font-bold text-3xl md:text-5xl">
                  {isPortuguese ? 'Projetos' : 'Projects'}
              </h1>
              <div className="h-1 w-14 rounded-full bg-gradient-to-r from-white to-sky-500 md:w-20 md:h-2"></div>
          </header>
          <div
              className="mx-7 md:mx-10 flex justify-center items-center flex-col md:flex-row md:flex-wrap mt-12 md:justify-start ">
              <Project
                  title="m4Installers"
                  description={isPortuguese ? "Um aplicativo de console que ajuda a baixar software essencial para o PC." : "A console application that helps downloading essential software to PC."}
                  image={ssThumbnail1}
                  link="https://github.com/m4nst3in/m4Installers"
                  repo="https://github.com/m4nst3in/m4Installers"
                  langs={[
                      "C#",
                      ".NET",
                      "Windows",
                  ]}
              />
              <Project
                  title="m4Portfolio"
                  description={isPortuguese ? "Meu website pessoal, construído com TypeScript, Tailwind CSS & React." : "My personal website, constructed with TypeScript, Tailwind CSS & React."}
                  image={ssThumbnail2}
                  link="https://m4nst3in.vercel.app"
                  repo="https://github.com/m4nst3in/portfolio"
                  langs={[
                      "TypeScript",
                      "React",
                      "Vite",
                      "Tailwind",
                      "C#",
                      ".NET",
                  ]}
              />
              <Project
                  title="VulcanWebsite"
                  description={isPortuguese ? "Um website para um mod menu de GTA V, construído com TypeScript & React." : "A website for a GTA V mod menu, constructed with TypeScript & React."}
                  image={ssThumbnail3}
                  link="https://m4nst3in.vercel.app"
                  repo="https://github.com/m4nst3in/GtaMenuWebsite"
                  langs={[
                      "TypeScript",
                      "React",
                      "Vite",
                  ]}
              />
          </div>
      </section>
  );
}