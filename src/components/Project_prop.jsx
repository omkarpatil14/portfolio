import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiGithub } from "react-icons/si";
import { SlLink } from "react-icons/sl";
import PropTypes from "prop-types";

const Project_prop = ({
  title,
  para,
  img,
  direct,
  link,
  github_link,
  react,
  tailwindcss,
  javascript,
  vite,
  Node,
  Express,
  Mongo,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="border-[#00040f] shadow-xl bg-[#e1e1e1] dark:bg-transparent dark:border-white border rounded-xl min-h-[370px] max-sm:h-[450px] p-7 max-sm:p-3 hover:bg-gradient-to-tl from-[#ccc] to-[#e1e1e1] dark:from-[#00040F] dark:to-[#0B274C]"
      // data-aos={`fade-${direct}`}
    >
      <div className="HEADER">
        <div className="HEADING flex max-sm:gap-0">
          <div className="p-3">
            <img
              src={img}
              alt=""
              className="max-w-[100px] rounded-full border border-[#00040f]"
            />
          </div>
          <div className="p-3">
            <h1 className="flex font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r p-1 from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 max-text-xl mb-2">
              {title}
            </h1>
            <h3 className="text-[#00040f] dark:text-slate-200 p-1">Tech Stack</h3>

            <div className="flex flex-wrap gap-1 p-1 -translate-x-2">
              {react}
              {tailwindcss}
              {javascript}
              {vite}
              {Node}
              {Express}
              {Mongo}
            </div>
          </div>
        </div>
      </div>

      <p className="text-slate-500 mt-5 text-lg px-5">{para}</p>

      <div className="flex text-[#00040f] dark:text-slate-200 gap-8 p-2 pl-5 mt-5 text-3xl">
        {github_link && (
          <a href={github_link} target="_blank" rel="noopener noreferrer">
            <SiGithub />
          </a>
        )}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <SlLink />
          </a>
        )}
      </div>
    </div>
  );
};

Project_prop.propTypes = {
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  direct: PropTypes.oneOf(["left", "right"]),
  link: PropTypes.string,
  github_link: PropTypes.string.isRequired,
  react: PropTypes.element,
  tailwindcss: PropTypes.element,
  javascript: PropTypes.element,
  vite: PropTypes.element,
  Node: PropTypes.element,
  Express: PropTypes.element,
  Mongo: PropTypes.element,
};

export default Project_prop;
