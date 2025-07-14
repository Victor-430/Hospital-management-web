import React from "react";
import { NewsletterForm } from "../Forms/NewsLetterForm";
import { variantProps } from "../Types/newsletter";

export const NewsLetterSection = ({ variant }: { variant: variantProps }) => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-[#DAF1FB] mx-auto">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#053C6D]  sm:text-left">
            Subscribe to our newsletter
          </h2>
          <NewsletterForm variant={variant} />
        </div>
      </div>
    </section>
  );
};
