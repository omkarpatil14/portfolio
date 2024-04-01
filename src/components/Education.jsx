import education from "../assets/lottie/education.json";
import IIIT_KOTA from "../assets/IIIT_Kota.png";
import AOS from "aos";
import "aos/dist/aos.css";
import {vjti,lbs} from "../constants/Constant"
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
      <div className="WRAPPER mt-10">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl   ">
        Education
        </h1>

        <div
          className="EDUCATION flex gap-7 justify-between flex-row-reverse max-sm:flex-col"
          data-aos="fade-left"
        >
          <div className="max-w-[520px] mt-[52px] p-7 max-sm:p-3">
            <div className="flex gap-5">
              <img
                src={lbs}
                alt="LBS"
                className="w-[90px] h-[90px]"
              />
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl w-[300px] h-[100px] tracking-wider ">
               Lal Bahadur Shastri college,Satara , Maharashtra.
              </h1>
            </div>

            <div className="mt-7 flex flex-col gap-5 text-left pl-4">
              <h3 className="capitalize  text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">
                bachelor of Science in Mathematics
              </h3>
              <p className="italic capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                November 2020 - may 2023
              </p>

              <p className="capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                CGPA - 8.7
              </p>
            </div>
          </div>
          
        </div>
        <div
          className="EDUCATION flex gap-7    justify-between flex-row-reverse max-sm:flex-col"
          data-aos="fade-left"
        >
          <div className="max-w-[520px] mt-[52px] p-7 max-sm:p-3">
            <div className="flex gap-5">
              <img
                src={vjti}
                alt="VJTI"
                className="w-[90px] h-[90px]"
              />
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl w-[300px] h-[100px] tracking-wider ">
                VEERMATA JIJABAI TECHNOLOGICAL INSTITUTE ,MUMBAI , MAHARASHTRA.
              </h1>
            </div>

            <div className="mt-7 flex flex-col gap-5 text-left pl-4">
            <h3 className="capitalize  text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">
             Master of Computer Application
              </h3>
              <p className="italic capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                  Persuing
              </p>

              <p className="capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                CGPA - 8.7
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
export default Education;
