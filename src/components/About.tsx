"use client";

import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Driven by AI & Backend Development
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I am a dedicated AI & Backend Developer passionate about building robust backend architectures and scalable applications. I specialize in integrating Large Language Models (LLMs) into automation workflows and maintaining RESTful APIs using tools like FastAPI, Node.js, and Python.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My goal is to obtain an entry-level position or internship where I can apply my relevant skills to contribute to the success of the organization, while continuously gaining practical experience and professional knowledge. I thrive on problem-solving and exploring new technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="p-6 rounded-2xl bg-card border border-border flex flex-col items-center justify-center text-center shadow-sm">
              <span className="text-4xl font-bold text-primary mb-2">1+</span>
              <span className="text-sm text-muted-foreground font-medium">Years of Experience</span>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border flex flex-col items-center justify-center text-center shadow-sm">
              <span className="text-4xl font-bold text-primary mb-2">15+</span>
              <span className="text-sm text-muted-foreground font-medium">Projects</span>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border flex flex-col items-center justify-center text-center shadow-sm">
              <span className="text-4xl font-bold text-primary mb-2">4+</span>
              <span className="text-sm text-muted-foreground font-medium">Certifications</span>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border flex flex-col items-center justify-center text-center shadow-sm">
              <span className="text-4xl font-bold text-primary mb-2">100k+</span>
              <span className="text-sm text-muted-foreground font-medium">Lines of Code</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
