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
              AI Engineer & Scalable Backend Specialist
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I am an AI Engineer and Backend Developer with hands-on experience in building AI-powered applications, scalable backend systems, and intelligent automation workflows. I specialize in Python, FastAPI, Node.js, Large Language Model (LLM) integration, Retrieval-Augmented Generation (RAG), and AI agents.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Experienced in developing full-stack AI applications, integrating AI voice agents, designing robust database schemas, and building n8n automation pipelines. I focus on delivering practical, scalable AI solutions that streamline workflows and solve mission-critical real-world problems.
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
