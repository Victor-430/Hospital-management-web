import React from "react";
import { Button } from "../ui/button";
// import { Play } from "lucide-react";
import { BookingForm } from "./BookingForm";
import Image from "next/image";
import { ContactHero } from "@/utils/image";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center h-fit bg-no-repeat">
        <Image src={ContactHero} alt="hero img" />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* content */}
      <div className="container relative z-10 mx-auto px-6 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
                Meet the Best Medical Team
              </h1>
              <p className="text-xl font-medium text-white leading-relaxed drop-shadow-md">
                We provide the highest level of care with our experienced
                medical team. Your health is our priority, but we also
                prioritize delivering personalized care for every individual.
              </p>
            </div>

            <div className="flex flex-row gap-6  items-start">
              <Button className="bg-[#053C6D] h-13  w-[11.5rem] hover:bg-transparent hover:border-1 hover:border-[#053C6D] text-white px-4 py-2 sm:px-8 sm:py-4 text-lg rounded-[2.3rem] shadow-lg hover:shadow-xl transition-all duration-300">
                Get Quote Now
              </Button>

              <div className="flex items-center gap-3 cursor-pointer group">
                <Button className="bg-transparent backdrop-blur-sm border-1 border-[#053C6D] h-13  w-[11.5rem] hover:bg-[#042a4f] text-white px-4 py-2 sm:px-8 sm:py-4 text-lg rounded-[2.3rem] shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Quote Now
                </Button>
              </div>
            </div>
          </div>

          <div className=" mb-15 mt-10">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
};
