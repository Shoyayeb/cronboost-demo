"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";
import { PortfolioSkeleton } from "./PortfolioSkeleton";

const projects = [
  {
    title: "EcoMarket Platform",
    category: "E-commerce",
    description: "A sustainable marketplace connecting eco-conscious consumers with green businesses.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    results: {
      metric1: "+250%",
      label1: "Revenue Growth",
      metric2: "50K+",
      label2: "Active Users",
    },
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "FinTech Dashboard",
    category: "SaaS Platform",
    description: "Real-time financial analytics dashboard for modern investment firms.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    results: {
      metric1: "99.9%",
      label1: "Uptime",
      metric2: "2.3s",
      label2: "Load Time",
    },
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "HealthHub App",
    category: "Healthcare",
    description: "Patient management system streamlining healthcare provider workflows.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    technologies: ["Vue.js", "Firebase", "TypeScript", "PWA"],
    results: {
      metric1: "80%",
      label1: "Time Saved",
      metric2: "10K+",
      label2: "Daily Users",
    },
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "TravelWise Booking",
    category: "Travel & Tourism",
    description: "Smart travel booking platform with AI-powered recommendations.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    technologies: ["Next.js", "OpenAI", "Prisma", "Redis"],
    results: {
      metric1: "300%",
      label1: "Booking Increase",
      metric2: "4.8/5",
      label2: "User Rating",
    },
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "EduLearn LMS",
    category: "Education",
    description: "Comprehensive learning management system for online education.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    technologies: ["React", "GraphQL", "AWS", "Tailwind"],
    results: {
      metric1: "100K+",
      label1: "Students",
      metric2: "95%",
      label2: "Completion Rate",
    },
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "PropertyPro CRM",
    category: "Real Estate",
    description: "All-in-one CRM solution for real estate agencies and agents.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    technologies: ["Angular", "NestJS", "PostgreSQL", "Docker"],
    results: {
      metric1: "60%",
      label1: "Faster Deals",
      metric2: "500+",
      label2: "Agencies",
    },
    gradient: "from-violet-500/20 to-purple-500/20",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
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
              <span className="text-sm text-zinc-300">Our Recent Work</span>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Projects That
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Drive Results
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across various industries
          </p>
        </motion.div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative h-full bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 overflow-hidden transition-all duration-500">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-overlay`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs text-white">
                      {project.category}
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3">
                    <Button
                      size="icon"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 hover:bg-white/30"
                      aria-label="View project details"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </Button>
                    <Button
                      size="icon"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 hover:bg-white/30"
                      aria-label="View source code"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div>
                      <div className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {project.results.metric1}
                      </div>
                      <div className="text-xs text-zinc-500">
                        {project.results.label1}
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {project.results.metric2}
                      </div>
                      <div className="text-xs text-zinc-500">
                        {project.results.label2}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom gradient */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient.replace('/20', '')} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 rounded-full shadow-lg shadow-blue-500/50 transition-all duration-300"
            aria-label="View all projects in our portfolio"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
