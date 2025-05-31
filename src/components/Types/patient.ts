import { z } from "zod";

export const patientStatusSchema = z.enum([
  "Life Support",
  "Discharged",
  "ICU",
  "In Recovery",
  "Report Pending",
]);

export const patientSchema = z.object({
  id: z.string(),
  admitted: z.string(),
  patient: z.string().min(1, "Patient name is required"),
  room: z.string().min(1, "Room is required"),
  areaOfConcern: z.string().min(1, "Area of concern is required"),
  inCharge: z.string().min(1, "Doctor in charge is required"),
  status: patientStatusSchema,
  contact: z.string().optional(),
});

export const addPatientSchema = patientSchema.omit({
  id: true,
  admitted: true,
});

export type Patient = z.infer<typeof patientSchema>;
export type PatientStatus = z.infer<typeof patientStatusSchema>;
export type AddPatientData = z.infer<typeof addPatientSchema>;
