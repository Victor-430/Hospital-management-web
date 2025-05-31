"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Ava, cube } from "@/utils/image";
import { useRouter } from "next/navigation";

export const AvaSection = () => {
  const router = useRouter();

  const handleTalktoAva = () => {
    router.replace("/login");
  };

  return (
    <div className="bg-[#053C6D] py-20 relative overflow-hidden">
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#053C6D] via-blue-800 to-[#053C6D]"></div> */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image src={Ava} alt="ava img" />
          </div>

          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold leading-tight">
                Meet Ava - Your 24/7 Health Assistant
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Our AI-powered assistant is here to help you navigate your
                healthcare journey with personalized support and instant
                responses.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Find doctors and specialists with ease",
                "Book or cancel appointments in seconds",
                "Get answers to common medical questions quickly",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Image src={cube} alt="cube img" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button
                onClick={handleTalktoAva}
                className="border-white border text-white bg-transparent h-16  px-8 py-4 text-lg rounded-xl font-semibold"
              >
                Talk to Ava
              </Button>
              <div className="flex items-center gap-3 cursor-pointer group">
                <span className="text-lg">Learn more</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
