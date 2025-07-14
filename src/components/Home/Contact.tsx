import { ContactHero } from "@/utils/image";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Contact = () => {
  return (
    <div className="bg-[#DAF1FB] p-8 ">
      <div className="text-center">
        <h3 className="text-[2rem] sm:text-[3rem] font-bold text-[#053C6D]">
          Contact Us
        </h3>
        <p className="font-normal text-xl">
          Our support team is here to assist you.
        </p>
      </div>

      <div className="mt-3 sm:mt-6 pt-6 border-t border-white/20">
        <Image
          src={ContactHero}
          alt="Healthcare Facility"
          className="w-full  object-cover rounded-lg"
        />
      </div>
      <div className="space-y-4  flex flex-col md:flex-row justify-center gap-8 items-center mt-6 sm:mt-12">
        <div className="border-[#053C6D] flex  rounded-lg text-[#053C6D] border h-14 text-center text-xl font-bold p-2 hover:scale-105 mt-5  w-[12.25rem]">
          Contact support
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h1 className="text-[#053C6D]">Location:</h1>
            <MapPin className="h-5 w-5 text-[#053C6D]" />
            <span className="text-[#053C6D]">
              123 Healthcare Ave, Medical District
            </span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-[#053C6D]">Phone:</h1>
            <Phone className="h-5 w-5 text-[#053C6D]" />
            <span className="flex items-center flex-col">
              <p className="text-[#053C6D]">We\u0027re here to help.</p>
              <p className="text-[#053C6D]">+1 (555) 123-4567</p>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-[#053C6D]">Email:</h1>
            <Mail className="h-5 w-5 text-[#053C6D]" />
            <span className="flex items-center flex-col">
              <p className="text-[#053C6D]">Reach out anytime!</p>
              <p className="text-[#053C6D]">contact@carecycle.com</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
