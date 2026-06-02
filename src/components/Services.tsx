"use client";

import { motion } from "framer-motion";
import { Server, Layout, BrainCircuit, Database, Blocks, TerminalSquare } from "lucide-react";

const services = [
  {
    title: "Full Stack Development",
    description: "End-to-end web application development using modern frameworks like Next.js, React, and Node.js.",
    icon: <Layout className="w-8 h-8" />,
  },
  {
    title: "MERN Stack Solutions",
    description: "Robust, scalable single-page applications built on MongoDB, Express.js, React, and Node.js.",
    icon: <Blocks className="w-8 h-8" />,
  },
  {
    title: "AI Integrations",
    description: "Integrating LLMs (OpenAI, Gemini) and machine learning models into web platforms to automate tasks.",
    icon: <BrainCircuit className="w-8 h-8" />,
  },
  {
    title: "RESTful APIs",
    description: "Designing and developing secure, fast, and documented APIs using Express.js and FastAPI.",
    icon: <Server className="w-8 h-8" />,
  },
  {
    title: "Data Science Solutions",
    description: "Exploratory Data Analysis, predictive modeling, and insightful data visualizations using Python.",
    icon: <Database className="w-8 h-8" />,
  },
  {
    title: "Docker & DevOps",
    description: "Containerizing applications and setting up continuous integration and deployment pipelines.",
    icon: <TerminalSquare className="w-8 h-8" />,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services I Offer</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs, from stunning frontends to robust AI-powered backends.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-background p-8 rounded-2xl border border-border group hover:border-primary/50 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 pointer-events-none">
                {service.icon}
              </div>
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
