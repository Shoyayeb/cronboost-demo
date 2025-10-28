"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. A standard website typically takes 6-8 weeks from discovery to launch. More complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What is your development process?",
    answer: "We follow a proven 6-step process: Discovery & Planning, Design & Prototype, Development, Testing & QA, Launch & Deploy, and ongoing Support & Optimization. This ensures quality results and keeps you informed at every stage.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Absolutely! All our plans include post-launch support. We offer maintenance packages ranging from 30 days to ongoing annual support, including updates, security patches, performance monitoring, and technical assistance.",
  },
  {
    question: "Can you work with our existing design or brand?",
    answer: "Yes! We can work with your existing brand guidelines, design systems, or even redesign everything from scratch. We're flexible and adapt our process to match your needs and preferences.",
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, industry-standard technologies including React, Next.js, TypeScript, Node.js, and various databases. We choose the best tech stack for your specific project requirements to ensure optimal performance and scalability.",
  },
  {
    question: "How much does a website cost?",
    answer: "Our pricing starts at $2,999 for starter websites and goes up based on features and complexity. Enterprise solutions are custom-quoted. We offer transparent pricing with no hidden fees, and can work within various budget ranges.",
  },
  {
    question: "Do you offer hosting and domain services?",
    answer: "While we don't directly sell hosting, we help set up and configure your hosting on premium platforms like Vercel, AWS, or your preferred provider. We can also assist with domain registration and DNS configuration.",
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer: "Yes! We build all websites with SEO best practices from the ground up. We can also provide ongoing SEO optimization, content strategy, and connect you with our marketing partners for comprehensive digital marketing services.",
  },
  {
    question: "What if I need changes after the project is complete?",
    answer: "We include revision rounds in all our packages, and offer flexible maintenance agreements for ongoing changes. Minor tweaks can often be handled within your support period, while larger changes are quoted separately.",
  },
  {
    question: "Do you sign NDAs and protect intellectual property?",
    answer: "Absolutely. We take confidentiality seriously and are happy to sign NDAs before project discussions. All code and designs we create for you are your property upon final payment, and we maintain strict data security protocols.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
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
              <span className="text-sm text-zinc-300">Got Questions?</span>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Everything you need to know about our services and process
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                {/* Question button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 flex items-center justify-between gap-4 text-left group"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {faq.question}
                  </span>
                  
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-white" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6">
                        <div className="pt-2 border-t border-white/10">
                          <p className="text-zinc-400 leading-relaxed mt-4">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Gradient accent on open */}
                {openIndex === index && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
            <p className="text-lg text-zinc-300 mb-2">
              Still have questions?
            </p>
            <p className="text-sm text-zinc-500 mb-6">
              We're here to help! Reach out to our team anytime.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium transition-all duration-300 shadow-lg shadow-blue-500/50"
              aria-label="Contact us with your questions"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
