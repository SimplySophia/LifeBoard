"use client"

import AuthTabs from "@/components/auth/AuthTabs"
import Image from "next/image"

export default function AuthPage() {
  return (
    <div className=" flex flex-col md:flex-row">
      {/* Welcome Panel */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-gradient-to-br from-purple-400 to-cyan-200 text-white p-10">
        <div className="max-w-md text-center space-y-4">
          <h2 className="text-4xl font-bold">Welcome!</h2>
          <p className="text-lg">
            Sign in or create an account to start your journey.
          </p>
          <Image
            src="/images/hello.jpg"
            alt="Authentication Illustration"
            width={300}
            height={300}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>

      {/* Auth Tabs */}
      <div className="flex-1 flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-900">
        <AuthTabs />
      </div>
    </div>
  )
}
