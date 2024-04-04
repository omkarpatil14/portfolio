import Lottie from "lottie-react";
import computer from "../assets/lottie/computer.json";
import { TypeAnimation } from 'react-type-animation';

const About = () => {

   
  return (
    <>
      <section
        id="about"
        className="EXPERIENCE md:p-5 md:mx-20 h-auto flex flex-col md:flex-row justify-center items-center md:mb-10 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 flex min-w-[50%] max-sm:flex-col gap-5 justify-between">
          <div className="INTRO text-[70px] leading-[80px] font-semibold max-sm:text-[50px] max-sm:leading-[70px] max-sm:font-semibold">
            <h3 className="text-[#00040f] dark:text-white">
              Hi, there! <br />I am <br/>
              <span className="bg-clip-text flex  md:min-h-24 flex-wrap text-transparent bg-gradient-to-r text-[35px] md:text-[70px] from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200">
                <TypeAnimation
                  sequence={[
                    'Omkar Patil ',
                    1000,
                    'a Developer',
                    1000,
                    'a Designer',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '1.25em', display: 'inline-block' }} // Adjusted font size relative to text-xl
                  repeat={Infinity}
                />
              </span>
            </h3>
            <p className="ABOUT  text-xl max-sm:text-[15px] bg-clip-text text-transparent  bg-gradient-to-r  from-[#00040f] to-slate-500 dark:from-slate-500 dark:to-slate-200 max-w-[470px] mt-5 pl-1">
              Programming enthusiast who often thinks about developing new 
              things for solving real world problems.
            </p>
          </div>
         
        </div>
        <div>
        <Lottie
            animationData={computer}
            loop={true}
            className="max-w-[950px] shadow-xl rounded-xl border border-[#00040f]"
          />
        </div>
      </section>
    </>
  );
};
export default About;
