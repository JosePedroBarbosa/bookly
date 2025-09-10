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
    <div className="min-h-[calc(100vh-66px)] bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative w-full max-w-lg bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4">
            <User className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Complete Your Profile
          </h1>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Tell us a bit about yourself to get started on your journey
          </p>
        </div>

        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="space-y-2">
              <Label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                First Name
              </Label>
              <Input
                id="firstName"
                placeholder="Enter your first name"
                disabled={isPending}
                {...register("firstName")}
                className={cn(
                  "h-12 bg-white/50 backdrop-blur-sm border-gray-200 focus:border-blue-500 focus:ring-blue-200 transition-all duration-200 hover:bg-white/70",
                  errors.firstName && "border-red-300 focus:border-red-500 focus:ring-red-200"
                )}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm flex items-center gap-1">
                  <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <Label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                Last Name
              </Label>
              <Input
                id="lastName"
                placeholder="Enter your last name"
                disabled={isPending}
                {...register("lastName")}
                className={cn(
                  "h-12 bg-white/50 backdrop-blur-sm border-gray-200 focus:border-purple-500 focus:ring-purple-200 transition-all duration-200 hover:bg-white/70",
                  errors.lastName && "border-red-300 focus:border-red-500 focus:ring-red-200"
                )}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm flex items-center gap-1">
                  <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Country */}
          <div className="space-y-2">
            <Label
              htmlFor="country"
              className="text-sm font-medium text-gray-700 flex items-center gap-2"
            >
              Country
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
                      "cursor-pointer w-full h-12 bg-white/50 backdrop-blur-sm border-gray-200 focus:border-green-500 focus:ring-green-200 transition-all duration-200 hover:bg-white/70",
                      errors.country && "border-red-300 focus:border-red-500 focus:ring-red-200"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-gray-500" />
                      <SelectValue placeholder="Select your country" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-white/95 backdrop-blur-sm border-gray-200 max-h-[200px]">
                    {countries.map((c) => (
                      <SelectItem
                        key={c.value}
                        value={c.value}
                        className="text-gray-800 hover:bg-green-50 focus:bg-green-50 transition-colors"
                      >
                        {c.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.country && (
              <p className="text-red-500 text-sm flex items-center gap-1">
                <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                {errors.country.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className={cn(
              "w-full h-14 text-base font-semibold rounded-2xl",
              "bg-gradient-to-br from-blue-500 to-blue-600 text-white",
              "shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer",
              "relative overflow-hidden"
            )}
            disabled={isPending || !isValid}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="relative z-10">
              {isPending ? "Setting up your account..." : "Complete Setup"}
            </span>
          </Button>
        </form>
      </div>
    </div>
  );
}
