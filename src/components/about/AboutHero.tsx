import React from 'react';
import Image from 'next/image';

const stats = [
  { value: "35", label: "Professional Websites" },
  { value: "9", label: "Portfolio Websites" },
  { value: "3", label: "Foods Websites" },
  { value: "45", label: "Business Websites" },
];

export default function AboutHero() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            
            <h2 className="text-4xl font-bold text-gray-900 border-b-4 border-yellow-400 w-fit pb-2">
              About Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
                World Of SUPPORT is an international nonprofit organization driven by a global network of dedicated volunteers. 
                We are a platform connecting jobseekers to employers. Our mission is threefold: to mitigate unemployment and 
                underemployment by facilitating access to the labor market; to deliver strategic humanitarian assistance 
                and professional tools tailored to the needs of job seekers and apprentices.
            </p>
            <button className="bg-teal-900 text-white px-6 py-3 rounded hover:bg-teal-800 transition-colors flex items-center gap-2">
              Read More <span>→</span>
            </button>
          </div>
          
          <div className="relative h-[400px] w-full">
            {/* Remplacez par votre image réelle */}
            <div className="bg-gray-200 w-full h-full rounded-lg" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-4xl font-bold text-yellow-500 mb-2">{stat.value}</h3>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}