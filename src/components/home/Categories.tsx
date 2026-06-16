'use client';

import React from 'react';
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import ShareIcon from '@mui/icons-material/Share';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DnsIcon from '@mui/icons-material/Dns';

export default function Categories() {
  const categories = [
    { title: "Retail & Product", count: "2 jobs available", slug: "retail-product", icon: <ShoppingCartIcon /> },
    { title: "UI/UX Design", count: "8 jobs available", slug: "ui-ux-design", icon: <DesignServicesIcon /> },
    { title: "Finance", count: "5 jobs available", slug: "finance", icon: <AccountBalanceIcon /> },
    { title: "HRD", count: "4 jobs available", slug: "hrd", icon: <PersonSearchIcon /> },
    { title: "Admin Officer", count: "2 jobs available", slug: "admin-officer", icon: <AdminPanelSettingsIcon /> },
    { title: "Education", count: "8 jobs available", slug: "education", icon: <SchoolIcon /> },
    { title: "Technology", count: "5 jobs available", slug: "technology", icon: <CodeIcon /> },
    { title: "Social Media", count: "7 jobs available", slug: "social-media", icon: <ShareIcon /> },
    { title: "Content Writer", count: "8 jobs available", slug: "content-writer", icon: <EditNoteIcon /> },
    { title: "Software", count: "8 jobs available", slug: "software", icon: <DnsIcon /> },
  ];

  return (
    <section className="py-5 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="uppercase text-xs font-bold text-world-green tracking-widest bg-green-100 px-3 py-1 rounded-full">
            Categories
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-2">Browse by categories</h2>
          <p className="text-gray-600">The digital marketing solution provider for Ford Dealers</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, index) => (
            <Link 
              key={index} 
              href={`/services/jobs?category=${cat.slug}`}
              className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-world-green transition-all duration-300 flex items-center gap-3 cursor-pointer group"
            >
              <div className="text-world-green group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-900">{cat.title}</h3>
                <p className="text-[11px] text-world-green font-medium">{cat.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}