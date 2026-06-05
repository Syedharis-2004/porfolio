"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden py-20 px-6">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-background to-secondary/20 opacity-50 blur-3xl" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Code className="w-4 h-4" /> Available for new opportunities
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hi, I'm <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
            Syed Haris Ali Zaidi
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          AI & Backend Developer looking for opportunities to apply my skills to contribute to the success of an organization while gaining practical experience and professional knowledge.
        </motion.p>

        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" className="gap-2">
            Hire Me <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="lg">
            View Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
