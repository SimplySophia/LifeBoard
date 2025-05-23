"use client"

import DonutChartCard from "@/components/dashboard/DonutChartCard"

const academicsExperienceData = [
  { name: "Frontend Dev", value: 180, fill: "#36A2EB" },
  { name: "Backend Basics", value: 100, fill: "#FFCE56" },
  { name: "UI/UX Design", value: 80, fill: "#FF6384" },
]

const skillsData = [
  { name: "React", value: 140, fill: "#4BC0C0" },
  { name: "Tailwind", value: 100, fill: "#9966FF" },
  { name: "Next.js", value: 90, fill: "#FF9F40" },
]

const milestonesGoalsData = [
  { name: "Portfolio Site", value: 1, fill: "#E7E9ED" },
  { name: "Certifications", value: 2, fill: "#36A2EB" },
  { name: "Job Applications", value: 5, fill: "#FF6384" },
]

export default function DonutChartsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <DonutChartCard
        title="Academics & Experience"
        subtitle="Learning Focus Areas"
        data={academicsExperienceData}
        label="Hours"
        progress={60}
        status="In Progress"
      />
      <DonutChartCard
        title="Skills Mastered"
        subtitle="Technical Skillset Breakdown"
        data={skillsData}
        label="Skill Units"
        progress={80}
        status="Completed"
      />      

      <DonutChartCard
        title="Milestones & Goals"
        subtitle="Progress This Quarter"
        data={milestonesGoalsData}
        label="Items"
        progress={45}
        status="In Progress"
      />

  </div>
  )
}
