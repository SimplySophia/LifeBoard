"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const skills = {
  "Frontend": ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  "Backend": ["Node.js", "Express", "MongoDB"],
  "Tools & Others": ["Git", "Figma", "Framer Motion", "Vercel"]
}

export default function SkillsSection() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {Object.entries(skills).map(([category, items], idx) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 * idx }}
          className="border rounded-lg p-4 shadow-sm dark:border-slate-700"
        >
          <h2 className="text-xl font-semibold mb-3">{category}</h2>
          <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <Badge key={skill} variant="outline" className="text-sm px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
