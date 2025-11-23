import { Metadata } from "next";
import Link from 'next/link'
import { DUCK_UNDER_ROUTE } from "@/shared/constants/global.constants";

export const metadata: Metadata = {
  title: 'BJJ Basics - Home',
  description: 'Welcome to the home page of BJJ Basics, your resource for learning Brazilian Jiu-Jitsu techniques.',
};

export default function MainPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="text-4xl font-bold">Welcome to BJJ Basics</h1>
      <section className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold">Takedowns</h2>
        <nav className="list-disc p-2">
          <Link className="underline" href={DUCK_UNDER_ROUTE}>Duck under</Link>
        </nav>
      </section>
    </main>
  );
}
