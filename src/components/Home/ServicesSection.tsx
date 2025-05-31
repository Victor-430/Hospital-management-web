import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight, Clock, Heart, Shield, Users } from "lucide-react";
import {
  Home_services_1,
  Home_services_2,
  Home_services_3,
  Home_services_4,
} from "@/utils/image";
import Image from "next/image";

export const ServicesSection = () => {
  const services = [
    {
      title: "General Consultation",
      description:
        "Comprehensive health checkups and consultations with experienced doctors.",
      icon: Users,
      image: Home_services_1,
    },
    {
      title: "Emergency Care",
      description: "24/7 emergency medical services with rapid response teams.",
      icon: Clock,
      image: Home_services_2,
    },
    {
      title: "Specialized Treatment",
      description:
        "Advanced treatments from specialists in various medical fields.",
      icon: Heart,
      image: Home_services_3,
    },
    {
      title: "Preventive Care",
      description: "Regular health screenings and preventive care programs.",
      icon: Shield,
      image: Home_services_4,
    },
  ];

  return (
    <div className="py-20 bg-[#DAF1FB]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[3rem] font-bold text-[#053C6D] mb-6">
            Services We Provide
          </h2>
          <p className="text-xl font-normal text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At CareCycle we offer a wide range of healthcare services designed
            to meet your needs with precision and care, from diagnostic to
            specialized treatments, we're here to support your health journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button
                    variant="ghost"
                    className="text-[#053C6D] hover:text-[#042a4f] p-0"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
