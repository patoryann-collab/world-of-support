'use client'; // Indispensable pour gérer les états (useState)

import { useState } from 'react';
import Link from 'next/link';
import Search from '@mui/icons-material/Search';

export default function Hero() {
  const [activeRole, setActiveRole] = useState<'hire' | 'work'>('hire');
  const categories = ["Web design", "AI development", "Video editing", "Google Ads"];

  const handleSearch = () => {
    console.log("Recherche lancée pour :", activeRole);
  };

  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center md:justify-start rounded-none md:rounded-3xl overflow-hidden mx-auto container mt-0 md:mt-4">
      {/* Vidéo d'arrière-plan */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source 
          src="https://media.istockphoto.com/id/1940499002/video/two-business-people-arrive-at-work-desk-and-assisting-colleagues-at-startup-office.mp4?s=mp4-640x640-is&k=20&c=PixyulpZ3SDixfbPR9UuTE5K6h0QUQULSie6M-KupIo=" 
          type="video/mp4" 
        />
        Votre navigateur ne supporte pas la lecture de vidéo.
      </video>
      
      {/* Dégradé linéaire pour la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-transparent" />

      {/* Contenu */}
      <div className="relative z-10 px-6 md:px-12 text-white w-full max-w-xl md:max-w-3xl flex flex-col items-center md:items-start text-center md:text-left pt-20 md:pt-0">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 md:mb-6 drop-shadow-md">
          Work at the speed of your ambition
        </h1>
        <p className="text-base md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl">
          Hire experts who use AI to amplify their talent, turning complex work into high impact business outcomes
        </p>

        {/* Conteneur principal : Flex vertical sur mobile, horizontal sur desktop */}
        <div className="flex flex-col gap-6 mb-6 md:mb-8 w-full max-w-2xl items-center md:items-start">
          
          {/* 1. Toggle Buttons : Bien isolés */}
          <div className="flex bg-white/10 p-1 rounded-full w-fit border border-white/20 self-center md:self-start">
            <button 
              onClick={() => setActiveRole('hire')}
              className={`${activeRole === 'hire' ? 'bg-white text-black' : 'text-white'} px-8 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base`}
            >
              I want to hire
            </button>
            <button 
              onClick={() => setActiveRole('work')}
              className={`${activeRole === 'work' ? 'bg-white text-black' : 'text-white'} px-8 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base`}
            >
              I want to work
            </button>
          </div>

          {/* 2. Search Bar : Prend toute la largeur disponible */}
          <div className="bg-white p-2 rounded-full flex items-center justify-between shadow-lg w-full">
            <input 
              type="text" 
              placeholder="Describe what you need..." 
              className="px-4 py-2 text-black outline-none w-full bg-transparent text-sm sm:text-base"
            />
            <button 
              onClick={handleSearch}
              className="bg-world-green text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-green-800 transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              <Search /> Search
            </button>
          </div>
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
          {categories.map((cat) => (
            <Link 
              key={cat} 
              href="/" 
              className="border border-white/30 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm hover:bg-white/20 transition duration-300 whitespace-nowrap"
            >
              {cat} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}