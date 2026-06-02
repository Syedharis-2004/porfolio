"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Freelance",
    date: "2023 - Present",
    description: "Developing custom web applications, SaaS platforms, and AI integrations for global clients. Tech stack includes Next.js, React, Node.js, and Python.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: "Data Science Intern",
    company: "Tech Analytics Corp",
    date: "2022 - 2023",
    description: "Built predictive models and interactive dashboards. Performed EDA on large datasets to derive actionable business insights.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: "Bachelor of Science in Computer Science",
    company: "University of Technology",
    date: "2019 - 2023",
    description: "Specialized in Artificial Intelligence and Software Engineering. Graduated with Honors.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8 mb-12 relative">
                {/* Timeline Line */}
                <div className="absolute left-[-1px] md:left-[20%] top-0 bottom-[-3rem] w-[2px] bg-border last:bottom-0" />
                
                {/* Date & Icon */}
                <div className="md:col-span-1 md:text-right mb-4 md:mb-0 relative">
                  <div className="hidden md:block absolute right-[-2.5rem] top-1 w-6 h-6 bg-background border-2 border-primary rounded-full flex items-center justify-center z-10 text-primary">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  
                  {/* Mobile Indicator */}
                  <div className="md:hidden absolute left-[-2.35rem] top-1 w-6 h-6 bg-background border-2 border-primary rounded-full flex items-center justify-center z-10 text-primary">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>

                  <span className="text-sm font-semibold text-primary flex items-center md:justify-end gap-2">
                    <Calendar className="w-4 h-4 hidden md:block" />
                    {exp.date}
                  </span>
                </div>

                {/* Content */}
                <div className="md:col-span-4 bg-muted/30 p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-muted-foreground font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
