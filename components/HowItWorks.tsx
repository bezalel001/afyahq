import { Package, FlaskRound, Brain, FileCheck, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function HowItWorks() {
  const steps = [
    {
      icon: Package,
      number: "01",
      title: "Collect Samples",
      description: "From markets, manufacturers, or consumers."
    },
    {
      icon: FlaskRound,
      number: "02",
      title: "Run Tests",
      description: "Use modern biochemistry, toxicology, and microbiology methods."
    },
    {
      icon: Brain,
      number: "03",
      title: "Analyse with AI",
      description: "Detect patterns, banned ingredients, and recurring risks."
    },
    {
      icon: FileCheck,
      number: "04",
      title: "Publish Results",
      description: "Through AfyaHQ's public reports and dashboards."
    },
    {
      icon: Award,
      number: "05",
      title: "Certify Safe Products",
      description: "Award the Afya Seal for brands that meet safety criteria."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#007A5E]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#D4A017]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-[#007A5E]/10 text-[#007A5E] rounded-full mb-6 border border-[#007A5E]/20">
              Our Process
            </div>
            <h2 className="mb-6 text-4xl lg:text-5xl">
              How AfyaHQ Works
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              A systematic, science-driven approach to product safety
            </p>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex gap-5 group"
                >
                  <div className="flex-shrink-0 relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-white to-[#F9F9F4] border-2 border-[#007A5E] group-hover:border-[#D4A017] rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-lg transition-all duration-300">
                      <step.icon className="w-7 h-7 text-[#007A5E] group-hover:text-[#D4A017] transition-colors" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-14 left-7 w-0.5 h-6 bg-gradient-to-b from-[#007A5E]/30 to-transparent"></div>
                    )}
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-mono text-[#D4A017] px-2 py-1 bg-[#D4A017]/10 rounded">{step.number}</span>
                      <h3 className="text-lg">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1599557835468-29bb0b3155cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwdGVzdGluZyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjQxNzMwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Laboratory testing equipment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#007A5E]/20 to-transparent"></div>
            </div>
            
            {/* Floating certification badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="absolute -bottom-8 -right-8 bg-gradient-to-br from-[#D4A017] to-[#D4A017]/90 text-white p-8 rounded-2xl shadow-2xl max-w-sm border border-[#D4A017]/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-6 h-6" />
                <p className="text-lg">Afya Seal Certification</p>
              </div>
              <p className="text-[#F9F9F4]/90 leading-relaxed">
                Products that pass our rigorous testing receive the trusted Afya Seal
              </p>
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#007A5E] rounded-2xl opacity-20 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
