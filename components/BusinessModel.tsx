import { DollarSign, Award, Database, Megaphone, Users } from "lucide-react";
import { motion } from "motion/react";

export function BusinessModel() {
  const streams = [
    {
      icon: DollarSign,
      title: "Testing Fees",
      description: "Paid by manufacturers, importers, or distributors for lab analysis.",
      color: "emerald"
    },
    {
      icon: Award,
      title: "Certification Licenses",
      description: "Annual Afya Seal subscription for compliant brands.",
      color: "gold"
    },
    {
      icon: Database,
      title: "Data Partnerships",
      description: "Governments, NGOs, and insurers pay for research insights.",
      color: "emerald"
    },
    {
      icon: Megaphone,
      title: "Public Reports & Campaigns",
      description: "Sponsored safety awareness campaigns.",
      color: "gold"
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Reformulation and compliance advisory for local manufacturers.",
      color: "emerald"
    }
  ];

  const colorClasses = {
    emerald: { bg: "bg-[#007A5E]/10", icon: "text-[#007A5E]", border: "border-[#007A5E]/20", gradient: "from-[#007A5E]/10 to-transparent" },
    gold: { bg: "bg-[#D4A017]/10", icon: "text-[#D4A017]", border: "border-[#D4A017]/20", gradient: "from-[#D4A017]/10 to-transparent" }
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const stats = [
    { value: "50+", label: "Products Tested" },
    { value: "15+", label: "Partner Brands" },
    { value: "5", label: "Countries" },
    { value: "100%", label: "Transparency" }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-[#F9F9F4]/50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#007A5E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#D4A017] rounded-full blur-3xl"></div>
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
            Sustainable Growth
          </div>
          <h2 className="mb-6 text-4xl lg:text-5xl">
            Our Business Model
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple revenue streams ensure sustainability while maintaining our mission to protect 
            African consumers and support ethical brands.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {streams.map((stream, index) => {
            const colors = colorClasses[stream.color as keyof typeof colorClasses];
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`group p-8 rounded-2xl border ${colors.border} bg-white hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="relative z-10 flex items-start gap-4">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 bg-white group-hover:bg-white/80 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
                  >
                    <stream.icon className={`w-7 h-7 ${colors.icon}`} />
                  </motion.div>
                  <div>
                    <h3 className="mb-3 text-lg">
                      {stream.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {stream.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          <motion.div 
            variants={itemVariants}
            className="p-8 rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50/50 flex items-center justify-center hover:border-[#007A5E]/30 hover:bg-[#007A5E]/5 transition-all"
          >
            <div className="text-center">
              <p className="text-gray-500 mb-2">More revenue streams</p>
              <p className="text-gray-700">As we scale across Africa</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-gradient-to-br from-[#007A5E] via-[#007A5E]/95 to-[#007A5E]/90 rounded-3xl p-10 lg:p-16 text-white overflow-hidden shadow-2xl"
        >
          {/* Animated background orbs */}
          <motion.div 
            className="absolute top-0 right-0 w-80 h-80 bg-[#D4A017]/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-white mb-6 text-3xl lg:text-4xl">
                Interested in partnering with AfyaHQ?
              </h3>
              <p className="text-[#F9F9F4]/90 mb-8 text-lg leading-relaxed">
                Whether you're a manufacturer, government agency, NGO, or investor, 
                we'd love to explore how we can work together to elevate Africa's health standards.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-[#D4A017] text-[#2E2E2E] rounded-xl hover:bg-[#D4A017]/90 transition-colors shadow-xl"
              >
                Get in Touch
              </motion.button>
            </div>
            
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all"
                >
                  <p className="text-4xl mb-3">{stat.value}</p>
                  <p className="text-[#F9F9F4]/90">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
