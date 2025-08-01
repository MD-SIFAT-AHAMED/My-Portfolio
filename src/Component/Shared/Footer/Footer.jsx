import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-20">
      <div className="max-w-screen-2xl w-11/12 mx-auto py-10 flex flex-col items-center gap-3 text-center">
        {/* Name */}
        <h2 className="text-xl font-bold">MD SIFAT AHAMED</h2>

        {/* Description */}
        <p className="text-sm max-w-xl text-base-content/70">
          MERN Stack Developer with a strong focus on building high-quality, responsive web applications using modern technologies like React, Node.js, and MongoDB.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl mt-2">
          <a href="https://www.facebook.com/heyiamsifatahamed/" target="_blank" rel="noreferrer">
            <FaFacebookF className="hover:text-primary transition" />
          </a>
          <a href="https://github.com/MD-SIFAT-AHAMED" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-primary transition" />
          </a>
          <a href="https://www.linkedin.com/in/md-sifat-ahamed/" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="hover:text-primary transition" />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-base-content/10 text-center text-sm py-4">
        &copy; {new Date().getFullYear()} MD SIFAT AHAMED. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
