'use client'

import { useState } from 'react';
import { updateUserRole } from '@/lib/actions/auth';

export default function RoleSelectionForm({ userId }: { userId: string }) {
  const [role, setRole] = useState('candidat');

  // Mise à jour : Création d'une fonction wrapper pour satisfaire le typage de l'attribut 'action'
  const handleAction = async (formData: FormData) => {
      const result = await updateUserRole(formData);

  };

  return (
    <form action={handleAction} className="p-8 bg-white shadow-lg rounded-2xl w-full max-w-sm">
      <input type="hidden" name="userId" value={userId} />
      
      <p className="block mb-6 font-medium text-gray-700">Je souhaite m'inscrire en tant que :</p>
      
      <div className="flex gap-4 mb-8">
        {/* Option Candidat */}
        <label className={`flex-1 cursor-pointer border-2 rounded-xl p-4 transition-all ${role === 'candidat' ? 'border-[#006A4E] bg-green-50' : 'border-gray-200'}`}>
          <input 
            type="radio" 
            name="role" 
            value="candidat" 
            checked={role === 'candidat'}
            onChange={() => setRole('candidat')}
            className="hidden" 
          />
          <span className="block text-center font-semibold">Candidat</span>
        </label>

        {/* Option Employeur */}
        <label className={`flex-1 cursor-pointer border-2 rounded-xl p-4 transition-all ${role === 'employeur' ? 'border-[#006A4E] bg-green-50' : 'border-gray-200'}`}>
          <input 
            type="radio" 
            name="role" 
            value="employeur" 
            checked={role === 'employeur'}
            onChange={() => setRole('employeur')}
            className="hidden" 
          />
          <span className="block text-center font-semibold">Employeur</span>
        </label>
      </div>

      <button type="submit" className="w-full bg-[#006A4E] text-white py-3 font-bold rounded-xl hover:bg-[#005a42] transition-colors">
        Confirmer mon choix
      </button>
    </form>
  );
}