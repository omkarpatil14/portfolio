import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import HashLoader from "react-spinners/HashLoader";

import { useState, useEffect } from "react";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Leetcode from "./components/Leetcode";

const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5rem",
  borderColor: "red",
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex h-screen justify-center items-center bg-[#00040f]">
          <HashLoader
            color="#0891b2"
            loading={loading}
            cssOverride={override}
            size={90}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <  >
          <Navbar></Navbar>
          <About></About>
          <Achievements/>
        
          <Skills/>
          <Leetcode/>
          <Education></Education>
          <Projects></Projects>

          <Contact></Contact>
        </>
      )}
    </>
  );
};
export default App;
