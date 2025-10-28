"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const features = [
  "Lightning-fast performance",
  "Responsive design",
  "SEO optimized",
  "Scalable architecture",
  "Modern tech stack",
  "Ongoing support",
];

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Built for
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Performance
              </span>
            </h2>

            <p className="text-xl text-zinc-400 leading-relaxed">
              Every project we create is optimized for speed, accessibility, and user experience. 
              We don't just build websites—we craft digital experiences that convert.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-zinc-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Visual element */}
          <motion.div
            style={{ y, opacity }}
            className="relative"
          >
            <div className="relative aspect-square">
              {/* Glassmorphism card */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8">
                {/* Animated grid */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 grid-rows-8 h-full gap-4 p-8">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0.2 }}
                        animate={{ opacity: [0.2, 0.8, 0.2] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.05,
                        }}
                        className="bg-blue-400 rounded-sm"
                      />
                    ))}
                  </div>
                </div>

                {/* Center glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse" />
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-8 right-8 w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500/40 to-purple-500/40 backdrop-blur-xl border border-white/20"
                />

                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-8 left-8 w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-500/40 to-pink-500/40 backdrop-blur-xl border border-white/20"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
