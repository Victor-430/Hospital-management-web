import { SlotCounter } from "@/utils/SlotCounter";
import React from "react";

export const TrustedCompanies = () => {
  const trustedCompanies = [
    "Google",
    "Facebook",
    "Microsoft",
    "Amazon",
    "Apple",
    "Netflix",
  ];

  return (
    <div className="sm:py-16 py-8 bg-[#DAF1FB]">
      <div className="container mx-auto px-6">
        <p className="text-center font-bold text-3xl sm:text-4xl text-[#053C6D] mb-12 ">
          Trusted by <SlotCounter value="25000" duration={1500} />+ companies
          around the world
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6   opacity-60">
          {trustedCompanies.map((company, index) => (
            <div key={index} className="text-2xl font-bold text-[#555555]">
              {company}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
