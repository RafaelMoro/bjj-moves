import { RiArrowLeftLine } from "@remixicon/react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Daily progress December 2025',
  description: 'Find daily notes improvements and observations for Brazilian Jiu-Jitsu in December 2025.',
};

export default function DailyDec2025Page() {
  return (
    <div className="min-h-screen p-4">
      <header className="grid grid-cols-3 gap-4">
        <Link href="/">
          <RiArrowLeftLine />
        </Link>
        <h1 className="text-4xl font-bold">Daily notes February 2026</h1>
      </header>

      <main className="mt-10 p-6 flex flex-col gap-8">
        <article className="flex flex-col gap-5">
          <h4 className="text-2xl font-bold">Monday, Feb 9th</h4>

          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">Back mount</p>
            <ul className="list-disc list-inside">
              <li>We got primary hand and secondary hand. The primary hand is the one that will strangle</li>
              <li>If the oponent slides to the weak hand, then put your head next to your oponent between the mat and his head and don&apos;t let him to pin his head on the mat</li>
              <li>If the oponent slides to the strong hand, then don&apos;t let him to escape his head from your hook or arm pining his head</li>
              <li>With the secondary hand would attack the primary hand of the oponent always, that&apos;s first priority. Always control the primary hand</li>
            </ul>
          </div>
        </article>

        <hr />

        <article className="flex flex-col gap-5">
          <h4 className="text-2xl font-bold">Friday, Feb 12th</h4>

          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">Back mount and turtle position</p>
            <ul className="list-disc list-inside">
              <li>When your oponent start escaping, you can push him in a way to make him to change into turtle position</li>
              <li>When you go attacking turtle position, flat his back and get your leg underhooks</li>
              <li>When the back is flatened, then look for the RNC submission</li>
            </ul>
          </div>
        </article>

        <hr />

        <article className="flex flex-col gap-5">
          <h4 className="text-2xl font-bold">Overall improvement notes</h4>

          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">Defending on bottom starting fight</p>
            <ul className="list-disc list-inside">
              <li>Don&apos;t let your oponent to flatten your legs to the side</li>
              <li>Look for their ankles and start destabilizing their posture</li>
              <li>Look for sweeps</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">Attacking standing up on start fight</p>
            <ul className="list-disc list-inside">
              <li>Look for grips</li>
              <li>Collapse their legs</li>
              <li>Don&apos;t fall on their closed guard</li>
            </ul>
          </div>
        </article>

        <section className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold">Next things to try</h2>
          <ul className="flex flex-col gap-2">
            <li>Keep practicing the armbar from mount</li>
            <li>Keep trying the d&apos;arce choke from side control</li>
            <li>Keep transitioning into north south and look for the north south choke</li>
            <li>Keep practicing the defense to avoid the oponent to pass your guard</li>
            <li>Keep practicing the attack and pass guard</li>
          </ul>
        </section>
      </main>
    </div>
  )
}