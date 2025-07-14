"use client";

import { Card, CardContent } from "../ui/card";
import { SlotCounter } from "@/utils/SlotCounter";

export const Results = () => {
  const stats = [
    { value: "97%", label: "Customer satisfaction" },
    {
      value: "35000",
      label: "Active Patients",
      suffix: "k",
      displayValue: "35k",
    },
    {
      value: "27000",
      label: "Successful Treatments",
      suffix: "k",
      displayValue: "27k",
    },
    { value: "240+", label: "Expert Doctors" },
  ];

  return (
    <div className="bg-[#DAF1FB] py-10 sm:py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#053C6D] text-center mb-8 sm:mb-16">
          Our Results in Numbers
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <CardContent className="p-0">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#053C6D] mb-4">
                  <SlotCounter
                    value={stat.displayValue || stat.value}
                    duration={2000}
                    delay={index * 200}
                  />
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
