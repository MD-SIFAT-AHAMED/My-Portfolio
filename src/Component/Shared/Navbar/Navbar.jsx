import { useState } from "react";
import Button from "../Ui/Button";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import ThemeToggle from "../Ui/ThemeToggle";
import Logo from "../Logo/Logo";
import resume from '../../../assets/MD_SIFAT_AHAMED-(Front-end_dev).pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Education", path: "#education" },
    { name: "Contact", path: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-base-100 border-b border-base-content/5 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="w-10 h-8 flex items-center justify-center">
          <Logo />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.path} 
                className="text-base-content/70 hover:text-primary transition-colors duration-200 "
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Interface Utilities */}
        <div className="hidden lg:flex items-center gap-5">
          <ThemeToggle />
          <Button 
            variant="outline" 
            className="rounded-full px-5 py-1.5 text-xs font-medium tracking-wider bg-transparent border-base-content/10 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-300"
          >
            <a href={resume} download>
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile Toggle Trigger Button */}
        <div className="lg:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
            className="p-2 text-2xl text-base-content/80 hover:text-primary transition-colors duration-200"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Sweet & Spacious Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 h-screen w-screen bg-base-100/98 backdrop-blur-lg z-50 flex flex-col justify-between p-8 lg:hidden transition-all duration-300 ease-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {/* Mobile Top Controls Bar */}
        <div className="flex justify-between items-center w-full">
          <div className="w-10 h-8">
            <Logo />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
            className="p-2 text-3xl text-base-content/80 hover:text-primary transition-colors duration-200"
          >
            <IoCloseOutline />
          </button>
        </div>

        {/* Mobile Centralized Menu Links Stack */}
        <ul className="flex flex-col items-center justify-center gap-6 text-xl font-medium tracking-widest my-auto">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                onClick={handleLinkClick}
                className="text-base-content/80 hover:text-primary transition-colors duration-200 block py-2"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Action Baseline */}
        <div className="w-full flex flex-col items-center gap-4 pt-6 border-t border-base-content/5">
          <Button 
            onClick={handleLinkClick} 
            variant="primary"
            className="w-full max-w-xs rounded-full py-3 text-sm font-medium tracking-wider text-center"
          >
            <a href={resume} download className="block w-full">
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;