import React from "react";
import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
const Contact = () => {
  return (
    <section
      className="my-10  flex flex-col text-center items-center text-neutral-800 bg-neutral-100 "
      id="contact"
    >
      <span className="text-5xl  my-10">Get In Touch</span>
      <p className="px-24 text-xl">
        Currently I'm looking for a Frontend Developer role opportunities! If
        you know of any position available or if you just want to say hi, please
        feel free to email me at,{" "}
        <a href="" className="text-blue-600">
          meghamini40@gmail.com
        </a>
      </p>
      <div className="flex text-4xl my-6 ">
        <a
          href="https://github.com/meghamaurya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="m-2 hover:text-blue-700" />
        </a>
        <a
          href="https://www.linkedin.com/in/megha-maurya-21369324b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrLinkedin className="m-2 hover:text-blue-700" />
        </a>
        <a
          href="https://twitter.com/MeghaMaurya58"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="m-2 hover:text-blue-700" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
