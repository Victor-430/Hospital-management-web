import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Appointment_service,
  Appointment_service_1,
  Appointment_service_2,
  Appointment_service_3,
  Appointment_service_4,
} from "@/utils/image";
import Image from "next/image";

const services = [
  {
    title: "Dental treatments",
    description:
      "From routine cleanings to advanced procedures, we provide comprehensive treatment for your oral health.",
    image: Appointment_service,
  },
  {
    title: "Bones treatments",
    description:
      "Using advanced techniques, we provide personalized treatment for optimal recovery.",
    image: Appointment_service_1,
  },
  {
    title: "Diagnosis",
    description:
      "Our advanced tools and expert team ensure precise evaluations and fast results.",
    image: Appointment_service_2,
  },
  {
    title: "Cardiology",
    description:
      "Our expert team uses advanced technology to diagnose and treat cardiovascular conditions.",
    image: Appointment_service_3,
  },
  {
    title: "Surgery",
    description:
      "From minor surgeries to complex operations, we ensure the best outcomes for our patients.",
    image: Appointment_service_4,
  },
  {
    title: "Eye care",
    description:
      "Clear vision, personalized care. Our eye specialists provide advanced treatments for all your vision needs.",
    image: Appointment_service_4,
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#053C6D] mb-6">
            Services we provide
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At CareCycle, we offer a wide range of healthcare services designed
            to meet your needs with precision and care. From diagnostic to
            specialized treatments, we&apos;re here to support your health
            journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl hover:scale-105 transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div className={`h-48  flex items-center justify-center`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="object-cover "
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#053C6D] mb-3">
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
    </section>
  );
};
