import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Hero from "../../Component/Home/Hero";
import About from "../../Component/Home/About";
import Skills from "../../Component/Home/Skills";
import Contact from "../../Component/Home/Contact";
import Education from "../../Component/Home/Education";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
