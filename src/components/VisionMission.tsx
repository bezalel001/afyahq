import { Target, Compass, Flag } from "lucide-react";

export function VisionMission() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
            Our Direction
          </div>
          <h2 className="mb-6">
            Vision, Mission & Goal
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="mb-4">
              Vision
            </h3>
            <p className="text-gray-700">
              A future where every African has the right to safe, trusted, and verified products — 
              from the food on their plate to the cream on their skin.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-green-100 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-green-50 rounded-lg flex items-center justify-center mb-6">
              <Compass className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="mb-4">
              Mission
            </h3>
            <p className="text-gray-700">
              To make Africa the global standard for consumer health safety through science, 
              technology, and transparency.
            </p>
          </div>

          {/* Goal */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-purple-100 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-purple-50 rounded-lg flex items-center justify-center mb-6">
              <Flag className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="mb-4">
              Goal
            </h3>
            <p className="text-gray-700">
              To protect lives, build trust, and make health and safety a normal part of life 
              in every African home.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white px-8 py-4 rounded-full shadow-sm border border-gray-200">
            <p className="text-gray-900">
              Building Africa's future, one tested product at a time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
