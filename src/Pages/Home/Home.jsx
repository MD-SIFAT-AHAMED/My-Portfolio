import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Hero from "../../Component/Home/Hero";
import About from "../../Component/Home/About";
import Skills from "../../Component/Home/Skills";
import Contact from "../../Component/Home/Contact";
import Education from "../../Component/Home/Education";
import Projects from "../../Component/Home/Projects";
import { Experience } from "../../Component/Home/Experience";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Experience/>
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
