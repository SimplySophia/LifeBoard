"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const academics = [
  {
    title: "HND, Computer Science",
    institution: "Kenule Beeson Saro-Wiwa Polytechnic",
    duration: "2019 – 2024",
    badge: "Degree",
  },
  {
    title: "Frontend Web Development Bootcamp",
    institution: "TechyJaunt",
    duration: "Summer 2023",
    badge: "Certificate",
  },
]

const experience = [
  {
    title: "Frontend Intern",
    company: "Best Brain",
    duration: "May – August 2024",
    badge: "Internship",
  },
  {
    title: "Freelance Web Developer",
    company: "Upwork",
    duration: "2024 – Present",
    badge: "Freelance",
  },
]

export default function AcademicExperience() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-3">Education</h2>
        <ul className="space-y-4">
          {academics.map((item, i) => (
            <motion.li
              key={i}
              className="p-4 rounded-lg shadow-sm border dark:border-slate-700"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.institution}</p>
              <p className="text-sm">{item.duration}</p>
              <Badge className="mt-1">{item.badge}</Badge>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-3">Professional Experience</h2>
        <ul className="space-y-4">
          {experience.map((item, i) => (
            <motion.li
              key={i}
              className="p-4 rounded-lg shadow-sm border dark:border-slate-700"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.company}</p>
              <p className="text-sm">{item.duration}</p>
              <Badge className="mt-1">{item.badge}</Badge>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}