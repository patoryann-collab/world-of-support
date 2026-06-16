'use client';
import { useState } from 'react';
import Link from 'next/link';

const jobsData = [
  { id: 1, title: "Purchasing Staff", company: "Citi", category: "Admin Officer", salary: "$800/hr", tags: ["Figma", "Adobe"] },
  { id: 2, title: "UI/UX Designer", company: "Huawei", category: "Designer", salary: "$800/hr", tags: ["Figma", "Adobe"] },
  // Ajoutez vos autres données ici...
];

const categories = ["Designer", "Admin Officer", "Finance Staff", "Content Writer", "Technology", "Software", "Education"];

export default function JobMarketplace() {
  const [activeCategory, setActiveCategory] = useState("Admin Officer");

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="uppercase text-xs font-bold text-world-green tracking-widest bg-green-100 px-3 py-1 rounded-full">Marketplace</span>
          <h2 className="text-4xl font-bold mt-4 mb-8">Check Job of The Day</h2>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm border transition-all ${
                activeCategory === cat 
                ? "bg-white border-world-green text-world-green shadow-sm" 
                : "bg-transparent border-gray-200 text-gray-600 hover:border-world-green"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grille d'emplois */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobsData.filter(job => job.category === activeCategory).map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="font-bold text-lg mb-1">{job.company}</div>
              <h3 className="font-semibold text-gray-900 mb-4">{job.title}</h3>
              <div className="flex gap-2 mb-6">
                {job.tags.map(tag => (
                  <span key={tag} className="text-[10px] bg-gray-100 px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-world-green font-bold">{job.salary}</span>
                <Link href={`/jobs/${job.id}`} className="bg-green-50 text-world-green px-4 py-2 rounded-lg text-sm hover:bg-world-green hover:text-white transition-colors">
                  Apply
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Explore More */}
        <div className="text-center mt-12">
          <Link href="/services/jobs" className="bg-world-green text-white px-8 py-3 rounded-full font-medium hover:bg-green-800 transition-colors">
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
}