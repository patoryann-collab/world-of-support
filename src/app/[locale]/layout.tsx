import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '../../context/LanguageContext';
import NavbarWrapper from '../../components/layout/NavbarWrapper';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ClerkProvider } from '@clerk/nextjs';
import { frFR, enUS } from '@clerk/localizations';
import { Toaster } from 'sonner'; // 1. Importez le composant

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  
  if (!locale) {
    notFound();
  }

  const messages = await getMessages({ locale });
  const clerkLocalization = locale === 'fr' ? frFR : enUS;

  return (
    <ClerkProvider localization={clerkLocalization}>
      <html lang={locale} className={inter.className}>
        <body>
          <NextIntlClientProvider messages={messages}>
            <LanguageProvider>
              <NavbarWrapper />
              <Toaster richColors position="top-right" /> {/* 2. Ajoutez le composant ici */}
              {children}
            </LanguageProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}