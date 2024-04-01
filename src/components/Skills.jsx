import {
  HTML,
  CSS,
  Github,
  Git,
  Vite,
  TailwindCSS,
  react,
  Python,
  Javascript,
  CPP,
  C,
  Vue,
  socket,
  node,
  mongo,
  express,
  redux,
  postman,
  bootstrap,
  mui,
  java,
  mysql
} from "../constants/Constant";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "./Img_prop";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="EXPERIENCE p-5 mx-20 mb-10  font-['Poppins']  max-sm:p-2 max-sm:mx-5">
        <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center max-sm:text-4xl ">
          Tools
        </h1>
        <Marquee play={true}  speed={100} className=" h-60" pauseOnHover={true}  >
             <div  className="m-5" >
             <Image img={mongo} className="w-4" ></Image>
             </div>
             <div  className="m-5" >
             <Image img={express} className="w-4" ></Image>
             </div>
             <div  className="m-5" >
             <Image img={react} className="w-4" ></Image>
             </div>
             <div  className="m-5" >
             <Image img={node} className="w-4" ></Image>
             </div>
             <div  className="m-5" >
             <Image img={TailwindCSS} className="w-4" ></Image>
             </div>
             <div  className="m-5" >
             <Image img={Git} className="w-4" ></Image>
             </div>
             <div  className="m-5" >
             <Image img={Github} className="w-4" ></Image>
             </div>
             <div  className="m-5" >
             <Image img={HTML} className="w-4" ></Image>
             </div>
             <div  className="m-5" >
             <Image img={CSS} className="w-4" ></Image>
             </div>
             <div  className="m-5" >
             <Image img={Javascript} className="w-4" ></Image>
             </div>
             <div  className="m-5" >
             <Image img={C} className="w-4" ></Image>
             </div>
             <div  className="m-5" >
             <Image img={socket} className="w-4" ></Image>
             </div>
             
          
         

        </Marquee>
        <Marquee play={true}  direction={"right"} pauseOnHover={true} speed={100} className=" md:h-60" >
             
             <div  className="m-5" >
             <Image img={TailwindCSS} className="w-4" ></Image>
             </div>
             <div  className="m-5" >
             <Image img={Git} className="w-4" ></Image>
             </div>
             <div  className="m-5" >
             <Image img={socket} className="w-4" ></Image>
             </div>
             <div  className="m-5" >
             <Image img={react} className="w-4" ></Image>
             </div>
             <div  className="m-5" >
             <Image img={HTML} className="w-4" ></Image>
             </div>
             <div  className="m-5" >
             <Image img={mongo} className="w-4" ></Image>
             </div>
             
             
             <div  className="m-5" >
             <Image img={node} className="w-4" ></Image>
             </div>
             <div  className="m-5" >
             <Image img={CSS} className="w-4" ></Image>
             </div>
             <div  className="m-5" >
             <Image img={express} className="w-4" ></Image>
             </div>
             <div  className="m-5" >
             <Image img={Javascript} className="w-4" ></Image>
             </div>
             <div  className="m-5" >
             <Image img={C} className="w-4" ></Image>
             </div>
             <div  className="m-5" >
             <Image img={Github} className="w-4" ></Image>
             </div>
          
         

        </Marquee>
       
        
      </section>
    </>
  );
};
export default Skills;
