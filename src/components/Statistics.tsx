"use client";

import { motion } from "framer-motion";
import { Code2, Users, Trophy, Coffee } from "lucide-react";

const stats = [
  {
    label: "Projects Completed",
    value: "50+",
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    label: "Happy Clients",
    value: "30+",
    icon: <Users className="w-6 h-6" />,
  },
  {
    label: "Technologies",
    value: "15+",
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    label: "Cups of Coffee",
    value: "1000+",
    icon: <Coffee className="w-6 h-6" />,
  },
];

export function Statistics() {
  return (
    <section className="py-20 border-y border-border bg-background relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <h4 className="text-4xl md:text-5xl font-black mb-2 text-gradient">
                {stat.value}
              </h4>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
