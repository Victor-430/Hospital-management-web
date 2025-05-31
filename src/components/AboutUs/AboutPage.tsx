import React from "react";
import { HeroSection } from "./HeroSection";
import { TestimonialSetion } from "./TestimonialsSection";
import { TrustedDoctos } from "./TrustedDoctos";
import { NewsSection } from "./NewsSection";
import { ContactSection } from "./ContactSection";

export const AboutPage = () => {
  return (
    <div>
      <HeroSection />
      <TestimonialSetion />
      <TrustedDoctos />
      <NewsSection />
      <ContactSection />
    </div>
  );
};
