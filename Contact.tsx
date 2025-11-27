import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    { icon: Mail, label: "Email", value: "your.email@example.com", link: "mailto:your.email@example.com" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/yourprofile", link: "https://linkedin.com" },
    { icon: Github, label: "GitHub", value: "github.com/yourusername", link: "https://github.com" },
    { icon: FileText, label: "Resume", value: "Download CV", link: "#" },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-neutral-900 mb-8 text-center">Let's Connect</h2>
          <p className="text-neutral-600 text-center mb-16 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and business.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.link}
                className="flex items-center gap-4 p-6 bg-neutral-50 rounded-lg hover:bg-pastel-yellow transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 bg-white rounded-full">
                  <contact.icon className="text-light-brown" size={24} />
                </div>
                <div>
                  <p className="text-neutral-500 text-sm">{contact.label}</p>
                  <p className="text-neutral-700">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-neutral-500">© 2024 Your Name. Crafted with care and attention to detail.</p>
        </motion.div>
      </div>
    </section>
  );
}
