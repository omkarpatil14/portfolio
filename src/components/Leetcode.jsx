import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Leetcode() {
    const [res, setRes] = useState(null); // Initialize state as null to indicate data is being fetched
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://leetcode-stats-api.herokuapp.com/omkarpatil14");
                setRes(response.data); // Access response.data, not response.json()
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // Define function to render data
    const renderData = () => {
        if (!res) {
            return <p>Loading...</p>; // Display loading message while fetching data
        }

        // Define color coding for different metrics
        const colors = {
            acceptanceRate: res.acceptanceRate >= 60 ? "text-green-500" : "text-red-500",
            contributionPoints: res.contributionPoints >= 300 ? "text-green-500" : "text-red-500",
            easySolved: res.easySolved >= 50 ? "text-green-500" : "text-red-500",
            hardSolved: res.hardSolved >= 10 ? "text-green-500" : "text-red-500",
            mediumSolved: res.mediumSolved >= 100 ? "text-green-500" : "text-red-500",
            totalSolved: res.totalSolved >= 100 ? "text-green-500" : "text-red-500"
        };

        return (
            <div className="flex flex-wrap justify-center gap-5">
                <div>
                    <p className=' dark:text-white' >Acceptance Rate: <span className={colors.acceptanceRate}>{res.acceptanceRate}%</span></p>
                </div>
                <div>
                    <p className=' dark:text-white' >Contribution Points: <span className={colors.contributionPoints}>{res.contributionPoints}</span></p>
                </div>
                <div>
                    <p className=' dark:text-white'>Easy Problems Solved: <span className={colors.easySolved}>{res.easySolved}</span></p>
                </div>
                <div>
                    <p className=' dark:text-white'>Hard Problems Solved: <span className={colors.hardSolved}>{res.hardSolved}</span></p>
                </div>
                <div>
                    <p className=' dark:text-white'>Medium Problems Solved: <span className={colors.mediumSolved}>{res.mediumSolved}</span></p>
                </div>
                <div>
                    <p className=' dark:text-white'>Total Problems Solved: <span className={colors.totalSolved}>{res.totalSolved}</span></p>
                </div>
            </div>
        );
    };
  
    return (
        <section id="education" className="EXPERIENCE p-5  flex  flex-col md:flex-row justify-center items-center min-h-[20rem] font-['Poppins'] max-sm:p-2 max-sm:mx-5">
           {res && <div>
            <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl">
                Leetcode Profile
            </h1>
            <div>
                {renderData()} {/* Render data */}
            </div>
            </div>}
        </section>
    );
}

export default Leetcode;
