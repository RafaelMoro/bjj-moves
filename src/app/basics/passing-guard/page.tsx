import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FIRST_STEP_VIDEO_SRC, FOURTH_STEP_VIDEO_SRC, SECOND_STEP_IMG_SRC, THIRD_STEP_IMG_SRC } from "./passing-guard.constants";

export const metadata: Metadata = {
  title: 'Passing guard',
  description: 'Learn the passing guard technique in Brazilian Jiu-Jitsu.',
};

export default function PassingGuardPage() {
  return (
    <main className="min-h-screen p-4 flex flex-col items-center gap-8">
      <h1 className="text-4xl font-bold">Passing guard</h1>
      <Link href="/">Go back</Link>
      <a href="https://www.youtube.com/watch?v=slQ-imlIU9I&list=PL-immDk5vYqwvmm85QCYuWXM54vVgDB1H&index=2&t=49s" target="_blank" rel="noopener noreferrer">Video instruction</a>
      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold text-center">Steps:</h2>
        <ul className="list-disc flex flex-col items-center gap-3">
          <li>
            Push your palms against below the ribs of your oponent to break the lock on his legs
          </li>
          <video src={FIRST_STEP_VIDEO_SRC} controls muted autoPlay loop className="md:aspect-square md:object-cover w-2xl h-72" />

          <li>
            Staple one knee with your hand which will tilt the body of your opponent to one side. Control the other leg by underhooking it in your armpit
          </li>
          <Image
            src={SECOND_STEP_IMG_SRC}
            alt="First step of duck under"
            width={1306}
            height={641}
            className="md:aspect-square md:object-cover w-2xl h-72"
          />

          <li>
            Then replace your hand with your leg. Start positioning your hands in a way to control the arms of the opponent.
          </li>
          <Image
            src={THIRD_STEP_IMG_SRC}
            alt="First step of duck under"
            width={1345}
            height={630}
            className="md:aspect-square md:object-cover w-2xl h-72"
          />

          <li>
            Start passing your other leg and progress the position to side control
          </li>
          <video src={FOURTH_STEP_VIDEO_SRC} controls muted autoPlay loop className="md:aspect-square md:object-cover w-2xl h-72" />
        </ul>

        <div className="flex flex-col items-center gap-4">
          <p>Complete sequence</p>
          {/* <video src={NINTH_STEP_VIDEO_SRC} controls muted autoPlay loop className="md:aspect-square md:object-cover w-72 h-72" /> */}
        </div>
      </section>
    </main>
  )
}