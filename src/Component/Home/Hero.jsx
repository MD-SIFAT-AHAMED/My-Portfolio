import Lottie from "lottie-react";
import coding from "../../assets/lottis/conding.json";
import Button from "../Shared/Ui/Button";
import { Typewriter } from "react-simple-typewriter";
import AnimatedSocialIcon from "../Shared/AnimatedSocialIcon/AnimatedSocialIcon";
import { motion } from "framer-motion";

// import resume from "../../assets/resume.pdf";

const Hero = () => {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-4 md:px-10 lg:px-16 mt-24 md:mt-40 overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-primary/20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full -z-10"></div>

      {/* Left Content */}
      <motion.div
        className="flex-1 flex flex-col items-start gap-5"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Small Intro */}
        <p className="text-primary text-lg font-semibold tracking-wide">
          Hello! I am,
        </p>

        {/* Name */}
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold leading-tight text-base-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          MD SIFAT <span className="text-primary drop-shadow-lg">AHAMED</span>
        </motion.h1>

        {/* Typewriter */}
        <h2 className="text-lg md:text-2xl font-medium text-base-content/80">
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
            typeSpeed={90}
            deleteSpeed={50}
          />
        </h2>

        {/* Description */}
        <motion.p
          className="text-base md:text-lg text-base-content/70 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Passionate about building modern, scalable, and user-focused web
          applications using React.js, Node.js, and Java Spring Boot. Currently
          working at DataSoft Systems Bangladesh Ltd., contributing to
          real-world enterprise and national-scale systems including Rapid Pass
          and MRT projects.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <AnimatedSocialIcon />
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <Button>
            <a href="#contact">Contact Me</a>
          </Button>

          <Button variant="outline">
            <a href={"resume"} download>
              Get Resume
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Right Animation */}
      <motion.div
        className="flex-1 flex justify-center items-center"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="w-full max-w-md md:max-w-lg">
          <Lottie
            animationData={coding}
            loop={true}
            className="w-full h-[260px] md:h-[420px]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
