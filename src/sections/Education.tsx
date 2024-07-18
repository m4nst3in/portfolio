import TimelineItem from "@/components/TimelineItem";

export default function Education() {
  return (
    <>
      <section className="pb-5 w-full bg-gray-950" id="education">
        <header className="mx-6 pt-6 md:mx-10">
          <h1 className="text-green-500 font-bold text-3xl md:text-5xl">
            Education
          </h1>
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-white to-sky-500 md:w-20 md:h-2"></div>
        </header>
        <div className="mx-6 pt-8 md:mx-10">
          <TimelineItem title="School">
            Studying 3th High School at E.E Arthur Ribeiro.
          </TimelineItem>
          <TimelineItem title="University">
            I pretend to study System Analysis and Development (ADS) in Unoeste.
          </TimelineItem>
        </div>
      </section>
    </>
  );
}
