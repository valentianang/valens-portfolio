import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className="text-light-brown mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hello, I'm
          </motion.p>
          <h1 className="text-neutral-900 mb-6">
            Your Name
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-neutral-600 text-xl mb-8 max-w-2xl mx-auto">
              Front-End Developer & Business Analyst Intern
            </p>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Crafting elegant digital experiences while analyzing business needs to create meaningful solutions
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-light-brown text-white rounded-full transition-colors hover:bg-brown-dark"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-light-brown text-light-brown rounded-full transition-colors hover:bg-pastel-yellow"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Work
          </motion.button>
        </motion.div>
      </div>

      <motion.button
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-light-brown cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={scrollToAbout}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}