"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap, Rocket, Crown } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter",
    icon: Zap,
    price: "$2,999",
    description: "Perfect for small businesses and startups",
    features: [
      "5-page responsive website",
      "Mobile-first design",
      "Basic SEO optimization",
      "Contact form integration",
      "2 rounds of revisions",
      "30-day support",
      "Google Analytics setup",
      "Social media integration",
    ],
    popular: false,
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderGradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Professional",
    icon: Rocket,
    price: "$5,999",
    description: "Ideal for growing businesses",
    features: [
      "10-page responsive website",
      "Custom UI/UX design",
      "Advanced SEO optimization",
      "CMS integration",
      "E-commerce functionality",
      "5 rounds of revisions",
      "90-day priority support",
      "Performance optimization",
      "Email marketing setup",
      "Custom animations",
    ],
    popular: true,
    gradient: "from-purple-500/20 to-pink-500/20",
    borderGradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "Custom",
    description: "For large-scale projects",
    features: [
      "Unlimited pages",
      "Custom web application",
      "Advanced integrations",
      "Multi-language support",
      "Custom CMS development",
      "Unlimited revisions",
      "1-year dedicated support",
      "Advanced security features",
      "API development",
      "DevOps & deployment",
      "Training & documentation",
      "Ongoing maintenance",
    ],
    popular: false,
    gradient: "from-orange-500/20 to-red-500/20",
    borderGradient: "from-orange-500 to-red-500",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
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
              <span className="text-sm text-zinc-300">Transparent Pricing</span>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Choose Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Flexible pricing options designed to scale with your business needs
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <Card
                className={`group relative h-full p-8 bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden ${
                  tier.popular ? "lg:scale-105 border-purple-500/50" : ""
                }`}
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br ${tier.gradient} border border-white/10 flex items-center justify-center`}
                  >
                    <tier.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Tier name */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-zinc-400 mb-6">{tier.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                        {tier.price}
                      </span>
                      {tier.price !== "Custom" && (
                        <span className="text-zinc-500 text-sm">/ project</span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <div
                          className={`w-5 h-5 rounded-full bg-gradient-to-r ${tier.borderGradient} flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-zinc-300 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={`w-full py-6 text-base rounded-full transition-all duration-300 ${
                      tier.popular
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg shadow-purple-500/50"
                        : "bg-white/5 backdrop-blur-xl border-white/10 text-white hover:bg-white/10"
                    }`}
                    aria-label={`Get started with ${tier.name} plan`}
                  >
                    Get Started
                  </Button>
                </div>

                {/* Gradient border on hover */}
                <div
                  className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${tier.borderGradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-zinc-400 mb-4">
            Not sure which plan is right for you?
          </p>
          <Button
            variant="outline"
            className="px-8 py-6 text-base bg-white/5 backdrop-blur-xl border-white/10 text-white hover:bg-white/10 rounded-full"
            aria-label="Contact our sales team for custom pricing"
          >
            Contact Sales
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
