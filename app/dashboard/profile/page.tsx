"use client";

import { authClient } from "@/lib/auth-client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Metadata } from "next";
import { cache } from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { prisma } from "@/lib/db";

export const metadata: Metadata = {
  title: "Bookly | Dashboard",
  description: "Your personal dashboard overview",
};

const getDashboardData = cache(async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user?.id) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      name: true,
      firstName: true,
      lastName: true,
      onboardedAt: true,
      createdAt: true,
    },
  });

  return { user, session };
});

export default async function ProfilePage() {
  const data = await getDashboardData();

  if (!data?.user) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-muted-foreground">Unable to load dashboard data</p>
      </div>
    );
  }

  const { user } = data;

  return (
    <div className="p-6 flex justify-left">
      <Card className="w-full max-w-2xl shadow-lg rounded-2xl">
        <CardHeader className="flex items-center gap-4">
          {user.image ? (
            <Image
              src={user.image}
              alt={user.name || "User Avatar"}
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xl">
              {user.name?.charAt(0) || "U"}
            </div>
          )}
          <div>
            <CardTitle className="text-2xl">{user.name}</CardTitle>
            {/* <p className="text-gray-600">{user.email}</p> */}
          </div>
        </CardHeader>

        <CardContent className="space-y-3 text-left">
          {/* Campos atuais */}
          <p><span className="font-medium">Email:</span> {user}</p>
          
          {/* Campos futuros */}
          <p><span className="font-medium">First Name:</span> {user.firstName || "-"}</p>
          <p><span className="font-medium">Last Name:</span> {user.lastName || "-"}</p>
          <p><span className="font-medium">Country:</span> {user.country || "-"}</p>
        </CardContent>
      </Card>
    </div>
  );
}