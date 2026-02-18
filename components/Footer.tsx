"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { fadeInUp } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-surface glass-border border-t">
      <div className="section-container section-padding">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="font-display font-bold text-h3 text-white">
              Praveen Kumar
            </h3>
            <p className="text-body text-text-body">
              Senior Rotoscope Artist & VFX Professional crafting cinematic
              excellence since 2019.
            </p>
            <div className="flex items-center gap-2 text-caption text-text-body">
              <MapPin className="w-4 h-4 text-accent-secondary" />
              <span>Moving to Melbourne, AU • March 2026</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="font-display font-bold text-h3 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-body text-text-body hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="text-body text-text-body hover:text-white transition-colors"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-body text-text-body hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-body text-text-body hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="font-display font-bold text-h3 text-white">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/praveenkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass glass-border text-text-body hover:text-accent-primary hover:border-accent-primary/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/praveenkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass glass-border text-text-body hover:text-accent-primary hover:border-accent-primary/30 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@praveenkumar.nz"
                className="p-3 rounded-xl glass glass-border text-text-body hover:text-accent-primary hover:border-accent-primary/30 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="pt-8 border-t border-white/10 text-center"
        >
          <p className="text-caption text-text-body">
            © {currentYear} Praveen Kumar. Crafted with{" "}
            <span className="text-accent-primary">♥</span> and Next.js 14.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
