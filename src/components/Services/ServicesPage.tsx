import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MapPin, Mail, Clock } from "lucide-react";
import {
  Service_Header,
  Service_Section,
  Service_Section_1,
  Service_Section_2,
  Service_Section_3,
  Service_Section_4,
} from "@/utils/image";
import Image from "next/image";

const services = [
  {
    title: "Free Checkup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
    image: Service_Section,
  },
  {
    title: "Free Checkup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
    image: Service_Section_1,
  },
  {
    title: "Free Checkup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
    image: Service_Section_2,
  },
  {
    title: "Free Checkup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
    image: Service_Section_3,
  },
  {
    title: "Free Checkup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
    image: Service_Section_4,
  },
  {
    title: "Free Checkup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
    image: Service_Section,
  },
];

const contactInfo = [
  {
    icon: Phone,
    title: "EMERGENCY",
    details: ["(+234) 8081812255", "(+234) 7381812255"],
    bgColor: "bg-blue-100",
    textColor: "text-[#053C6D]",
  },
  {
    icon: MapPin,
    title: "LOCATION",
    details: ["Ikeja, Lagos", "Nigeria"],
    bgColor: "bg-[#053C6D]",
    textColor: "text-white",
  },
  {
    icon: Mail,
    title: "EMAIL",
    details: ["support@carecycle.com"],
    bgColor: "bg-gray-400",
    textColor: "text-white",
  },
  {
    icon: Clock,
    title: "WORKING HOURS",
    details: ["Mon-Sun 06:00-00:00", "Sunday Emergency only"],
    bgColor: "bg-blue-100",
    textColor: "text-[#053C6D]",
  },
];

export const ServicesPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center h-fit bg-no-repeat">
        <Image src={Service_Header} alt="hero img" />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-white/35"></div>
      </div>

      <div className="container  relative z-10 mx-auto px-6">
        <div className="text-white">
          <div className="flex items-center gap-2 text-sm mb-4">
            <span className="hover:underline cursor-pointer">Home</span>
            <span>/</span>
            <span>Services</span>
          </div>
          <h1 className="text-5xl font-bold">Our Services</h1>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute z-10 -bottom-4 right-5 w-12 h-12 bg-[#053C6D] rounded-full flex items-center justify-center"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#053C6D] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-blue-500 hover:text-blue-700 p-0 group/btn"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-blue-500 text-sm font-medium mb-2 uppercase tracking-wide">
              GET IN TOUCH
            </h3>
            <h2 className="text-4xl font-bold text-[#053C6D]">Contact</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className={`${info.bgColor} ${info.textColor} border-0 hover:shadow-lg transition-shadow`}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      info.bgColor === "bg-[#053C6D]" ||
                      info.bgColor === "bg-gray-400"
                        ? "bg-white/20"
                        : "bg-white"
                    }`}
                  >
                    <info.icon
                      className={`h-6 w-6 ${
                        info.bgColor === "bg-[#053C6D]" ||
                        info.bgColor === "bg-gray-400"
                          ? "text-white"
                          : "text-[#053C6D]"
                      }`}
                    />
                  </div>
                  <h3 className="font-semibold text-sm mb-3 uppercase tracking-wide">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
