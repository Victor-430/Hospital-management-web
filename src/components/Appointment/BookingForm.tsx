import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, User, Mail, Phone, MessageSquare } from "lucide-react";
import {
  BookingFormData,
  bookingSchema,
} from "@/utils/Validations/bookingForm";

export const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = (data: BookingFormData) => {
    console.log("Booking data:", data);
    // Handle form submission
  };

  return (
    <Card className="w-full max-w-md bg-white shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold text-[#053C6D]">
          Book Appointment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Name
            </Label>
            <Input
              id="name"
              placeholder="Your name"
              {...register("name")}
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              {...register("email")}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Phone Number
            </Label>
            <Input
              id="phone"
              placeholder="+1 (555) 000-0000"
              {...register("phone")}
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="department">Department</Label>
            <select
              id="department"
              {...register("department")}
              className="w-full p-2 border border-gray-300 rounded-md focus:border-[#053C6D] focus:outline-none"
            >
              <option value="">Select Department</option>
              <option value="cardiology">Cardiology</option>
              <option value="dental">Dental</option>
              <option value="bones">Bones Treatment</option>
              <option value="diagnosis">Diagnosis</option>
              <option value="surgery">Surgery</option>
              <option value="eye-care">Eye Care</option>
            </select>
            {errors.department && (
              <p className="text-sm text-red-500">
                {errors.department.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="time" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Time
            </Label>
            <select
              id="time"
              {...register("time")}
              className="w-full p-2 border border-gray-300 rounded-md focus:border-[#053C6D] focus:outline-none"
            >
              <option value="">4:00 Available</option>
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="14:00">02:00 PM</option>
              <option value="15:00">03:00 PM</option>
              <option value="16:00">04:00 PM</option>
            </select>
            {errors.time && (
              <p className="text-sm text-red-500">{errors.time.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Additional notes or concerns"
              {...register("message")}
              className="min-h-[80px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#053C6D] hover:bg-[#042a4f] text-white py-3 rounded-md"
          >
            Book Appointment
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
