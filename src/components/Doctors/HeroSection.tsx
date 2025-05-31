import React from "react";

export const HeroSection = () => {
  return (
    <div className="relative bg-[#053C6D] py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-[#053C6D]/90 to-[#053C6D]/70">
        <img
          src="/lovable-uploads/651e3aab-bac7-42a0-9d26-dfd41b893c1a.png"
          alt="Doctors"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative container mx-auto px-6">
        <div className="max-w-2xl">
          <nav className="text-white/80 mb-4">
            <span>Home</span> / <span>Services</span>
          </nav>
          <h1 className="text-5xl font-bold text-white mb-6">Our Doctors</h1>
        </div>
      </div>
    </div>
  );
};
