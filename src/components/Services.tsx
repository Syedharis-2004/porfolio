"use client";

import { motion } from "framer-motion";
import { Server, BrainCircuit, Database, Bot, Mic, Workflow } from "lucide-react";

const services = [
  {
    title: "AI Agents & Workflow Automation",
    description: "Designing and deploying intelligent n8n and Make.com workflow automations connecting APIs, services, and autonomous AI agents to streamline business operations.",
    icon: <Workflow className="w-8 h-8" />,
  },
  {
    title: "RAG & LLM Integration",
    description: "Building production Retrieval-Augmented Generation (RAG) systems for context-aware knowledge retrieval and integrating LLMs (Gemini, Claude, GPT) into backend services.",
    icon: <BrainCircuit className="w-8 h-8" />,
  },
  {
    title: "AI Voice & Conversational Agents",
    description: "Developing intelligent voice and conversational AI agents for real-time interactions, automated phone calls, and customer communication workflows.",
    icon: <Mic className="w-8 h-8" />,
  },
  {
    title: "Scalable Backend Architectures",
    description: "Engineering robust, high-throughput RESTful APIs with Python FastAPI and Node.js/Express with JWT auth, data validation, and clean architecture principles.",
    icon: <Server className="w-8 h-8" />,
  },
  {
    title: "Computer Vision & ML Solutions",
    description: "Developing custom machine learning models, damage severity analysis, and image classification systems using TensorFlow, Keras, OpenCV, and Scikit-learn.",
    icon: <Bot className="w-8 h-8" />,
  },
  {
    title: "Database Design & Dockerization",
    description: "Designing optimized SQL (PostgreSQL) and NoSQL (MongoDB) schemas and containerizing backend microservices with Docker for reliable production deployments.",
    icon: <Database className="w-8 h-8" />,
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
            Comprehensive solutions tailored to modernize your business, from autonomous AI agents and RAG pipelines to high-performance backend architectures.
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
