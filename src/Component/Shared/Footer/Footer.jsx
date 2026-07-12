import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-8 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Balanced two-column container layout */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 w-full">
          {/* Section 1: Brand / Identity Block (Left aligned) */}
          <div className="space-y-3 max-w-md">
            <h2 className="text-xl font-medium tracking-tight text-base-content/90">
              Md SIFAT <span className="text-primary font-bold">AHAMED</span>
            </h2>
            <p className="text-md text-base-content/60 font-light leading-relaxed">
              Full Stack Developer & Software Engineer. Building thoughtful,
              scalable web products with clean architecture.
            </p>
          </div>

          {/* Section 2: Interactive Social Channels (Right aligned) */}
          <div className="space-y-3 md:text-right">
            <span className="text-sm font-semibold tracking-wider text-base-content/40 lowercase block">
              connect
            </span>
            <div className="flex items-center md:justify-end gap-3">
              {[
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
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-base-content/5 text-base-content/70 flex items-center justify-center text-sm transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider & Subtle Technical Baseline */}
        <div className="mt-16 pt-8 border-t border-base-content/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-base-content/40 font-light">
          <p>
            © {new Date().getFullYear()} MD Sifat Ahamed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
