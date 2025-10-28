"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">CB</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Cronboost
              </span>
            </motion.div>

            {/* Desktop menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden md:flex items-center gap-8"
            >
              {["Services", "Work", "About", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="text-zinc-400 hover:text-white transition-colors duration-200"
                  aria-label={`Navigate to ${item}`}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <Button
                size="sm"
                className="hidden md:inline-flex bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 rounded-full shadow-lg shadow-blue-500/50 transition-all duration-300"
              >
                Let's Talk
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="md:hidden text-white hover:bg-white/10"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
