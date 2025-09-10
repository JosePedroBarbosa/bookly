import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Separator } from "@/components/ui/separator"
import { 
  CalendarDays, 
  Clock,
  UserCheck,
} from "lucide-react"
import { formatDate, formatRelativeDate } from "@/lib/utils"

interface User {
  createdAt: Date
  onboardedAt: Date | null
}

interface AccountActivityProps {
  user: User
}

export function AccountActivity({ user }: AccountActivityProps) {
  return (
    <Card className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100/80 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:border-purple-200/50 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <CardHeader className="relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 group-hover:from-purple-100 group-hover:to-purple-200 rounded-2xl transition-all duration-300 group-hover:scale-110">
            <Clock className="w-6 h-6 text-purple-500" />
          </div>
          <div>
            <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
              Account Activity
            </CardTitle>
            <CardDescription className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
              Important dates and milestones
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 relative z-10">
        {/* Account Created */}
        <div className="space-y-2 p-4 bg-gradient-to-br from-indigo-50/50 to-indigo-100/50 rounded-xl border border-indigo-100/60 transition-all duration-300 hover:shadow-sm">
          <div className="flex items-center gap-2 text-sm font-medium">
            <div className="p-1 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
              <CalendarDays className="h-4 w-4 text-indigo-500" />
            </div>
            Account Created
          </div>
          <div className="pl-6 space-y-1">
            <p className="text-sm text-gray-700 font-medium">
              {formatDate(user.createdAt)}
            </p>
            <p className="text-xs text-gray-500">
              {formatRelativeDate(user.createdAt)}
            </p>
          </div>
        </div>

        {user.onboardedAt && (
          <div className="space-y-2 p-4 bg-gradient-to-br from-green-50/50 to-green-100/50 rounded-xl border border-green-100/60 transition-all duration-300 hover:shadow-sm">
            <div className="flex items-center gap-2 text-sm font-medium">
              <div className="p-1 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                <UserCheck className="h-4 w-4 text-green-600" />
              </div>
              Setup Completed
            </div>
            <div className="pl-6 space-y-1">
              <p className="text-sm text-gray-700 font-medium">
                {formatDate(user.onboardedAt)}
              </p>
              <p className="text-xs text-gray-500">
                {formatRelativeDate(user.onboardedAt)}
              </p>
            </div>
          </div>
        )}
      </CardContent>
      
      {/* Hover accent line for card */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </Card>
  )
}