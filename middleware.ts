// src/middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

// 1. Initialiser le middleware d'internationalisation
const handleI18nRouting = createMiddleware(routing);

// 2. Définir les routes publiques
const isPublicRoute = createRouteMatcher([
  '/', 
  '/:locale/signup(.*)', 
  '/:locale/login(.*)'
]);

// 3. Exporter le middleware combiné
export default clerkMiddleware(async (auth, req) => {
  // Protéger les routes non publiques
  if (!isPublicRoute(req)) {
    await auth.protect();
  }

  // Gérer l'internationalisation
  return handleI18nRouting(req);
});

export const config = {
  // Matcher mis à jour pour exclure les fichiers statiques et inclure les routes Next.js
  matcher: [
    '/((?!_next|_vercel|.*\\..*).*)', 
    '/', 
    '/(fr|en)/:path*'
  ]
};