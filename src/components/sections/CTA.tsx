"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15),transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glassmorphism container */}
          <div className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-12 md:p-16 overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
            
            {/* Content */}
            <div className="relative z-10 text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                    Ready to Build
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Something Amazing?
                  </span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-zinc-400 max-w-2xl mx-auto"
              >
                Let's turn your vision into reality. Get in touch with our team 
                and start your journey to digital excellence today.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              >
                <Button
                  size="lg"
                  className="group px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 rounded-full shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300"
                  aria-label="Get in touch with Cronboost team"
                >
                  <Mail className="mr-2 w-5 h-5" aria-hidden="true" />
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg bg-white/5 backdrop-blur-xl border-white/10 text-white hover:bg-white/10 rounded-full transition-all duration-300"
                  aria-label="Schedule a consultation call"
                >
                  Schedule a Call
                </Button>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
