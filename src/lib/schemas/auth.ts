import { z } from 'zod';

export const registerSchema = z.object({
  fullName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Format d'email invalide"),
  password: z.string().min(6, "Le mot de passe doit faire au moins 6 caractères"),
  phone: z.string().min(8, "Numéro de téléphone invalide"),
  role: z.enum(['candidat', 'employeur']),
});