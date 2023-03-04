import React from "react";
import { Link } from "react-router-dom";
import img from "./image/resume.png";
const Resume = () => {
  return (
    <div className="m-auto py-16 text-center">
      <Link to="/" className=" animate-pulse text-blue-600 font-semibold">
        Back
      </Link>
      <img
        src={img}
        alt="resume"
        width="600px"
        className="px-5 mx-auto border-4 border-blue-500"
      />
    </div>
  );
};

export default Resume;