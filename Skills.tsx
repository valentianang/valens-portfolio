import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, BarChart3, Database, Layout, FileText, Users } from "lucide-react";

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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          className="text-neutral-900 mb-16 ml-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 ml-8">
          <div>
            <h3 className="text-light-brown mb-8">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center gap-4 p-4 bg-neutral-50 rounded-lg"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10, backgroundColor: "var(--color-pastel-yellow)" }}
                >
                  <skill.icon className="text-light-brown" size={24} />
                  <span className="text-neutral-700">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-light-brown mb-8">Analytical Skills</h3>
            <div className="space-y-4">
              {analyticalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center gap-4 p-4 bg-neutral-50 rounded-lg"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10, backgroundColor: "var(--color-pastel-yellow)" }}
                >
                  <skill.icon className="text-light-brown" size={24} />
                  <span className="text-neutral-700">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}