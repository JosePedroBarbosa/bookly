import { Metadata } from "next";
import { cache } from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { AccountProfile } from "@/components/dashboard/account-profile";
import { AccountActivity } from "@/components/dashboard/account-activity";

export const metadata: Metadata = {
  title: "Bookly | Dashboard",
  description: "Your personal dashboard overview",
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

  return (
    <div className="flex flex-col pb-6">
      <div className="p-6 mb-2">
        <DashboardHeader
          title="My Account"
          description="Manage your personal information and account settings"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3 px-6">
        <AccountProfile user={user} />
        <AccountActivity user={user} />
      </div>
    </div>
  );
}
