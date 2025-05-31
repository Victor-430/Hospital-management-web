import * as z from "zod";

export const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^\+?[\d\s-]{10,}$/, { message: "Invalid phone number" }),
  department: z.string().min(1, "Please select a department"),
  time: z.string().min(1, "Please select a time"),
  message: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
