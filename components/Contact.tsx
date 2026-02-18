"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send, FileText, Film, Code, Zap } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "Vfx.praveenkumar@gmail.com",
    link: "mailto:Vfx.praveenkumar@gmail.com",
    description: "For general inquiries and collaboration",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/praveenkumar",
    link: "https://linkedin.com/in/praveenkumar",
    description: "Professional network and career updates",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/praveenkumar",
    link: "https://github.com/praveenkumar",
    description: "Code projects and contributions",
  },
];

const services = [
  {
    title: "VFX & Rotoscope",
    description: "Senior-level roto work for feature films, commercials, and TV",
    icon: Film,
  },
  {
    title: "Web Development",
    description: "Full-stack React/Next.js applications with modern animations",
    icon: Code,
  },
  {
    title: "Automation Tools",
    description: "Custom scripts and bots for workflow optimization",
    icon: Zap,
  },
];

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 rounded-full blur-3xl"
        />
      </div>

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
            Get in Touch
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="heading-section text-white mb-4"
          >
            Let's{" "}
            <span className="gradient-text">Build the Future</span> Together
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-body text-text-body max-w-2xl mx-auto"
          >
            Whether you're looking for a Senior Rotoscope Artist, a Full-Stack
            Developer, or just want to connect—I'd love to hear from you.
          </motion.p>
        </motion.div>

        {/* Location notice */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="card p-6 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-accent-secondary/10">
              <MapPin className="w-6 h-6 text-accent-secondary" />
            </div>
            <div>
              <h3 className="font-display font-bold text-sub text-white mb-1">
                Melbourne Bound 🚀
              </h3>
              <p className="text-body text-text-body">
                Relocating to Melbourne, Australia in March {currentYear}. Currently based
                in Wellington, New Zealand. Open to opportunities in AU and globally.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services Offered */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="card"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-accent-primary/10">
                  <service.icon className="w-5 h-5 text-accent-primary" />
                </div>
                <h4 className="font-display font-bold text-sub text-white">
                  {service.title}
                </h4>
              </div>
              <p className="text-caption text-text-body">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
        >
          {contactMethods.map((method) => (
            <motion.a
              key={method.title}
              href={method.link}
              target={method.link.startsWith("http") ? "_blank" : undefined}
              rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="card group text-center"
            >
              <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-transparent mx-auto mb-4 group-hover:from-accent-primary/10 transition-all">
                <method.icon className="w-6 h-6 text-accent-primary" />
              </div>
              <h3 className="font-display font-bold text-sub text-white mb-2">
                {method.title}
              </h3>
              <p className="text-caption text-text-body mb-3 break-all">
                {method.value}
              </p>
              <p className="text-caption text-text-body/60">
                {method.description}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 30px rgba(252, 211, 77, 0.2)",
                "0 0 50px rgba(252, 211, 77, 0.4)",
                "0 0 30px rgba(252, 211, 77, 0.2)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            <a
              href="mailto:Vfx.praveenkumar@gmail.com"
              className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-5"
            >
              <Send className="w-5 h-5" />
              Send Me a Message
            </a>
          </motion.div>

          <p className="text-caption text-text-body mt-6">
            Typically respond within 24-48 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
