import Project_prop from "../components/Project_prop";
import {
  GPT4,
  Portfolio,
  Rocket,
  WellBeing,
  Game,
  disney
} from "../constants/Constant";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb
} from "react-icons/si";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos=""
        >
          <Project_prop 
            title="Disney+ hotstar"
            para="Disney+ hotstar clone website created with react and Tailwind CSS"
            direct="right"
            img={Game}
            link=""
            github_link="https://github.com/omkarpatil14/Disney_clone"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="ToDo App"
            para="My todo app keeps you organized, letting you add, edit, and complete tasks effortlessly"
            img={Game}
            direct="left"
            link="https://prismatic-narwhal-d64b48.netlify.app/"
            github_link="https://github.com/omkarpatil14/TodoList_using_localStorage"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            
          />
          <Project_prop
            title="BlogZen"
            para="Crafted with Node.js, Express, and MongoDB, my blog website elegantly presents content, offering a seamless platform for sharing thoughts and engaging discussions"
            img={Game}

            direct="right"
            link=""
            github_link="https://github.com/omkarpatil14/BlogZen"
            Node={
              <Tooltip title="Node js" arrow>
                <IconButton>
                  <SiNodedotjs className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            Express={
              <Tooltip title="Express" arrow>
                <IconButton>
                  <SiExpress className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            Mongo={
              <Tooltip title="Mongo db" arrow>
                <IconButton>
                  <SiMongodb className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="URL SHORTNER"
            para="My URL shortener website uses Node.js, Express, and MongoDB to swiftly generate shortened URLs, redirecting users seamlessly to their intended destinations"
            img={Game}
            direct="left"
            link=""
            github_link="https://github.com/omkarpatil14/Url_shortner"
            Node={
              <Tooltip title="Node js" arrow>
                <IconButton>
                  <SiNodedotjs className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            Express={
              <Tooltip title="Express" arrow>
                <IconButton>
                  <SiExpress className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            Mongo={
              <Tooltip title="Mongo db" arrow>
                <IconButton>
                  <SiMongodb className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          
          <Project_prop
            title="Currnecy Converter"
            para="Easily convert currencies with my intuitive currency converter, providing quick and accurate exchange rates for seamless transactions"
            img={Game}
            direct="right"
            link=""
            github_link="https://github.com/omkarpatil14/Currency_convertor"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="Password generator"
            para="Generate strong passwords instantly with my secure password generator, ensuring robust protection for your accounts and data."
            img={Game}
            direct="left"
            link="https://main--starlit-daifuku-dc1ed0.netlify.app/"
            github_link="https://github.com/omkarpatil14/Password_generator"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
