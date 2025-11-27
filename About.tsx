import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen flex items-center py-24 px-6 bg-pastel-yellow">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-neutral-900 mb-12 ml-8">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 ml-8">
            <div>
              <p className="text-neutral-700 mb-6">
                I'm currently pursuing my passion for technology and business at [University Name], where I'm gaining hands-on experience as both a Front-End Developer and Business Analyst intern.
              </p>
              <p className="text-neutral-700 mb-6">
                My unique position allows me to bridge the gap between technical implementation and business strategy, ensuring that every solution I create is both technically sound and aligned with organizational goals.
              </p>
              <p className="text-neutral-700">
                I believe in the power of clean code, intuitive design, and data-driven decision making to create impactful digital products.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="p-6 bg-white rounded-lg"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <h4 className="text-light-brown mb-3">Education</h4>
                <p className="text-neutral-600">Bachelor's Degree in [Your Major]</p>
                <p className="text-neutral-500">Expected Graduation: [Year]</p>
              </motion.div>

              <motion.div
                className="p-6 bg-white rounded-lg"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <h4 className="text-light-brown mb-3">Current Role</h4>
                <p className="text-neutral-600">Front-End Developer & Business Analyst Intern</p>
                <p className="text-neutral-500">[Company Name]</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}