import * as z from "zod";
import { newsletterSchema } from "@/utils/Validations/newsletter";

export type NewsletterData = z.infer<typeof newsletterSchema>;

export type variantProps = "section" | "footer";
