
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="education"
      className="EXPERIENCE p-5 mx-20 flex flex-col justify-center items-center mb-10 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
      
    >
      <div className="WRAPPER mt-10 flex flex-col gap-14"data-aos="fade-right">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl   ">
        Education
        </h1>

        
<ol className="relative border-s border-gray-600 dark:border-gray-700">                  
    <li className="mb-10 ms-4  ">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
         
        ></div>
        <time className="mb-1 text-lg bg-clip-text text-transparent bg-gradient-to-r  from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200"> 2019-2020</time>
        
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl w-[300px] h-[100px] tracking-wider " >
               Lal Bahadur Shastri college,Satara , Maharashtra.
              </h1>
              <h3 className="capitalize  text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">
                class 12th
              </h3>
              <p className="capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9"  >
                Percentage-73%
              </p>
        
    </li>
    
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
         
        ></div>
        <time className="mb-1 text-lg bg-clip-text text-transparent bg-gradient-to-r  from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200"> 2020-2023</time>
        
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl w-[300px] h-[100px] tracking-wider " >
               Lal Bahadur Shastri college,Satara , Maharashtra.
              </h1>
              <h3 className="capitalize  text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">
                bachelor of Science in Mathematics
              </h3>
              <p className="capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9"  >
                CGPA - 8.7
              </p>
        
    </li>
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-lg bg-clip-text text-transparent bg-gradient-to-r  from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200">August 2023</time>
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl w-[300px] h-[100px] tracking-wider "  >
                VEERMATA JIJABAI TECHNOLOGICAL INSTITUTE ,MUMBAI , MAHARASHTRA.
              </h1>
              <h3 className="capitalize  text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg"  >
             Master of Computer Application
              </h3>
              

              <p className="capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                CGPA - 8.7
              </p>
    </li>
   
</ol>


        
       
      </div>
    </section>
  );
};
export default Education;
