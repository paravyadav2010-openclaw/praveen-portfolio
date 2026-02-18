"use client";

import { motion } from "framer-motion";
import { ExternalLink, Play, Sparkles, Award } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const projects = [
  {
    title: "Avatar: The Way of Water",
    company: "Weta Digital",
    year: "2022",
    description:
      "Senior Rotoscope Artist contributing to groundbreaking underwater visual effects. Worked on complex water simulation integration and character interaction sequences.",
    tags: ["Rotoscope", "Nuke", "Compositing", "Water VFX"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Guardians of the Galaxy",
    company: "Weta Digital",
    year: "2014",
    description:
      "Senior Rotoscope Artist working on Marvel's cosmic superhero film. Contributed to character mattes and complex visual effects sequences.",
    tags: ["Rotoscope", "Nuke", "Character VFX", "Space VFX"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Captain America: The Winter Soldier",
    company: "Weta Digital",
    year: "2014",
    description:
      "Part of VFX team crafting Marvel's patriotic hero through precision rotoscoping and integration. Worked on action sequences and character animations.",
    tags: ["Rotoscope", "Nuke", "Action VFX"],
    gradient: "from-blue-600/20 to-red-500/20",
  },
  {
    title: "X-Men: Days of Future Past",
    company: "Weta Digital",
    year: "2014",
    description:
      "Senior Rotoscope Artist working on X-Men franchise. Created character mattes and contributed to complex mutant power visual effects.",
    tags: ["Rotoscope", "Nuke", "Character VFX"],
    gradient: "from-yellow-500/20 to-amber-500/20",
  },
  {
    title: "The Batman",
    company: "Weta Digital",
    year: "2022",
    description:
      "Part of VFX team crafting Gotham's dark atmosphere through precision masking, rotoscoping, and environment integration. Contributed to key action sequences.",
    tags: ["VFX", "Nuke", "Environment", "Atmosphere"],
    gradient: "from-gray-700/20 to-gray-500/20",
  },
  {
    title: "Dune: Part One",
    company: "Weta Digital",
    year: "2021",
    description:
      "Contributed to desert landscapes and visual storytelling of Denis Villeneuve's masterpiece. Focused on sandworm sequences and environmental particle integration.",
    tags: ["Rotoscope", "Desert VFX", "Nuke", "Particles"],
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Pacific Rim",
    company: "Weta Digital",
    year: "2013",
    description:
      "Contributed to kaiju battles and mecha action sequences. Worked on creature integration and scale-referenced compositing.",
    tags: ["Rotoscope", "Nuke", "Creature VFX", "Scale"],
    gradient: "from-teal-500/20 to-blue-600/20",
  },
  {
    title: "Gravity",
    company: "Weta Digital",
    year: "2013",
    description:
      "Contributed to Alfonso Cuarón's space masterpiece. Worked on zero-gravity sequences and complex visual effects.",
    tags: ["Rotoscope", "Nuke", "Space VFX"],
    gradient: "from-indigo-600/20 to-purple-600/20",
  },
  {
    title: "Avatar: Fire and Ash",
    company: "Weta Digital",
    year: "2024",
    description:
      "Contributed to third installment of Avatar franchise. Advanced rotoscoping techniques for complex creature and character interactions.",
    tags: ["Rotoscope", "Creature VFX", "Nuke", "Advanced"],
    gradient: "from-red-500/20 to-orange-500/20",
  },
];

const webProjects = [
  {
    title: "OpenClaw Dashboard",
    year: "2025",
    description:
      "Kanban-style command center for OpenClaw automation. Features model switching, task management, and real-time usage tracking.",
    tags: ["Next.js", "Framer Motion", "TypeScript", "Automation"],
    link: "http://localhost:3333",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Rental Property Search",
    year: "2025",
    description:
      "Automated search system for Melbourne rental properties. Integrates Domain.com.au API with custom filtering for availability.",
    tags: ["Python", "Web Scraping", "API Integration", "Next.js"],
    gradient: "from-teal-500/20 to-green-500/20",
  },
  {
    title: "Portfolio Website",
    year: "2026",
    description:
      "Interactive portfolio featuring parallax animations, glassmorphism effects, smooth transitions, and modern React architecture.",
    tags: ["Next.js 14", "Framer Motion", "Tailwind CSS", "Responsive"],
    link: "https://praveenkumar.nz",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

export default function Work() {
  return (
    <section id="work" className="section-padding relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 bg-[length:400%_400%] pointer-events-none"
      />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-5 h-5 text-accent-secondary" />
            <motion.span
              animate={{
                background: [
                  "rgba(252, 211, 77, 0.1)",
                  "rgba(252, 211, 77, 0.2)",
                  "rgba(252, 211, 77, 0.1)",
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block px-4 py-2 rounded-pill text-accent-secondary text-sm font-medium"
            >
              Selected Work
            </motion.span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="heading-section text-white mb-4"
          >
            Projects That{" "}
            <span className="gradient-text">Define Excellence</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-body text-text-body max-w-2xl mx-auto"
          >
            A decade of cinematic visual effects and creative web experiences
            that push boundaries of automation.
          </motion.p>
        </motion.div>

        {/* Film Projects List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h3
            variants={fadeInUp}
            className="heading-sub text-accent-secondary mb-6 flex items-center gap-2"
          >
            <Award className="w-5 h-5" />
            Film Projects
          </motion.h3>

          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative group"
              >
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-secondary/30 via-accent-primary/30 to-transparent" />

                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="ml-12 pl-8 py-6 relative rounded-2xl glass glass-border hover:bg-accent-primary/5 transition-all"
                >
                  {/* Year badge */}
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="absolute -left-12 -top-3 px-4 py-1.5 rounded-full bg-gradient-to-r from-accent-secondary to-accent-primary text-white text-sm font-bold shadow-lg"
                  >
                    {project.year}
                  </motion.span>

                  {/* Content */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-display font-bold text-xl text-white mb-2 group-hover:text-accent-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-caption text-accent-secondary mb-3">
                        {project.company}
                      </p>
                      <p className="text-body text-text-body leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-caption text-text-body hover:border-accent-primary/50 hover:bg-accent-primary/10 transition-all cursor-default"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Web Projects List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-12"
        >
          <motion.h3
            variants={fadeInUp}
            className="heading-sub text-accent-primary mb-6 flex items-center gap-2"
          >
            <Play className="w-5 h-5" />
            Web & Automation Projects
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative p-6 rounded-2xl glass glass-border group overflow-hidden"
              >
                {/* Animated background gradient */}
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} bg-[length:400%_400%] opacity-30`}
                />

                <div className="relative z-10">
                  {/* Year badge */}
                  <motion.span
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-accent-primary to-indigo-500 text-white text-xs font-bold shadow-lg"
                  >
                    {project.year}
                  </motion.span>

                  {/* Icon/play button */}
                  {project.link ? (
                    <motion.a
                      href={project.link}
                      target={project.link.startsWith("http") ? "_blank" : undefined}
                      rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      whileHover={{ scale: 1.1 }}
                      className="mb-3 inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">View Project</span>
                    </motion.a>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="mb-3 inline-flex items-center gap-2 text-accent-primary"
                    >
                      <Play className="w-4 h-4" />
                      <span className="text-sm">View Details</span>
                    </motion.div>
                  )}

                  {/* Content */}
                  <h4 className="font-display font-bold text-xl text-white mb-2 group-hover:text-accent-secondary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-body text-text-body text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-caption text-text-body hover:border-accent-secondary/50 hover:bg-accent-primary/10 transition-all cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 group"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(252, 211, 77, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Discuss Your Project
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
