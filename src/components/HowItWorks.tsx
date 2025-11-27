import { Package, FlaskRound, Brain, FileCheck, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HowItWorks() {
  const steps = [
    {
      icon: Package,
      number: "01",
      title: "Collect Samples",
      description: "From markets, manufacturers, or consumers."
    },
    {
      icon: FlaskRound,
      number: "02",
      title: "Run Tests",
      description: "Use modern biochemistry, toxicology, and microbiology methods."
    },
    {
      icon: Brain,
      number: "03",
      title: "Analyse with AI",
      description: "Detect patterns, banned ingredients, and recurring risks."
    },
    {
      icon: FileCheck,
      number: "04",
      title: "Publish Results",
      description: "Through AfyaHQ's public reports and dashboards."
    },
    {
      icon: Award,
      number: "05",
      title: "Certify Safe Products",
      description: "Award the Afya Seal for brands that meet safety criteria."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div>
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full mb-6">
              Our Process
            </div>
            <h2 className="mb-6">
              How AfyaHQ Works
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              A systematic, science-driven approach to product safety
            </p>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-blue-600">{step.number}</span>
                      <h3>{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1599557835468-29bb0b3155cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwdGVzdGluZyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjQxNzMwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Laboratory testing equipment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-green-500 text-white p-8 rounded-xl shadow-2xl max-w-sm">
              <p className="mb-2">Afya Seal Certification</p>
              <p className="text-green-100">
                Products that pass our rigorous testing receive the trusted Afya Seal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
