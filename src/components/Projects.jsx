import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Project_prop from "../components/Project_prop";
import { SiReact, SiTailwindcss, SiVite, SiJavascript, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";
import { Game } from "../constants/Constant";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-right">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1">
        <Project_prop 
            title="Bing"
            para=" A  platform for seamless social networking, enabling connection, sharing, and discovery"
            direct="right"
            img={Game}
            link="https://blip-by-omkar.vercel.app/"
            github_link="https://github.com/omkarpatil14/blip"
            Mongo={<SiMongodb className="dark:text-slate-200 text-black" />}
            Express={<SiExpress className="dark:text-slate-200 text-black" />}
            react={<SiReact className="dark:text-slate-200 text-black" />}
            Node={<SiNodedotjs className="dark:text-slate-200 text-black" />}
            tailwindcss={<SiTailwindcss className="dark:text-slate-200 text-black" />}
            javascript={<SiJavascript className="dark:text-slate-200 text-black" />}
            vite={<SiVite className="dark:text-slate-200 text-black" />}
           
           
            
            
          />
          <Project_prop 
            title="CodeFuse"
            para=" CodeFuse is a collaborative coding platform where multiple users can join a room, code together in real-time, compile their code, and check the time and space complexity"
            direct="right"
            img={Game}
            link="https://blip-by-omkar.vercel.app/"
            github_link="https://github.com/omkarpatil14/blip"
            Mongo={<SiMongodb className="dark:text-slate-200 text-black" />}
            Express={<SiExpress className="dark:text-slate-200 text-black" />}
            react={<SiReact className="dark:text-slate-200 text-black" />}
            Node={<SiNodedotjs className="dark:text-slate-200 text-black" />}
            tailwindcss={<SiTailwindcss className="dark:text-slate-200 text-black" />}
            javascript={<SiJavascript className="dark:text-slate-200 text-black" />}
            vite={<SiVite className="dark:text-slate-200 text-black" />}
           
           
            
            
          />
          <Project_prop 
            title="Disney+ Hotstar"
            para="Disney+ Hotstar clone website created with React and Tailwind CSS"
            direct="right"
            img={Game}
            link="https://steady-gaufre-19e03a.netlify.app/"
            github_link="https://github.com/omkarpatil14/Disney_clone"
            react={<SiReact className="dark:text-slate-200 text-black" />}
            tailwindcss={<SiTailwindcss className="dark:text-slate-200 text-black" />}
            javascript={<SiJavascript className="dark:text-slate-200 text-black" />}
            vite={<SiVite className="dark:text-slate-200 text-black" />}
          />
          
          <Project_prop
            title="ToDo App"
            para="My todo app keeps you organized, letting you add, edit, and complete tasks effortlessly"
            img={Game}
            direct="left"
            link="https://prismatic-narwhal-d64b48.netlify.app/"
            github_link="https://github.com/omkarpatil14/TodoList_using_localStorage"
            react={<SiReact className="dark:text-slate-200 text-black" />}
            javascript={<SiJavascript className="dark:text-slate-200 text-black" />}
            tailwindcss={<SiTailwindcss className="dark:text-slate-200 text-black" />}
            vite={<SiVite className="dark:text-slate-200 text-black" />}
          />
          <Project_prop
            title="BlogZen"
            para="Crafted with Node.js, Express, and MongoDB, my blog website elegantly presents content, offering a seamless platform for sharing thoughts and engaging discussions"
            img={Game}
            direct="right"
            link=""
            github_link="https://github.com/omkarpatil14/BlogZen"
            Node={<SiNodedotjs className="dark:text-slate-200 text-black" />}
            javascript={<SiJavascript className="dark:text-slate-200 text-black" />}
            Express={<SiExpress className="dark:text-slate-200 text-black" />}
            Mongo={<SiMongodb className="dark:text-slate-200 text-black" />}
          />
          <Project_prop
            title="URL Shortener"
            para="My URL shortener website uses Node.js, Express, and MongoDB to swiftly generate shortened URLs, redirecting users seamlessly to their intended destinations"
            img={Game}
            direct="left"
            link=""
            github_link="https://github.com/omkarpatil14/Url_shortner"
            Node={<SiNodedotjs className="dark:text-slate-200 text-black" />}
            javascript={<SiJavascript className="dark:text-slate-200 text-black" />}
            Express={<SiExpress className="dark:text-slate-200 text-black" />}
            Mongo={<SiMongodb className="dark:text-slate-200 text-black" />}
          />
          <Project_prop
            title="Currency Converter"
            para="Easily convert currencies with my intuitive currency converter, providing quick and accurate exchange rates for seamless transactions"
            img={Game}
            direct="right"
            link=""
            github_link="https://github.com/omkarpatil14/Currency_convertor"
            react={<SiReact className="dark:text-slate-200 text-black" />}
            javascript={<SiJavascript className="dark:text-slate-200 text-black" />}
            tailwindcss={<SiTailwindcss className="dark:text-slate-200 text-black" />}
            vite={<SiVite className="dark:text-slate-200 text-black" />}
          />
          <Project_prop
            title="Password Generator"
            para="Generate strong passwords instantly with my secure password generator, ensuring robust protection for your accounts and data."
            img={Game}
            direct="left"
            link="https://main--starlit-daifuku-dc1ed0.netlify.app/"
            github_link="https://github.com/omkarpatil14/Password_generator"
            react={<SiReact className="dark:text-slate-200 text-black" />}
            javascript={<SiJavascript className="dark:text-slate-200 text-black" />}
            tailwindcss={<SiTailwindcss className="dark:text-slate-200 text-black" />}
            vite={<SiVite className="dark:text-slate-200 text-black" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
