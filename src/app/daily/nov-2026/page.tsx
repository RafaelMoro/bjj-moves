import { RiArrowLeftLine } from "@remixicon/react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Daily progress November 2026',
  description: 'Find daily notes improvements and observations for Brazilian Jiu-Jitsu in November 2026.',
};

export default function DailyNov2026Page() {
  return (
    <div className="min-h-screen p-4">
      <header className="grid grid-cols-3 gap-4">
        <Link href="/">
          <RiArrowLeftLine />
        </Link>
        <h1 className="text-4xl font-bold">Daily notes November 2026</h1>
      </header>

      <main className="mt-10 p-6 flex flex-col gap-8">
        <article className="flex flex-col gap-5">
          <h4 className="text-2xl font-bold">Monday, Nov 2nd</h4>

          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">Turtle position</p>
            <p className="italic">A correct turtle position has the arms tucked inside the body and the legs open at shoulder distance: not too tight, not too wide.</p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">Turtle reversal into side control</p>
            <p>The oponent is on turtle. I go sideways and put my chest and weight on his hips. Then I enter the wrench with my south leg, setting my knee between his butt and ankle. The wrench sets my ankle on his ankle so mine is perpendicular to his.</p>
            <ol className="list-decimal list-inside">
              <li>Grab his hips on the hip bone</li>
              <li>Step the north leg back along with my weight</li>
              <li>Pull him to roll him over and start fighting for side control</li>
            </ol>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">Anaconda from turtle</p>
            <p>The oponent is on turtle and I&apos;m on one of his sides:</p>
            <ol className="list-decimal list-inside">
              <li>Thread my head-side arm under his neck, through the far armpit</li>
              <li>Lock a gable grip</li>
              <li>Push his tricep to make the grip tighter</li>
              <li>Lock the figure 4 and place my head on the side of his back where I did the gable grip</li>
              <li>Roll to the side where I placed my head</li>
              <li>His head ends around my chest; go towards him, seeking his legs with mine</li>
            </ol>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">Guillotine from turtle</p>
            <p>The oponent is on turtle and I&apos;m in front of him:</p>
            <ol className="list-decimal list-inside">
              <li>Slide my arm in with the palm open facing my chest, wrapping his neck</li>
              <li>Lock an S grip, with the elbow of the wrapping arm facing the ceiling</li>
              <li>Post the leg opposite to the wrapping arm (right arm guillotine, post the left leg)</li>
              <li>Bring him to me like in the guard</li>
              <li>Place the non-posted leg between his hips, and the posted leg on his back and hips</li>
            </ol>
          </div>
        </article>

        <hr />

        <article className="flex flex-col gap-5">
          <h4 className="text-2xl font-bold">Tuesday, Nov 3rd</h4>

          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">Turtle position</p>
            <p>The oponent is on turtle. If he passed my guard in a competition, I can transition to turtle.</p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">Top position in turtle</p>
            <p>Don&apos;t position my body in front of the oponent. Wrap him with my arms at 45 degrees, posted on my toes (not my knees), like a plank with my chest on his back.</p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">Attack from turtle</p>
            <ol className="list-decimal list-inside">
              <li>Chest on his back at 45 degrees, on my toes</li>
              <li>Wrap his neck and his nearest arm, and connect a gable grip</li>
              <li>Move my forearm over his head like a &quot;nelson&quot;</li>
              <li>Pull my nearest arm and elbow into me to reverse him</li>
              <li>Lock the figure 4 of the d&apos;arce</li>
              <li>Finish while looking at his legs</li>
            </ol>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">Defense in turtle</p>
            <ol className="list-decimal list-inside">
              <li>As soon as he wraps me (say, his left arm around my neck), use my right hand to frame, holding that wrist</li>
              <li>Create space with my hand and move my head out of the seatbelt grip</li>
              <li>Change position looking to sit, and bring him into my full guard</li>
            </ol>
          </div>
        </article>
      </main>
    </div>
  )
}
