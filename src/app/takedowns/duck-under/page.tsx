import Image from "next/image";
import { FIRST_STEP_IMG_SRC } from "./duck-under.constants";

export default function DuckUnderPage() {
  return (
    <main className="min-h-screen p-4 flex flex-col items-center gap-8">
      <h1 className="text-4xl font-bold">Duck under</h1>
      <a href="https://www.youtube.com/watch?v=Ww-SsGOHemY&t=41s">Video instruction</a>
      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">Steps:</h2>
        <ul className="list-disc flex flex-col gap-3">
          <li>
            If you&apos;re right-handed, leave your hand on the top of the lower head, not the neck
          </li>
          <Image
            src={FIRST_STEP_IMG_SRC}
            alt="First step of duck under"
            width={605}
            height={530}
            className="w-full md:aspect-square md:object-cover"
          />
          <li>With your other arm, put your palm on his bicep pushing his arm away</li>
          <li>Use push pull theory</li>
          <li>Getting your head past their armpit is imperative</li>
        </ul>
      </section>
    </main>
  )
}