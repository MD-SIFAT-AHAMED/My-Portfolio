import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
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
    <section className="relative px-6 py-20 max-w-5xl mx-auto overflow-hidden" id="/education">
      {/* Subtle Background Fluid Layer */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-primary/5 blur-[100px] rounded-full -z-10" />

      {/* Redesigned Animated Section Header */}
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading>Education Journey</SectionHeading>
        <p className="text-base-content/60 text-sm mt-2 max-w-md mx-auto">
          An overview of my academic foundation and technical specializations.
        </p>
      </motion.div>

      {/* Main Timeline Layout */}
      <div className="relative border-l-2 border-base-content/10 ml-4 md:ml-32 pl-8 md:pl-12 space-y-12">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            {/* Animated Milestone Timeline Icon Node */}
            <motion.div 
              className="absolute -left-[45px] md:-left-[61px] top-1.5 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-primary-content flex items-center justify-center shadow-lg shadow-primary/20 z-10 border-4 border-base-100"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaGraduationCap className="text-sm md:text-base" />
            </motion.div>

            {/* Premium Frosted Educational Details Card */}
            <div className="group bg-base-200/40 hover:bg-base-200/70 border border-base-content/5 hover:border-primary/20 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm relative flex flex-col md:flex-row md:items-start justify-between gap-4">
              
              <div className="space-y-2">
                {/* Year Pill Display (Responsive Layout Shift) */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                    {edu.year}
                  </span>
                  {edu.status === "In Progress" && (
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-success/10 text-success animate-pulse">
                      Running
                    </span>
                  )}
                </div>

                {/* Degree & Level */}
                <h3 className="text-xl font-bold text-base-content group-hover:text-primary transition-colors duration-200">
                  {edu.level}
                </h3>

                {/* Institution Name */}
                <p className="text-base font-medium text-base-content/85">
                  {edu.institute}
                </p>

                {/* Field of Study Description Line */}
                <div className="flex items-center gap-2 text-sm text-base-content/60 mt-1">
                  <span>{edu.group}</span>
                </div>
              </div>

              {/* Clean Grade / Result Tracker Grid Box */}
              <div className="md:self-start bg-base-300/50 border border-base-content/5 px-4 py-2 rounded-xl text-center min-w-[100px] backdrop-blur-sm group-hover:border-primary/10 transition-colors">
                <span className="block text-[10px] uppercase font-bold tracking-wider text-base-content/40">
                  Result
                </span>
                <span className="text-sm font-bold text-base-content/80">
                  {edu.result}
                </span>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;