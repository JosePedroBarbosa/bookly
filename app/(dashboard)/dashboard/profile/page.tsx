import { Metadata } from "next";
import { cache } from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit, Calendar, MapPin, Mail, User, Clock, CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getUserInitials, formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Bookly | Profile",
  description: "Manage your profile and account settings",
};

const getUserAccountData = cache(async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user?.id) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      firstName: true,
      lastName: true,
      country: true,
      name: true,
      email: true,
      image: true,
      createdAt: true,
      onboardedAt: true,
    },
  });

  if (!user) {
    redirect("/login");
  }

  return user;
});

export default async function ProfilePage() {
  const user = await getUserAccountData();
  const displayName = user.name || "Unknown User";
  const initials = getUserInitials(displayName);
  const memberSince = formatDate(user.createdAt);
  const isOnboarded = !!user.onboardedAt;

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 flex flex-col pb-6">
        {/* Back Navigation */}
        <div className="p-6 pb-0">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm font-medium">Back to Dashboard</span>
          </Link>
        </div>
        
        {/* Header Section */}
        <div className="p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                My Profile
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Manage your personal information, account settings, and preferences
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/dashboard/profile/edit">
                <Button className="cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Profile Overview Card */}
        <div className="px-6 mb-8">
          <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                {/* Avatar Section */}
                <div className="flex flex-col items-center lg:items-start">
                  <div className="relative group">
                    <Avatar className="h-32 w-32 ring-4 ring-blue-100/50 group-hover:ring-blue-200 transition-all duration-300 shadow-lg">
                      <AvatarImage src={user.image || ""} alt={displayName} />
                      <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg border border-gray-200">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
                  <Badge variant="secondary" className="mt-4 bg-green-50 text-green-700 border-green-200">
                    {isOnboarded ? "Profile Complete" : "Setup Required"}
                  </Badge>
                </div>

                {/* User Info Section */}
                <div className="flex-1 space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {displayName}
                    </h2>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span className="text-lg">{user.email}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          <User className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Full Name</p>
                          <p className="font-medium text-gray-900">
                            {user.firstName && user.lastName 
                              ? `${user.firstName} ${user.lastName}` 
                              : "Not provided"
                            }
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-50 rounded-lg">
                          <MapPin className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Country</p>
                          <p className="font-medium text-gray-900">
                            {user.country?.toUpperCase() || "Not specified"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-50 rounded-lg">
                          <Calendar className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Member Since</p>
                          <p className="font-medium text-gray-900">{memberSince}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-50 rounded-lg">
                          <Clock className="w-4 h-4 text-orange-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Onboarded At</p>
                          <p className="font-medium text-gray-900">
                            {user.onboardedAt ? formatDate(user.onboardedAt) : "Never"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}