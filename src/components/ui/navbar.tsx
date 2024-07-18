import * as React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 w-full h-14 md:h-20 bg-gray-950 flex flex-row justify-center items-center z-20 backdrop-filter backdrop-blur-md bg-opacity-30">
      <div className="flex flex-row items-center mx-4">
        <a href="m4nst3in.github.io" className="text-2xl md:text-3xl font-semibold tracking-tight text-white flex flex-row">
          <p className="text-green-400" >m4ns<span className="text-white">.dev</span></p>
        </a>
      </div>
      <div className="flex flex-row items-center mx-3">
        <a href="https://linkedin.com/in/m4nst3in" className="text-white text-xl md:text-2xl  mx-1.5 hover:text-green-400 transition-all duration-300">
          <FaLinkedin />
        </a>
        <a href="https://x.com/m4ns." className="text-white text-xl md:text-2xl mx-1.5 hover:text-green-400 transition-all duration-300">
          <FaXTwitter />
        </a>
        <a href="https://github.com/m4nst3in" className="text-white text-xl md:text-2xl mx-1.5 hover:text-green-400 transition-all duration-300">
          <FaGithub />
        </a>

        <DropdownMenu>
          <DropdownMenuTrigger className="text-green-400 text-xl md:text-2xl ml-2 mr-1.5 outline-none border-none">
            <HiOutlineMenuAlt3 />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-900 border-none text-white mx-3 my-3">
            <DropdownMenuLabel>Go To</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-green-500" />
            <DropdownMenuItem>
              <a
                className="hover:text-green-700 transition-all duration-300"
                href="#"
              >
                Start
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                className="hover:text-green-700 transition-all duration-300"
                href="#about"
              >
                About
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                className="hover:text-green-700 transition-all duration-300"
                href="#skills"
              >
                Skills
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                className="hover:text-green-700 transition-all duration-300"
                href="#experience"
              >
                Experience
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                className="hover:text-green-700 transition-all duration-300"
                href="#education"
              >
                Education
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                className="hover:text-green-700 transition-all duration-300"
                href="#projects"
              >
                Projects
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                className="hover:text-green-700 transition-all duration-300"
                href="#contact"
              >
                Contact
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export { Navbar };
