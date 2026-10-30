import { RiArrowLeftLine } from "@remixicon/react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Daily progress October 2026',
  description: 'Find daily notes improvements and observations for Brazilian Jiu-Jitsu in October 2026.',
};

export default function DailyOct2026Page() {
  return (
    <div className="min-h-screen p-4">
      <header className="grid grid-cols-3 gap-4">
        <Link href="/">
          <RiArrowLeftLine />
        </Link>
        <h1 className="text-4xl font-bold">Daily notes October 2026</h1>
      </header>

      <main className="mt-10 p-6 flex flex-col gap-8">
        <article className="flex flex-col gap-5">
          <h4 className="text-2xl font-bold">Thursday, Oct 29th</h4>

          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">Attacks from side control</p>
            <ul className="list-disc list-inside">
              <li>Spinning armbar</li>
              <li>Kimura</li>
              <li>One-hand kimura</li>
              <li>Americana</li>
              <li>Straight armbar</li>
              <li>Arm triangle</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">Seated armbar from side control</p>
            <p>When the oponent hugs my arm in the frame against his neck:</p>
            <ol className="list-decimal list-inside">
              <li>Secure the arm by putting my hand on the inside of his elbow</li>
              <li>Mount the south leg</li>
              <li>Pass the north leg next to his neck</li>
              <li>Sit up</li>
              <li>Two fingers down, then apply the armbar</li>
            </ol>
          </div>
        </article>
      </main>
    </div>
  )
}
