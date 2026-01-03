/* eslint-disable @next/next/no-img-element */
import { RiArrowLeftLine } from "@remixicon/react";
import Link from "next/link";
import { FIRST_STEP_IMG_SRC, FOURTH_STEP_IMG_SRC, SECOND_STEP_IMG_SRC, THIRD_STEP_VIDEO_SRC } from "./guard-retention.constants";

export default function GuardRetentionPage() {
  return (
    <div className="min-h-screen p-4">
      <header className="grid grid-cols-3 gap-4">
        <Link href="/">
          <RiArrowLeftLine />
        </Link>
        <h1 className="text-4xl font-bold">Guard retention</h1>
      </header>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-[30%_70%] justify-items-center">
        <aside className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-5">References</h2>
          <nav className="flex flex-col items-center gap-3 pl-3">
            <a className="underline" target="_blank" href="https://youtu.be/URGwWYwdoAs?si=19hSAQOz8ztgX-x6">Youtube reference: Guard Retention - How To Never Get Your Guard Passed In Jiu Jitsu by Gordon Ryan</a>
          </nav>
        </aside>
        <main className="flex flex-col gap-8">
          <h3 className="text-3xl font-bold mb-5">Important notes:</h3>
          <ul className="list-disc pl-6 flex flex-col gap-3 text-lg">
            <li>Kuzushi: off balance the oponent</li>
            <li>
              The goal is to transition from a defensive cycle to neutral position to be able to start an offense cycle
            </li>
            <li>
              Do not let the oponent control your head, not in side control, not in mount. That creates you the opportunitty to escape
            </li>
          </ul>

          <ol className="list-decimal pl-6 flex flex-col gap-3">
            <li>
              Create initial stickyness to the oponent, wrap his knee with your hands or hand, take his wrist and ankles
            </li>
            <img
              src={FIRST_STEP_IMG_SRC}
              alt="First step of guard retention"
              width={605}
              height={530}
              className="md:aspect-square md:object-cover w-72 h-72 mb-10"
            />

            <li>
              If he starts turning, wrap your legs into one of his to maintain stickyness
            </li>
            <img
              src={SECOND_STEP_IMG_SRC}
              alt="Second step of guard retention"
              width={605}
              height={530}
              className="md:aspect-square md:object-cover w-72 h-72 mb-10"
            />

            <li>
              Make your grips to feel uncomfortable to the oponent in a sense of using Kuzushi, making him off balance
            </li>

            <li>
              Your primary goal is to keep the oponent in front of you.
              When he passes our legs, correct position to have him in front of you.
            </li>
            <video
              src={THIRD_STEP_VIDEO_SRC}
              controls
              muted
              autoPlay
              loop
              className="md:aspect-square md:object-cover w-2xl h-72"
            />

            <li>
              If he&apos;s not controlling your head, you can use your arms to bring back your legs again
            </li>

            <li>
              Passing your legs in the first battle, controling your neck is the second battle
            </li>

            <li>
              When they&apos;re lowering their position for side control, use your arms to create space and bring your legs back
            </li>

            <li>
              Unless he passes to north south, you need to protect your hips by raising your knees and arms. Put your knees inside the collarbone of their shoulders and don&apos;t let them control your hips
            </li>
            <img
              src={FOURTH_STEP_IMG_SRC}
              alt="Fourth step of guard retention"
              width={605}
              height={530}
              className="md:aspect-square md:object-cover w-72 h-72 mb-10"
            />
          </ol>
        </main>
      </div>
    </div>
  )
}