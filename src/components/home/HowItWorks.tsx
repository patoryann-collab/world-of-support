import React from 'react';
import WorkIcon from '@mui/icons-material/Work';
import SearchIcon from '@mui/icons-material/PersonSearchOutlined';
import PaymentIcon from '@mui/icons-material/PaymentOutlined';

export default function HowItWorks() {
  const steps = [
    {
      title: "Post a Job",
      description: "Create your free job posting today and start receiving competitive quotes from qualified professionals within just a few hours.",
      icon: <WorkIcon className="text-world-green text-3xl" />,
    },
    {
      title: "Hire Freelancer",
      description: "Browse profiles, compare proposals, and select the expert that best fits your project requirements.",
      icon: <SearchIcon className="text-world-green text-3xl" />,
    },
    {
      title: "Make Secure Payment",
      description: "Pay securely for the completed work using our protected payment system, ensuring satisfaction before funds are released.",
      icon: <PaymentIcon className="text-world-green text-3xl" />,
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="uppercase text-xs font-bold text-world-green tracking-widest bg-green-100 px-3 py-1 rounded-full">How it works</span>
          <h2 className="text-4xl font-bold mt-4 mb-2">It's Easy to Get Work Done</h2>
          <p className="text-gray-600">The digital solution provider for your business needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-500 mb-6 flex-grow">{step.description}</p>
              <a href="#" className="text-world-green font-medium hover:underline">Browse All Categories →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}