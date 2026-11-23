import { z } from "zod"
import { PROJECT_TYPE_OPTIONS, TIMELINE_OPTIONS } from "@/lib/constants"

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name"),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email")
    .pipe(z.email("Please enter a valid email")),
  projectType: z.enum(PROJECT_TYPE_OPTIONS, "Please choose a project type"),
  timeline: z.enum(TIMELINE_OPTIONS).optional(),
  message: z
    .string()
    .trim()
    .min(1, "Tell me a little about it")
    .max(2000, "Please keep it under 2,000 characters"),
})

export type ContactFormValues = z.infer<typeof contactSchema>
