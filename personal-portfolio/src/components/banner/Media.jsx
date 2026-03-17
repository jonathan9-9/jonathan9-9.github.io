import React from "react";
import { FaFacebookF, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiRedux, SiDjango, SiJavascript, SiPython } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/jonathan.castellanos.16568"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/jonathan-cornejo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaReact />
            </span>
          </a>
          <a
            href="https://nodejs.org/en/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <SiJavascript />
            </span>
          </a>
          <a
            href="https://docs.python.org/3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <SiPython />
            </span>
          </a>
          <a
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <SiRedux />
            </span>
          </a>
          <a
            href="https://www.djangoproject.com/start/overview/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <SiDjango />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
