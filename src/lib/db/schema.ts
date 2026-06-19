import { pgTable, text, boolean, uuid } from 'drizzle-orm/pg-core';

export const profiles = pgTable('profiles', {
  id: text('id').primaryKey(), // ID unique (lié à l'authentification)
  full_name: text('full_name'),
  phone: text('phone'),
  role: text('role'), // 'candidat' ou 'employeur'
  is_verified: boolean('is_verified').default(false),
});