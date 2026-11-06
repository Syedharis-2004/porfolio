"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    title: "AI Engineer",
    company: "SUCCESSLAB",
    date: "October 2026 – November 2026",
    description: "Designing and building AI automation solutions, context-aware RAG pipelines, voice agents, and full-stack AI applications.",
    highlights: [
      "Design and develop AI automation solutions to streamline business workflows and operational processes.",
      "Build Retrieval-Augmented Generation (RAG) systems for context-aware knowledge retrieval.",
      "Integrate Large Language Models (LLMs) into AI-powered applications and scalable backend services.",
      "Design and build n8n workflow automations connecting APIs, microservices, and AI models.",
      "Develop AI voice agents for conversational interactions and automated communication workflows."
    ],
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: "AI & Backend Developer",
    company: "SmW Global PVT.LTD",
    date: "April 2026 – August 2026",
    description: "Built scalable backend architectures using Python and FastAPI, integrated LLMs into production, and containerized microservices with Docker.",
    highlights: [
      "Developed scalable backend applications using Python and FastAPI following clean architecture principles.",
      "Designed and implemented secure RESTful APIs for AI-powered web applications.",
      "Integrated Large Language Models (LLMs) and AI APIs into production-ready applications and automation workflows.",
      "Designed and optimized SQL and NoSQL database schemas to improve performance.",
      "Containerized backend services using Docker for consistent development and deployment environments."
    ],
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: "Web Development Intern",
    company: "Techon Venture",
    date: "November 2025 – January 2026",
    description: "Developed responsive web applications with the MEAN stack, created reusable components, and participated in full SDLC.",
    highlights: [
      "Developed responsive web applications using the MEAN Stack (MongoDB, Express.js, Angular, Node.js).",
      "Built reusable frontend components and integrated them with backend REST APIs.",
      "Designed responsive, user-friendly interfaces following modern UI/UX principles.",
      "Debugged application issues and optimized cross-device performance."
    ],
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: "Bachelors of Science in Computer Sciences",
    company: "ILMA University, Karachi",
    date: "2022 — 2025",
    description: "Focused on core computer science subjects, algorithms, software engineering, and artificial intelligence.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    title: "Higher Secondary Certificate in Pre-engineering",
    company: "Superior Science and Commerce College, Karachi",
    date: "Jan 2020 — Jan 2021",
    description: "Completed intermediate education with an emphasis on Mathematics, Physics, and analytical reasoning.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    title: "Secondary School Certificate in Science",
    company: "Little Angels Grammar High School, Karachi",
    date: "Jan 2018 — Jan 2019",
    description: "Completed secondary education in Science with a strong foundation in computer studies and sciences.",
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
                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground/90 list-disc list-inside">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="leading-relaxed">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
