import React from "react";
import { Card, CardContent } from "../ui/card";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "../ui/button";

export const DoctorsCard = () => {
  const doctors = [
    {
      id: 1,
      name: "Doctor's Name",
      specialty: "NEUROLOGY",
      image: "/lovable-uploads/c04860cd-8b2a-4954-9a60-d42879289cc3.png",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 2,
      name: "Dr Uche",
      specialty: "NEUROLOGY",
      image: "/lovable-uploads/c04860cd-8b2a-4954-9a60-d42879289cc3.png",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      name: "Dr Sarah",
      specialty: "NEUROLOGY",
      image: "/lovable-uploads/c04860cd-8b2a-4954-9a60-d42879289cc3.png",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 4,
      name: "Doctor's Name",
      specialty: "NEUROLOGY",
      image: "/lovable-uploads/c04860cd-8b2a-4954-9a60-d42879289cc3.png",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 5,
      name: "Doctor's Name",
      specialty: "NEUROLOGY",
      image: "/lovable-uploads/c04860cd-8b2a-4954-9a60-d42879289cc3.png",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 6,
      name: "Doctor's Name",
      specialty: "NEUROLOGY",
      image: "/lovable-uploads/c04860cd-8b2a-4954-9a60-d42879289cc3.png",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <div className="container mx-auto px-6 pb-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doctor) => (
          <Card
            key={doctor.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-lg mb-2">{doctor.name}</h3>
              <p className="text-[#053C6D] font-medium mb-4">
                {doctor.specialty}
              </p>

              <div className="flex justify-center gap-3 mb-4">
                <a
                  href={doctor.socialLinks.facebook}
                  className="w-8 h-8 bg-[#053C6D] rounded-full flex items-center justify-center text-white hover:bg-[#042a4f]"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href={doctor.socialLinks.twitter}
                  className="w-8 h-8 bg-[#053C6D] rounded-full flex items-center justify-center text-white hover:bg-[#042a4f]"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href={doctor.socialLinks.instagram}
                  className="w-8 h-8 bg-[#053C6D] rounded-full flex items-center justify-center text-white hover:bg-[#042a4f]"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>

              <Button className="w-full bg-[#053C6D] hover:bg-[#042a4f]">
                View Profile
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
