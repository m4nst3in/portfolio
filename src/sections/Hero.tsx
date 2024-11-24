import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import TypingAnimation from '@/components/TypingAnimation';
import backgroundImage from '@/assets/images/fundo.jpg';
import { IoDocumentTextOutline, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { GiEagleEmblem } from "react-icons/gi";
import { FaCrown } from "react-icons/fa";
export default function Hero() {
  const [commitCount, setCommitCount] = useState(0);
  const isPortuguese = navigator.language.startsWith('pt');

  useEffect(() => {
    async function fetchCommits() {
      try {
        const response = await axios.get('/api/commits');
        setCommitCount(response.data.commitCount);
      } catch (error) {
        console.error('Failed to fetch commits', error);
      }
    }
    fetchCommits();
  }, []);

  return (
    <section className="h-[90vh] bg-gray-950 flex items-center" id="" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="text-center">
      <div className="w-full flex justify-center items-center mt-10 mb-5">
        <div className="py-1.5 px-4 rounded-full md:py-2 md:px-6 md:text-xl" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <FaCrown className="text-yellow-400" size="2em" style={{ marginBottom: '-1.0em' }} />
          <GiEagleEmblem className="text-green-500" size="7em" />
        </div>
      </div>
      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight md:text-7xl text-white mt-1 md:mx-20">
        {isPortuguese ? 'Desenvolvedor' : 'Full-stack'}{" "}
        <b className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-green-500">
          .NET
        </b>{" "}
        {isPortuguese ? 'especializado em aplicações' : 'developer creating'}{" "}
        <b className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500">
          {isPortuguese ? 'desktop & web' : 'desktop & web applications'}
        </b>
          .
        </h1>
        <div className="flex justify-center items-center mt-5">
          <ul className="gap-3 flex justify-between items-center sm:gap-12 text-white dark:text-gray-800 w-[calc(100dvw-5rem)] sm:w-fit">
            <li className="flex flex-col sm:flex-row items-center gap-2">
              <span className="flex items-center font-bold text-yellow-400 dark:bg-[#fff1] py-1 px-3 rounded-xl">
                +2
              </span>
              <span className="text-[0.71rem] sm:text-[0.81rem] font-medium leading-[1] text-center sm:text-left">
              {isPortuguese ? 'ano de\nexperiência' : 'year of\nexperience'}
              </span>
            </li>
            <span className="h-8 border-r-[1px] border-dashed border-light-gray-secondary dark:border-dark-gray-secondary"></span>
            <li className="flex flex-col sm:flex-row items-center gap-2">
              <span
                className="flex items-center font-bold text-yellow-400 dark:bg-[#fff1] py-1 px-3 rounded-xl"
                id="code-lines"
              >
              <TypingAnimation start={1} end={192} interval={100} suffix="k" />
              </span>
              <span className="text-[0.71rem] sm:text-[0.81rem] font-medium leading-[1] text-center sm:text-left">
              {isPortuguese ? 'linhas de\ncódigo escritas' : 'lines of\ncode written'}
              </span>
            </li>
            <span className="h-8 border-r-[1px] border-dashed border-light-gray-secondary dark:border-dark-gray-secondary"></span>
            <li className="flex flex-col sm:flex-row items-center gap-2">
              <span className="flex items-center font-bold text-yellow-400 dark:bg-[#fff1] py-1 px-3 rounded-xl">
              <TypingAnimation start={0} end={commitCount} interval={11} />
              </span>
              <span className="text-[0.71rem] sm:text-[0.81rem] font-medium leading-[1] text-center sm:text-left">
              {isPortuguese ? 'commits\nrealizados' : 'commits\nrealized'}
              </span>
            </li>
          </ul>
        </div>
        <div className="text-center w-full mt-7 md:mt-10 ">
          <Button onClick={() => window.location.href = 'https://tan-lurette-5.tiiny.site/' } className="px-5 bg-gradient-to-r from-white to-sky-200 text-gray-900 font-medium text-md rounded-full mx-3 font-mono hover:bg-white hover:opacity-90 md:scale-150 md:mx-14">
            <IoDocumentTextOutline className="mr-1 h-4 w-4" />
            {isPortuguese ? 'Currículo' : 'Resume'}
          </Button>
          <Button onClick={() => window.location.href = '#contact'} className="px-5 bg-gradient-to-r from-white to-sky-200 text-black text-md font-medium rounded-full mx-3 font-mono md:scale-150 md:mx-14">
            <IoChatbubbleEllipsesOutline className="mr-1 h-4 w-4" />
            {isPortuguese ? 'Contato' : 'Contact'}
          </Button>
        </div>
      </div>
    </section>
  );
}
