"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "AI Assignment Solver",
    description: "An intelligent platform that solves assignments from PDF uploads using Gemini/OpenAI integration, featuring highly accurate OCR and step-by-step explanations.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "OpenAI API", "Python", "Tailwind CSS"],
    github: "https://github.com/Syedharis-2004/ai-solver",
    demo: "https://ai-assingment-solver.vercel.app/",
  },
  {
    title: "Blood Donation Management System",
    description: "A comprehensive dashboard for managing blood donors, integrating with hospitals for real-time inventory updates and urgent requests.",
    image: "https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com",
    demo: "https://blood-donation-flame-psi.vercel.app/",
  },
  {
    title: "E-Commerce MERN Platform",
    description: "Full-featured e-commerce platform with secure authentication, cart functionality, payment gateway integration, and a complete admin panel.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    tags: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
    github: "https://github.com",
    demo: "https://ecommerce-blush-psi.vercel.app/",
  },
  {
    title: "Data Science Dashboard",
    description: "Interactive analytics dashboard providing Exploratory Data Analysis (EDA) reports, statistical modeling, and data visualizations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Pandas", "Streamlit", "Plotly"],
    github: "https://github.com/Syedharis-2004/Data-Science",
    demo: "https://data-science-cqp5uk8eavduzqufltprqx.streamlit.app/",
  },
  {
    title: "Dockerized FastAPI SaaS",
    description: "A scalable SaaS application providing REST APIs, robust JWT authentication, and automated Docker deployment pipelines.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800",
    tags: ["FastAPI", "Docker", "PostgreSQL", "CI/CD"],
    github: "https://github.com/Syedharis-2004/FastApi-SAAS",
    demo: "https://fast-api-saas-d6ob.vercel.app/",
  },
  {
    title: "Crypto Intel Pro",
    description: "A premium real-time cryptocurrency analytics dashboard built for a hackathon. Features live market data, price performance charts, market dominance visualization, volatility index, and a searchable asset table — all powered by the CoinGecko API.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",
    tags: ["HTML", "CSS", "JavaScript", "Chart.js", "CoinGecko API"],
    github: "https://github.com/Syedharis-2004",
    demo: "https://crypto-smit-hackathon-dun.vercel.app/",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-10" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my best work across full-stack development, AI integrations, and data science.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden group hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 bg-primary/10 text-primary-foreground border border-primary/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex-1 flex justify-center items-center gap-2 text-sm font-medium hover:text-white transition-colors bg-white/5 px-4 py-2.5 rounded-xl hover:bg-white/10 border border-white/10"
                  >
                    <FaGithub className="w-4 h-4" /> Code
                  </Link>
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="flex-1 flex justify-center items-center gap-2 text-sm font-medium hover:text-white transition-all bg-gradient-to-r from-primary to-accent text-white px-4 py-2.5 rounded-xl shadow-lg hover:shadow-primary/50 hover:scale-[1.02]"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
