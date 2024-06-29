import React from 'react'
import { useEffect } from 'react';
import Aos from 'aos'

function Achievements() {
  useEffect(() => {
    Aos.init(); 
  }, []);
  return (
    
    <section id="achievements"
    className="p-10 " data-aos="fade-left">
        <h1 className="text-[#00040f]  dark:text-slate-300 py-5 font-extrabold text-5xl text-center" >
           Achivements
          </h1>
      <div className='capitalize  text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg'
         
          >
            <h1 className='     bg-clip-text  text-transparent font-semibold text-2xl  bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 '  >
            &#8226;  Recognition at AlphaByte 1.0: Guiding Team Success to the Top 20
            </h1>
         

           <p className="capitalize text-gray-500 dark:text-slate-500 text-md max-sm:text-lg leading-9">
           Our team's collaborative efforts and my leadership skills propelled us to the final round, where we ranked among the top 20 teams out of 930 participants at AlphaByte 1.0, hosted by Pimpri Chinchwad College of Engineering, Pune
              </p>
      </div>
      <div className='capitalize  text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg'
       
      >
      <h1 className='     bg-clip-text  text-transparent font-semibold text-2xl  bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100'  >
      &#8226; Achievements in MCA CET 
            </h1>
            <p className="capitalize text-gray-500 dark:text-slate-500 text-md max-sm:text-lg leading-9">
            I achieved a remarkable 45th All India Rank in MHT CET 2023, securing an impressive 99.54 percentile. Additionally, I earned the distinction of being third in Chhatrapati Shivaji University, Kolhapur
              </p>
      </div>
      <div className='capitalize  text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg'
      
      >
      <h1 className='     bg-clip-text  text-transparent font-semibold text-2xl  bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100'  >
      &#8226;state Rugby champion
            </h1>
            <p className="capitalize text-gray-500 dark:text-slate-500 text-md max-sm:text-lg leading-9">
            Captaining our team to the First Runner-Up position in the Maharashtra State Level Rugby Championship 2021 stands as a testament to our collective dedication, teamwork, and perseverance on the field
              </p>
      </div>

    </section>
  )
}

export default Achievements