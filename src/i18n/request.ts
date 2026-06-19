// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing'; // Assure-toi d'avoir ce fichier ou liste tes locales manuellement

export default getRequestConfig(async ({ requestLocale }) => {
  // 1. On attend la résolution de la locale
  let locale = await requestLocale;

  // 2. Fallback de sécurité (si aucune locale n'est détectée)
  if (!locale || !['en', 'fr'].includes(locale)) {
    locale = 'fr';
  }

  return {
    locale, // C'EST CETTE LIGNE QUI MANQUAIT
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});