import React from "react";
import Aboutme from "../Aboutme/Aboutme";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
const Home = () => {
  return (
    <section id="home">
      <div
        className="flex flex-col items-center justify-center h-96 text-center
      bg-gradient-to-bl
      from-green-400 to-red-400 via-purple-300 animate-gradient-x text-white"
      >
        <h1 className=" text-6xl sm:h-18 md:h-20 ">Vaibhav Kondapuram</h1>
        <span className="text-2xl">A Frontend Developer</span>
        <div className="flex text-5xl -mb-32 my-2">
          <a
            href="https://github.com/VaibhavKondapuram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="m-2 mx-3 hover:text-neutral-600" />
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhav-kondapuram-1506b698/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedin className="m-2 mx-3 hover:text-neutral-600" />
          </a>
          <a
            href="https://twitter.com/VaibhavPawanist"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="m-2 mx-3 hover:text-neutral-600" />
          </a>
        </div>
      </div>
      <Aboutme />
      <Projects />
      <Skills />
      <Contact />
    </section>
  );
};

export default Home;