"use client";

import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I book an appointment?",
    answer: "Call our helpline number or book through online portal.",
  },
  {
    question: "What should I do in a medical emergency?",
    answer: "In case of emergency, call our 24/7 hotline.",
  },
  {
    question: "Do you accept insurance plans?",
    answer:
      "We accept most major insurance plans. Please contact us to verify.",
  },
  {
    question: "Do you offer virtual consultations?",
    answer:
      "Yes, we provide virtual consultations through our online platform.",
  },
  {
    question: "How can I reschedule the last months?",
    answer:
      "Contact your healthcare provider to discuss rescheduling your follow-up.",
  },
  {
    question: "What are your visiting hours?",
    answer: "Our visiting hours are 9 AM to 8 PM, 7 days a week.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, credit cards, and most insurance plans.",
  },
  {
    question: "How do I get referred to a specialist?",
    answer:
      "Schedule a consultation with our general practitioner for referrals.",
  },
];

export const FAQCards = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
      {faqs.map((faq, index) => (
        <Card
          key={index}
          className="cursor-pointer hover:shadow-md transition-shadow"
        >
          <CardContent className="p-6" onClick={() => toggleFAQ(index)}>
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-gray-900 mb-2 flex-1">
                {faq.question}
              </h3>
              {openItems.includes(index) ? (
                <ChevronUp className="h-5 w-5 text-gray-500 ml-2" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500 ml-2" />
              )}
            </div>
            {openItems.includes(index) && (
              <p className="text-gray-600 text-sm mt-2">{faq.answer}</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
