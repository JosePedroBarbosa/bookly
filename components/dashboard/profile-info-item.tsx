import { LucideIcon } from "lucide-react"

interface ProfileInfoItemProps {
  label: string
  value: string
  icon?: LucideIcon
}

export function ProfileInfoItem({ 
  label, 
  value, 
  icon: Icon 
}: ProfileInfoItemProps) {
  return (
    <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-gradient-to-br from-gray-50/50 to-gray-100/30 hover:from-gray-100/50 hover:to-gray-200/30 transition-all duration-300 hover:shadow-sm group/item">
      <span className="text-sm font-medium flex items-center gap-2">
        {Icon && (
          <div className="p-1 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg group-hover/item:scale-110 transition-all duration-300">
            <Icon className="h-4 w-4 text-orange-500" />
          </div>
        )}
        <span className="text-gray-700">{label}</span>
      </span>
      <span className="text-sm text-gray-600 font-medium text-right">
        {value}
      </span>
    </div>
  )
}