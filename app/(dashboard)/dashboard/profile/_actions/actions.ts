"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { headers } from "next/headers";
import { profileEditSchema } from "@/lib/zodSchemas";
import { revalidatePath } from "next/cache";

interface ProfileUpdateResult {
  success: true;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    country: string;
  };
}

export async function updateProfile(data: unknown): Promise<ProfileUpdateResult> {
  const validatedData = profileEditSchema.parse(data);
  
  const headersList = await headers();
  const session = await auth.api.getSession({ 
    headers: headersList 
  });
  
  if (!session?.user?.id) {
    throw new Error("Not authenticated");
  }

  const { firstName, lastName, country } = validatedData;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        country: country.toLowerCase(),
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        country: true,
      },
    });

    revalidatePath("/dashboard/profile");
    revalidatePath("/dashboard/profile/edit");

    return { 
      success: true, 
      user: updatedUser as ProfileUpdateResult['user']
    };
  } catch (error) {
    console.error("Profile update error:", error);
    
    if (error instanceof Error) {
      throw error;
    }
    
    throw new Error("Failed to update profile");
  }
}