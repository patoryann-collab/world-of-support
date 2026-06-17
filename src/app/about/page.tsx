// src/app/about/page.tsx
import AboutHero from '@/components/about/AboutHero';
import MissionSection from '@/components/about/MissionSection';
import ManagementTeam from '@/components/about/ManagementTeam';
export default function AboutPage() {
  return (
    <main>
      <AboutHero />        {/* Section 1: Vision et KPIs */}
      <MissionSection />  {/* Section 2: Missions */}
      <ManagementTeam />   {/* Section 3: Équipe dirigeante */}
    </main>
  );
}