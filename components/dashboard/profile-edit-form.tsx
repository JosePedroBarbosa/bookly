"use client";

import { useTransition } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";
import { updateProfile } from "@/app/(dashboard)/dashboard/profile/_actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Mail, 
  Loader, 
  Save, 
  Globe
} from "lucide-react";

// Profile edit schema
const profileEditSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  country: z.string().min(1, "Please select a country"),
});

type ProfileEditFormData = z.infer<typeof profileEditSchema>;

interface User {
  id: string;
  firstName: string | null;
  lastName: string | null;
  country: string | null;
  name: string | null;
  email: string;
  image: string | null;
}

interface Country {
  value: string;
  label: string;
}

interface ProfileEditFormProps {
  user: User;
  countries: Country[];
}

export function ProfileEditForm({ user, countries }: ProfileEditFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
    watch,
  } = useForm<ProfileEditFormData>({
    resolver: zodResolver(profileEditSchema),
    defaultValues: {
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      country: user.country || "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: ProfileEditFormData) => {
    startTransition(async () => {
      try {
        await updateProfile(data);
        toast.success("Profile updated successfully!");
        router.push("/dashboard/profile");
      } catch (error) {
        console.error("Profile update error:", error);
        const errorMessage = error instanceof Error ? error.message : "Failed to update profile";
        toast.error(errorMessage);
      }
    });
  };

  return (
    <form id="profile-edit-form" onSubmit={handleSubmit(onSubmit)} className="space-y-8">

      {/* Personal Information Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <User className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
              First Name *
            </Label>
            <Input
              id="firstName"
              {...register("firstName")}
              placeholder="Enter your first name"
              className={`h-12 ${errors.firstName ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'}`}
            />
            {errors.firstName && (
              <p className="text-sm text-red-600">{errors.firstName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
              Last Name *
            </Label>
            <Input
              id="lastName"
              {...register("lastName")}
              placeholder="Enter your last name"
              className={`h-12 ${errors.lastName ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'}`}
            />
            {errors.lastName && (
              <p className="text-sm text-red-600">{errors.lastName.message}</p>
            )}
          </div>
        </div>
      </div>

      <Separator className="bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* Contact Information Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="country" className="text-sm font-medium text-gray-700">
            Country *
          </Label>
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className={`cursor-pointer w-full h-12 ${errors.country ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'}`}>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-gray-500" />
                    <SelectValue placeholder="Select your country" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.country && (
            <p className="text-sm text-red-600">{errors.country.message}</p>
          )}
        </div>
      </div>

      <Separator className="bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* Form Actions */}
      <div className="pt-6">
        <Button
          type="submit"
          disabled={isPending || !isValid || !isDirty}
          className="cursor-pointer w-full h-14 bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg font-semibold"
        >
          {isPending ? (
            <>
              <Loader className="w-5 h-5 animate-spin mr-2" />
              Saving Changes...
            </>
          ) : (
            <>
              <Save className="w-5 h-5 mr-2" />
              Save Changes
            </>
          )}
        </Button>
      </div>
    </form>
  );
}