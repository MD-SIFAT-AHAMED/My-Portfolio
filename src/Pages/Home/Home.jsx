import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Hero from "../../Component/Home/Hero";
import About from "../../Component/Home/About";
import Skills from "../../Component/Home/Skills";

const Home = () => {
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto space-y-20">
      <Hero />
      <About />
      <Skills />
    </div>
  );
};

export default Home;
