import { FlaskConical, Award, BarChart3, Smartphone, Brain } from "lucide-react";
import { motion } from "motion/react";

export function Solution() {
  const solutions = [
    {
      icon: FlaskConical,
      area: "Product Testing",
      description: "Chemical, microbiological, and toxicological testing for foods, cosmetics, and personal care items.",
      impact: "Safer consumption, fewer health risks.",
      color: "emerald"
    },
    {
      icon: Award,
      area: "Certification (Afya Seal)",
      description: "A visible label awarded to tested and verified safe products.",
      impact: "Builds trust between brands and consumers.",
      color: "gold"
    },
    {
      icon: BarChart3,
      area: "Data & Insights",
      description: "Health safety reports, risk alerts, and research data for regulators and the public.",
      impact: "Informs better policy and awareness.",
      color: "emerald"
    },
    {
      icon: Smartphone,
      area: "Digital Platform",
      description: "A mobile app for consumers to scan products and check if they're Afya-certified.",
      impact: "Transparency and public empowerment.",
      color: "gold"
    },
    {
      icon: Brain,
      area: "AI-Powered Analysis",
      description: "Automated detection of banned ingredients using AI models trained on global databases.",
      impact: "Speed, accuracy, and scalability.",
      color: "emerald"
    }
  ];

  const colorClasses = {
    emerald: { bg: "bg-[#007A5E]/10", text: "text-[#007A5E]", border: "border-[#007A5E]/20", gradient: "from-[#007A5E]/20 to-transparent" },
    gold: { bg: "bg-[#D4A017]/10", text: "text-[#D4A017]", border: "border-[#D4A017]/20", gradient: "from-[#D4A017]/20 to-transparent" }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="solutions" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#007A5E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#D4A017] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#007A5E]/10 text-[#007A5E] rounded-full mb-6 border border-[#007A5E]/20">
            Our Solution
          </div>
          <h2 className="mb-6 text-4xl lg:text-5xl">
            How AfyaHQ Labs Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive ecosystem of testing, certification, and transparency tools 
            designed to ensure product safety across Africa.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((solution, index) => {
            const colors = colorClasses[solution.color as keyof typeof colorClasses];
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative p-8 rounded-2xl border ${colors.border} bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <h3 className="mb-3 text-xl">
                    {solution.area}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className={`pt-4 border-t ${colors.border}`}>
                    <p className={`${colors.text} flex items-start gap-2`}>
                      <span className="opacity-75 text-sm">Impact:</span> 
                      <span className="flex-1">{solution.impact}</span>
                    </p>
                  </div>
                </div>
                
                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colors.gradient} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 relative bg-gradient-to-r from-[#007A5E] via-[#007A5E]/95 to-[#007A5E]/90 rounded-3xl p-10 lg:p-16 text-white text-center overflow-hidden shadow-2xl"
        >
          {/* Animated background orbs */}
          <motion.div 
            className="absolute top-0 right-0 w-64 h-64 bg-[#D4A017]/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          />
          
          <div className="relative z-10">
            <h3 className="text-white mb-4 text-3xl lg:text-4xl">
              Ready to ensure your products meet the highest safety standards?
            </h3>
            <p className="text-[#F9F9F4]/90 mb-8 max-w-2xl mx-auto text-lg">
              Join the movement to build trust and protect consumers across Africa.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-[#D4A017] text-[#2E2E2E] rounded-xl hover:bg-[#D4A017]/90 transition-colors shadow-xl"
            >
              Get Certified Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
