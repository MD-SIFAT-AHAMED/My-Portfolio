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
  {
    name: "React.js",
    icon: <FaReact className="text-cyan-400" />,
    borderColor: "border-cyan-400",
    shadowColor: "hover:shadow-cyan-400/30",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-300" />,
    borderColor: "border-cyan-300",
    shadowColor: "hover:shadow-cyan-300/30",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />,
    borderColor: "border-yellow-400",
    shadowColor: "hover:shadow-yellow-400/30",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" />,
    borderColor: "border-blue-500",
    shadowColor: "hover:shadow-blue-500/30",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-400" />,
    borderColor: "border-green-400",
    shadowColor: "hover:shadow-green-400/30",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    borderColor: "border-base-content",
    shadowColor: "hover:shadow-base-content/30",
  },
  {
    name: "Java",
    icon: <FaJava className="text-orange-500" />,
    borderColor: "border-orange-500",
    shadowColor: "hover:shadow-orange-500/30",
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot className="text-green-500" />,
    borderColor: "border-green-500",
    shadowColor: "hover:shadow-green-500/30",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-400" />,
    borderColor: "border-blue-400",
    shadowColor: "hover:shadow-blue-400/30",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500" />,
    borderColor: "border-green-500",
    shadowColor: "hover:shadow-green-500/30",
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-500" />,
    borderColor: "border-yellow-500",
    shadowColor: "hover:shadow-yellow-500/30",
  },
  {
    name: "JWT",
    icon: <SiJsonwebtokens className="text-amber-500" />,
    borderColor: "border-amber-500",
    shadowColor: "hover:shadow-amber-500/30",
  },
  {
    name: "TanStack Query",
    icon: <SiReactquery className="text-red-500" />,
    borderColor: "border-red-500",
    shadowColor: "hover:shadow-red-500/30",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-500" />,
    borderColor: "border-orange-500",
    shadowColor: "hover:shadow-orange-500/30",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    borderColor: "border-base-content",
    shadowColor: "hover:shadow-base-content/30",
  },
  {
    name: "Postman",
    icon: <SiPostman className="text-orange-400" />,
    borderColor: "border-orange-400",
    shadowColor: "hover:shadow-orange-400/30",
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
    borderColor: "border-base-content",
    shadowColor: "hover:shadow-base-content/30",
  },
  {
    name: "Netlify",
    icon: <SiNetlify className="text-green-400" />,
    borderColor: "border-green-400",
    shadowColor: "hover:shadow-green-400/30",
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-pink-500" />,
    borderColor: "border-pink-500",
    shadowColor: "hover:shadow-pink-500/30",
  },
  {
    name: "Canva",
    icon: <SiCanva className="text-blue-400" />,
    borderColor: "border-blue-400",
    shadowColor: "hover:shadow-blue-400/30",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-8 md:py-12 px-4 md:px-10 lg:px-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <SectionHeading>Technical Skills</SectionHeading>

        {/* Small Intro */}
        <p className="text-center text-base-content/60 max-w-2xl mx-auto mt-5 mb-14 text-sm md:text-base leading-relaxed">
          Technologies and tools I use to build modern, scalable, and
          high-performance web applications.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`
                group relative overflow-hidden
                rounded-2xl
                border ${skill.borderColor}
                bg-base-200/40 backdrop-blur-md
                p-6
                flex flex-col items-center justify-center
                text-center
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-2xl
                ${skill.shadowColor}
              `}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/5 to-transparent"></div>

              {/* Icon */}
              <div className="text-5xl mb-4 transition-transform duration-500 group-hover:scale-110">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-sm md:text-base font-semibold">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
