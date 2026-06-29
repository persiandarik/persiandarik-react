import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),

  email: z.email("Invalid email address"),

  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
