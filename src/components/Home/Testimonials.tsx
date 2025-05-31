import React from "react";
import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";
import {
  Home_Testimonials_1,
  Home_Testimonials_2,
  Home_Testimonials_3,
} from "@/utils/image";
import Image from "next/image";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Patient",
      content:
        "CareCycle has transformed my healthcare experience. The platform is intuitive and the doctors are exceptional.",
      rating: 5,
      image: Home_Testimonials_1,
    },
    {
      name: "David Thompson",
      role: "Patient",
      content:
        "Quick appointments, professional service, and excellent care. Highly recommend CareCycle to everyone.",
      rating: 5,
      image: Home_Testimonials_2,
    },
    {
      name: "Maria Garcia",
      role: "Patient",
      content:
        "The 24/7 support and Ava assistant make healthcare so much more accessible. Outstanding service!",
      rating: 5,
      image: Home_Testimonials_3,
    },
  ];

  return (
    <div className="py-20 bg-[#DAF1FB]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Testimonials
          </h2>
          <p className="text-xl text-gray-600">
            Hear what our patients have to say about their experience with
            CareCycle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
