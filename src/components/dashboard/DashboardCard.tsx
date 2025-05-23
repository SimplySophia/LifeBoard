"use client"

import { Card, CardContent } from "../ui/card"
import { motion } from "framer-motion"

interface DashboardCardProps {
  title: string
  value: number
  number?: string
  badge?: string
  description?: string
  bgColor?: string
  darkBgColor?: string
  delay?: number // delay in seconds
}

const DashboardCard = ({
  title,
  value,
  number,
  badge,
  description = "Last updated 3 mins ago",
  bgColor = "bg-slate-100",
  darkBgColor = "dark:bg-slate-800",
    delay = 0, 
}: DashboardCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" , delay }}
      className={`p-5 pb-0 flex flex-col justify-between items-start shadow-md rounded-lg ${bgColor} ${darkBgColor}`}
    >
      <Card className="w-full bg-transparent shadow-none">
        <CardContent className="p-0">
          <h3 className="text-2xl font-semibold text-slate-600 dark:text-white">{title}</h3>
          <h3 className="text-4xl font-bold text-slate-800 dark:text-white">{value}</h3>

          {badge && (
            <span className="text-xs font-medium bg-green-200 dark:bg-green-700 text-green-800 dark:text-white px-2 py-1 rounded-full">
              {badge}
            </span>
          )}

          {number && (
            <h3 className="text-sm font-semibold text-slate-700 dark:text-gray-300">
              {number}
            </h3>
          )}

          <p className="text-sm text-slate-500 dark:text-gray-400">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default DashboardCard
