import React from "react";

export const FaqSection = () => {
  const faqs = [
    {
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment through our platform by selecting your preferred doctor and available time slot.",
    },
    {
      question: "What insurance do you accept?",
      answer:
        "We accept most major insurance plans. Please contact us to verify your specific coverage.",
    },
    {
      question: "Can I cancel or reschedule my appointment?",
      answer:
        "Yes, you can cancel or reschedule appointments up to 24 hours before your scheduled time.",
    },
    {
      question: "Is the platform secure?",
      answer:
        "Yes, we use industry-standard encryption to protect your personal and medical information.",
    },
  ];

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
      <h3 className="text-2xl font-bold text-white mb-6">FAQ</h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-white/20 pb-4 last:border-b-0"
          >
            <h4 className="font-semibold text-white mb-2">{faq.question}</h4>
            <p className="text-blue-100 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
