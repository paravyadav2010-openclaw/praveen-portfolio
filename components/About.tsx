"use client";

import { motion, useScroll } from "framer-motion";
import { Award, Film, Code, Zap, Target, Users } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const highlights = [
  {
    icon: Award,
    title: "7+ Years at Weta Digital",
    description: "Senior Rotoscope Artist contributing to major film productions",
    color: "text-accent-primary",
  },
  {
    icon: Film,
    title: "Hollywood Blockbusters",
    description: "Avatar, Marvel films, and major feature productions",
    color: "text-accent-secondary",
  },
  {
    icon: Code,
    title: "Full-Stack Developer",
    description: "Python, React, Next.js, and automation expertise",
    color: "text-indigo-500",
  },
  {
    icon: Zap,
    title: "VFX Professional",
    description: "Nuke, Silhouette, Maya, Photoshop, After Effects",
    color: "text-gold-500",
  },
  {
    icon: Target,
    title: "Precision Artist",
    description: "Keen eye for detail developed over a decade in VFX",
    color: "text-teal-500",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Mentored junior artists and collaborated across global VFX teams",
    color: "text-rose-500",
  },
];

export default function About() {
  const { scrollY } = useScroll();
  const opacity = useScroll(scrollY, [0, 400], (value) => 1 - value / 400);

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-primary/5 via-transparent to-transparent pointer-events-none"
      />

      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Visual */}
          <motion.div variants={fadeInUp} className="relative">
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="aspect-square rounded-3xl glass glass-border overflow-hidden relative"
            >
              {/* Animated gradient background */}
              <motion.div
                animate={{
                  backgroundPosition: ["0% 0%", "50% 50%", "100% 50%", "0% 0%"],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-br from-accent-primary/30 via-transparent to-accent-secondary/30"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{
                      scale: [0.9, 1, 0.9],
                      rotate: [-5, 0, 5],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary mx-auto mb-4 flex items-center justify-center shadow-2xl"
                  >
                    <span className="text-5xl font-display font-bold text-white">
                      PK
                    </span>
                  </motion.div>
                  <p className="text-caption text-text-body">
                    Portrait Coming Soon
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating stats */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 p-6 rounded-2xl glass glass-border"
            >
              <div className="text-center">
                <motion.div
                  animate={{ scale: [0.9, 1.1, 0.9] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-2"
                >
                  <div className="text-5xl font-display font-bold gradient-text">
                    7+
                  </div>
                  <div className="text-caption text-text-body">Years</div>
                </motion.div>
                <div className="flex items-center justify-center gap-2 text-caption text-text-body">
                  <Zap className="w-4 h-4 text-accent-secondary" />
                  <span>Of Excellence</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={staggerContainer} className="space-y-8">
            <motion.div variants={fadeInUp} className="space-y-4">
              <motion.span
                variants={fadeInUp}
                className="inline-block px-4 py-2 rounded-pill bg-accent-secondary/10 text-accent-secondary text-sm font-medium"
              >
                About Me
              </motion.span>
              <h2 className="heading-section text-white">
                Crafting Visual Stories That{" "}
                <span className="gradient-text">Move Audiences</span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-body text-text-body leading-relaxed"
            >
              With over a decade of experience in VFX industry, I have
              established myself as a seasoned professional with extensive expertise
              as a roto and paint artist. Working on major films like
              <span className="text-white font-medium">Avatar, Marvel films,
              X-Men, Gravity, and more</span> has shaped my
              understanding of cinematic excellence. Regularly working on image planes
              has developed a keen eye for detail and deep understanding of
              compositing process.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-body text-text-body leading-relaxed"
            >
              Beyond traditional VFX work, I bridge the gap between cinematic
              artistry and modern technology. With advanced training in Comp
              ATD techniques including keying, color grading, and compositing,
              I bring a comprehensive skill set to every project. My passion
              extends to web development with Python, React, and automation
              tools that streamline workflows and solve real problems.
            </motion.p>

            {/* Melbourne Notice */}
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-gradient-to-br from-accent-primary/10 to-accent-primary/5 border border-accent-primary/20 relative overflow-hidden"
            >
              {/* Animated background */}
              <motion.div
                animate={{
                  backgroundPosition: ["0% 0%", "200% 50%", "0% 0%", "200% 100%"],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-accent-secondary/20 via-accent-primary/20 to-transparent bg-[length:200%_200%] opacity-30"
              />

              <div className="relative z-10">
                <h3 className="font-display font-bold text-h3 text-white mb-2 flex items-center gap-2">
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                    className="inline-block px-2"
                  >
                    🚀
                  </motion.span>
                  Next Chapter: Melbourne
                </h3>
                <p className="text-body text-text-body">
                  In March 2026, I'm relocating to Melbourne, Australia for a
                  new role at Weta FX Melbourne. I'm excited to bring my
                  decade of VFX expertise, recent Comp ATD training, and
                  passion for visual storytelling to new challenges and collaborate with
                  creative teams down under.
                </p>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 rounded-xl glass glass-border hover:bg-accent-primary/10 transition-transform cursor-default"
                >
                  <motion.div
                    animate={{
                      scale: [0.95, 1, 0.95],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2, ease: "easeInOut" }}
                    className={`w-12 h-12 rounded-xl ${highlight.color} mb-3 flex items-center justify-center`}
                  >
                    <highlight.icon className="w-6 h-6" />
                  </motion.div>
                  <h4 className="font-semibold text-white text-sub mb-1">
                    {highlight.title}
                  </h4>
                  <p className="text-caption text-text-body">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
