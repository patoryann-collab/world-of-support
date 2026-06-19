// src/components/contact/ContactForm.tsx
'use client';
import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-white text-gray-900 p-8 rounded-lg shadow-2xl">
      <div className="bg-blue-50 p-4 rounded mb-6 flex gap-4">
        <span>⚡</span>
        <p className="text-sm">Write us a few words about your project and we'll prepare a proposal for you within <b>24 hours</b>.</p>
      </div>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Your name" className="border p-3 rounded w-full" />
          <input type="email" placeholder="Your e-mail" className="border p-3 rounded w-full" />
        </div>
        <textarea placeholder="Project details" className="border p-3 rounded w-full h-32" />
        <button className="w-full bg-[#0b1b4d] text-white py-4 rounded font-bold hover:bg-slate-800">Send</button>
      </form>
    </motion.div>
  );
}