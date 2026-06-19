// src/components/contact/ContactSteps.tsx
export default function ContactSteps() {
  const steps = [
    { step: "1", title: "We'll prepare a proposal", desc: "Required scope, timeline and budget will be included..." },
    { step: "2", title: "Together we discuss it", desc: "Let's get acquainted and discuss all possible variants." },
    { step: "3", title: "Let's start building", desc: "When the contract is signed, we can start the first sprint." }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">What will be next step?</h2>
      {steps.map((item, i) => (
        <div key={i} className="flex gap-4 border-l-2 border-white/20 pl-6 relative">
          <div className="absolute -left-[9px] top-0 w-4 h-4 bg-red-500 rounded-full" />
          <div>
            <h3 className="font-bold">{item.step}. {item.title}</h3>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}