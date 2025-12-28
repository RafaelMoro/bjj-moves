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

      <article className="flex flex-col gap-5">
        <h4 className="text-2xl font-bold">Monday, December 22th</h4>

        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold">What did we do well?</p>
          <ul className="list-disc list-inside">
            <li>Transition from side control to kesa gatame</li>
            <li>Transition from side control to north south</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold">What needs improvement?</p>
          <ul className="list-disc list-inside">
            <li>Isolate the arm in kesa gatame</li>
            <li>Being able to secure the arms in side control, kesa gatame and north south</li>
            <li>Improve escape while being in opponent&apos;s closed guard</li>
            <li>Close contact in open guard</li>
            <li>While passing guard, enter with the knee and lower your body</li>
          </ul>
        </div>
      </article>

      <hr />

      <article className="flex flex-col gap-5">
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

      <section>
        <h2 className="text-3xl font-bold">Next things to try</h2>

        <article className="flex flex-col gap-5">
          <h4 className="text-2xl font-bold">Go from side control to north south</h4>

          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">Steps</p>
            <ul className="list-disc list-inside">
              <li>...</li>
              <li>...</li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  )
}