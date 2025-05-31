import React from "react";
import { NewsCards } from "./NewsCards";

export const NewsSection = () => {
  return (
    <section className="py-20 bg-[#FAFDFE]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm font-medium mb-2 uppercase tracking-wide">
            INFORMED CHOICES, HEALTHIER LIVES.
          </p>
          <h2 className="text-4xl font-bold text-[#053C6D]">News</h2>
        </div>
        <NewsCards />
      </div>
    </section>
  );
};
