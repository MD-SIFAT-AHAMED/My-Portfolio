import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import coding from "../../assets/lottis/conding.json";
import Button from "../Shared/Ui/Button";
import { Typewriter } from "react-simple-typewriter";
import AnimatedSocialIcon from "../Shared/AnimatedSocialIcon/AnimatedSocialIcon";

const Hero = () => {
  return (
    <section 
      id="/home" 
      className="relative px-6 max-w-5xl mx-auto w-full overflow-hidden flex flex-col-reverse md:flex-row items-center justify-between gap-8 mt-20 md:mt-28 pb-10"
    >
      {/* Background Ambient Blur */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -z-10" />

      {/* Left Content Column */}
      <motion.div
        className="flex-grow flex-[1.2] flex flex-col items-start gap-4 w-full"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Intro Badge */}
        <p className="text-primary text-xs md:text-sm font-bold uppercase tracking-widest">
          Hello World, I am
        </p>

        {/* Refactored Clean Name Heading */}
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-base-content select-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          MD SIFAT <span className="text-primary drop-shadow-sm">AHAMED</span>
        </motion.h1>

        {/* Scaled Down Typewriter Track */}
        <div className="h-6 md:h-8 text-base md:text-xl font-semibold text-base-content/85">
          <Typewriter
            words={[
              "Software Developer",
              "Full Stack Developer",
              "React & Node.js Developer",
              "Java Spring Boot Developer",
            ]}
            loop={100}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </div>

        {/* Balanced Context Block */}
        <motion.p
          className="text-xs md:text-sm leading-relaxed text-base-content/75 max-w-lg bg-base-200/20 border border-base-content/5 p-4 md:p-5 rounded-xl backdrop-blur-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Passionate about engineering clean user interfaces and modular backend systems. 
          Currently working at <span className="font-semibold text-base-content">DataSoft Systems Bangladesh Ltd.</span>, 
          contributing to mission-critical infrastructure including national <span className="font-medium text-primary">Rapid Pass</span> and mass transit systems.
        </motion.p>

        {/* Social Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <AnimatedSocialIcon />
        </motion.div>

        {/* Call To Actions */}
        <motion.div
          className="flex flex-wrap gap-3 mt-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button className="shadow-md text-white shadow-primary/5 font-bold px-5 py-2.5 text-xs md:text-sm">
              <a href="#/contact">Connect With Me</a>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button 
              variant="outline" 
              className="font-bold border-base-content/15 hover:border-primary text-primary px-5 py-2.5 text-xs md:text-sm"
            >
              <a href="resume" download>
                Get Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Graphic Column */}
      <motion.div
        className="flex-1 w-full flex justify-center items-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="w-full max-w-xs md:max-w-sm lg:max-w-md relative group">
          <div className="absolute inset-0 bg-primary/5 blur-[50px] rounded-full" />
          <Lottie
            animationData={coding}
            loop={true}
            className="w-full h-[200px] sm:h-[260px] md:h-[320px] lg:h-[360px] relative z-10 pointer-events-none"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;