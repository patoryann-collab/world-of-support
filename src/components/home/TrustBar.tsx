// components/home/TrustBar.tsx
import Image from 'next/image';

export default function TrustBar() {
  // Liste des logos (pensez à ajouter vos fichiers dans public/logos/)
  const partners = [
    { name: 'Airbnb', src: '/canada.png' },
    { name: 'Databricks', src: '/alberta.png' },
    { name: 'Cloudflare', src: '/cameroun.png' },
    { name: 'Scale', src: '/ledcor.png' },
    { name: 'Microsoft', src: '/huawei.png' },
    { name: 'Grammarly', src: '/logos/grammarly.png' },
  ];

  return (
    <section className="py-12 border-b border-gray-100 bg-white">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500 text-sm font-semibold mb-8 uppercase tracking-wider">
          Trusted by 800,000 clients
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:opacity-100 transition-opacity duration-500">
          {partners.map((partner) => (
            <div key={partner.name} className="h-8 w-auto relative">
              {/* Utilisation de l'image avec un conteneur pour le responsive */}
              <Image 
                src={partner.src} 
                alt={partner.name}
                width={120}
                height={40}
                className="object-contain h-full w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}