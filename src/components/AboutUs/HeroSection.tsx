import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { About_us_News_2 } from "@/utils/image";

const features = [
  "A Passion for healing",
  "All our best",
  "Always Caring",
  "5-Star Care",
  "Believe in Us",
  "A Legacy of Excellence",
];

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center h-fit bg-no-repeat">
        <Image
          src={About_us_News_2}
          alt="hero img"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* content */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid  items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#159EEC] text-lg font-bold uppercase tracking-wide">
                WELCOME TO CARE<span className="text-lime-700">CYCLE</span>
              </p>
              <h1 className="text-5xl lg:text-5xl font-normal text-[#053C6D] leading-tight">
                Best Care for Your Good Health
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="text-white text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-white leading-relaxed">
                At CareCycle, we believe healthcare should be optimized,
                efficient, and centered around those who matter most: patients
                and medical professionals. Our platform is designed to bridge
                the gap between healthcare providers and patients to ensure
                accessible, personalized, and high-quality care at every stage
                of the medical journey.
              </p>

              <p className="text-white leading-relaxed">
                We are more than just a hospital app; we are a healthcare
                evolution. CareCycle empowers doctors with cutting-edge tools
                and provides patients with the confidence and support they need
                for better health outcomes.
              </p>
            </div>

            <Button className="bg-[#053C6D] hover:bg-[#042a4f] text-white px-8 py-3 text-lg">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
