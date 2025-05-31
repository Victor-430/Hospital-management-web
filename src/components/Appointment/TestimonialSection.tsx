import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Customer_2, Customer_3 } from "@/utils/image";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "The team at CareCycle made my recent surgery experience incredibly smooth and comfortable. Highly recommended!",
    avatar: Customer_2,
  },
  {
    name: "Michael Chen",
    rating: 5,
    text: "CareCycle provides quality care. Professional staff and excellent service. The best healthcare experience I've had.",
    avatar: Customer_3,
  },
  {
    name: "Emily Rodriguez",
    rating: 5,
    text: "Professional and caring staff. They took great care of me during my treatment. Exceptional knowledgeable.",
    avatar: Customer_2,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-[#DAF1FB]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#053C6D] mb-6">
            What our customers say
          </h2>
          <p className="text-lg text-gray-600">
            Hear from our patients about their experience with CareCycle
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
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
