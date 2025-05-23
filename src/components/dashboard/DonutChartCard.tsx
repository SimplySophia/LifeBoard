"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"
import { motion } from "framer-motion"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

interface DonutChartCardProps {
  title: string
  subtitle: string
  data: { name: string; value: number; fill: string }[]
  label: string
  progress?: number
  status?: "In Progress" | "Completed" | "Pending"
  delay?: number
}

export default function DonutChartCard({
  title,
  subtitle,
  data,
  label,
  progress,
  status,
  delay = 0,
}: DonutChartCardProps) {
  const total = React.useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.value, 0)
  }, [data])

  const config = data.reduce((acc, item) => {
    acc[item.name] = { label: item.name, color: item.fill }
    return acc
  }, {} as ChartConfig)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={config}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {total}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            {label}
                          </tspan>
                        </text>
                      )
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing {label.toLowerCase()} in the last 6 months
          </div>

          {/* Progress Bar */}
          {typeof progress === "number" && (
            <div className="w-full mt-2">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">Progress</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Status Badge */}
          {status && (
            <div className="mt-2 self-start">
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  status === "Completed"
                    ? "bg-green-200 text-green-800"
                    : status === "In Progress"
                    ? "bg-yellow-200 text-yellow-800"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {status}
              </span>
            </div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
