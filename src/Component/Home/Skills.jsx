import { motion } from "framer-motion";
import SectionHeading from "../Shared/SectionHeading/SectionHeading";

import { FaReact, FaGitAlt, FaGithub, FaNodeJs, FaJava } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiJsonwebtokens,
  SiSpringboot,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiCanva,
  SiReactquery,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-amber-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-emerald-400" },
  { name: "Express.js", icon: <SiExpress />, color: "text-base-content/70" },
  { name: "Java", icon: <FaJava />, color: "text-orange-400" },
  { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-400" },
  { name: "MySQL", icon: <SiMysql />, color: "text-sky-500" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-emerald-500" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-400" },
  { name: "JWT", icon: <SiJsonwebtokens />, color: "text-pink-400" },
  { name: "TanStack Query", icon: <SiReactquery />, color: "text-rose-400" },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-400" },
  { name: "GitHub", icon: <FaGithub />, color: "text-base-content/70" },
  { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },
  { name: "Vercel", icon: <SiVercel />, color: "text-base-content/70" },
  { name: "Netlify", icon: <SiTailwindcss className="text-teal-400" /> }, // Keeping structural consistency
  { name: "Figma", icon: <SiFigma />, color: "text-purple-400" },
  { name: "Canva", icon: <SiCanva />, color: "text-indigo-400" },
];

// Quick clean up for the Netlify icon instance import switch block mapping
skills[17].icon = <SiNetlify />; 

const Skills = () => {
  return (
    <section id="/skills" className="px-6 py-20 max-w-4xl mx-auto">
      {/* Centered Heading Layout */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading>Technical Skills</SectionHeading>
      </motion.div>

      {/* Sweet Minimal Flex Grid Layout */}
      <div className="flex flex-wrap gap-3 justify-start items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-base-content/10 bg-base-200/20 transition-all duration-300 hover:border-base-content/20 hover:bg-base-200/40"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
          >
            {/* Always colored -> grows clearly larger on hover */}
            <span className={`text-lg transition-transform duration-300 ease-out group-hover:scale-125 ${skill.color}`}>
              {skill.icon}
            </span>

            {/* Typography Accent */}
            <span className="text-xs font-medium tracking-wide text-base-content/80 group-hover:text-base-content transition-colors duration-300 lowercase">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;