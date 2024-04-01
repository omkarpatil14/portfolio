import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Leetcode() {
    const [res, setRes] = useState();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://alfa-leetcode-api.onrender.com/omkarpatil14");
                setRes(response.data); // Access response.data, not response.json()
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
  
  return (
     <section   id="education"
     className="EXPERIENCE p-5 mx-20 flex  justify-center items-center mb-10 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5">
        
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl   ">
        Leetcode Profile
        </h1>
        <div  >
            {/* <img src={res.avatar} alt="" /> */}
        </div>
        
       
     </section>
  )
}

export default Leetcode