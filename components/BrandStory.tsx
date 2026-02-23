import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Shield, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export function BrandStory() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="about" className="py-24 lg:py-32 bg-gradient-to-b from-white to-[#F9F9F4]/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#007A5E]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A017]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 bg-[#007A5E]/10 text-[#007A5E] rounded-full mb-6 border border-[#007A5E]/20">
              Our Story
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="mb-6 text-4xl lg:text-5xl">
              Built to Change Africa's Health Reality
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-gray-700 mb-6 text-lg">
              Every day, millions of Africans use products — food, hair creams, lotions, and cosmetics — 
              without knowing what's inside them. Some are pure, but many are unsafe: laced with toxic 
              chemicals, bacteria, or ingredients banned elsewhere.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-gray-700 mb-8 text-lg">
              AfyaHQ was born to change that. We are building Africa's headquarters for health intelligence, 
              where science, technology, and truth work together to ensure that everything Africans eat, wear, 
              and use is safe.
            </motion.p>

            <motion.div 
              variants={itemVariants} 
              className="relative bg-gradient-to-br from-[#007A5E]/10 via-[#007A5E]/5 to-[#D4A017]/10 p-8 rounded-2xl mb-8 border border-[#007A5E]/20 shadow-lg overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A017]/10 rounded-full blur-2xl"></div>
              <p className="text-lg text-gray-900 relative z-10 leading-relaxed">
                Through advanced testing, transparent data, and digital tools, AfyaHQ is creating a new 
                culture of health accountability, empowering consumers to make safer choices and helping 
                brands meet the highest standards of safety and trust.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="grid sm:grid-cols-3 gap-4"
            >
              {[
                { icon: Shield, text: "Protect Lives", color: "emerald" },
                { icon: Heart, text: "Build Trust", color: "gold" },
                { icon: TrendingUp, text: "Elevate Standards", color: "emerald" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`group relative flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-200 ${item.color === "emerald" ? "hover:border-[#007A5E]" : "hover:border-[#D4A017]"} transition-all duration-300 shadow-sm hover:shadow-xl`}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color === 'emerald' ? 'from-[#007A5E]/10 to-[#007A5E]/5' : 'from-[#D4A017]/10 to-[#D4A017]/5'} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-6 h-6 ${item.color === 'emerald' ? 'text-[#007A5E]' : 'text-[#D4A017]'}`} />
                  </div>
                  <p className="text-gray-900">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1650295894392-7fea9aa5a5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFmcmljYW4lMjBzY2llbnRpc3QlMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2NDI0Mjk3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Black African scientist working in laboratory"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#007A5E]/20 to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-8 -left-8 bg-gradient-to-br from-[#007A5E] to-[#007A5E]/90 text-white p-8 rounded-2xl shadow-2xl max-w-xs border border-white/10 backdrop-blur-sm"
            >
              <p className="text-lg">
                "Science for a Safer Africa"
              </p>
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#D4A017] rounded-2xl opacity-20 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
