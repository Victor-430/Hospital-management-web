import { z } from "zod";

export const labResultStatusSchema = z.enum(["Normal", "Critical", "Pending"]);

export const labResultSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  patientId: z.string(),
  email: z.string().email("Valid email is required"),
  test: z.string().min(1, "Test type is required"),
  date: z.string(),
  time: z.string(),
  status: labResultStatusSchema,
  avatar: z.string().optional(),
});

export type LabResult = z.infer<typeof labResultSchema>;
export type LabResultStatus = z.infer<typeof labResultStatusSchema>;
