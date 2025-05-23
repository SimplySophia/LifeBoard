"use client"

import { Calendar } from "@/components/ui/calendar"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import type { Goal } from "@/data/goals"

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"


export default function GoalsSection() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [goals, setGoals] = useState<Goal[]>([])
  const [newGoal, setNewGoal] = useState("")

  useEffect(() => {
    fetch("/api/goals")
      .then(res => res.json())
      .then(data => setGoals(data))
  }, [])

  const handleAddGoal = async () => {
  if (!newGoal) return

  const newEntry: Goal = {
    title: newGoal,
    date: new Date().toISOString().split("T")[0],
    status: "Planned",
  }

  await fetch("/api/goals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEntry),
  })

  setGoals(prev => [...prev, newEntry])
  setNewGoal("")
}

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Add New Goal Input */}
      <div className="mb-4 flex flex-col gap-2">
        <input
          type="text"
          placeholder="New goal"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          className="border p-2 text-sm rounded-md flex-1 dark:border-slate-600"
        />
        <button
          onClick={handleAddGoal}
          className="bg-primary text-white px-2 py-1 rounded-md transition-all duration-300 ease-in hover:shadow-[0_0_15px_hsl(var(--color-primary))]"
        >
          Add Goals
        </button>
      </div>

      {/* Calendar Dropdown Section */}
      <div className="border rounded-lg p-1 dark:border-slate-700 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Pick a date</h2>
            <Popover>
            <PopoverTrigger asChild>
               <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"        
                >
                    {selectedDate ? format(selectedDate, "PPP") : "Select a date"}
                </Button>
            </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                     mode="single"
                     selected={selectedDate}
                     onSelect={setSelectedDate}
                     initialFocus
                    />
               </PopoverContent>
           </Popover>
        </div>


      {/* Goals List */}
      <div className="border rounded-lg p-4 w-full dark:border-slate-700 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Upcoming Goals</h2>
        <div className="space-y-2">
          {goals.map((goal, idx) => (
            <motion.div
              key={idx}
              className="p-3 border rounded-md dark:border-slate-600"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{goal.title}</span>
                <Badge variant="outline">{goal.status}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{goal.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
