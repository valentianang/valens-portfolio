import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "Built a responsive analytics dashboard for tracking sales metrics and customer behavior. Implemented data visualization using React and Chart libraries.",
    tags: ["React", "TypeScript", "Data Visualization"],
    type: "Front-End Development"
  },
  {
    title: "Business Process Optimization",
    description: "Analyzed existing workflows and identified efficiency improvements, resulting in 30% reduction in processing time. Created detailed process documentation and stakeholder presentations.",
    tags: ["Process Analysis", "Documentation", "Stakeholder Management"],
    type: "Business Analysis"
  },
  {
    title: "Portfolio Website System",
    description: "Designed and developed a modern portfolio template with CMS integration. Focus on performance optimization and accessibility standards.",
    tags: ["React", "Tailwind CSS", "Performance"],
    type: "Front-End Development"
  },
  {
    title: "Market Research Analysis",
    description: "Conducted comprehensive market analysis for product launch. Gathered requirements from multiple stakeholders and presented data-driven recommendations.",
    tags: ["Market Research", "Requirements Gathering", "SQL"],
    type: "Business Analysis"
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container} ref={ref}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div>
                <span className={styles.projectType}>{project.type}</span>
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              
              <div className={styles.tagContainer}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={styles.tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className={styles.linkContainer}>
                <motion.button
                  className={styles.projectLink}
                  whileHover={{ x: 5 }}
                >
                  <span>View Details</span>
                  <ExternalLink size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}