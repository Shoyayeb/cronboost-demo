"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Sparkles, Rocket, Zap } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
  },
  {
    icon: Sparkles,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love. Design systems that scale with your brand.",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Lightning-fast load times and seamless interactions. Every millisecond matters.",
  },
  {
    icon: Zap,
    title: "Digital Strategy",
    description: "Data-driven insights and strategic planning to maximize your digital presence.",
  },
];

export function Services() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              What We Do
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Comprehensive web solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative h-full p-8 bg-white/5 backdrop-blur-xl border-white/10 hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-7 h-7 text-blue-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
