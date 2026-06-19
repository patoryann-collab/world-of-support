'use client'

import { SignUp, useSignUp } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'
import Image from 'next/image';

export default function RegisterForm() {

    const { isLoaded, signUp } = useSignUp()
    
  const router = useRouter()

  // Détecter quand l'inscription est terminée
  useEffect(() => {
    if (signUp?.status === 'complete') {
      toast.success("Bienvenue ! Votre compte a été créé avec succès.")
      router.push('/onboarding') // Redirection vers votre futur tableau de bord
    }
  }, [signUp?.status, router])
  return (
    <div className="flex w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[500px]">
      
      {/* CÔTÉ GAUCHE : Votre design actuel reste identique */}
      <div className="hidden md:flex flex-col justify-center p-12 w-1/2 relative">
  {/* L'image devient un élément de fond via le composant Image */}
  <Image 
    src="/signup.jfif" 
    alt="Background" 
    fill 
    className="object-cover object-center"
    priority
  />
  
  {/* Dégradé sombre */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#006A4E]/70 to-[#004d39]/90 z-0"></div>

  {/* Contenu textuel */}
  <div className="relative z-10 text-white">
    <h1 className="text-3xl font-bold mb-6">
      Together, We Build the Skills for a Brighter Future.
    </h1>
  </div>
</div>

      {/* CÔTÉ DROIT : Le composant Clerk remplace le formulaire */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <SignUp 
          appearance={{
            variables: { colorPrimary: '#006A4E' },
          }}
          routing="hash"
          // Cette prop redirige automatiquement Clerk après succès
          forceRedirectUrl="/onboarding" 
        />
      </div>
    </div>
  );
}