import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^\+?[\d\s-]{10,}$/, { message: "Invalid phone number" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
  department: z.string().min(1, "Please select a department"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
