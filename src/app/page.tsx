import { Home } from "@/features/Home";
import { DUCK_UNDER_ROUTE } from "@/shared/constants/global.constants";
import Link from 'next/link'

export default function MainPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="text-4xl font-bold">Welcome to BJJ Moves</h1>
      <section className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold">Takedowns</h2>
        <nav className="list-disc p-2">
          <Link className="underline" href={DUCK_UNDER_ROUTE}>Duck under</Link>
        </nav>
      </section>
      <Home />
    </main>
  );
}
