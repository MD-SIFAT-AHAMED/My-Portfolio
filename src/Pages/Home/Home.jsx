import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Hero from "../../Component/Home/Hero";
import About from "../../Component/Home/About";

const Home = () => {
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto ">
      <Hero />
      <About />
    </div>
  );
};

export default Home;
