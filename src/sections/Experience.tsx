import TimelineItem from "@/components/TimelineItem";
export default function Experience() {
  return (
    <>
      <section className="pb-5 w-full bg-gray-950" id="experience">
        <header className="mx-6 pt-6 md:mx-10">
          <h1 className="text-green-500 font-bold text-3xl md:text-5xl">
            Experience
          </h1>
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-green-400 to-white md:w-20 md:h-2"></div>
        </header>
        <div className="mx-6 pt-8 md:mx-10">
          <TimelineItem title="Java">
            Developing Minecraft Bukkit plugins with Java
            and back-end with SpringBoot
          </TimelineItem>
          <TimelineItem title="C# & .NET">
            Console applications with http requests
            and desktop applications with WPF/Xamarin
          </TimelineItem>
        </div>
      </section>
    </>
  );
}
