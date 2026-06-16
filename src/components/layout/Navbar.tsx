'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);

  const navLinks = [
    { title: "Accueil", href: "/" },
    { 
      title: "À propos", 
      subItems: [
        { name: "Mission & Vision", href: "/about/mission" },
        { name: "Partenaires", href: "/about/partners" }
      ] 
    },
    { 
      title: "Programmes & Services", 
      subItems: [
        { name: "Opportunités d'emploi", href: "/services/jobs" },
        { name: "Formations", href: "/services/training" },
        { name: "Fellowships & Bourses", href: "/services/fellowships" },
        { name: "Ressources employeurs", href: "/services/employers" },
        { name: "Bénévolat", href: "/services/volunteering" }
      ] 
    },
    { title: "Actualités", href: "/news" },
    { title: "Contact", href: "/contact" }
  ];

  return (
    <>
      {/* Barre de navigation fixe */}
      <header className="w-full py-4 border-b border-gray-100 bg-white fixed top-0 left-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          
          <Link href="/">
            <Image src="/world-of-support-logo.png" alt="World of Support Logo" width={150} height={40} className="h-8 w-auto" />
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-6 text-world-green font-medium text-sm">
            {navLinks.map((link) => (
              link.subItems ? (
                <div key={link.title} className="group relative">
                  <button className="hover:text-world-red transition-colors flex items-center gap-1">
                    {link.title} <span className="text-[10px]">▼</span>
                  </button>
                  <div className="absolute top-full left-0 w-60 bg-white border shadow-xl rounded-lg py-2 hidden group-hover:block z-50">
                    {link.subItems.map((sub) => (
                      <Link key={sub.name} href={sub.href} className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700">{sub.name}</Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={link.title} href={link.href} className="hover:text-world-red transition-colors">{link.title}</Link>
              )
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsLangModalOpen(true)}
              className="text-sm font-medium text-world-green hover:text-world-red transition-colors"
            >
              FR
            </button>
            
            <Link href="/login" className="font-medium text-world-green text-sm hover:text-world-red">Connexion</Link>
            <Link href="/signup" className="bg-world-green text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-green-800 transition-colors">Inscription</Link>
            
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              <div className="w-6 h-0.5 bg-world-green mb-1.5" />
              <div className="w-6 h-0.5 bg-world-green mb-1.5" />
              <div className="w-6 h-0.5 bg-world-green" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b p-6 flex flex-col gap-4 shadow-xl z-40">
            {navLinks.map((link) => (
              <div key={link.title}>
                <p className="font-bold text-world-green">{link.title}</p>
                {link.subItems?.map((sub) => (
                  <Link key={sub.name} href={sub.href} className="block py-1 pl-4 text-sm text-gray-600">{sub.name}</Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Modal Langue */}
      {isLangModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-sm p-6 relative">
            <button 
              onClick={() => setIsLangModalOpen(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-6">Select your language</h2>
            <ul className="space-y-4 text-gray-700">
              {['English', 'Deutsch', 'Español', 'Français', 'Português', 'Italiano'].map((lang) => (
                <li key={lang} className="cursor-pointer hover:text-world-green font-medium py-1">
                  {lang}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}