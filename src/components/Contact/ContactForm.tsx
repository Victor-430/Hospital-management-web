"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

import { useContactStore } from "@/utils/Store/ContactStore";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/utils/Validations/contact";
import { ContactHero } from "@/utils/image";
import Image from "next/image";

export function ContactForm() {
  const { isSubmitting, isSuccess, error, submitForm, resetForm, clearError } =
    useContactStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      department: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    await submitForm(data);
  };

  const handleReset = () => {
    reset();
    resetForm();
  };

  if (isSuccess) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h3 className="text-2xl font-semibold text-green-700">
              Message Sent Successfully!
            </h3>
            <p className="text-gray-600">
              Thank you for contacting us. We'll get back to you within 24
              hours.
            </p>
            <Button onClick={handleReset} variant="outline">
              Send Another Message
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="div">
      <Image src={ContactHero} alt="contact iimg" className="w-full mb-24" />
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-[4rem] font-bold text-[#053C6D]">
            Contact Us
          </CardTitle>
          <p className="text-[#333333]">
            Reach out to us for any questions, appointments, or support. Your
            health and comfort are our top priorities.
          </p>
        </CardHeader>

        <CardContent>
          {error && (
            <div className="mb-6 p-4 bg-red-200 border border-red-200 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <p className="text-red-700">{error}</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearError}
                className="ml-auto"
              >
                ×
              </Button>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="firstName"
                  className="text-[#282938] font-normal text-xl"
                >
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  {...register("firstName")}
                  placeholder="Enter your first name"
                  className={
                    errors.firstName
                      ? "border-red-500"
                      : "font-normal border-1 border-[#007E85] rounded-xl h-[4rem]"
                  }
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="lastName"
                  className="text-[#282938] font-normal text-xl"
                >
                  Last Name *
                </Label>
                <Input
                  id="lastName"
                  {...register("lastName")}
                  placeholder="Enter your last name"
                  className={
                    errors.lastName
                      ? "border-red-500"
                      : "font-normal border-1 border-[#007E85] rounded-xl h-[4rem]"
                  }
                />
                {errors.lastName && (
                  <p className="text-sm text-red-500">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-[#282938] font-normal text-xl"
                >
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="your.email@example.com"
                  className={
                    errors.email
                      ? "border-red-500"
                      : "font-normal border-1 border-[#007E85] rounded-xl h-[4rem]"
                  }
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="phone "
                  className="text-[#282938] font-normal text-xl"
                >
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  placeholder="+1 (555) 123-4567"
                  className={
                    errors.phone
                      ? "border-red-500"
                      : "font-normal border-1 border-[#007E85] rounded-xl h-[4rem]"
                  }
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Department Selection */}
            <div className="space-y-2">
              <Label
                htmlFor="department"
                className="text-[#282938] font-normal text-xl"
              >
                Department *
              </Label>
              <select
                id="department"
                {...register("department")}
                className={`w-full px-3 py-2 border rounded-xl font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.department ? "border-red-500" : " border-[#007E85] "
                }`}
              >
                <option value="">Select a department</option>
                <option value="general">General Inquiry</option>
                <option value="emergency">Emergency Services</option>
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="radiology">Radiology</option>
                <option value="billing">Billing & Insurance</option>
              </select>
              {errors.department && (
                <p className="text-sm text-red-500">
                  {errors.department.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label
                htmlFor="message"
                className="text-[#282938] font-normal text-xl"
              >
                Message *
              </Label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder="Tell us how we can help you..."
                rows={6}
                className={
                  errors.message
                    ? "border-red-500"
                    : "font-normal border-1 border-[#007E85] rounded-xl h-[15rem]"
                }
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-[#053C6D] hover:bg-[#053C6D] text-white  font-medium text-xl rounded-xl "
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>

              {/* <Button
              type="button"
              variant="outline"
              onClick={() => reset()}
              disabled={isSubmitting}
            >
              Clear Form
            </Button> */}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
