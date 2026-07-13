import React from "react";
import { motion } from "framer-motion";
import sifat from "../../assets/img/sifat.jpg";
import SectionHeading from "../Shared/SectionHeading/SectionHeading";

const skills = [
  "React.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MySQL",
  "MongoDB",
  "Firebase",
  "Java",
  "Spring Boot",
  "REST APIs",
  "JWT",
  "Git & GitHub",
];

const About = () => {
  return (
    <section 
      id="/about" 
      className="relative px-6 max-w-6xl mx-auto w-full overflow-hidden scroll-mt-20 py-16 md:py-20"
    >
      {/* Background Ambient Blur - Synced with Contact system */}
      <div className="absolute top-0 left-10 w-80 h-80 bg-primary/5 blur-[120px] rounded-full -z-10" />

      {/* Header Container */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading>About Me</SectionHeading>
        <p className="text-base-content/60 text-sm md:text-base mt-2 max-w-md mx-auto">
          Bridging modern user interfaces with robust, enterprise-ready systems.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-10 items-center">
        {/* Visual Composition - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative group">
            {/* Glow Aura */}
            <div className="absolute inset-0 bg-primary/10 blur-[50px] rounded-[40px] transition-all duration-500 group-hover:bg-primary/20"></div>
            
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-[30px] border border-base-content/15 bg-base-200/40 backdrop-blur-md shadow-xl transition-all duration-500 group-hover:border-primary/20">
              <img
                src={sifat}
                alt="MD Sifat Ahamed"
                className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px] h-[320px] sm:h-[360px] md:h-[400px] lg:h-[440px] object-cover object-top transition duration-500 group-hover:scale-[1.03]"
              />
            </div>

            {/* Floating Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-base-100/90 border border-base-content/10 shadow-lg shadow-base-300/50 rounded-2xl px-5 py-3.5 backdrop-blur-md select-none"
            >
              <h3 className="text-2xl font-black text-primary leading-none">1+</h3>
              <p className="text-xs font-bold text-base-content/50 uppercase tracking-wider mt-1">
                Years Exp
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Narrative & Skills - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 space-y-8"
        >
          {/* Main Bio Text */}
          <div className="bg-base-200/40 border border-base-content/5 p-6 md:p-8 rounded-2xl backdrop-blur-md space-y-4">
            <p className="text-sm md:text-base leading-relaxed text-base-content/85">
              I’m currently working at <span className="font-semibold text-base-content">DataSoft Systems Bangladesh Ltd.</span>, 
              contributing to real-world enterprise infrastructure including the <span className="font-medium text-primary">Rapid Pass</span> and 
              subway mass transit projects while continuously advancing as a Full Stack Software Developer.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-base-content/85">
              My expertise includes architecting modern web applications using 
              React.js, Node.js, Express.js, and relational SQL engines, while actively 
              deepening my backend systems knowledge with Java and the Spring Boot ecosystem.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-base-content/85 font-medium text-base-content/70">
              I enjoy breaking down practical edge cases, performance bottlenecks, 
              and optimizing user experiences to build impactful, modular software.
            </p>
          </div>

          {/* Interactive Tool Badges */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-primary rounded-full"></div>
              <h4 className="text-xs font-bold text-base-content/50 uppercase tracking-wider">
                Technologies & Technical Stack
              </h4>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, index) => (
                <motion.span
                  key={`skill-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03, duration: 0.3 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-4 py-2 bg-base-100 border border-base-content/10 rounded-xl text-base-content/80 hover:text-primary hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 transition-all duration-200 text-xs md:text-sm font-semibold cursor-default select-none"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;