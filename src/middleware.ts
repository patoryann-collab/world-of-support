// src/middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing'; // Assurez-vous que ce chemin est correct selon votre structure

// 1. Initialiser le middleware d'internationalisation
const handleI18nRouting = createMiddleware(routing);

// 2. Définir les routes publiques (non protégées)
const isPublicRoute = createRouteMatcher([
  '/', 
  '/:locale',
  '/:locale/about',
  '/:locale/signup(.*)', 
  '/:locale/login(.*)'
]);

// 3. Exporter le middleware combiné
export default clerkMiddleware(async (auth, req) => {
  // Si la route n'est pas publique, on protège l'accès via Clerk
  if (!isPublicRoute(req)) {
    await auth.protect();
  }

  // Gérer l'internationalisation après la vérification Clerk
  return handleI18nRouting(req);
});

export const config = {
  // Matcher optimisé :
  // - Exclut les fichiers statiques (images, css, etc.)
  // - Inclut les routes Next.js, l'API et les locales
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|jfif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
    '/',
    '/(fr|en)/:path*'
  ],
};