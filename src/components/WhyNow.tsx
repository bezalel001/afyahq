import { TrendingUp, Users, Building2, Globe } from "lucide-react";

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

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full mb-6">
            Perfect Timing
          </div>
          <h2 className="mb-6">
            Why Now?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AfyaHQ is the right idea at the right time — bridging science, technology, and culture 
            to protect lives and elevate Africa's products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7 text-green-600" />
              </div>
              <div className="mb-4">
                <span className="text-2xl text-green-600">{reason.stat}</span>
              </div>
              <h3 className="mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="mb-6">
              The Time for Action is Now
            </h3>
            <p className="text-xl text-gray-700 mb-8">
              Every day we wait, more unsafe products enter African markets. Every day we act, 
              more lives are protected and more trust is built. AfyaHQ isn't just responding to 
              a crisis — we're building the foundation for Africa's health future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-lg transition-all shadow-lg hover:shadow-xl">
                Join the Movement
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-300 hover:border-blue-500 text-gray-900 rounded-lg transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
