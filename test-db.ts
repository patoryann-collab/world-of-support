import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const sql = neon(process.env.DATABASE_URL!);

async function test() {
  const result = await sql`SELECT 1`;
  console.log('Connexion réussie ! Résultat :', result);
}

test();