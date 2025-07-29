import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import SectionHeading from "../Shared/SectionHeading/SectionHeading";

const Education = () => {
  const educationData = [
    {
      level: "Secondary School Certificate (SSC)",
      institute: "Baligoan High School",
      group: "Science",
      result: "GPA: 4.33",
      year: "2020",
    },
    {
      level: "Diploma in Engineering",
      institute: "Narsingdi Polytechnic Institute",
      group: "Computer Technology",
      result: "CGPA: 3.46",
      year: "2024",
    },
    {
      level: "Bachelor of Science (BSc) — Running",
      institute: "Uttara University",
      group: "Computer Science & Engineering",
      result: "—",
      year: "2025 - Present",
    },
  ];

  return (
    <section className="px-4 py-12 max-w-4xl mx-auto" id="/education">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center text-base-content"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading>Education</SectionHeading>
      </motion.h2>

      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="border-l-4 border-primary pl-4 ml-2 relative"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-primary rounded-full"></div>
            <h3 className="text-xl font-semibold text-base-content">
              {edu.level}
            </h3>
            <p className="text-base text-base-content/70">{edu.institute}</p>
            <p className="text-sm text-base-content/60">
              {edu.group} | {edu.result}
            </p>
            <p className="text-sm text-base-content/50 italic">{edu.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
