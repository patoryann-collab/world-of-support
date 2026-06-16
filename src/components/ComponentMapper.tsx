// src/components/ComponentMapper.tsx
import HeroSection from './sections/HeroSection';

const COMPONENT_MAP: any = {
  hero_banner: HeroSection,
};

export default function ComponentMapper({ type, data }: { type: string, data: any }) {
  const Component = COMPONENT_MAP[type];
  return Component ? <Component {...data} /> : null;
}