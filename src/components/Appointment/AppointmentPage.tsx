"use client";

// import Image from "next/image";
import React from "react";
import { BookingForm } from "./BookingForm";
import { Button } from "../ui/button";
import { ServicesSection } from "./ServicesSection";
import { TestimonialsSection } from "./TestimonialSection";
import { FAQSection } from "./FAQSection";
import { NewsLetterSection } from "../Sections/NewsLetterSection";
import { FindDoctor } from "../Home/FindDoctor";
import { Hero } from "./Hero";

export const AppointmentPage = () => {
  return (
    <div>
      <Hero />
      <FindDoctor />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <NewsLetterSection variant="section" />
    </div>
  );
};
