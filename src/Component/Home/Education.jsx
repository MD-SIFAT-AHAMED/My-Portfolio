import { motion } from "framer-motion";
import SectionHeading from "../Shared/SectionHeading/SectionHeading";

const Education = () => {
  const educationData = [
    {
      level: "Bachelor of Science (BSc)",
      status: "In Progress",
      institute: "Uttara University",
      group: "Computer Science & Engineering",
      result: "Pursuing",
      year: "2025 - Present",
    },
    {
      level: "Diploma in Engineering",
      status: "Completed",
      institute: "Narsingdi Polytechnic Institute",
      group: "Computer Technology",
      result: "CGPA: 3.46",
      year: "2024",
    },
    {
      level: "Secondary School Certificate (SSC)",
      status: "Completed",
      institute: "Baligoan High School",
      group: "Science",
      result: "GPA: 4.33",
      year: "2020",
    },
  ];

  return (
    <section id="/education" className="px-6 py-6 md:py-20 max-w-4xl mx-auto">
      {/* Centered Heading Layout Matching the Entire Build */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading>Education Journey</SectionHeading>
      </motion.div>

      {/* Sweet Minimal Layered Rows */}
      <div className="border-t border-base-content/10">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="grid md:grid-cols-4 gap-4 py-8 border-b border-base-content/10 items-start"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Timeline Period Column */}
            <div className="text-xs font-medium tracking-wide text-base-content/50 lowercase">
              {edu.year}
            </div>

            {/* Degree Details & Institutional Core Context */}
            <div className="md:col-span-2 space-y-1">
              <h3 className="text-base font-medium text-base-content/90 flex items-center gap-2">
                {edu.level}
                {edu.status === "In Progress" && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                )}
              </h3>
              <p className="text-sm text-primary ">{edu.institute}</p>
              <p className="text-xs text-base-content/40  pt-0.5">{edu.group}</p>
            </div>

            {/* Performance Grade Metrics Box (Right Aligned on Desktop) */}
            <div className="md:text-right space-y-0.5">
              <span className="block text-[10px] font-medium tracking-wider text-base-content/30 uppercase">
                result
              </span>
              <span className="text-sm font-medium text-base-content/70">
                {edu.result}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;