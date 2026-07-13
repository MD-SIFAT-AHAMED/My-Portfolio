import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      icon: <FaGithub />,
      url: "https://github.com/MD-SIFAT-AHAMED",
      label: "GitHub",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/md-sifat-ahamed/",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:mdsifat978@gmail.com",
      label: "Email",
    },
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/heyiamsifatahamed/",
      label: "Facebook",
    },
  ];

  return (
    <footer className="mt-12 bg-transparent border-t border-base-content/5">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Two-Column Clean Container */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 w-full">
          
          {/* Brand Identity Block */}
          <div className="space-y-2 max-w-sm">
            <h2 className="text-lg font-extrabold tracking-tight text-base-content/90 uppercase select-none">
              Md SIFAT <span className="text-primary">AHAMED</span>
            </h2>
            <p className="text-xs md:text-sm text-base-content/60 leading-relaxed font-medium">
              Full Stack Developer & Software Engineer. Building thoughtful,
              scalable web products with clean architecture.
            </p>
          </div>

          {/* Social Links Block */}
          <div className="space-y-2.5 md:text-right">
            <span className="text-[10px] font-bold tracking-widest text-base-content/40 uppercase block">
              Connect
            </span>
            <div className="flex items-center md:justify-end gap-2.5">
              {socials.map((social, index) => (
                <motion.a
                  key={`footer-social-${index}`}
                  href={social.url}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-xl bg-base-200/60 border border-base-content/5 text-base-content/70 flex items-center justify-center text-xs transition-colors duration-150 hover:text-primary hover:border-primary/30 shadow-sm"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Track */}
        <div className="mt-10 pt-6 border-t border-base-content/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-base-content/40 font-semibold uppercase tracking-wider">
          <p>© {currentYear} MD Sifat Ahamed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;