"use client";

import { motion } from 'framer-motion';
import { Layers, Server, Database, BrainCircuit, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layers className="w-6 h-6" />,
    skills: ["React", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"]
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    skills: ["Node.js", "Python", "Go", "GraphQL", "REST APIs", "Express/NestJS"]
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle ORM"]
  },
  {
    title: "AI & Data Science",
    icon: <BrainCircuit className="w-6 h-6" />,
    skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "Pandas", "LLMs & RAG", "OpenAI API"]
  },
  {
    title: "DevOps & Cloud",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["Docker", "Kubernetes", "AWS", "Vercel", "CI/CD", "Linux"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-sm rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
