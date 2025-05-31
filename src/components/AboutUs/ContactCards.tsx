import React from "react";
import { Card, CardContent } from "../ui/card";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "EMERGENCY",
    details: ["Call (+34) 685 551 2534", "Proin nec ex-2536"],
    bgColor: "bg-[#BFD2F8]",
    iconColor: "text-[#053C6D]",
  },
  {
    icon: MapPin,
    title: "LOCATION",
    details: ["Ikeja, Lagos", "Nigeria"],
    bgColor: "bg-[#053C6D]",
    iconColor: "text-[#053C6D]",
    textColor: "text-white",
  },
  {
    icon: Mail,
    title: "EMAIL",
    details: ["support@carecycle.com"],
    bgColor: "bg-[#9E9E9E]",
    iconColor: "text-[#053C6D]",
    textColor: "text-white",
  },
  {
    icon: Clock,
    title: "WORKING HOURS",
    details: ["Mon-Sun 06:00-00:00", "Sunday Emergency only"],
    bgColor: "bg-[#BFD2F8]",
    iconColor: "text-[#053C6D]",
  },
];

export const ContactCards = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {contactCards.map((card, index) => (
        <Card
          key={index}
          className={`${card.bgColor} border-0 hover:shadow-lg hover:scale-105 transition-shadow duration-300`}
        >
          <CardContent className="p-8 text-center">
            <div
              className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                card.bgColor === "bg-[#053C6D]" ||
                card.bgColor === "bg-gray-400"
                  ? "bg-white/20"
                  : "bg-white"
              }`}
            >
              <card.icon className={`h-8 w-8 ${card.iconColor}`} />
            </div>
            <h3
              className={`font-bold text-lg mb-4 uppercase tracking-wide ${
                card.textColor || "text-gray-900"
              }`}
            >
              {card.title}
            </h3>
            <div className="space-y-1">
              {card.details.map((detail, idx) => (
                <p
                  key={idx}
                  className={`text-sm font-normal ${
                    card.textColor || "text-gray-700"
                  }`}
                >
                  {detail}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
