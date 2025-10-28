"use client";

import { motion } from "framer-motion";
import { Lightbulb, Palette, Code, Rocket, TestTube, CheckCircle } from "lucide-react";

const processSteps = [
  {
    icon: Lightbulb,
    title: "Discovery & Planning",
    description: "We dive deep into your business goals, target audience, and project requirements to create a strategic roadmap.",
    duration: "1-2 weeks",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Palette,
    title: "Design & Prototype",
    description: "Our designers craft stunning UI/UX designs and interactive prototypes that bring your vision to life.",
    duration: "2-3 weeks",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    icon: Code,
    title: "Development",
    description: "Expert developers build your project using cutting-edge technologies and best coding practices.",
    duration: "4-8 weeks",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: TestTube,
    title: "Testing & QA",
    description: "Rigorous testing across devices and browsers ensures flawless performance and user experience.",
    duration: "1-2 weeks",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Rocket,
    title: "Launch & Deploy",
    description: "We handle the deployment process and ensure a smooth launch with zero downtime.",
    duration: "1 week",
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    icon: CheckCircle,
    title: "Support & Optimize",
    description: "Ongoing support, maintenance, and optimization to keep your project running at peak performance.",
    duration: "Ongoing",
    gradient: "from-green-500 to-emerald-500",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
              <span className="text-sm text-zinc-300">How We Work</span>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Our Proven
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            A streamlined workflow designed to deliver exceptional results on time and within budget
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line - hidden on mobile, shown on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-20" />

          {/* Steps */}
          <div className="space-y-16">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} text-center md:text-left`}>
                    <div className="inline-block mb-4">
                      <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${step.gradient} bg-opacity-10 border border-white/10`}>
                        <span className="text-xs text-zinc-300 font-medium">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-zinc-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Center icon */}
                  <div className="relative flex-shrink-0">
                    <div className="relative">
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-30 blur-xl rounded-full`} />
                      
                      {/* Icon container */}
                      <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} p-0.5`}>
                        <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Step number */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold border-2 border-black">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for layout balance */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-block p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
            <p className="text-lg text-zinc-300 mb-4">
              Ready to start your project?
            </p>
            <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's build something amazing together
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
