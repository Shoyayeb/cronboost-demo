"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">CB</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Cronboost
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Crafting exceptional digital experiences that drive results and elevate brands.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {["Web Development", "UI/UX Design", "Performance Optimization", "Digital Strategy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors" aria-label={`Learn more about ${item}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Our Work", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors" aria-label={`Navigate to ${item} page`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              {[
                { icon: Twitter, href: "#", label: "Follow us on Twitter" },
                { icon: Github, href: "#", label: "View our GitHub profile" },
                { icon: Linkedin, href: "#", label: "Connect on LinkedIn" },
                { icon: Mail, href: "#", label: "Send us an email" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © {currentYear} Cronboost. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors" aria-label="Read our Privacy Policy">
                Privacy Policy
              </a>
              <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors" aria-label="Read our Terms of Service">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
