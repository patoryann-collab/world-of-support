import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import RoleSelectionForm from '@/components/auth/RoleSelectionForm';

export default async function OnboardingPage() {
  const { userId } = await auth();

  // Si l'utilisateur n'est pas connecté, renvoyer au login
  if (!userId) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Complétez votre profil</h1>
      <RoleSelectionForm userId={userId} />
    </div>
  );
}