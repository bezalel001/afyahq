import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, CheckCircle2, Sparkles, Shield } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758573466927-87ba2f725c7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHNjaWVudGlzdCUyMHJlc2VhcmNofGVufDF8fHx8MTc2NDIwNjMyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="African laboratory scientist"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#007A5E]/95 via-[#007A5E]/90 to-[#007A5E]/60"></div>
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 bg-[#D4A017]/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#007A5E]/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-[#D4A017]" />
              <span className="text-[#F9F9F4]">Africa's Health Intelligence Hub</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white mb-6 text-5xl md:text-6xl lg:text-7xl leading-tight"
            >
              AfyaHQ Labs
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl text-[#F9F9F4]/95 mb-8"
            >
              Africa's Headquarters for Health, Safety, and Trust.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-[#F9F9F4]/90 mb-10"
            >
              Comprehensive testing, certification, data insights, and digital tools to ensure product 
              safety and build trust between African consumers and ethical brands.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button className="group px-8 py-4 bg-[#D4A017] hover:bg-[#D4A017]/90 text-[#2E2E2E] rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-xl transition-all duration-300 backdrop-blur-md hover:scale-105">
                Learn More
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 gap-4 text-white"
            >
              {[
                "Advanced Testing & Certification",
                "AI-Powered Analysis",
                "Transparent Data Insights"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#D4A017] flex-shrink-0 mt-1" />
                  <div>
                    <p className="opacity-90">{item}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - iPhone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* iPhone Container */}
              <div className="relative w-[380px] h-[760px]">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-[#D4A017]/30 rounded-[60px] blur-3xl scale-105"></div>
                
                {/* iPhone Frame */}
                <div className="relative bg-black rounded-[60px] p-3 shadow-2xl border-8 border-[#2E2E2E]">
                  {/* Screen */}
                  <div className="bg-white rounded-[48px] overflow-hidden h-full relative">
                    {/* Phone Image */}
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1585060282215-39a72f82385c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBtb2NrdXAlMjBoYW5kJTIwd2hpdGV8ZW58MXx8fHwxNzcxODM3Mjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="AfyaHQ Mobile App"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* App UI Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#007A5E]/90">
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 1 }}
                          className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl"
                        >
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 bg-[#007A5E] rounded-2xl flex items-center justify-center">
                              <Shield className="w-9 h-9 text-white" />
                            </div>
                            <div>
                              <h3 className="font-bold text-xl text-[#2E2E2E]">Afya Seal</h3>
                              <p className="text-sm text-[#2E2E2E]/70">Verified Safe</p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-3">
                            <div className="bg-green-50 rounded-xl p-3 text-center">
                              <div className="text-2xl font-bold text-green-600">A+</div>
                              <div className="text-xs text-[#2E2E2E]/60">Safety</div>
                            </div>
                            <div className="bg-blue-50 rounded-xl p-3 text-center">
                              <div className="text-2xl font-bold text-blue-600">99%</div>
                              <div className="text-xs text-[#2E2E2E]/60">Pure</div>
                            </div>
                            <div className="bg-[#D4A017]/10 rounded-xl p-3 text-center">
                              <div className="text-2xl font-bold text-[#D4A017]">✓</div>
                              <div className="text-xs text-[#2E2E2E]/60">Certified</div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-black rounded-b-3xl"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -left-6 top-1/4 bg-white rounded-2xl shadow-2xl p-4 border border-[#007A5E]/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-[#2E2E2E]/60">Status</div>
                    <div className="font-bold text-[#2E2E2E]">Verified ✓</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute -right-6 top-2/3 bg-white rounded-2xl shadow-2xl p-4 border border-[#D4A017]/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#D4A017]/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <div className="text-xs text-[#2E2E2E]/60">Rating</div>
                    <div className="font-bold text-[#2E2E2E]">Premium</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <motion.div 
            className="w-1.5 h-1.5 bg-white rounded-full mx-auto"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}