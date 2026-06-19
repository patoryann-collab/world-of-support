import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Assurez-vous que DATABASE_URL est bien dans votre .env.local
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);