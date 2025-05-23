// app/api/goals/route.ts

import { NextResponse } from "next/server"
import { goals, Goal } from "@/data/goals"

export async function GET() {
  return NextResponse.json(goals)
}

export async function POST(req: Request) {
  const body = await req.json()
  const newGoal: Goal = {
    title: body.title,
    date: body.date,
    status: body.status,
  }
  goals.push(newGoal)
  return NextResponse.json({ message: "Goal added", goal: newGoal })
}
