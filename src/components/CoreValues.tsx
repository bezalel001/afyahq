import { Shield, FlaskConical, Eye, Users, Globe2 } from "lucide-react";

export function CoreValues() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Truth in every test, honesty in every result.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: FlaskConical,
      title: "Science",
      description: "Evidence over assumption; facts over fear.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Data that the public can see and trust.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Empowerment",
      description: "Educating consumers and uplifting ethical brands.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Globe2,
      title: "Pan-Africanism",
      description: "A united approach to wellness across the continent.",
      gradient: "from-cyan-500 to-cyan-600"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-6">
            What Drives Us
          </div>
          <h2 className="mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do at AfyaHQ Labs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-6 rounded-xl border border-gray-200 hover:border-transparent hover:shadow-xl transition-all"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 rounded-xl transition-opacity`}></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gray-100 group-hover:bg-white/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
                  <value.icon className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="mb-3 text-gray-900 group-hover:text-white transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-xl border border-gray-200">
          <p className="text-center text-lg text-gray-700 max-w-4xl mx-auto">
            These values aren't just words on a page — they're the foundation of every test we run, 
            every certification we award, and every decision we make. They guide us in our mission 
            to protect lives and build trust across Africa.
          </p>
        </div>
      </div>
    </section>
  );
}
