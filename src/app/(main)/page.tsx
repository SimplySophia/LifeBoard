import DashboardCard from "@/components/dashboard/DashboardCard";
import Image from "next/image";
import DonutChartsSection from "./chartsWrapper/DonutChartsSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex flex-col">
      <div className="flex items-center justify-around bg-secondary dark:bg-slate-800 shadow-md rounded-lg p-4">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-2xl font-semibold text-primary text-left">Welcome, Back...</h2>
          <p className="text-xl font-semibold">I am Sophia, ready to learn grow and have fun!</p>
          <Link href="/goals" className="bg-secondary shadow-[0_0_10px_hsl(var(--color-primary))] rounded-none px-4 py-2 transition-all duration-300 ease-in hover:shadow-[0_0_15px_hsl(var(--color-primary))]">Generate Study Plan</Link>
        </div>
        <Image
          src="/images/avatar3.png"
          alt="avatar"
          width={200}
          height={200}
          className="rounded-full shadow-md mt-4"
          />
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <DashboardCard
          title="Courses Enrolled"
          value={8}
          badge="On Track"
          description="You’re doing great!"
          bgColor="bg-pink-100"
          darkBgColor="dark:bg-pink-900"
          delay={0.1}
        />
        <DashboardCard
          title="Sophie's mood"
          value={10}
          badge="Happy"
          description="Feeling happy 😊"
          bgColor="bg-blue-100"
          darkBgColor="dark:bg-blue-900"
          delay={0.4}
        />
        <DashboardCard
          title="Weekly Goal"
          value={3}
          number="Target: 5 hours study"
          badge="60% Complete"
          description="Keep it up!"
          bgColor="bg-fuchsia-300"
          darkBgColor="dark:bg-fuchsia-800"
          delay={0.6}
        />
        </div>
        <div className="flex flex-col gap-2">
      </div>
      <DonutChartsSection />
    </div>
    </>
  )
}
