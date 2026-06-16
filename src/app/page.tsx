// src/app/page.tsx

import Hero from '@/components/home/Hero'; // Importez votre nouveau composant
import TrustBar from '@/components/home/TrustBar';
import HowItWorks from '@/components/home/HowItWorks';
import Categories from '../components/home/Categories';

const mockPageData = [
  {
    id: '1',
    component_type: 'hero_banner', // Assurez-vous que votre ComponentMapper gère ce type
    content: {
      // Mettez à jour les données si nécessaire
    }
  }
];

export default function Home() {
  return (
    <main>
      {/* Soit vous utilisez votre mapper */}
      <div className="h-15 md:h-15" />
      
      {/* Soit vous ajoutez le composant Hero directement en attendant la mise à jour du Mapper */}
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Categories />
    </main>
  );
}