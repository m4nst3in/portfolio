import TimelineItem from "@/components/TimelineItem";

export default function Experience() {
  // Verifica se o idioma do navegador é português
  const isPortuguese = navigator.language.startsWith('pt');

  return (
      <section className="pb-5 w-full bg-gray-950" id="experience">
        <header className="mx-6 pt-6 md:mx-10">
          <h1 className="text-green-500 font-bold text-3xl md:text-5xl">
            {isPortuguese ? 'Experiência' : 'Experience'}
          </h1>
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-white to-sky-500 md:w-20 md:h-2"></div>
        </header>
        <div className="mx-6 pt-8 md:mx-10">
          <TimelineItem title={isPortuguese ? 'JavaScript' : 'JavaScript'}>
            {isPortuguese ? 'Desenvolvimento de scripts para realizar atividades automaticamente no KhanAcademy' : 'Developing scripts to do automatically lessons on KhanAcademy'}
          </TimelineItem>
          <TimelineItem title={isPortuguese ? 'TypeScript/React' : 'TypeScript/React'}>
            {isPortuguese ? 'Desenvolvimento de websites com animações e design de qualidade, como este agora' : 'Development of websites with animations and quality design, like this one'}
          </TimelineItem>
        </div>
      </section>
  );
}
