// data/goals.ts

export interface Goal {
  title: string;
  date: string; 
  status: "Planned" | "In Progress" | "Completed";
}

export const goals: Goal[] = [
  { title: "Finish dashboard project", date: "2025-06-01", status: "In Progress" },
  { title: "Complete React course", date: "2025-09-01", status: "In Progress" },
  { title: "Contribute to open source", date: "2025-10-01", status: "Planned" },
  { title: "Build a portfolio site", date: "2025-07-01", status: "Planned" },
  { title: "Apply for internships", date: "2025-08-01", status: "Planned" },
];



