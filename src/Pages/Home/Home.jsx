import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Hero from "../../Component/Home/Hero";
import About from "../../Component/Home/About";
import Skills from "../../Component/Home/Skills";
import Contact from "../../Component/Home/Contact";
import Education from "../../Component/Home/Education";

const Home = () => {
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto space-y-20">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
