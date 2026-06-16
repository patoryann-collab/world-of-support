import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Barbara Ravindran",
    role: "Digital Marketer",
    title: "Excellent Job Marketplace",
    text: "Companies outside the their also use Data Fanatics' services. We are now already active in the following countries?",
    image: "/avatar1.jpg"
  },
  {
    name: "Ibrice",
    role: "Digital Marketer",
    title: "A Journey of Growth",
    text: "Companies outside the their also use Data Fanatics' services. We are now already active in the following countries?",
    image: "/avatar2.jpg"
  },
  {
    name: "Barbara Ravindran",
    role: "Digital Marketer",
    title: "Excellent Job Service",
    text: "Companies outside the their also use Data Fanatics' services. We are now already active in the following countries?",
    image: "/avatar3.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">What Our Customers Are Saying About Us</h2>
        <p className="text-gray-600 mb-16 max-w-xl mx-auto">
          Our comprehensive range of services is designed to address the diverse needs of our clients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left relative">
              <h3 className="font-bold text-lg mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-8">{item.text}</p>
              
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                   {/* Remplacez par vos images réelles */}
                   <div className="bg-gray-200 w-full h-full" /> 
                </div>
                <div>
                  <h4 className="font-bold text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-4 mt-12">
          <button className="w-10 h-10 rounded-full bg-world-green text-white flex items-center justify-center hover:opacity-90">←</button>
          <button className="w-10 h-10 rounded-full bg-world-red text-white flex items-center justify-center hover:opacity-90">→</button>
        </div>
      </div>
    </section>
  );
}