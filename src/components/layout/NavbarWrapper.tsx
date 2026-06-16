// src/components/layout/NavbarWrapper.tsx
'use client';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

// L'import dynamique permet d'isoler le composant serveur de l'environnement client
const Navbar = dynamic(() => import('./Navbar'), { ssr: true });

export default function NavbarWrapper() {
  const pathname = usePathname();

  // Masquage propre sur le dashboard Admin
  if (pathname.startsWith('/admin')) {
    return null;
  }

  return <Navbar />;
}