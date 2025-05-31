import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, MapPin, Mail, Clock, ArrowRight } from "lucide-react";

const contactSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Phone,
    title: "EMERGENCY",
    details: ["(237) 681-812-255", "(237) 666-331-894"],
    bgColor: "bg-blue-100",
  },
  {
    icon: MapPin,
    title: "LOCATION",
    details: ["0123 Some place", "8878 Some country"],
    bgColor: "bg-[#053C6D]",
  },
  {
    icon: Mail,
    title: "EMAIL",
    details: ["fildineeesoe@gmail.com", "myebstudios@gmail.com"],
    bgColor: "bg-blue-100",
  },
  {
    icon: Clock,
    title: "WORKING HOURS",
    details: ["Mon-Sat 09:00-20:00", "Sunday Emergency only"],
    bgColor: "bg-blue-100",
  },
];

export const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form:", data);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-blue-500 text-sm font-medium mb-2 uppercase tracking-wide">
            GET IN TOUCH
          </h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className={`${info.bgColor} ${
                info.bgColor === "bg-[#053C6D]" ? "text-white" : "text-gray-900"
              } border-0`}
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    info.bgColor === "bg-[#053C6D]" ? "bg-white/20" : "bg-white"
                  }`}
                >
                  <info.icon
                    className={`h-6 w-6 ${
                      info.bgColor === "bg-[#053C6D]"
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

        {/* Newsletter Signup */}
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6">Newsletter</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email address"
                {...register("email")}
                className={`${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              className="bg-[#053C6D] hover:bg-[#042a4f] px-6"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
