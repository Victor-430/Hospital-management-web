import React from "react";
import { ContactCards } from "./ContactCards";
import Image from "next/image";
import { News_Sectins_1 } from "@/utils/image";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden  ">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center h-fit bg-no-repeat">
        <Image
          src={News_Sectins_1}
          alt="hero img"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* content */}
      <div className="container mx-auto relative z-10 px-6">
        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm font-medium mb-2 uppercase tracking-wide">
            GET IN TOUCH
          </p>
          <h2 className="text-4xl font-bold text-[#053C6D]">Contact</h2>
        </div>
        <ContactCards />
      </div>
    </section>
  );
};
