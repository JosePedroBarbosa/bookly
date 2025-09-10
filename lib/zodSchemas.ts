import { z } from "zod"

export const onboardingSchema = z.object({
  firstName: z.string().min(2, "First name must have at least 2 characters"),
  lastName: z.string().min(2, "Last name must have at least 2 characters"),
  country: z.string().min(1, "Please select a country"),
});

export type OnboardingSchemaType = z.infer<typeof onboardingSchema>;

// Profile edit schema
export const profileEditSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  country: z.string().min(1, "Please select a country"),
});

export type ProfileEditSchemaType = z.infer<typeof profileEditSchema>;

// Login schema
export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;

// OTP verification schema
export const otpVerificationSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  otp: z.string().length(6, "OTP must be exactly 6 digits"),
});

export type OtpVerificationSchemaType = z.infer<typeof otpVerificationSchema>;