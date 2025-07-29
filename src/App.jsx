

import { FaGithub, FaLinkedin } from "react-icons/fa";

const App = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow bg-white">
        <h1 className="text-xl font-bold">MD SIFAT AHAMED</h1>
        <div className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-blue-100 to-white">
        <h2 className="text-4xl font-bold">Hi, I'm MD SIFAT AHAMED</h2>
        <p className="text-xl mt-4">MERN Stack Web Developer</p>
        <div className="flex justify-center gap-4 mt-6">
          <a className="btn btn-primary" href="/resume.pdf" download>Download Resume</a>
          <a href="https://github.com/yourusername" target="_blank"><FaGithub size={30} /></a>
          <a href="https://linkedin.com/in/yourusername" target="_blank"><FaLinkedin size={30} /></a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-12 text-center">
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        <p className="max-w-xl mx-auto">
          I'm a passionate MERN Stack developer with experience building full-stack web applications using MongoDB, Express, React, and Node.js. I love solving problems and creating efficient, scalable solutions.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-50 py-12 text-center">
        <h3 className="text-2xl font-bold mb-6">My Skills</h3>
        <div className="flex justify-center flex-wrap gap-4">
          {["React", "Node.js", "Express", "MongoDB", "Tailwind", "Firebase"].map((skill) => (
            <span key={skill} className="badge badge-outline badge-lg">{skill}</span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
        <p>Email: <a href="mailto:sifat@example.com" className="text-blue-600 underline">sifat@example.com</a></p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        &copy; 2025 MD SIFAT AHAMED. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
