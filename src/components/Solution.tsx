import { FlaskConical, Award, BarChart3, Smartphone, Brain } from "lucide-react";

export function Solution() {
  const solutions = [
    {
      icon: FlaskConical,
      area: "Product Testing",
      description: "Chemical, microbiological, and toxicological testing for foods, cosmetics, and personal care items.",
      impact: "Safer consumption, fewer health risks.",
      color: "blue"
    },
    {
      icon: Award,
      area: "Certification (Afya Seal)",
      description: "A visible label awarded to tested and verified safe products.",
      impact: "Builds trust between brands and consumers.",
      color: "green"
    },
    {
      icon: BarChart3,
      area: "Data & Insights",
      description: "Health safety reports, risk alerts, and research data for regulators and the public.",
      impact: "Informs better policy and awareness.",
      color: "purple"
    },
    {
      icon: Smartphone,
      area: "Digital Platform",
      description: "A mobile app for consumers to scan products and check if they're Afya-certified.",
      impact: "Transparency and public empowerment.",
      color: "indigo"
    },
    {
      icon: Brain,
      area: "AI-Powered Analysis",
      description: "Automated detection of banned ingredients using AI models trained on global databases.",
      impact: "Speed, accuracy, and scalability.",
      color: "cyan"
    }
  ];

  const colorClasses = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" },
    cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-200" }
  };

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full mb-6">
            Our Solution
          </div>
          <h2 className="mb-6">
            How AfyaHQ Labs Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive ecosystem of testing, certification, and transparency tools 
            designed to ensure product safety across Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const colors = colorClasses[solution.color as keyof typeof colorClasses];
            return (
              <div 
                key={index} 
                className={`p-8 rounded-xl border ${colors.border} ${colors.bg} hover:shadow-lg transition-all`}
              >
                <div className={`w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm`}>
                  <solution.icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                <h3 className="mb-3">
                  {solution.area}
                </h3>
                <p className="text-gray-700 mb-4">
                  {solution.description}
                </p>
                <div className={`pt-4 border-t ${colors.border}`}>
                  <p className={`${colors.text}`}>
                    <span className="opacity-75">Impact:</span> {solution.impact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-white mb-4">
            Ready to ensure your products meet the highest safety standards?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the movement to build trust and protect consumers across Africa.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            Get Certified Today
          </button>
        </div>
      </div>
    </section>
  );
}