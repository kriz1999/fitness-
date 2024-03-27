/** @format */

import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./scenes/Navbar";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/Home";
import Benefits from "./scenes/Benefits";
import OurClasses from "./scenes/Classes";
import ContactUs from "./scenes/Contact";



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() =>{
    const handleScroll =() => {
      if (window.scrollY === 0 ){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0){
        setIsTopOfPage(false);
      }
    }
    window.addEventListener("scroll",handleScroll);
    return () => {removeEventListener("scroll",handleScroll);}
  }, [])
  return (
    <div className="app">
     <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home  setSelectedPage={setSelectedPage}

      />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses  setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} ></ContactUs>
    </div> 
  
  );
}

export default App;
