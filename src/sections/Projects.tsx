import Project from "@/components/ProjectCard";
import ssThumbnail from "@/assets/images/m4Installers.png";
export default function Projects() {
  return (
    <>
      <section className="pb-5 w-full bg-gray-950" id="projects">
        <header className="mx-6 pt-6 md:mx-10">
          <h1 className="text-green-500 font-bold text-3xl md:text-5xl">
            Projects
          </h1>
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-green-400 to-white md:w-20 md:h-2"></div>
        </header>
        <div className="mx-7 md:mx-10 flex justify-center items-center flex-col md:flex-row md:flex-wrap mt-12 md:justify-start ">
        <Project
          title="m4Installers ⚡"
          description="A console application that helps downloading essential software to PC."
          image={ssThumbnail}
          link="https://github.com/m4nst3in/m4Installers"
          repo="https://github.com/m4nst3in/m4Installers"
          langs={[
            "C#",
            ".NET", 
            "Windows", 
          ]}
        />
          
        </div>
      </section>
    </>
  );
}
