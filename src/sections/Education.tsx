import TimelineItem from "@/components/TimelineItem";

export default function Education() {
  const isPortuguese = navigator.language.startsWith('pt');

  return (
      <section className="pb-5 w-full bg-gray-950" id="education">
        <header className="mx-6 pt-6 md:mx-10">
          <h1 className="text-green-500 font-bold text-3xl md:text-5xl">
            {isPortuguese ? 'Educação' : 'Education'}
          </h1>
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-white to-sky-500 md:w-20 md:h-2"></div>
        </header>
        <div className="mx-6 pt-8 md:mx-10">
          <TimelineItem title={isPortuguese ? 'Escola' : 'School'}>
            {isPortuguese ? 'Estudando o 3º ano do Ensino Médio na E.E Arthur Ribeiro.' : 'Studying 3th High School at E.E Arthur Ribeiro.'}
          </TimelineItem>
          <TimelineItem title={isPortuguese ? 'Universidade' : 'University'}>
            {isPortuguese ? 'Pretendo estudar Análise e Desenvolvimento de Sistemas (ADS) na Unoeste.' : 'I pretend to study System Analysis and Development (ADS) in Unoeste.'}
          </TimelineItem>
        </div>
      </section>
  );
}