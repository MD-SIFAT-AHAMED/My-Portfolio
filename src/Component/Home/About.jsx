import sifat from "../../assets/img/sifat.jpg";
import { motion } from "framer-motion";
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
    <section id="about" className="relative py-16 md:py-20 px-4 md:px-10 lg:px-16 overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full -z-10"></div>

      <SectionHeading>About Me</SectionHeading>

      <div className="grid lg:grid-cols-12 gap-5 lg:gap-10 items-center mt-16">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 flex justify-center"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-[40px]"></div>
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-base-200/40 backdrop-blur-md shadow-2xl">
              <img
                src={sifat}
                alt="MD Sifat Ahamed"
                className="w-[300px] sm:w-[340px] md:w-[380px] lg:w-[420px] h-[340px] sm:h-[380px] md:h-[430px] lg:h-[470px] object-cover  object-top    transition duration-500 hover:scale-105"
              />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-base-100 border border-base-300 shadow-xl rounded-2xl px-5 py-4 backdrop-blur-md"
            >
              <h3 className="text-2xl font-bold text-primary">1+</h3>
              <p className="text-sm text-base-content/70">Years Experience</p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 space-y-8"
        >
          {/* Heading */}
          <div className="space-y-5">
            <p className="text-base md:text-lg leading-relaxed text-base-content/70">
              I’m currently working at DataSoft Systems Bangladesh Ltd.,
              contributing to real-world enterprise systems including Rapid Pass
              and MRT projects while continuously growing as a Full Stack
              Software Developer.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-base-content/70">
              My expertise includes building modern web applications using
              React.js, Node.js, Express.js, and MySQL, while also expanding my
              backend development skills with Java and Spring Boot.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-base-content/70">
              I enjoy solving practical problems, optimizing user experiences,
              and building software that is scalable, efficient, and impactful.
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-5 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[2px] bg-primary"></div>

              <h3 className="text-xl font-semibold">Technologies & Tools</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  className="px-4 py-2 rounded-xl bg-base-200 border border-base-300 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 text-sm font-medium cursor-default"
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
