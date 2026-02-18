"use client";

import { motion } from "framer-motion";
import { Zap, Palette, Code, Layers, Database, Cpu, Globe } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const vfxSkills = [
  { name: "Rotoscope", level: 98, icon: Layers },
  { name: "Nuke", level: 95, icon: Code },
  { name: "Compositing", level: 90, icon: Palette },
  { name: "Paint & Cleanup", level: 92, icon: Zap },
  { name: "Plate Prep", level: 90, icon: Layers },
  { name: "Roto Prep", level: 92, icon: Cpu },
];

const techSkills = [
  { name: "Python", level: 92 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 82 },
  { name: "TypeScript", level: 80 },
  { name: "Tailwind CSS", level: 88 },
  { name: "Framer Motion", level: 80 },
  { name: "OpenClaw", level: 90 },
  { name: "Autodesk Maya", level: 78 },
  { name: "Adobe Photoshop", level: 88 },
  { name: "Adobe After Effects", level: 82 },
  { name: "Da Vinci Resolve", level: 78 },
  { name: "BeautifulSoup", level: 85 },
  { name: "API Integration", level: 88 },
  { name: "Git & GitHub", level: 90 },
];

const interests = [
  "EV Research",
  "Photography & Visual Storytelling",
  "Cricket (Weekend Wicket-Keeper)",
  "Meditation & Mindfulness",
  "UI/UX Design & Prototyping",
  "VFX Community & Knowledge Sharing",
  "Parallax Web Animations",
  "Web Development",
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent-primary/5 via-transparent to-accent-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-2 rounded-pill bg-accent-secondary/10 text-accent-secondary text-sm font-medium mb-4"
          >
            Skills & Expertise
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="heading-section text-white mb-4"
          >
            The <span className="gradient-text">Tools of the Trade</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-body text-text-body max-w-2xl mx-auto"
          >
            Mastery of visual effects technology complemented by modern web
            development skills and automation expertise from a decade of industry
            experience.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* VFX Skills */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <motion.h3
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="heading-sub text-white mb-6 flex items-center gap-3"
              >
                <Layers className="w-6 h-6 text-accent-primary" />
                VFX Expertise
              </motion.h3>
            </motion.div>

            <div className="space-y-5">
              {vfxSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="card"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={{
                        rotate: [0, 5, 0],
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.3, ease: "easeInOut" }}
                      className="p-3 rounded-xl bg-gradient-to-br from-accent-primary/10 to-indigo-500/5"
                    >
                      <skill.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white text-sub">
                          {skill.name}
                        </span>
                        <motion.span
                          animate={{
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="text-caption text-accent-primary"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <motion.div
                        animate={{ width: [0, skill.level / 100] }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        className="h-2 bg-white/10 rounded-full overflow-hidden"
                      >
                        <motion.div
                          animate={{
                            width: `${skill.level}%`,
                            backgroundColor: [
                              "rgba(99, 102, 241, 0.1)",
                              "rgba(99, 102, 241, 0.2)",
                            ],
                          }}
                          transition={{ duration: 1.5, repeat: 2, ease: "easeInOut" }}
                          className="h-full bg-gradient-to-r from-accent-primary to-indigo-500 rounded-full"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Skills */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <motion.h3
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="heading-sub text-white mb-6 flex items-center gap-3"
              >
                <Code className="w-6 h-6 text-accent-secondary" />
                Tech Stack
              </motion.h3>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="card p-8"
            >
              <div className="flex flex-wrap gap-2.5">
                {techSkills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-accent-secondary/10 to-accent-secondary/5 border border-accent-secondary/20 text-white text-body font-medium hover:border-accent-secondary/50 hover:bg-accent-secondary/20 transition-all cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div variants={fadeInUp} className="card p-8 mt-6">
              <h4 className="font-display font-bold text-sub text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-indigo-500" />
                Interests & Passions
              </h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-caption text-text-body hover:border-accent-primary/30 transition-all"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Fun fact */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-accent-primary/10 to-accent-primary/5 border border-accent-primary/20"
            >
              <div className="flex items-start gap-3">
                <motion.div
                  animate={{
                    scale: [0.9, 1, 0.9],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="p-2 rounded-xl bg-accent-secondary/10"
                >
                  <Zap className="w-5 h-5 text-accent-secondary" />
                </motion.div>
                <p className="text-body text-text-body">
                  <span className="font-semibold text-white">Fun fact:</span> Nothing beats the
                  sound of leather on willow! I'm a weekend wicket-keeper for a
                  local cricket club in Lower Hutt, bringing the same precision
                  and dedication to the cricket field that I apply to every frame.
                  {" "}
                  <span className="text-accent-secondary">🏏</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
