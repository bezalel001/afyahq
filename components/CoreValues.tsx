import { Shield, FlaskConical, Eye, Users, Globe2 } from "lucide-react";
import { motion } from "motion/react";

export function CoreValues() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Truth in every test, honesty in every result.",
      gradient: "from-[#007A5E] to-[#007A5E]/90"
    },
    {
      icon: FlaskConical,
      title: "Science",
      description: "Evidence over assumption; facts over fear.",
      gradient: "from-[#D4A017] to-[#D4A017]/90"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Data that the public can see and trust.",
      gradient: "from-[#007A5E] to-[#007A5E]/90"
    },
    {
      icon: Users,
      title: "Empowerment",
      description: "Educating consumers and uplifting ethical brands.",
      gradient: "from-[#D4A017] to-[#D4A017]/90"
    },
    {
      icon: Globe2,
      title: "Pan-Africanism",
      description: "A united approach to wellness across the continent.",
      gradient: "from-[#007A5E] to-[#007A5E]/90"
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-[#F9F9F4]/50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#007A5E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#D4A017] rounded-full blur-3xl"></div>
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
            What Drives Us
          </div>
          <h2 className="mb-6 text-4xl lg:text-5xl">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do at AfyaHQ Labs
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {values.map((value, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-50 group-hover:from-white/30 group-hover:to-white/10 rounded-2xl flex items-center justify-center mb-6 transition-all shadow-sm"
                >
                  <value.icon className="w-7 h-7 text-gray-700 group-hover:text-white transition-colors" />
                </motion.div>
                <h3 className="mb-3 text-xl text-gray-900 group-hover:text-white transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                  {value.description}
                </p>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-tr-2xl"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 relative bg-gradient-to-br from-[#007A5E]/5 via-white to-[#D4A017]/5 p-10 rounded-3xl border border-[#007A5E]/20 shadow-lg overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A017]/10 rounded-full blur-3xl"></div>
          <p className="relative z-10 text-center text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            These values aren't just words on a page — they're the foundation of every test we run, 
            every certification we award, and every decision we make. They guide us in our mission 
            to protect lives and build trust across Africa.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
