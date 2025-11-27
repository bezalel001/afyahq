import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Shield, TrendingUp } from "lucide-react";

export function BrandStory() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full mb-6">
              Our Story
            </div>
            
            <h2 className="mb-6">
              Built to Change Africa's Health Reality
            </h2>
            
            <p className="text-gray-700 mb-6">
              Every day, millions of Africans use products — food, hair creams, lotions, and cosmetics — 
              without knowing what's inside them. Some are pure, but many are unsafe: laced with toxic 
              chemicals, bacteria, or ingredients banned elsewhere.
            </p>
            
            <p className="text-gray-700 mb-8">
              AfyaHQ was born to change that. We are building Africa's headquarters for health intelligence, 
              where science, technology, and truth work together to ensure that everything Africans eat, wear, 
              and use is safe.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl mb-8 border border-blue-100">
              <p className="text-lg text-gray-900">
                Through advanced testing, transparent data, and digital tools, AfyaHQ is creating a new 
                culture of health accountability, empowering consumers to make safer choices and helping 
                brands meet the highest standards of safety and trust.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                <Shield className="w-8 h-8 text-blue-600 mb-3" />
                <p className="text-gray-900">Protect Lives</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                <Heart className="w-8 h-8 text-green-600 mb-3" />
                <p className="text-gray-900">Build Trust</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
                <p className="text-gray-900">Elevate Standards</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1658092967527-4e140d9bdaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBza2luY2FyZXxlbnwxfHx8fDE3NjQyMDU5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="African woman with skincare"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-green-500 text-white p-6 rounded-xl shadow-xl max-w-xs">
              <p>
                "Science for a Safer Africa"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
