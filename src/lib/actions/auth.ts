'use server'

import { db } from '../db';
import { profiles } from '../db/schema';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { isRedirectError } from 'next/dist/client/components/redirect';

/**
 * Action mise à jour : gestion correcte de l'erreur de redirection
 */
export async function updateUserRole(formData: FormData) {
  const userId = formData.get('userId') as string;
  const role = formData.get('role') as string;

  if (!userId || !role) {
    return { success: false, message: "Données de formulaire incomplètes." };
  }

  try {
    await db
      .insert(profiles)
      .values({
        id: userId,
        role: role,
        is_verified: false,
      })
      .onConflictDoUpdate({
        target: profiles.id,
        set: { role: role },
      });

    revalidatePath('/dashboard');
    
  } catch (error) {
    // CRITIQUE : Vérifie si l'erreur est une redirection. 
    // Si oui, on la laisse se propager pour que Next.js puisse rediriger.
    if (isRedirectError(error)) {
      throw error;
    }

    console.error("Erreur mise à jour profil:", error);
    return { success: false, message: "Erreur lors de la mise à jour du rôle." };
  }

  // La redirection est appelée après le bloc try/catch pour éviter qu'elle soit capturée
  redirect('/dashboard');
}