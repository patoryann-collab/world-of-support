import RegisterForm from '@/components/auth/RegisterForm';

interface SignupPageProps {
  params: Promise<{ locale: string }>;
}

export default async function SignupPage({ params }: SignupPageProps) {
  // Attendre la résolution des params si nécessaire pour votre logique de page
  await params;
  
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 py-30 px-4">
      <RegisterForm />
    </main>
  );
}