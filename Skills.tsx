import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, BarChart3, Database, Layout, FileText, Users } from "lucide-react";
import styles from "./Skills.module.css";

const technicalSkills = [
  { name: "React & TypeScript", icon: Code2 },
  { name: "HTML/CSS/JavaScript", icon: Layout },
  { name: "Tailwind CSS", icon: Layout },
  { name: "Git & Version Control", icon: Code2 },
];

const analyticalSkills = [
  { name: "Data Analysis", icon: BarChart3 },
  { name: "Requirements Gathering", icon: FileText },
  { name: "SQL & Databases", icon: Database },
  { name: "Stakeholder Management", icon: Users },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section className={styles.skills}>
      <div className={styles.container} ref={ref}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className={styles.grid}>
          <div>
            <h3 className={styles.sectionTitle}>Technical Skills</h3>
            <div className={styles.skillList}>
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={styles.skillItem}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10, backgroundColor: "var(--color-pastel-yellow)" }}
                >
                  <skill.icon className={styles.skillIcon} size={24} />
                  <span className={styles.skillName}>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className={styles.sectionTitle}>Analytical Skills</h3>
            <div className={styles.skillList}>
              {analyticalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={styles.skillItem}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10, backgroundColor: "var(--color-pastel-yellow)" }}
                >
                  <skill.icon className={styles.skillIcon} size={24} />
                  <span className={styles.skillName}>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}