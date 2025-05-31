import React from "react";
import { Quote } from "lucide-react";
import Image from "next/image";
import { News_Sectins_1 } from "@/utils/image";

export const TestimonialSetion = () => {
  return (
    <section className="bg-[#053C6D] py-20 relative overflow-hidden">
      {/* background mage */}
      <div className="absolute inset-0 bg-cover bg-center h-fit bg-no-repeat">
        <Image
          src={News_Sectins_1}
          alt="hero img"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-[#053C6D]/40"></div>
      </div>

      {/* content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Quote className="h-16 w-16 mx-auto mb-8 text-blue-200" />
          <blockquote className="text-2xl lg:text-3xl font-light leading-relaxed mb-8 italic">
           &quot;The hospital is not just a place of healing, but a sanctuary where
            compassion meets expertise, where every patient is treated with
            dignity, and where hope is restored one life at a time.&quot;
          </blockquote>
          <footer className="text-lg">
            <cite className="font-semibold">Johnson</cite>
          </footer>
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white/50 rounded-full"></div>
            <div className="w-3 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
