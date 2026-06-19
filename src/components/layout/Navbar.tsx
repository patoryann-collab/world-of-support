'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '../../i18n/routing';
import { Link as IntlLink } from '../../i18n/routing';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);
  
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    // 1. On ne manipule plus de chaînes de caractères (replace)
    // 2. On passe le pathname "brut" (ex: /about/mission)
    // 3. next-intl va automatiquement gérer le préfixe
    router.replace(pathname, { locale: newLocale });
    setIsLangModalOpen(false);
  };

  const navLinks = [
    { title: t('home'), href: "/" },
    { 
      title: t('about.title'), 
      subItems: [
        { name: t('about.mission'), href: "/about" },
        { name: t('about.partners'), href: "/about/partners" }
      ] 
    },
    { 
      title: t('services.title'), 
      subItems: [
        { name: t('services.jobs'), href: "/services/jobs" },
        { name: t('services.training'), href: "/services/training" },
        { name: t('services.fellowships'), href: "/services/fellowships" },
        { name: t('services.employers'), href: "/services/employers" },
        { name: t('services.volunteering'), href: "/services/volunteering" }
      ] 
    },
    { title: t('news'), href: "/news" },
    { title: t('contact'), href: "/contact" }
  ];

  const languages = [
    { name: 'English', code: 'en' },
    { name: 'Français', code: 'fr' }
  ];

  return (
    <>
      <header className="w-full py-4 border-b border-gray-100 bg-white fixed top-0 left-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/world-of-support-logo.png" alt="World of Support Logo" width={150} height={40} className="h-8 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-world-green font-medium text-sm">
            {navLinks.map((link) => (
              link.subItems ? (
                <div key={link.title} className="group relative">
                  <button className="hover:text-world-red transition-colors flex items-center gap-1">
                    {link.title} <span className="text-[10px]">▼</span>
                  </button>
                  <div className="absolute top-full left-0 w-60 bg-white border shadow-xl rounded-lg py-2 hidden group-hover:block z-50">
                    {link.subItems.map((sub) => (
                      <Link key={sub.name} href={sub.href} className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-700">{sub.name}</Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={link.title} href={link.href} className="hover:text-world-red transition-colors">{link.title}</Link>
              )
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsLangModalOpen(true)}
              className="text-sm font-medium text-world-green hover:text-world-red transition-colors"
            >
              {t('current_lang')}
            </button>
            <Link href="/login" className="font-medium text-world-green text-sm hover:text-world-red">{t('login')}</Link>
            <IntlLink href="/signup" className="bg-world-green text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-green-800 transition-colors">{t('signup')}</IntlLink>
            
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              <div className="w-6 h-0.5 bg-world-green mb-1.5" />
              <div className="w-6 h-0.5 bg-world-green mb-1.5" />
              <div className="w-6 h-0.5 bg-world-green" />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b p-6 flex flex-col gap-4 shadow-xl z-40">
            {navLinks.map((link) => (
              <div key={link.title}>
                <p className="font-bold text-world-green">{link.title}</p>
                {link.subItems?.map((sub) => (
                  <Link key={sub.name} href={sub.href} className="block py-1 pl-4 text-sm text-gray-600">{sub.name}</Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </header>

      {isLangModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden relative">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800">{t('select_language')}</h2>
              <button onClick={() => setIsLangModalOpen(false)} className="text-gray-500 hover:text-black text-2xl">✕</button>
            </div>
            <div className="px-6 py-4">
              <div className="border-b border-gray-200 mb-4">
                <span className="text-world-green font-medium border-b-2 border-world-green pb-3 inline-block">Language</span>
              </div>
              <ul className="space-y-4">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <IntlLink 
                      href={pathname} // L'URL "nue" sans préfixe (ex: /about/mission)
                      locale={lang.code} // next-intl injecte proprement le préfixe
                      className="block p-2 hover:text-world-green"
                      onClick={() => setIsLangModalOpen(false)}
                    >
                      {lang.name}
                    </IntlLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}