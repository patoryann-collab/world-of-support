// src/components/sections/HeroSection.tsx

interface HeroSectionProps {
  title: string;
  buttonText: string;
  imageUrl: string;
}

export default function HeroSection({ title, buttonText, imageUrl }: HeroSectionProps) {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-start px-12 md:px-24">
      {/* Image de fond avec object-cover pour ne pas déformer */}
      <img 
        src={imageUrl} 
        alt="Hero Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Conteneur du texte et bouton */}
      <div className="relative z-10 flex flex-col items-start gap-6 max-w-xl">
        <h1 className="text-5xl md:text-7xl font-black text-[#d6195c] leading-tight drop-shadow-sm">
          {title}
        </h1>
        
        <button className="bg-[#d6195c] text-white px-10 py-4 rounded-full font-bold text-lg 
                           hover:bg-[#b0144a] transition-all duration-300 shadow-lg transform hover:scale-105">
          {buttonText}
        </button>
      </div>
    </section>
  );
}