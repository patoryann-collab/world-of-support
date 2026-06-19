// src/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'fr',
  localePrefix: 'always'
});

// C'est ici que tu crées les hooks que tu vas importer dans ta Navbar
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);