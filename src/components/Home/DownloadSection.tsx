import { Apple, Smartphone } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export const DownloadSection = () => {
  return (
    <div className="text-white  grid lg:grid-cols-2  gap-8 sm:gap-16">
      <div className="">
        <div className="space-y-6 mb-6 sm:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold capitalize">
            Download Our Mobile App
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            Care on the go. Download the CareCycle app for quick access to your
            health information, appointments, and 24/7 support.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-white text-[#053C6D] hover:bg-gray-100 px-6 py-3 rounded-xl flex items-center gap-3">
            <Apple className="h-5 w-5" />
            App Store
          </Button>
          <Button className="bg-white text-[#053C6D] hover:bg-gray-100 px-6 py-3 rounded-xl flex items-center gap-3">
            <Smartphone className="h-5 w-5" />
            Google Play
          </Button>
        </div>
      </div>

      <div className="relative ">
        <div className="w-64 h-80 bg-white/10 rounded-3xl mx-auto backdrop-blur-sm border border-white/20">
          <div className="p-8 text-center">
            <Smartphone className="h-16 w-16 mx-auto mb-4 text-white/60" />
            <p className="text-white/60">App Preview</p>
          </div>
        </div>
      </div>
    </div>
  );
};
