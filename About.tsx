import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import styles from "./About.module.css";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>About Me</h2>
          
          <div className={styles.grid}>
            <div>
              <p className={styles.text}>
                I'm currently pursuing my passion for technology and business at [University Name], where I'm gaining hands-on experience as both a Front-End Developer and Business Analyst intern.
              </p>
              <p className={styles.text}>
                My unique position allows me to bridge the gap between technical implementation and business strategy, ensuring that every solution I create is both technically sound and aligned with organizational goals.
              </p>
              <p className={styles.text}>
                I believe in the power of clean code, intuitive design, and data-driven decision making to create impactful digital products.
              </p>
            </div>

            <div className={styles.cardContainer}>
              <motion.div
                className={styles.card}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <h4 className={styles.cardTitle}>Education</h4>
                <p className={styles.cardText}>Bachelor's Degree in [Your Major]</p>
                <p className={styles.cardSubtext}>Expected Graduation: [Year]</p>
              </motion.div>

              <motion.div
                className={styles.card}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <h4 className={styles.cardTitle}>Current Role</h4>
                <p className={styles.cardText}>Front-End Developer & Business Analyst Intern</p>
                <p className={styles.cardSubtext}>[Company Name]</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}