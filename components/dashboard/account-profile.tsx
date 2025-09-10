import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Mail, 
  User, 
  Shield, 
  MapPin,
  Edit,
} from "lucide-react"
import Link from "next/link"
import { ProfileInfoItem } from "./profile-info-item"
import { getUserInitials } from "@/lib/utils"

interface User {
  firstName: string | null
  lastName: string | null
  country: string | null
  name: string | null
  email: string
  image: string | null
}

interface AccountProfileProps {
  user: User
}

export function AccountProfile({ user }: AccountProfileProps) {
  const displayName = user.name || "Unknown User"
  const initials = getUserInitials(displayName)

  return (
    <Card className="group lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100/80 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:border-blue-200/50 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <CardHeader className="relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200 rounded-2xl transition-all duration-300 group-hover:scale-110">
            <User className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
              Profile Information
            </CardTitle>
            <CardDescription className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
              Your personal details and contact information
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
          <div className="relative group/avatar">
            <Avatar className="h-24 w-24 mx-auto sm:mx-0 ring-2 ring-blue-100/50 group-hover/avatar:ring-blue-200 transition-all duration-300">
              <AvatarImage src={user.image || ""} alt={displayName} />
              <AvatarFallback className="text-xl font-semibold bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600">
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>
          
          <div className="text-center sm:text-left space-y-2 flex-1">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">{displayName}</h2>
            <p className="text-gray-600 flex items-center justify-center sm:justify-start gap-2">
              <div className="p-1 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg">
                <Mail className="h-4 w-4 text-emerald-500" />
              </div>
              {user.email}
            </p>
          </div>
        </div>

        <Separator className="my-6 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* Profile Details */}
        <div className="grid gap-1 sm:gap-2">          
          <ProfileInfoItem
            label="First Name"
            value={user.firstName || "Not provided"}
          />
          
          <ProfileInfoItem
            label="Last Name"
            value={user.lastName || "Not provided"}
          />
          
          <ProfileInfoItem
            label="Country"
            value={user.country?.toUpperCase() || "Not specified"}
            icon={MapPin}
          />
        </div>

        <Separator className="my-6 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/dashboard/profile/edit" className="flex-1">
            <Button 
              variant="outline" 
              className="group/btn w-full cursor-pointer h-12 font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-gray-100/80 bg-white/80 backdrop-blur-sm hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 text-gray-700 hover:text-blue-700 rounded-xl shadow-sm hover:shadow-md hover:border-blue-200/50 relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="flex items-center justify-center gap-2">
                <div className="p-1 bg-gradient-to-br from-blue-50 to-blue-100 group-hover/btn:from-blue-100 group-hover/btn:to-blue-200 rounded-lg transition-all duration-300 group-hover/btn:scale-110">
                  <Edit className="h-4 w-4 text-blue-500" />
                </div>
                Edit Profile
              </div>
            </Button>
          </Link>
          
          <Link href="/dashboard/profile/security" className="flex-1">
            <Button 
              variant="outline" 
              className="group/btn w-full cursor-pointer h-12 font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-gray-100/80 bg-white/80 backdrop-blur-sm hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 text-gray-700 hover:text-green-700 rounded-xl shadow-sm hover:shadow-md hover:border-green-200/50 relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-400 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="flex items-center justify-center gap-2">
                <div className="p-1 bg-gradient-to-br from-green-50 to-green-100 group-hover/btn:from-green-100 group-hover/btn:to-green-200 rounded-lg transition-all duration-300 group-hover/btn:scale-110">
                  <Shield className="h-4 w-4 text-green-500" />
                </div>
                Security Settings
              </div>
            </Button>
          </Link>
        </div>
      </CardContent>
      
      {/* Hover accent line for card */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </Card>
  )
}