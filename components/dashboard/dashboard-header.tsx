"use client"

import React from "react"

interface DashboardHeaderProps {
  title: string
  description?: string
}

export function DashboardHeader({
  title,
  description,
}: DashboardHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}