'use server'

import { db } from '../db';
import { profiles } from '../db/schema';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

/**
 * Action appelée depuis le formulaire d'onboarding.
 * Elle met à jour le rôle et redirige l'utilisateur vers le dashboard.
 */
export async function updateUserRole(formData: FormData) {
  // Récupération des données depuis le FormData (méthode standard pour les Server Actions)
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

    // 1. Rafraîchir le cache pour que le dashboard affiche les bonnes données
    revalidatePath('/dashboard');
    
    // 2. Rediriger l'utilisateur vers son tableau de bord
    redirect('/dashboard');

  } catch (error) {
    console.error("Erreur mise à jour profil:", error);
    return { success: false, message: "Erreur lors de la mise à jour du rôle." };
  }
}