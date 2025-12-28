import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Daily progress December 2025',
  description: 'Find daily notes improvements and observations for Brazilian Jiu-Jitsu in December 2025.',
};

export default function DailyDec2025Page() {
  return (
    <main className="min-h-screen p-4 flex flex-col items-center gap-8">
      <Link href="/">Go back</Link>
      <h1 className="text-4xl font-bold">Daily notes December 2025</h1>
    </main>
  )
}