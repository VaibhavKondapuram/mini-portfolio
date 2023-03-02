import React from "react";
import { Link } from "react-router-dom";
const Aboutme = () => {
  return (
    <section className=" mx-20 flex flex-col text-center items-center text-neutral-800">
      <span className="text-5xl my-10 ">About Me</span>
      <span className="text-2xl">
        My name is Megha Maurya. I'm pursuing a Web Development Course from the
        School of Accelerated Learning. I'm passionate about exploring and
        learning new things and my goal is to pursue this passion within the
        field of web development. In my free time, I like playing musical
        instruments.
      </span>
      <Link
        to="/resume"
        className="border-4 block w-fit my-12 px-2 py-1 rounded font-semibold text-xl hover:bg-neutral-400"
      >
        Resume
      </Link>
    </section>
  );
};

export default Aboutme;