import { Metadata } from "next";
import Link from 'next/link'
import { DAILY_DECEMBER_ROUTE, DUCK_UNDER_ROUTE, NO_GI_EZEKIEL_CHOKE_TIKTOK, PASSING_GUARD_ROUTE, TRANSITION_BREAKING_GUARD_LINK, TRANSITION_SIDECONTROL_NORTHSOUTH_LINK, TRANSITION_SWEEP_MOUNT_CLOSED_GUARD_LINK } from "@/shared/constants/global.constants";

export const metadata: Metadata = {
  title: 'BJJ Basics - Home',
  description: 'Welcome to the home page of BJJ Basics, your resource for learning Brazilian Jiu-Jitsu techniques.',
};

export default function MainPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="text-4xl font-bold">Welcome to BJJ Basics</h1>
      <section className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold">Basics</h2>
        <article>
          <h4 className="text-xl font-semibold">Useful terms</h4>
          <ul className="flex flex-col gap-2 ml-8 mt-4 list-disc p-2">
            <li><strong>Guard:</strong> A position where one practitioner is on their back controlling the opponent with their legs.</li>
            <li><strong>Passing guard:</strong> The act of moving from inside an opponent&apos;s guard to a more dominant position.</li>
            <li><strong>Side control:</strong> A dominant position where one practitioner is on top, perpendicular to the opponent.</li>
            <li><strong>Takedown:</strong> A technique used to bring an opponent to the ground from a standing position.</li>
          </ul>
        </article>
        <article className="flex flex-col gap-3">
          <h4 className="text-xl font-semibold">Techniques</h4>
          <nav>
            <Link className="underline" href={PASSING_GUARD_ROUTE}>Passing guard</Link>
          </nav>
        </article>
        <article className="flex flex-col gap-3">
          <h4 className="text-xl font-semibold">Daily notes</h4>
          <nav>
            <Link className="underline" href={DAILY_DECEMBER_ROUTE}>Dec 2025</Link>
          </nav>
        </article>
        <article className="flex flex-col gap-3">
          <h4 className="text-xl font-semibold">Things to try</h4>
          <ul>
            <li>Try armbar from mount</li>
            <li>Try guillotine</li>
            <li>Try darce choke from north south</li>
            <li>Transition from mount to back mount</li>
            <li>Transition from side control to knee on belly</li>
            <li>Setup an arm no hi ezekiel choke from mount <a href={NO_GI_EZEKIEL_CHOKE_TIKTOK}>TikTok</a></li>
          </ul>
          <article>
            <h4>Go from sidecontrol to north south</h4>
            <a href={TRANSITION_SIDECONTROL_NORTHSOUTH_LINK}>Side control to north south link</a>
            <ul>
              <li>Initialize from side control with your collarbone pushing on his ribs</li>
              <li>Note that you need your leg under his arm</li>
              <li>Pass your north side arm that wraps under his neck to move the arm over his neck</li>
              <li>Drop your hips so his arm trapped ir near his head</li>
              <li>Extend your legs and drop your hips over his arm</li>
              <li>Then start transitioning into north south with the south arm on his hips to avoid the opponent to turn</li>
            </ul>
          </article>

          <article>
            <h4>Pass the guard</h4>
            <a href={TRANSITION_BREAKING_GUARD_LINK}>Breaking guard link</a>
            <ul>
              <li>Position your body as away as possible with your back aligned (espalda derechita)</li>
              <li>Put your strong leg between his legs</li>
              <li>Pin and stretch to break closed guard</li>
              <li>Pin one leg to the mat and be aware of the other leg, underhook it may be an option</li>
              <li>Start passing with the leg next the opponent</li>
              <li>move your grips into the head and shoulders</li>
              <li>Use your other leg to stretch it and stabilize the transition to finally pass your leg trapped into side control</li>
            </ul>
          </article>

          <article>
            <h4>Roll from mount to closed guard</h4>
            <a href={TRANSITION_SWEEP_MOUNT_CLOSED_GUARD_LINK}>Roll from mount to closed guard link</a>
            <ul>
              <li>Me being on bottom</li>
              <li>Take one arm and pass his collarbone, his chin and wrap his arm with your armpit</li>
              <li>With your arm wrapping his arm, apply downward pressure into his elbow to avoid the opponent to post</li>
              <li>Use your leg of the side of the arm pushing his leg into our arm trapped</li>
              <li>Chop your arm into his armpit with an angle of 11 or 10. Your head being 12 and your legs being 6</li>
              <li>Bridge off the opposite foot</li>
              <li>Just roll until you are in his closed guard</li>
            </ul>
          </article>
        </article>
      </section>
      <section className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold">Takedowns</h2>
        <nav className="list-disc p-2">
          <Link className="underline" href={DUCK_UNDER_ROUTE}>Duck under</Link>
        </nav>
      </section>
    </main>
  );
}
