import React from "react";
import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";
import { Button } from "../ui/button";
import {
  Doctor_Section_1,
  Doctor_Section_4,
  Doctor_Section_6,
} from "@/utils/image";
import Image from "next/image";

const doctors = [
  {
    id: 1,
    name: "Dr. Uche Favour",
    specialty: "NEUROLOGY",
    image: Doctor_Section_1,
    rating: 5,
  },
  {
    id: 2,
    name: "Dr. Patience Matthew",
    specialty: "DENTIST",
    image: Doctor_Section_4,
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. Tunde Johnson",
    specialty: "CARDIOLOGIST",
    image: Doctor_Section_6,
    rating: 5,
  },
];
export const TrustedDoctos = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm font-medium mb-2 uppercase tracking-wide">
            TRUSTED CARE
          </p>
          <h2 className="text-4xl font-bold text-[#053C6D]">Our Doctors</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {doctors.map((doctor) => (
            <Card
              key={doctor.id}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#053C6D] mb-2">
                  {doctor.name}
                </h3>
                <p className="text-gray-600 font-medium mb-4 uppercase text-sm tracking-wide">
                  {doctor.specialty}
                </p>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(doctor.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full border-[#053C6D] text-[#053C6D] hover:bg-[#053C6D] hover:text-white"
                >
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
