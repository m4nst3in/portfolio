import SlideAnimation from "@/components/slideInAnimation";

export default function About() {
  return (
    <>
      <section className="pb-5 w-full bg-gray-950" id="about">
        <header className="mx-6 pt-6 md:mx-10">
          <h1 className="text-green-500 font-bold text-3xl md:text-5xl">
            About
          </h1>
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-green-400 to-white md:w-20 md:h-2"></div>
        </header>
        <div className="mx-6 md:ml-10 md:mr-40 mt-8">
          <SlideAnimation>
            <p className="text-white font-[400] text-md mt-3">
              I'm a 17-year-old full-stack C# & developer, mainly focusing on
              desktop applications, and I've been doing this for over two years now.
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-white font-[400] text-md mt-3">
              I've worked on some projects, learning how to create
              desktop and web applications. I like to learn
              and i'm always available for apprenticeships.
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-white font-[400] text-md mt-3">
              In the future, i pretend to join a great team
              to earn experience and help meet your goals.{" "}
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-white font-[400] text-md mt-3">
              My aim is to use my skills to make things better,
              especially on the back-end. As I keep going in my job, I want to
              keep getting better, learning loads, and working with others.
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-white font-[400] text-md mt-3">
              I'm good with comunication and i have a spirit of leadership.
            </p>
          </SlideAnimation>
        </div>
      </section>
    </>
  );
}
