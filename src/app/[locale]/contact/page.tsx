// src/app/contact/page.tsx
import ContactSteps from '@/components/contact/ContactSteps';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <main className="bg-[#0b1b4d] text-white min-h-screen py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2 space-y-12">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <ContactSteps />
        </div>
        <div className="md:w-1/2">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}