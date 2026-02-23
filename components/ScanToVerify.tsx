import { motion } from "motion/react";
import {
  Scan,
  Shield,
  CheckCircle2,
  AlertTriangle,
  Smartphone,
  Zap,
  Lock,
  XCircle,
  OctagonX,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const features = [
  {
    icon: Scan,
    title: "Instant Scanning",
    description:
      "Simply scan any product's QR code or barcode to verify authenticity",
  },
  {
    icon: Shield,
    title: "Real-Time Verification",
    description: "Get immediate safety reports and certification status",
  },
  {
    icon: CheckCircle2,
    title: "Detailed Reports",
    description: "Access comprehensive test results and safety information",
  },
  {
    icon: AlertTriangle,
    title: "Safety Alerts",
    description: "Receive instant warnings about harmful products",
  },
];

const stats = [
  { number: "500K+", label: "Active Users" },
  { number: "2M+", label: "Products Scanned" },
  { number: "99.9%", label: "Accuracy Rate" },
];

export function ScanToVerify() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-[#F9F9F4] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #007A5E 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-[#D4A017]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#007A5E]/10 rounded-full mb-6">
              <Smartphone className="w-4 h-4 text-[#007A5E]" />
              <span className="text-sm font-medium text-[#007A5E]">
                Mobile Innovation
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl mb-6 text-[#2E2E2E]">
              Scan-to-Verify Mobile App
            </h2>

            <p className="text-lg text-[#2E2E2E]/70 mb-8">
              Empower consumers to instantly verify product safety and
              authenticity with our cutting-edge mobile application. Scan any
              certified product and get real-time safety information at your
              fingertips.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#007A5E]/10 rounded-lg group-hover:bg-[#007A5E] transition-colors">
                      <feature.icon className="w-5 h-5 text-[#007A5E] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2E2E2E] mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-[#2E2E2E]/70">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-8 mb-8 pt-6 border-t border-[#007A5E]/10"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-[#007A5E] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-[#2E2E2E]/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group px-8 py-4 bg-[#007A5E] hover:bg-[#007A5E]/90 text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                <Smartphone className="w-5 h-5" />
                Download App
                <Zap className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white hover:bg-[#F9F9F4] text-[#007A5E] border-2 border-[#007A5E] rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105">
                <Lock className="w-5 h-5" />
                For Brands
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Mobile App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Phone Container */}
            <div className="relative z-10">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                {/* iPhone Frame */}
                <div className="relative w-full max-w-[340px] mx-auto">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-[#007A5E]/20 rounded-[50px] blur-2xl"></div>

                  {/* Phone Shell */}
                  <div className="relative bg-black rounded-[50px] p-3 shadow-2xl">
                    {/* Screen */}
                    <div className="bg-white rounded-[40px] overflow-hidden relative aspect-[9/19]">
                      {/* Status Bar */}
                      <div className="absolute top-0 left-0 right-0 px-6 pt-3 pb-2 flex justify-between items-center text-xs font-semibold text-[#2E2E2E] z-20 bg-white">
                        <span>9:41</span>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-3 border border-[#2E2E2E] rounded-sm"></div>
                          <div className="w-3 h-3 border border-[#2E2E2E] rounded-sm"></div>
                          <div className="w-3 h-3 border border-[#2E2E2E] rounded-sm"></div>
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="absolute top-12 left-0 right-0 px-6 py-4 bg-[#007A5E] z-10">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                            <Shield className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-white text-lg">
                              AfyaHQ Verify
                            </h3>
                            <p className="text-white/80 text-xs">
                              Product Scanner
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Status Cards */}
                      <div className="absolute top-32 left-0 right-0 bottom-0 px-4 py-6 space-y-3 overflow-y-auto bg-gradient-to-b from-[#F9F9F4] to-white">
                        {/* Verified Status */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 1 }}
                          className="bg-white rounded-2xl p-5 shadow-lg border-2 border-green-500"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                              <CheckCircle2 className="w-7 h-7 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-lg text-[#2E2E2E] mb-1">
                                ✅ Verified
                              </h4>
                              <p className="text-sm text-[#2E2E2E]/70">
                                Product is certified safe and approved
                              </p>
                            </div>
                          </div>
                        </motion.div>

                        {/* Advisory Status */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 1.2 }}
                          className="bg-white rounded-2xl p-5 shadow-lg border-2 border-yellow-500"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                              <AlertTriangle className="w-7 h-7 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-lg text-[#2E2E2E] mb-1">
                                ⚠️ Advisory
                              </h4>
                              <p className="text-sm text-[#2E2E2E]/70">
                                Use with caution - check details
                              </p>
                            </div>
                          </div>
                        </motion.div>

                        {/* Not Verified Status */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 1.4 }}
                          className="bg-white rounded-2xl p-5 shadow-lg border-2 border-red-500"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                              <XCircle className="w-7 h-7 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-lg text-[#2E2E2E] mb-1">
                                ❌ Not Verified
                              </h4>
                              <p className="text-sm text-[#2E2E2E]/70">
                                Product not found in our database
                              </p>
                            </div>
                          </div>
                        </motion.div>

                        {/* Recall Alert Status */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 1.6 }}
                          className="bg-white rounded-2xl p-5 shadow-lg border-2 border-red-700"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 bg-red-700 rounded-xl flex items-center justify-center flex-shrink-0">
                              <OctagonX className="w-7 h-7 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-lg text-[#2E2E2E] mb-1">
                                ⛔ Do Not Use
                              </h4>
                              <p className="text-sm text-[#2E2E2E]/70">
                                Recall alert - harmful product detected
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-30"></div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-[#D4A017] rounded-2xl opacity-20 -z-10"
                animate={{
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#007A5E] rounded-2xl opacity-20 -z-10"
                animate={{
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Floating Feature Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -left-8 top-1/4 bg-white rounded-xl shadow-xl p-4 border border-[#007A5E]/10 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-[#2E2E2E]/60">Scan Complete</div>
                  <div className="font-bold text-[#2E2E2E]">Product Safe ✓</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute -right-8 top-2/3 bg-white rounded-xl shadow-xl p-4 border border-[#007A5E]/10 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#007A5E]/10 rounded-lg flex items-center justify-center">
                  <Scan className="w-6 h-6 text-[#007A5E]" />
                </div>
                <div>
                  <div className="text-xs text-[#2E2E2E]/60">Real-Time</div>
                  <div className="font-bold text-[#2E2E2E]">2.3s Scan</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
