import { Metadata } from "next";
import { cache } from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { ProfileEditForm } from "@/components/dashboard/profile-edit-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, ArrowLeft } from "lucide-react";
import countriesData from "world-countries";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bookly | Edit Profile",
  description: "Edit your profile information and preferences",
};

const getUserData = cache(async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user?.id) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      country: true,
      name: true,
      email: true,
      image: true,
    },
  });

  if (!user) {
    redirect("/login");
  }

  return user;
});

export default async function EditProfilePage() {
  const user = await getUserData();
  
  // Prepare countries list for the form
  const countries = countriesData
    .map((country) => ({
      value: country.cca2.toLowerCase(),
      label: country.name.common,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 flex flex-col pb-6">
        {/* Back Navigation */}
        <div className="p-6 pb-0">
          <Link 
            href="/dashboard/profile" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm font-medium">Back to Profile</span>
          </Link>
        </div>
        
        {/* Header Section */}
        <div className="p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                Edit Profile
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Update your personal information and account preferences
              </p>
            </div>
          </div>
        </div>

        {/* Edit Form Section */}
        <div className="px-6">
          <div className="max-w-4xl">
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      Profile Information
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      Update your personal details and contact information
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ProfileEditForm user={user} countries={countries} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}