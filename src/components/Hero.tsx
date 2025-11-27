import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758573466927-87ba2f725c7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHNjaWVudGlzdCUyMHJlc2VhcmNofGVufDF8fHx8MTc2NDIwNjMyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="African laboratory scientist"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-blue-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full mb-6">
            <span className="text-green-300">Africa's Health Intelligence Hub</span>
          </div>
          
          <h1 className="text-white mb-6">
            AfyaHQ Labs
          </h1>
          
          <p className="text-xl sm:text-2xl text-blue-100 mb-8">
            Africa's Headquarters for Health, Safety, and Trust.
          </p>
          
          <p className="text-lg text-blue-200 mb-10 max-w-2xl">
            Comprehensive testing, certification, data insights, and digital tools to ensure product 
            safety and build trust between African consumers and ethical brands.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-lg transition-colors">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="opacity-90">Advanced Testing & Certification</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="opacity-90">AI-Powered Analysis</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="opacity-90">Transparent Data Insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}