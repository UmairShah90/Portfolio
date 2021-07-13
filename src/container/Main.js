import React, { useEffect } from "react";
import Home from "../components/Home/Home";
import Nav from "../components/Navbar/Nav";
import "./../index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Services from "../components/Services/Services";
import Skills from "../components/Skills/Skills";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function Main() {

  
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 200 });
  }, []);
  return (
    <div className="main-container">
    
      <Nav />
      <Home />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default Main;
