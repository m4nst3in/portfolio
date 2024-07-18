import TimelineItem from "@/components/TimelineItem";

export default function Experience() {
  // Verifica se o idioma do navegador é português
  const isPortuguese = navigator.language.startsWith('pt');

  return (
    <>
      <section className="pb-5 w-full bg-gray-950" id="experience">
        <header className="mx-6 pt-6 md:mx-10">
          <h1 className="text-green-500 font-bold text-3xl md:text-5xl">
            {isPortuguese ? 'Experiência' : 'Experience'}
          </h1>
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-white to-sky-500 md:w-20 md:h-2"></div>
        </header>
        <div className="mx-6 pt-8 md:mx-10">
          <TimelineItem title={isPortuguese ? 'Java' : 'Java'}>
            {isPortuguese ? 'Desenvolvendo plugins Bukkit para Minecraft com Java e back-end de websites com SpringBoot' : 'Developing Minecraft Bukkit plugins with Java and back-end with SpringBoot'}
          </TimelineItem>
          <TimelineItem title={isPortuguese ? 'C# & .NET' : 'C# & .NET'}>
            {isPortuguese ? 'Aplicações de console com requisições http e aplicações de desktop com WPF/Xamarin' : 'Console applications with http requests and desktop applications with WPF/Xamarin'}
          </TimelineItem>
        </div>
      </section>
    </>
  );
}
