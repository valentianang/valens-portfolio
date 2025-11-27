import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import styles from "./Contact.module.css";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const contacts = [
    { icon: Mail, label: "Email", value: "your.email@example.com", link: "mailto:your.email@example.com" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/yourprofile", link: "https://linkedin.com" },
    { icon: Github, label: "GitHub", value: "github.com/yourusername", link: "https://github.com" },
    { icon: FileText, label: "Resume", value: "Download CV", link: "#" },
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Let's Connect</h2>
          <p className={styles.description}>
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and business.
          </p>

          <div className={styles.grid}>
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.link}
                className={styles.contactCard}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={styles.iconWrapper}>
                  <contact.icon className={styles.contactIcon} size={24} />
                </div>
                <div className={styles.contactInfo}>
                  <p className={styles.contactLabel}>{contact.label}</p>
                  <p className={styles.contactValue}>{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className={styles.footerText}>© 2024 Your Name. Crafted with care and attention to detail.</p>
        </motion.div>
      </div>
    </section>
  );
}
