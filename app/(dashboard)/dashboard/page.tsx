"use client";

import { authClient } from "@/lib/auth-client";
// import { ChartAreaInteractive } from "@/components/sidebar/chart-area-interactive";
// import { SectionCards } from "@/components/sidebar/section-cards";

export default function DashboardPage() {
  const { data: session } = authClient.useSession();
  return (
    <div className="relative z-10 flex flex-col pb-6">
        {/* Header Section */}
        <div className="p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                Dashboard
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Welcome back, {session?.user?.name || session?.user?.email?.split('@')[0] || 'User'}!
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}