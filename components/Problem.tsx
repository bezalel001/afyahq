import { AlertTriangle, Eye, Globe, FileX } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function Problem() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Hidden Toxins",
      description: "Many foods and cosmetic products sold in African markets contain dangerous substances — from mercury and hydroquinone in skin creams to lead and bacteria in processed foods.",
      color: "text-[#D4A017]",
      bgColor: "bg-[#D4A017]/10"
    },
    {
      icon: FileX,
      title: "Weak Oversight",
      description: "Few accessible, modern laboratories exist to test products or enforce safety standards.",
      color: "text-[#007A5E]",
      bgColor: "bg-[#007A5E]/10"
    },
    {
      icon: Eye,
      title: "Consumer Blindness",
      description: "People trust packaging but not science.",
      color: "text-[#D4A017]",
      bgColor: "bg-[#D4A017]/10"
    },
    {
      icon: Globe,
      title: "Global Double Standards",
      description: "Products banned elsewhere are often still sold across Africa.",
      color: "text-[#007A5E]",
      bgColor: "bg-[#007A5E]/10"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4A017] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-full mb-6 border border-red-100">
            <AlertTriangle className="w-4 h-4 mr-2" />
            The Challenge
          </div>
          <h2 className="mb-6 text-4xl lg:text-5xl">
            The Hidden Crisis in African Markets
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Many of the products sold in African markets contain harmful chemicals, bacteria, or unsafe 
            ingredients that people don't even know are there.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-2xl hover:border-gray-200 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 ${problem.bgColor} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}
                >
                  <problem.icon className={`w-8 h-8 ${problem.color}`} />
                </motion.div>
                <h3 className="mb-4 text-xl">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
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
          className="relative rounded-3xl overflow-hidden shadow-2xl group"
        >
          <div className="relative h-[500px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1761828122942-e09382131eb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFya2V0JTIwcHJvZHVjdHN8ZW58MXx8fHwxNzY0MjA1OTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="African market products"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex items-end">
            <div className="p-10 text-white max-w-3xl">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl leading-relaxed"
              >
                Without proper testing and oversight, consumers remain vulnerable to products that could harm their health.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
