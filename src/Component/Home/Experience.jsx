import { motion } from "framer-motion";
import SectionHeading from "../Shared/SectionHeading/SectionHeading";

export function Experience() {
  const experience = [
    {
      role: "Implementation & Support Engineer",
      company: "DataSoft Systems Bangladesh Ltd",
      period: "Feb 2026 — Present",
      description:
        "Software Developer with a strong frontend foundation, contributing to national-scale projects like Rapid Pass and MRT. Experienced in deployment, client support, troubleshooting, and data analysis, while gradually contributing to development. Skilled in React.js for frontend and expanding backend expertise with Java (Spring Boot), focused on building scalable and efficient systems.",
    },
    {
      role: "Web Developer ( Intern )",
      company: "Daffodil International Professional Training Institute (DIPTI)",
      period: "Jun 2024 — Sep 2024",
      description:
        "Completed hands-on training in web development, building responsive websites and web applications using modern frontend technologies. Gained practical experience in HTML, CSS, JavaScript, and React.js while working on real-world projects.",
    },
  ];

  return (
    <section id="experience" className="px-6 py-6 md:py-20 max-w-4xl mx-auto">
      {/* Centered Heading Layout Matching the Setup */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading>Experience</SectionHeading>
      </motion.div>

      {/* Sweet Minimal Layered Rows */}
      <div className="border-t border-base-content/10">
        {experience.map((e, index) => (
          <motion.div
            key={e.company + e.period}
            className="grid md:grid-cols-4 gap-4 py-8 border-b border-base-content/10 items-start"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Timeline Period Column */}
            <div className="text-xs font-medium tracking-wide text-base-content/50 ">
              {e.period}
            </div>

            {/* Role details & Core Context Columns */}
            <div className="md:col-span-3 space-y-3">
              <div>
                <h3 className="text-base font-medium text-base-content/90">
                  {e.role}
                </h3>
                <p className="text-sm text-primary font-medium mt-0.5">
                  {e.company}
                </p>
              </div>
              
              <p className="text-sm text-base-content/60 font-light leading-relaxed max-w-2xl">
                {e.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}