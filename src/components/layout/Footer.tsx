import React from 'react';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-4">
        {/* Top Section: CTA */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-5xl font-bold">Let's Contact</h2>
          <button className="w-12 h-12 bg-world-green rounded-full flex items-center justify-center text-white">
            ↗
          </button>
        </div>

        {/* Bottom Section: Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">World of Support</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              Onboard your own talent pool to World of Support, invite them to projects, sign contracts and kick off the projects simpler than ever.
            </p>
            <div className="flex gap-3">
              {[FacebookIcon, InstagramIcon, TwitterIcon, PinterestIcon].map((Icon, i) => (
                <div key={i} className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center text-white cursor-pointer hover:bg-world-green transition-colors">
                  <Icon style={{ fontSize: 18 }} />
                </div>
              ))}
            </div>
          </div>

          {/* Menus */}
          {[
            { title: "Support", links: ["How it Work", "Features", "Pricing", "Download"] },
            { title: "Useful Links", links: ["About", "Services", "Blog", "Contact"] },
            { title: "Support", links: ["FAQs", "Term & Conditions", "Privacy policy", "Help Center"] }
          ].map((section, idx) => (
            <div key={idx}>
              <h4 className="font-bold mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-600 hover:text-world-green text-sm transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}