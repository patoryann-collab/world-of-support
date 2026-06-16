import './globals.css';
import { Inter } from 'next/font/google'; // Importation optimisée de la police
import { LanguageProvider } from '../context/LanguageContext';
import NavbarWrapper from '../components/layout/NavbarWrapper';

// Configuration de la police Inter
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Améliore le rendu lors du chargement
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.className}>
      <body>
        <LanguageProvider>
          <NavbarWrapper />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}