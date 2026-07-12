import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../Shared/SectionHeading/SectionHeading";
import Button from "../Shared/Ui/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Dynamic EmailJS script attachment layer
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init(import.meta.env.VITE_EMAIL_PUBLIC_KEY);
      }
    };
    script.onerror = () => {
      console.error("Failed to load EmailJS");
    };
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src*="email.min.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!window.emailjs) {
      console.error("EmailJS not loaded");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      await window.emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          to_email: "mdsifat978@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        }
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "mdsifat978@gmail.com",
      link: "mailto:mdsifat978@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone / Whatsapp",
      value: "+880 1316-132578",
      link: "tel:+8801316132578",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Dhaka, Bangladesh",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/md-sifat-ahamed/",
    },
    {
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com/MD-SIFAT-AHAMED",
    },
    {
      icon: <FaFacebook className="text-xl" />,
      url: "https://www.facebook.com/heyiamsifatahamed/",
    },
  ];

  const inputBase =
    "w-full px-4 py-3 bg-base-100 border border-base-content/10 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 text-base-content placeholder-base-content/40 text-sm md:text-base font-medium disabled:opacity-50";

  return (
    <section id="/contact" className="relative px-6 max-w-6xl mx-auto w-full overflow-hidden scroll-mt-20">
      {/* Background Fluid Ambient Blob */}
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-primary/5 blur-[120px] rounded-full -z-10" />

      {/* Header Container */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading>Get In Touch</SectionHeading>
        <p className="text-base-content/60 text-sm md:text-base mt-2 max-w-md mx-auto">
          Have an exciting project idea or want to collaborate? Drop a message!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* Contact Information - Left Side Grid */}
        <motion.div 
          className="lg:col-span-5 space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-base-200/40 border border-base-content/5 p-8 rounded-2xl backdrop-blur-md">
            <h3 className="text-2xl font-bold text-base-content mb-4">
              Let's Connect & Build
            </h3>
            <p className="text-base-content/75 text-sm md:text-base leading-relaxed mb-8">
              I'm always open to discussing web systems, API architectures, or enterprise-scale integrations. Feel free to connect via direct channels or social loops.
            </p>

            {/* Interactive Detail Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const CardWrapper = info.link ? "a" : "div";
                return (
                  <CardWrapper
                    key={index}
                    href={info.link || undefined}
                    className={`group flex items-center gap-4 p-4 bg-base-100/60 border border-base-content/5 rounded-xl transition-all duration-300 ${
                      info.link ? "hover:border-primary/20 hover:bg-base-100 hover:shadow-md hover:-translate-y-0.5" : ""
                    }`}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl text-xl group-hover:bg-primary group-hover:text-primary-content transition-all duration-300 shrink-0">
                      {info.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-base-content/40 uppercase tracking-wider">
                        {info.title}
                      </h4>
                      <p className="text-sm md:text-base font-semibold text-base-content/85 truncate mt-0.5">
                        {info.value}
                      </p>
                    </div>
                  </CardWrapper>
                );
              })}
            </div>

            {/* Premium Icon Social Strip */}
            <div className="mt-8 pt-6 border-t border-base-content/5">
              <h4 className="text-xs font-bold text-base-content/40 uppercase tracking-wider mb-4">
                Social Networks
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-11 h-11 bg-base-100 border border-base-content/15 rounded-xl text-base-content/70 hover:text-primary hover:border-primary hover:shadow-md hover:shadow-primary/5 transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Communication Form - Right Side Grid */}
        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-base-200/40 border border-base-content/5 p-6 md:p-8 rounded-2xl backdrop-blur-md shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-base-content mb-6">
              Send an Instant Message
            </h3>

            {/* Status Notifications Layer */}
            <AnimatePresence mode="wait">
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`mb-6 p-4 rounded-xl border font-medium text-sm md:text-base ${
                    submitStatus === "success"
                      ? "bg-success/10 border-success/25 text-success"
                      : "bg-error/10 border-error/25 text-error"
                  }`}
                >
                  {submitStatus === "success"
                    ? "🎉 Message securely delivered! I'll get back to you shortly."
                    : `⚠️ Delivery roadblock. Please shoot a direct message to mdsifat978@gmail.com`}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Core Action Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-base-content/50 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className={inputBase}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-base-content/50 uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className={inputBase}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-base-content/50 uppercase tracking-wider mb-2">
                  Subject Focus
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className={inputBase}
                  placeholder="Project Collaboration Opportunity"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-base-content/50 uppercase tracking-wider mb-2">
                  Detailed Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  disabled={isSubmitting}
                  className={`${inputBase} resize-none min-h-[140px]`}
                  placeholder="Elaborate on your conceptual specs, targets, or technical ecosystem..."
                />
              </div>

              <motion.div whileHover={{ scale: 0.85 }} whileTap={{ scale: 0.80 }} className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 text-white shadow-lg shadow-primary/10 text-sm md:text-base font-bold select-none"
                >
                  {isSubmitting ? "Processing Handshake..." : "Transmit Message"}
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;