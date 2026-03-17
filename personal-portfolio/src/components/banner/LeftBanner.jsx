import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "Problem Solver.", "Software Engineer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span
            className="text-blue-500 capitalize"
            style={{ color: "#cfab69" }}
          >
            Jonathan Cornejo
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#cfab69"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a passionate software engineer. My expertise lies in Python,
          JavaScript, Django, PostgreSQL, React and RESTful APIs. I have a
          relentless commitment to learning and exploring new areas of the field
          and sharpening my skills.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
