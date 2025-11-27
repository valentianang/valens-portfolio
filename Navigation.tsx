import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="bg-white px-10 py-12 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6x1 min-h-6x5 mx-auto flex justify-between items-center">
        <motion.button
          className="text-neutral-900"
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          YN
        </motion.button>

        <div className="flex gap-8">
          {["about", "projects", "contact"].map((item) => (
            <motion.button
              key={item}
              className="text-neutral-700 hover:text-light-brown transition-colors capitalize"
              whileHover={{ y: -1 }}
              onClick={() => scrollToSection(item)}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}