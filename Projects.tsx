import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 bg-pastel-yellow">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          className="text-neutral-900 mb-16 ml-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 ml-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white p-8 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="mb-4">
                <span className="text-sm text-light-brown">{project.type}</span>
              </div>
              <h3 className="text-neutral-900 mb-4">{project.title}</h3>
              <p className="text-neutral-600 mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.button
                  className="flex items-center gap-2 text-light-brown hover:text-brown-dark transition-colors"
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