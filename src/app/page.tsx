// app/page.tsx
import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirige automatiquement vers la locale par défaut (ex: 'fr')
  redirect('/fr');
}