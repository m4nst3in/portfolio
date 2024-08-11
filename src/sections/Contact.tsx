import { Icon } from "@iconify/react";
import SlideAnimation from "@/components/slideInAnimation";
export default function Contact() {
  const isPortuguese = navigator.language.startsWith('pt');

  return (
      <section className="pb-5 w-full bg-gray-950" id="contact">
        <header className="mx-6 pt-6 md:mx-10"></header>
        <h1 className="text-green-500 font-bold text-3xl md:text-5xl">
          {isPortuguese ? "Contato" : "Contact"}
        </h1>
        <div className="h-1 w-14 rounded-full bg-gradient-to-r from-white to-sky-500 md:w-20 md:h-2"></div>
        <div className="mx-6 md:mx-10 mt-5 flex flex-col md:flex-row md:flex-wrap mb-3">
          <SlideAnimation>
            <a
                href="mailto:viniigoess@gmail.com"
                className="flex flex-row text-sky-300 items-center mt-5 mr-5"
            >
              <Icon className="h-16 w-16" icon="ic:baseline-email"/>
              <div className="flex flex-col">
                <h1 className="text-white text-2xl font-bold mx-2">
                  Email
                </h1>
                <p className="text-gray-400 mx-2">viniigoess@gmail.com</p>
              </div>
            </a>
          </SlideAnimation>
          <SlideAnimation>
            <a
                href="https://github.com/m4nst3in"
                className="flex flex-row text-sky-300 items-center mt-5 mr-5"
            >
              <Icon className="h-16 w-16" icon="simple-icons:github"/>
              <div className="flex flex-col">
                <h1 className="text-white text-2xl font-bold mx-2">GitHub</h1>
                <p className="text-gray-400 mx-2">/m4nst3in</p>
              </div>
            </a>
          </SlideAnimation>
          <SlideAnimation>
            <a
                href="https://instagram.com/m4.viniiy"
                className="flex flex-row text-sky-300 items-center mt-5 mr-3"
            >
              <Icon className="h-16 w-16" icon="skill-icons:instagram"/>
              <div className="flex flex-col">
                <h1 className="text-white text-2xl font-bold mx-2">Instagram</h1>
                <p className="text-gray-400 mx-2">/vinii.b.g</p>
              </div>
            </a>
          </SlideAnimation>
          <SlideAnimation>
            <a
                href="https://linkedin.com/in/m4vinicius"
                className="flex flex-row text-sky-300 items-center mt-5 mr-3"
            >
              <Icon className="h-16 w-16" icon="skill-icons:linkedin"/>
              <div className="flex flex-col">
                <h1 className="text-white text-2xl font-bold mx-2">LinkedIn</h1>
                <p className="text-gray-400 mx-2">/in/m4vinicius</p>
              </div>
            </a>
          </SlideAnimation>
        </div>
      </section>
  );
}