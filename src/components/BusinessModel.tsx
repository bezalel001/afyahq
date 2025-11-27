import { DollarSign, Award, Database, Megaphone, Users } from "lucide-react";

export function BusinessModel() {
  const streams = [
    {
      icon: DollarSign,
      title: "Testing Fees",
      description: "Paid by manufacturers, importers, or distributors for lab analysis.",
      color: "blue"
    },
    {
      icon: Award,
      title: "Certification Licenses",
      description: "Annual Afya Seal subscription for compliant brands.",
      color: "green"
    },
    {
      icon: Database,
      title: "Data Partnerships",
      description: "Governments, NGOs, and insurers pay for research insights.",
      color: "purple"
    },
    {
      icon: Megaphone,
      title: "Public Reports & Campaigns",
      description: "Sponsored safety awareness campaigns.",
      color: "orange"
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Reformulation and compliance advisory for local manufacturers.",
      color: "cyan"
    }
  ];

  const colorClasses = {
    blue: { bg: "bg-blue-50", icon: "text-blue-600", border: "border-blue-200" },
    green: { bg: "bg-green-50", icon: "text-green-600", border: "border-green-200" },
    purple: { bg: "bg-purple-50", icon: "text-purple-600", border: "border-purple-200" },
    orange: { bg: "bg-orange-50", icon: "text-orange-600", border: "border-orange-200" },
    cyan: { bg: "bg-cyan-50", icon: "text-cyan-600", border: "border-cyan-200" }
  };

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
            Sustainable Growth
          </div>
          <h2 className="mb-6">
            Our Business Model
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple revenue streams ensure sustainability while maintaining our mission to protect 
            African consumers and support ethical brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {streams.map((stream, index) => {
            const colors = colorClasses[stream.color as keyof typeof colorClasses];
            return (
              <div 
                key={index} 
                className={`p-6 rounded-xl border ${colors.border} ${colors.bg} hover:shadow-lg transition-all`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <stream.icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <div>
                    <h3 className="mb-2">
                      {stream.title}
                    </h3>
                    <p className="text-gray-700">
                      {stream.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="p-6 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500 mb-2">More revenue streams</p>
              <p className="text-gray-700">As we scale across Africa</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white mb-4">
                Interested in partnering with AfyaHQ?
              </h3>
              <p className="text-blue-100 mb-6">
                Whether you're a manufacturer, government agency, NGO, or investor, 
                we'd love to explore how we can work together to elevate Africa's health standards.
              </p>
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Get in Touch
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <p className="text-3xl mb-2">50+</p>
                <p className="text-blue-100">Products Tested</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <p className="text-3xl mb-2">15+</p>
                <p className="text-blue-100">Partner Brands</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <p className="text-3xl mb-2">5</p>
                <p className="text-blue-100">Countries</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <p className="text-3xl mb-2">100%</p>
                <p className="text-blue-100">Transparency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
