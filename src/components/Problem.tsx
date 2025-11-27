import { AlertTriangle, Eye, Globe, FileX } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Problem() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Hidden Toxins",
      description:
        "Many foods and cosmetic products sold in African markets contain dangerous substances — from mercury and hydroquinone in skin creams to lead and bacteria in processed foods.",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: FileX,
      title: "Weak Oversight",
      description:
        "Few accessible, modern laboratories exist to test products or enforce safety standards.",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: Eye,
      title: "Consumer Blindness",
      description: "People trust packaging but not science.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Globe,
      title: "Global Double Standards",
      description:
        "Products banned elsewhere are often still sold across Africa.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full mb-6">
            The Challenge
          </div>
          <h2 className="mb-6">The Hidden Crisis in African Markets</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Many of the products sold in African markets contain harmful
            chemicals, bacteria, or unsafe ingredients that people don't even
            know are there.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div
                className={`w-14 h-14 ${problem.bgColor} rounded-lg flex items-center justify-center mb-6`}
              >
                <problem.icon className={`w-7 h-7 ${problem.color}`} />
              </div>
              <h3 className="mb-4">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1761828122942-e09382131eb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFya2V0JTIwcHJvZHVjdHN8ZW58MXx8fHwxNzY0MjA1OTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="African market products"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <p className="text-xl">
                Without proper testing and oversight, consumers remain
                vulnerable to products that could harm their health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
