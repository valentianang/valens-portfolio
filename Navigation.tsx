import { motion } from "motion/react";
import styles from "./Navigation.module.css";

interface NavigationProps {
  isScrolled?: boolean;
}

export function Navigation({ isScrolled = false }: NavigationProps) {
  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`${styles.navigation} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <motion.button
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          YN
        </motion.button>

        <div className={styles.navLinks}>
          {["about", "projects", "contact"].map((item) => (
            <motion.button
              key={item}
              className={styles.navLink}
              whileHover={{ y: -1 }}
              onClick={() => scrollToSection(item)}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  );
}