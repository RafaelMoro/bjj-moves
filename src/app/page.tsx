import { Metadata } from "next";
import Link from 'next/link'
import { DUCK_UNDER_ROUTE, PASSING_GUARD_ROUTE } from "@/shared/constants/global.constants";

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
