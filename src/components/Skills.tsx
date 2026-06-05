"use client";

import { motion } from 'framer-motion';
import { Layers, Server, Database, BrainCircuit, Terminal, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layers className="w-6 h-6" />,
    color: "from-blue-500/20 to-indigo-500/20 border-blue-500/20 hover:border-blue-500/50",
    iconBg: "bg-blue-500/10 text-blue-400",
    skills: ["HTML5", "CSS3", "JavaScript", "Angular CLI", "React.js", "Tailwind CSS", "Responsive Design"]
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    color: "from-violet-500/20 to-purple-500/20 border-violet-500/20 hover:border-violet-500/50",
    iconBg: "bg-violet-500/10 text-violet-400",
    skills: ["Node.js", "FastAPI", "Python", "Express.js", "RESTful APIs", "Authentication"]
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    color: "from-cyan-500/20 to-teal-500/20 border-cyan-500/20 hover:border-cyan-500/50",
    iconBg: "bg-cyan-500/10 text-cyan-400",
    skills: ["MongoDB", "SQL", "PostgreSQL", "NoSQL", "Database Schemas"]
  },
  {
    title: "AI & Data Science",
    icon: <BrainCircuit className="w-6 h-6" />,
    color: "from-emerald-500/20 to-green-500/20 border-emerald-500/20 hover:border-emerald-500/50",
    iconBg: "bg-emerald-500/10 text-emerald-400",
    skills: ["AI & Machine Learning", "Data Science", "Exploratory Data Analysis (EDA)", "Large Language Models (LLMs)"]
  },
  {
    title: "Tools & Technologies",
    icon: <Terminal className="w-6 h-6" />,
    color: "from-orange-500/20 to-amber-500/20 border-orange-500/20 hover:border-orange-500/50",
    iconBg: "bg-orange-500/10 text-orange-400",
    skills: ["Docker", "Git", "GitHub", "Vercel", "VS Code", "Postman"]
  },
  {
    title: "Certifications",
    icon: <Wrench className="w-6 h-6" />,
    color: "from-rose-500/20 to-pink-500/20 border-rose-500/20 hover:border-rose-500/50",
    iconBg: "bg-rose-500/10 text-rose-400",
    skills: ["AI & Data Science from SMIT", "Google AI Essential (Coursera)", "Web Designing (Hi Tech)", "Basics of Python (Data Camp)"]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Technical Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A full-stack developer with hands-on experience across web, backend, data science, and AI — building real products end-to-end.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`bg-gradient-to-br ${category.color} backdrop-blur-sm border rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-xl`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className={`p-3 ${category.iconBg} rounded-xl`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-background/60 backdrop-blur text-foreground text-xs rounded-full font-medium border border-white/10 hover:border-white/30 transition-colors"
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
