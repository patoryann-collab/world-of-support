'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const team = [
  { name: "Robert Henry", role: "Tax Attorney", bio: "Expert en fiscalité internationale...", image: "/Ibrice.png" },
  { name: "Sarah Taylor", role: "Senior Tax Attorney", bio: "Spécialisée dans les litiges fiscaux...", image: "/person.jpg" },
  { name: "Trent Blake", role: "Tax Analysis", bio: "Analyste passionné par l'optimisation...", image: "/trent.jpg" },
  { name: "Jos Butler", role: "Research Specialist", bio: "Chercheur spécialisé dans les politiques...", image: "/jos.jpg" }
];

export default function ManagementTeam() {
  const [index, setIndex] = useState(0);

  // Transition automatique toutes les 5 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % team.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#f8fcfb] py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Contenu principal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16 min-h-[400px]">
          <button onClick={() => setIndex((prev) => (prev === 0 ? team.length - 1 : prev - 1))}>←</button>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col md:flex-row items-center gap-12 w-full"
            >
              {/* Image grand format */}
              <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image src={team[index].image} alt={team[index].name} fill className="object-cover" />
              </div>
              
              {/* Texte */}
              <div className="text-left max-w-lg">
                <h2 className="text-5xl font-bold mb-4">{team[index].name}</h2>
                <p className="text-xl text-[#064e3b] mb-6">{team[index].role}</p>
                <p className="text-gray-600 leading-relaxed">{team[index].bio}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button onClick={() => setIndex((prev) => (prev + 1) % team.length)}>→</button>
        </div>

        {/* Barre d'avatars */}
        <div className="flex justify-center gap-6 border-t pt-8">
          {team.map((member, i) => (
            <button key={i} onClick={() => setIndex(i)} className={`transition-all ${index === i ? 'scale-110' : 'opacity-40'}`}>
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#f59e0b]">
                <Image src={member.image} alt={member.name} width={64} height={64} className="object-cover" />
              </div>
              <p className="text-[10px] mt-2 font-bold uppercase">{member.name.split(' ')[0]}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}