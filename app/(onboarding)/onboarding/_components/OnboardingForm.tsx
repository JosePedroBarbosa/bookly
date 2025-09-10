"use client";

import React, { useTransition, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import { onboardingSchema, OnboardingSchemaType } from "@/lib/zodSchemas";
import { onboardingUser } from "../_actions/actions";
import { User, Globe, MapPin } from "lucide-react";

interface Props {
  countries: { value: string; label: string }[];
}

export default function OnboardingForm({ countries }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<OnboardingSchemaType>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "",
    },
    mode: "onChange",
  });

  const onSubmit = useCallback((data: OnboardingSchemaType) => {
    startTransition(async () => {
      try {
        await onboardingUser(data);
        toast.success("Welcome! Your account is now set up.");
        router.push("/dashboard");
      } catch (error) {
        toast.error("Failed to complete onboarding");
        console.error(error);
      }
    });
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Complete Your Profile
          </h1>
          <p className="text-gray-600 text-sm mt-2">
            Tell us a bit about yourself to get started
          </p>
        </div>

        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          {/* First Name */}
          <div className="space-y-2">
            <Label
              htmlFor="firstName"
              className="text-sm font-medium flex items-center gap-2 text-gray-800"
            >
              <User className="h-4 w-4 text-blue-600" />
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="firstName"
              placeholder="Enter your first name"
              disabled={isPending}
              {...register("firstName")}
              className={cn(
                "bg-white border-gray-300 focus:border-blue-400 focus:ring-blue-100 text-gray-900 placeholder:text-gray-400",
                errors.firstName && "border-red-500 focus:border-red-500"
              )}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs">{errors.firstName.message}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <Label
              htmlFor="lastName"
              className="text-sm font-medium flex items-center gap-2 text-gray-800"
            >
              <User className="h-4 w-4 text-blue-600" />
              Last Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="lastName"
              placeholder="Enter your last name"
              disabled={isPending}
              {...register("lastName")}
              className={cn(
                "bg-white border-gray-300 focus:border-blue-400 focus:ring-blue-100 text-gray-900 placeholder:text-gray-400",
                errors.lastName && "border-red-500 focus:border-red-500"
              )}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs">{errors.lastName.message}</p>
            )}
          </div>

          {/* Country */}
          <div className="space-y-2">
            <Label
              htmlFor="country"
              className="text-sm font-medium flex items-center gap-2 text-gray-800"
            >
              <Globe className="h-4 w-4 text-blue-600" />
              Country <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  disabled={isPending}
                >
                  <SelectTrigger
                    className={cn(
                      "w-full bg-white border-gray-300 text-gray-900 focus:border-blue-400 focus:ring-blue-100 cursor-pointer",
                      errors.country && "border-red-500 focus:border-red-500"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <SelectValue placeholder="Select your country" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200 max-h-[200px]">
                    {countries.map((c) => (
                      <SelectItem
                        key={c.value}
                        value={c.value}
                        className="text-gray-800 hover:bg-blue-50 focus:bg-blue-50"
                      >
                        {c.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.country && (
              <p className="text-red-500 text-xs">{errors.country.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className={cn(
              "w-full h-12 text-base font-semibold rounded-xl",
              "bg-blue-600 hover:bg-blue-700 text-white",
              "shadow-md hover:shadow-lg transition-all duration-300",
              "disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            )}
            disabled={isPending || !isValid}
          >
            {isPending ? "Setting up your account..." : "Complete Setup"}
          </Button>
        </form>
      </div>
    </div>
  );
}
