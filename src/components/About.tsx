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
              Bridging the Gap Between Web and AI
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I am a dedicated Full Stack Developer and AI Engineer passionate about building scalable, intelligent systems. With expertise in modern web frameworks and machine learning algorithms, I specialize in crafting full-stack applications that leverage the power of Artificial Intelligence to solve complex, real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From designing intuitive user interfaces to architecting robust backend APIs and integrating custom AI models, my goal is to deliver end-to-end solutions that drive innovation. I continuously explore emerging technologies to stay at the forefront of the rapidly evolving AI and web development landscape.
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
              <span className="text-4xl font-bold text-primary mb-2">5+</span>
              <span className="text-sm text-muted-foreground font-medium">Years of Experience</span>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border flex flex-col items-center justify-center text-center shadow-sm">
              <span className="text-4xl font-bold text-primary mb-2">50+</span>
              <span className="text-sm text-muted-foreground font-medium">Projects</span>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border flex flex-col items-center justify-center text-center shadow-sm">
              <span className="text-4xl font-bold text-primary mb-2">10+</span>
              <span className="text-sm text-muted-foreground font-medium">AI Models</span>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border flex flex-col items-center justify-center text-center shadow-sm">
              <span className="text-4xl font-bold text-primary mb-2">1M+</span>
              <span className="text-sm text-muted-foreground font-medium">Lines of Code</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
