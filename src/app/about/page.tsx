"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Users, Zap, Award, Heart, Lightbulb } from "lucide-react";
import NextImage from "next/image";

const team = [
  {
    name: "Alex Rivera",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Visionary leader with 15+ years in web development and digital strategy.",
  },
  {
    name: "Sarah Chen",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Award-winning designer passionate about creating beautiful user experiences.",
  },
  {
    name: "Marcus Johnson",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Full-stack expert specializing in scalable architecture and performance.",
  },
  {
    name: "Emma Thompson",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Strategic thinker ensuring every project delivers measurable business value.",
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for perfection in every line of code and every pixel we design.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Great results come from working together with our clients and team.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead of the curve, embracing new technologies and approaches.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "We never compromise on quality, delivering solutions built to last.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do and it shows in every project we deliver.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "We think outside the box to create unique solutions for unique challenges.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                  Building the Future,
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  One Project at a Time
                </span>
              </h1>
              <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                We're a team of passionate developers, designers, and strategists dedicated to crafting exceptional digital experiences that drive real business results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                    Our Mission
                  </span>
                </h2>
                <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                  At Cronboost, we believe that exceptional web experiences can transform businesses. Our mission is to empower companies with cutting-edge technology and stunning design that not only looks great but delivers measurable results.
                </p>
                <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                  We're committed to staying at the forefront of web development, continuously learning and adapting to bring our clients the best solutions available.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 rounded-full"
                >
                  Start Your Project
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent opacity-20">
                    150+
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                    <div className="text-3xl font-bold text-white mb-2">150+ Projects</div>
                    <div className="text-zinc-400">Successfully delivered across 20+ industries</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  Our Values
                </span>
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full p-8 bg-white/5 backdrop-blur-xl border-white/10 hover:border-blue-500/50 transition-all duration-300">
                    <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                      <value.icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-zinc-900" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  Meet Our Team
                </span>
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                The talented individuals behind Cronboost's success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden bg-white/5 backdrop-blur-xl border-white/10 hover:border-blue-500/50 transition-all duration-300">
                    <div className="relative h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                      <NextImage
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                      <div className="text-sm text-blue-400 mb-3">{member.role}</div>
                      <p className="text-sm text-zinc-400 leading-relaxed">{member.bio}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10">
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                  Ready to Work Together?
                </span>
              </h2>
              <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                Let's bring your vision to life with a website that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 rounded-full"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/5 backdrop-blur-xl border-white/10 text-white hover:bg-white/10 rounded-full"
                >
                  View Our Work
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
