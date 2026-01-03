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
        <h1 className="text-4xl font-bold">Daily notes January 2026</h1>
      </header>

      <main className="mt-10 flex flex-col items-center gap-8">
        <article className="flex flex-col gap-5">
          <h4 className="text-2xl font-bold">Thursday, Jan 1st</h4>

          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">What did we do well?</p>
            <ul className="list-disc list-inside">
              <li>Transition from side control to kesa gatame</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">What did we saw?</p>
            <ul className="list-disc list-inside">
              <li>Check again open guard and de la riva guard</li>
              <li>Gi choke from back mount</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">What needs improvement?</p>
            <ul className="list-disc list-inside">
              <li>I gassed out</li>
              <li>The opponent passed my guard</li>
              <li>I took a lot of guillotines</li>
            </ul>
          </div>
        </article>

        <hr />

        {/* <article className="flex flex-col gap-5">
          <h4 className="text-2xl font-bold">Tuesday, December 23th</h4>

          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">What did we do well?</p>
            <ul className="list-disc list-inside">
              <li>Defend americana</li>
              <li>Defend armbar</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">What needs improvement?</p>
            <ul className="list-disc list-inside">
              <li>I got my guard passed down</li>
              <ul className="list-disc pl-4 list-inside">
                <li>I didn&apos;t put my foot in my opponent&apos;s hips</li>
                <li>Always bring your legs into your opponent</li>
              </ul>
              <li>The opponent passed from side control to mount</li>
              <li>I couldn&apos;t pass the opponent&apos;s guard and finished on triangles or armbars</li>
              <li>I couldn&apos;t finished the darce choke from north south</li>
              <li>I didn&apos;t finished the americana or armbar in kesa gatame</li>
            </ul>
          </div>
        </article>

        <article className="flex flex-col gap-5">
          <h4 className="text-2xl font-bold">Wednesday, December 31st</h4>

          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">What did we do well?</p>
            <ul className="list-disc list-inside">
              <li>My first submission from back mount with Rear naked choke</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">What did we saw?</p>
            <ul className="list-disc list-inside">
              <li>5 steps of the mount</li>
              <li>Americana with armbar from side control</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">What needs improvement?</p>
            <ul className="list-disc list-inside">
              <li>I gassed out</li>
              <li>I let my guard being passed down</li>
              <ul className="list-disc pl-4 list-inside">
                <li>I didn&apos;t put my foot in my opponent&apos;s hips</li>
                <li>Always bring your legs into your opponent</li>
              </ul>
              <li>I couldn&apos;t pass the opponent&apos;s guard and finished on triangles or armbars</li>
            </ul>
          </div>
        </article> */}

        <section className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold">Next things to try</h2>
          <ul className="flex flex-col gap-2">
            <li>Try armbar from mount</li>
            <li>Try triangle choke from mount</li>
            <li>Try guillotine from closed guard</li>
            <li>Try darce choke from north south</li>
            <li>Transition from mount to back mount</li>
            <li>Transition from me being in closed guard into ashi garami</li>
            <li>Scissor sweep from closed guard to mount</li>
            <li>Transition from side control to knee on belly</li>
          </ul>
        </section>
      </main>
    </div>
  )
}