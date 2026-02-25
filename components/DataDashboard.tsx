import { motion } from "motion/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Area,
  AreaChart,
} from "recharts";
import {
  TrendingUp,
  Shield,
  AlertTriangle,
  CheckCircle2,
  Users,
  Package,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Sample data for visualizations
const productTestingData = [
  { category: "Cosmetics", tested: 245, passed: 198, failed: 47 },
  { category: "Food Items", tested: 389, passed: 312, failed: 77 },
  { category: "Personal Care", tested: 167, passed: 143, failed: 24 },
  { category: "Beverages", tested: 298, passed: 267, failed: 31 },
  { category: "Baby Products", tested: 134, passed: 109, failed: 25 },
];

const monthlyTrendsData = [
  { month: "Jan", tests: 120, certifications: 95, violations: 25 },
  { month: "Feb", tests: 145, certifications: 118, violations: 27 },
  { month: "Mar", tests: 178, certifications: 152, violations: 26 },
  { month: "Apr", tests: 198, certifications: 167, violations: 31 },
  { month: "May", tests: 223, certifications: 189, violations: 34 },
  { month: "Jun", tests: 267, certifications: 228, violations: 39 },
];

const safetyScoreData = [
  { name: "Safe Products", value: 1029, color: "#007A5E" },
  { name: "Failed Tests", value: 204, color: "#D4A017" },
  { name: "Under Review", value: 89, color: "#2E2E2E" },
];

const topViolationsData = [
  { issue: "Heavy Metals", count: 45, percentage: 22 },
  { issue: "Bacteria", count: 38, percentage: 19 },
  { issue: "Preservatives", count: 31, percentage: 15 },
  { issue: "Labeling", count: 28, percentage: 14 },
  { issue: "pH Levels", count: 24, percentage: 12 },
  { issue: "Others", count: 38, percentage: 18 },
];

const stats = [
  {
    icon: Package,
    label: "Products Tested",
    value: "50",
    change: "+15%",
    trend: "up",
  },
  {
    icon: Shield,
    label: "Certifications Issued",
    value: "10",
    change: "+12%",
    trend: "up",
  },
  {
    icon: AlertTriangle,
    label: "Violations Found",
    value: "3",
    change: "-8%",
    trend: "down",
  },
  {
    icon: Users,
    label: "Brands Served",
    value: "24",
    change: "+23%",
    trend: "up",
  },
];

export function DataDashboard() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="py-20 bg-gradient-to-b from-[#F9F9F4] to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #007A5E 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#007A5E]/10 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-[#007A5E]" />
            <span className="text-sm font-medium text-[#007A5E]">
              Real-Time Impact Dashboard
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-[#2E2E2E]">
            Our Testing Impact in Numbers
          </h2>
          <p className="text-lg text-[#2E2E2E]/70 max-w-3xl mx-auto">
            Data-driven insights showing how we're protecting African consumers
            and building trust in the marketplace
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#007A5E]/10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#007A5E]/5 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-[#007A5E]/10 rounded-xl group-hover:bg-[#007A5E] transition-colors">
                    <stat.icon className="w-6 h-6 text-[#007A5E] group-hover:text-white transition-colors" />
                  </div>
                  <div
                    className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${
                      stat.trend === "up"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    <TrendingUp
                      className={`w-3 h-3 ${
                        stat.trend === "down" && "rotate-180"
                      }`}
                    />
                    {stat.change}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-[#007A5E] mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm text-[#2E2E2E]/70">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product Testing Overview */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="bg-white rounded-2xl p-6 shadow-lg border border-[#007A5E]/10"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#2E2E2E] mb-1">
                  Product Testing by Category
                </h3>
                <p className="text-sm text-[#2E2E2E]/60">
                  Pass vs. Fail rates across product types
                </p>
              </div>
              <div className="p-2 bg-[#007A5E]/10 rounded-lg">
                <Package className="w-5 h-5 text-[#007A5E]" />
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={productTestingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#007A5E20" />
                <XAxis
                  dataKey="category"
                  tick={{ fill: "#2E2E2E", fontSize: 12 }}
                  angle={-15}
                  textAnchor="end"
                  height={70}
                />
                <YAxis tick={{ fill: "#2E2E2E", fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #007A5E20",
                    borderRadius: "12px",
                    padding: "12px",
                  }}
                />
                <Legend />
                <Bar dataKey="passed" fill="#007A5E" radius={[8, 8, 0, 0]} />
                <Bar dataKey="failed" fill="#D4A017" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Safety Score Distribution */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="bg-white rounded-2xl p-6 shadow-lg border border-[#007A5E]/10"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#2E2E2E] mb-1">
                  Safety Score Distribution
                </h3>
                <p className="text-sm text-[#2E2E2E]/60">
                  Overall product safety status
                </p>
              </div>
              <div className="p-2 bg-[#007A5E]/10 rounded-lg">
                <Shield className="w-5 h-5 text-[#007A5E]" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={safetyScoreData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {safetyScoreData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #007A5E20",
                      borderRadius: "12px",
                      padding: "12px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Monthly Trends - Full Width */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="bg-white rounded-2xl p-6 shadow-lg border border-[#007A5E]/10 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-[#2E2E2E] mb-1">
                Monthly Testing Trends
              </h3>
              <p className="text-sm text-[#2E2E2E]/60">
                6-month performance overview
              </p>
            </div>
            <div className="p-2 bg-[#007A5E]/10 rounded-lg">
              <TrendingUp className="w-5 h-5 text-[#007A5E]" />
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyTrendsData}>
              <defs>
                <linearGradient id="colorTests" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#007A5E" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#007A5E" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="colorCertifications"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#D4A017" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#D4A017" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#007A5E20" />
              <XAxis dataKey="month" tick={{ fill: "#2E2E2E", fontSize: 12 }} />
              <YAxis tick={{ fill: "#2E2E2E", fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #007A5E20",
                  borderRadius: "12px",
                  padding: "12px",
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="tests"
                stroke="#007A5E"
                strokeWidth={2}
                fill="url(#colorTests)"
              />
              <Area
                type="monotone"
                dataKey="certifications"
                stroke="#D4A017"
                strokeWidth={2}
                fill="url(#colorCertifications)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Top Violations */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="bg-white rounded-2xl p-6 shadow-lg border border-[#007A5E]/10"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-[#2E2E2E] mb-1">
                Top Safety Violations Detected
              </h3>
              <p className="text-sm text-[#2E2E2E]/60">
                Most common issues found in failed tests
              </p>
            </div>
            <div className="p-2 bg-[#D4A017]/10 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-[#D4A017]" />
            </div>
          </div>
          <div className="space-y-4">
            {topViolationsData.map((violation, index) => (
              <div key={violation.issue} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#007A5E]/10 flex items-center justify-center text-sm font-bold text-[#007A5E]">
                      {index + 1}
                    </div>
                    <span className="font-medium text-[#2E2E2E]">
                      {violation.issue}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-[#2E2E2E]/60">
                      {violation.count} cases
                    </span>
                    <span className="text-sm font-bold text-[#007A5E]">
                      {violation.percentage}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-[#007A5E]/10 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={
                      isVisible ? { width: `${violation.percentage}%` } : {}
                    }
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-[#007A5E] to-[#D4A017] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mt-12 text-center bg-gradient-to-r from-[#007A5E] to-[#007A5E]/90 rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "30px 30px",
              }}
            />
          </div>
          <div className="relative z-10">
            <CheckCircle2 className="w-12 h-12 text-[#D4A017] mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Certify Your Products?
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Join the 247 brands that trust AfyaHQ Labs to ensure product
              safety and build consumer confidence across Africa.
            </p>
            <button className="px-8 py-4 bg-[#D4A017] hover:bg-[#D4A017]/90 text-[#2E2E2E] rounded-xl transition-all duration-300 font-medium shadow-xl hover:shadow-2xl hover:scale-105">
              Request Testing Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
