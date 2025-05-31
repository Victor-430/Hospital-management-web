"use client";

import { Play } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Hero_Doctor } from "@/utils/image";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const router = useRouter();

  const handleAppointment = () => {
    router.push("/appointment");
  };

  return (
    <div className="bg-[#053C6D] relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="bg-white rounded-xl p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  One Platform for all Your{" "}
                  <span className="text-[#053C6D]">Healthcare</span> Needs.
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience seamless healthcare with our comprehensive
                  platform. Book appointments, consult with experts, and manage
                  your health journey all in one place.
                </p>
              </div>

              <div className="flex flex-row gap-6  items-start">
                <Button
                  onClick={handleAppointment}
                  className="bg-[#053C6D] h-13 hover:bg-[#042a4f] text-white px-4 py-2 sm:px-8 sm:py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book Appointment
                </Button>

                <div className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-16 h-13  bg-[#053C6D] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-6 w-6 text-white ml-1" fill="white" />
                  </div>
                  <span className="text-[#053C6D] font-semibold group-hover:text-[#042a4f] transition-colors">
                    Watch Video
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r top-10 from-[#053C6D] to-blue-400 rounded-3xl blur-3xl opacity-20"></div>
              <Image src={Hero_Doctor} alt="hero doctor" priority={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
