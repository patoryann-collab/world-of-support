import React from 'react';
import WorkIcon from '@mui/icons-material/Work';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import HubIcon from '@mui/icons-material/Hub';

export default function MissionSection() {
  const missions = [
    {
      title: "Faciliter l'accès au marché du travail",
      desc: "Atténuer le chômage et le sous-emploi en connectant directement les chercheurs d'emploi aux opportunités pertinentes.",
      icon: <WorkIcon className="text-2xl" />
    },
    {
      title: "Support humanitaire et outils pro",
      desc: "Fournir une assistance stratégique et des outils professionnels adaptés aux besoins des chercheurs d'emploi et apprentis.",
      icon: <VolunteerActivismIcon className="text-2xl" />
    },
    {
      title: "Hub d'information central",
      desc: "Diffuser une intelligence critique sur l'emploi et l'entrepreneuriat au public, aux médias et aux décideurs politiques.",
      icon: <HubIcon className="text-2xl" />
    }
  ];

  return (
    <section className="flex flex-col md:flex-row min-h-[500px]">
      {/* Côté Sombre (Vert profond) */}
      <div className="bg-[#064e3b] text-white p-12 md:w-1/3 flex flex-col justify-center">
        <span className="text-green-200 uppercase tracking-widest text-sm mb-2">Notre Mission</span>
        <h2 className="text-4xl font-bold mb-6">World Of <span className="text-[#f59e0b]">SUPPORT</span></h2>
        <p className="text-green-50 text-sm leading-relaxed mb-6">
          Une organisation internationale portée par un réseau mondial de bénévoles dévoués, 
          priorisant l'avancement local par l'autonomisation de la jeunesse.
        </p>
      </div>

      {/* Côté Clair avec accent vert/jaune */}
      <div className="bg-[#f0fdf4] p-12 md:w-2/3 flex flex-col justify-center gap-6">
        {missions.map((m, i) => (
          <div key={i} className={`flex items-center gap-6 p-6 rounded-lg transition-all border ${i === 1 ? 'bg-[#f59e0b] text-white shadow-xl' : 'bg-white border-green-100'}`}>
            <div className={`p-3 rounded-full ${i === 1 ? 'bg-white text-[#064e3b]' : 'bg-green-100 text-[#064e3b]'}`}>
              {m.icon}
            </div>
            <div>
              <h3 className="font-bold text-lg">{m.title}</h3>
              <p className={`text-sm ${i === 1 ? 'text-green-50' : 'text-gray-600'}`}>{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}