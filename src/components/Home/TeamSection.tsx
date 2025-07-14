import React from "react";
import { Card, CardContent } from "../ui/card";
import { Award, Badge, Star } from "lucide-react";
import {
  Home_Profile1,
  Home_Profile2,
  Home_Profile3,
  Home_Profile4,
  Home_Profile5,
  Home_Profile6,
} from "@/utils/image";
import Image from "next/image";

export const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      experience: "15+ years",
      rating: 4.9,
      image: Home_Profile1,
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      experience: "12+ years",
      rating: 4.8,
      image: Home_Profile2,
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      experience: "10+ years",
      rating: 4.9,
      image: Home_Profile3,
    },
    {
      name: "Dr. James Wilson",
      specialty: "Orthopedist",
      experience: "18+ years",
      rating: 4.7,
      image: Home_Profile4,
    },
    {
      name: "Dr. Lisa Anderson",
      specialty: "Dermatologist",
      experience: "14+ years",
      rating: 4.8,
      image: Home_Profile5,
    },
    {
      name: "Dr. Robert Taylor",
      specialty: "General Surgeon",
      experience: "20+ years",
      rating: 4.9,
      image: Home_Profile6,
    },
  ];

  return (
    <div className="py-5 sm:py-20 bg-[#DAF1FB]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Meet Our Team Members
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our experienced healthcare professionals are dedicated to providing
            you with the highest quality care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg"
            >
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#053C6D] text-white">
                      <Award className="h-3 w-3 mr-1" />
                      {member.rating}
                    </Badge>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-[#053C6D] font-semibold mb-2">
                  {member.specialty}
                </p>
                <p className="text-gray-600 mb-4">{member.experience}</p>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(member.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
