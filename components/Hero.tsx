"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Globe } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background with multiple gradient orbs */}
      <div className="absolute inset-0 z-0">
        {/* Primary moving gradient */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-40 w-96 h-96 bg-gradient-to-br from-accent-primary/20 via-transparent to-accent-secondary/10 rounded-full blur-3xl"
        />

        {/* Secondary moving gradient */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-gradient-to-tl from-accent-secondary/15 via-transparent to-accent-primary/10 rounded-full blur-3xl"
        />

        {/* Tertiary gradient */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 rounded-full blur-2xl"
        />

        {/* Animated particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-accent-primary/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [1, 1.5, 1],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="section-container relative z-10 text-center"
      >
        {/* Status badge */}
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 mb-8"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Globe className="w-4 h-4 text-accent-secondary" />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glass-border text-sm"
          >
            <motion.span
              animate={{
                background: [
                  "rgba(252, 211, 77, 0.1)",
                  "rgba(252, 211, 77, 0.2)",
                  "rgba(252, 211, 77, 0.1)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 rounded-full bg-accent-secondary"
            />
            <span className="text-accent-secondary font-medium">Available for Melbourne opportunities</span>
          </motion.div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={fadeInUp}
          className="heading-display text-5xl md:text-hero mb-6"
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 0%", "50% 50%", "100% 50%", "0% 0%"],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="gradient-text inline-block bg-[length:400%_400%] bg-clip-text text-transparent"
          >
            Praveen Kumar
          </motion.span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl text-text-body mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          <span className="text-white font-medium">Senior Rotoscope Artist @ Weta Digital</span> •{" "}
          <span className="text-accent-primary font-medium">7 Years of Excellence</span>
        </motion.p>

        {/* Subtitle with icon */}
        <motion.p
          variants={fadeInUp}
          className="text-body text-text-body max-w-2xl mx-auto mb-12"
        >
          <span className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-accent-secondary" />
            <span className="text-lg">
              Bridging the gap between{" "}
              <span className="text-white font-medium">cinematic artistry</span>{" "}
              and{" "}
              <span className="text-white font-medium">technical innovation</span>
            </span>
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#work")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="btn-primary inline-flex items-center gap-2 group relative overflow-hidden"
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 0%", "100% 0%", "0% 100%"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-accent-primary via-indigo-500 to-purple-600 bg-[length:400%_400%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#about")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="btn-secondary inline-flex items-center gap-2"
          >
            Learn More
            <Sparkles className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
          >
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
              className="w-1 h-3 bg-white/30 rounded-full mx-auto"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
