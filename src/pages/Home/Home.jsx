import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import Design from "../Design/Design";
import Portfolio from "../Portfolio/Portfolio";
import VideoPage from "../Video/VideoPage";
import About from "../About/About";
import Stats from "../Stats/Stats";
import Skills from "../Skills/Skills";
import Pricing from "../Pricing/Pricing";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ScrollButton from "../../UI/scroll-btn/ScrollButton";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <ScrollButton />
      <LandingPage />
      <Services />
      <Design />
      <Portfolio />
      <VideoPage />
      <About />
      <Stats />
      <Skills />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
