import { TrendingUp, Users, Building2, Globe } from "lucide-react";
import { motion } from "motion/react";

export function WhyNow() {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Rapid Market Growth",
      description: "Africa's cosmetics and food market is growing faster than its regulations.",
      stat: "15% CAGR"
    },
    {
      icon: Users,
      title: "Rising Awareness",
      description: "Increasing consumer awareness about health and safety across the continent.",
      stat: "65% Concern"
    },
    {
      icon: Building2,
      title: "Infrastructure Investment",
      description: "Governments and NGOs are investing in local health infrastructure.",
      stat: "$2B+ Invested"
    },
    {
      icon: Globe,
      title: "Global Interest",
      description: "Growing global interest in African data and public health systems.",
      stat: "100+ Partners"
    }
  ];

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#007A5E]/5 via-[#D4A017]/5 to-[#007A5E]/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#007A5E]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4A017]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#007A5E]/10 text-[#007A5E] rounded-full mb-6 border border-[#007A5E]/20">
            Perfect Timing
          </div>
          <h2 className="mb-6 text-4xl lg:text-5xl">
            Why Now?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AfyaHQ is the right idea at the right time — bridging science, technology, and culture 
            to protect lives and elevate Africa's products.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-[#007A5E]/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#007A5E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#007A5E]/10 to-[#D4A017]/10 rounded-2xl flex items-center justify-center mb-6 shadow-sm"
                >
                  <reason.icon className="w-8 h-8 text-[#007A5E]" />
                </motion.div>
                
                <div className="mb-6">
                  <span className="inline-block text-3xl text-[#D4A017] px-3 py-1 bg-[#D4A017]/10 rounded-lg">
                    {reason.stat}
                  </span>
                </div>
                
                <h3 className="mb-4 text-xl">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-white rounded-3xl p-10 lg:p-16 shadow-2xl border border-gray-200 overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#007A5E]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4A017]/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 text-3xl lg:text-4xl"
            >
              The Time for Action is Now
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-700 mb-10 leading-relaxed"
            >
              Every day we wait, more unsafe products enter African markets. Every day we act, 
              more lives are protected and more trust is built. AfyaHQ isn't just responding to 
              a crisis — we're building the foundation for Africa's health future.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-[#007A5E] to-[#007A5E]/90 hover:from-[#007A5E]/90 hover:to-[#007A5E] text-white rounded-xl transition-all shadow-xl hover:shadow-2xl"
              >
                Join the Movement
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white border-2 border-[#D4A017] hover:border-[#007A5E] hover:bg-[#007A5E]/5 text-gray-900 rounded-xl transition-all"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
