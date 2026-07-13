import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Ui/Button";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import ThemeToggle from "../Ui/ThemeToggle";
import Logo from "../Logo/Logo";
import resume from '../../../assets/MD_SIFAT_AHAMED-(Front-end_dev).pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "#/about" },
    { name: "Skills", path: "#/skills" },
    // { name: "Projects", path: "#/projects" },
    { name: "Education", path: "#/education" },
    { name: "Contact", path: "#/contact" },
  ];

  // Background Scroll Lock Sync Layer
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup modifier if the component unmounts unexpectedly
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-base-100 border-b border-b-base-content/5 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="w-9 h-7 flex items-center justify-center">
          <Logo />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-7 text-xs md:text-sm font-semibold tracking-wide">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.path} 
                className="text-base-content/70 hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Interface Utilities */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <motion.div whileHover={{ scale: 1.005 }} whileTap={{ scale: 0.985 }}>
            <Button 
              variant="outline" 
              className="rounded-xl px-4 py-1.5 text-xs text-primary font-semibold tracking-wide bg-transparent border-base-content/10 hover:border-primary/40 transition-all duration-200"
            >
              <a href={resume} download>
                Resume
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Toggle Trigger Button */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
            className="p-1.5 text-xl text-base-content/80 hover:text-primary transition-colors duration-200"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Smooth Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 h-[100dvh] w-screen bg-base-100/98 backdrop-blur-md z-50 flex flex-col justify-between p-6 overflow-y-auto lg:hidden"
          >
            {/* Mobile Top Controls Bar */}
            <div className="flex justify-between items-center w-full shrink-0">
              <div className="w-9 h-7">
                <Logo />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
                className="p-1.5 text-2xl text-base-content/80 hover:text-primary transition-colors duration-200"
              >
                <IoCloseOutline />
              </button>
            </div>

            {/* Mobile Centralized Menu Links Stack */}
            <ul className="flex flex-col items-center justify-center gap-6 text-sm font-bold tracking-widest py-8 select-none grow">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    onClick={handleLinkClick}
                    className="text-base-content/80 hover:text-primary transition-colors duration-150 block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Action Baseline */}
            <div className="w-full flex flex-col items-center gap-4 pb-2 pt-4 border-t border-base-content/5 shrink-0">
              <motion.div className="w-full max-w-xs" whileTap={{ scale: 0.985 }}>
                <Button 
                  onClick={handleLinkClick} 
                  variant="primary"
                  className="w-full rounded-xl py-2.5 text-xs font-bold tracking-wider text-center shadow-md shadow-primary/5"
                >
                  <a href={resume} download className="block text-white w-full">
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;