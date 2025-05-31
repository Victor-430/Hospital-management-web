import React from "react";

import { NewsletterForm } from "../Forms/NewsLetterForm";
import { Footer } from "../Layout/Footer";
import { NewsLetterSection } from "../Sections/NewsLetterSection";
import { ContactForm } from "./ContactForm";

export const ContactPage = () => {
  return (
    <div className="bg-[#DAF1FB] ">
      <ContactForm />
      <NewsLetterSection variant="section" />
    </div>
  );
};
