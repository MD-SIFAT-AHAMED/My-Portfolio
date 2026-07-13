import { motion } from "framer-motion";

const SectionHeading = ({ children }) => (
  <div className="mb-6 md:mb-8">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="flex items-center justify-center gap-3 max-w-xs mx-auto select-none"
    >
      {/* Sleek Line Separators synced with brand accents */}
      <div className="flex-1 h-[1px] bg-primary/20 rounded-full" />
      
      <div className="px-3.5 py-1 text-xs md:text-sm font-bold tracking-widest text-base-content/90 uppercase border border-base-content/5 bg-base-200/50 backdrop-blur-sm rounded-lg shadow-sm">
        {children}
      </div>
      
      <div className="flex-1 h-[1px] bg-primary/20 rounded-full" />
    </motion.div>
  </div>
);

export default SectionHeading;