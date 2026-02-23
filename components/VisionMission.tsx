import { Target, Compass, Flag } from "lucide-react";
import { motion } from "motion/react";

export function VisionMission() {
  const items = [
    {
      icon: Target,
      title: "Vision",
      description: "A future where every African has the right to safe, trusted, and verified products — from the food on their plate to the cream on their skin.",
      color: "emerald",
      gradient: "from-[#007A5E] to-[#007A5E]/90"
    },
    {
      icon: Compass,
      title: "Mission",
      description: "To make Africa the global standard for consumer health safety through science, technology, and transparency.",
      color: "gold",
      gradient: "from-[#D4A017] to-[#D4A017]/90"
    },
    {
      icon: Flag,
      title: "Goal",
      description: "To protect lives, build trust, and make health and safety a normal part of life in every African home.",
      color: "emerald",
      gradient: "from-[#007A5E] to-[#007A5E]/90"
    }
  ];

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
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#007A5E]/5 via-white to-[#D4A017]/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#007A5E]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A017]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#007A5E]/10 text-[#007A5E] rounded-full mb-6 border border-[#007A5E]/20">
            Our Direction
          </div>
          <h2 className="mb-6 text-4xl lg:text-5xl">
            Vision, Mission & Goal
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {items.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative bg-white p-10 rounded-3xl shadow-lg border ${item.color === 'emerald' ? 'border-[#007A5E]/20' : 'border-[#D4A017]/20'} hover:shadow-2xl transition-all duration-300 overflow-hidden`}
            >
              {/* Animated gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 ${item.color === 'emerald' ? 'bg-[#007A5E]/10' : 'bg-[#D4A017]/10'} rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors shadow-sm`}
                >
                  <item.icon className={`w-8 h-8 ${item.color === 'emerald' ? 'text-[#007A5E]' : 'text-[#D4A017]'} group-hover:text-white transition-colors`} />
                </motion.div>
                <h3 className="mb-6 text-2xl group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-700 group-hover:text-white/90 transition-colors leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
              
              {/* Decorative corner element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-white via-[#F9F9F4] to-white px-10 py-6 rounded-full shadow-xl border border-gray-200">
            <p className="text-gray-900 text-lg">
              Building Africa's future, one tested product at a time
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
