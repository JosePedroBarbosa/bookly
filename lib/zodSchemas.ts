import { z } from "zod"

export const onboardingSchema = z.object({
  firstName: z.string().min(2, "First name must have at least 2 characters"),
  lastName: z.string().min(2, "Last name must have at least 2 characters"),
  country: z.string().min(1, "Please select a country"),
  photo: z.string().optional(),
});

export type OnboardingSchemaType = z.infer<typeof onboardingSchema>;