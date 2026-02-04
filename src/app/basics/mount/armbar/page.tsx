/* eslint-disable @next/next/no-img-element */
 
import Link from "next/link";

import { ARMBAR_SETUP_FROM_MOUNT_YT } from "@/shared/constants/global.constants";
import { RiArrowLeftLine } from "@remixicon/react";
import { ELEVENTH_STEP_IMG_SRC, FIFTH_STEP_IMG_SRC, FIRST_STEP_IMG_SRC, FOURTH_STEP_IMG_SRC, NINTH_STEP_IMG_SRC, SECOND_STEP_VIDEO_SRC, SEVENTH_STEP_IMG_SRC, SIXTH_STEP_IMG_SRC, TENTH_STEP_IMG_SRC, THIRD_STEP_IMG_SRC, THIRTEENTH_STEP_IMG_SRC, TWELFTH_STEP_IMG_SRC } from "./mount-armbar.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'BJJ Basics - Armbar from mount',
  description: 'Steps to do armbar from mount',
};

export default function TriangleChokeFromMountPage() {
  return (
    <div className="min-h-screen p-5">
      <header className="grid grid-cols-3 gap-4">
        <Link href="/">
          <RiArrowLeftLine />
        </Link>
        <h1 className="text-4xl font-bold">Armbar by Matt Arroyo</h1>
      </header>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-[30%_70%] justify-items-center">
          <aside className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-5">References</h2>
            <nav className="flex flex-col items-center gap-3 pl-3">
              <a className="underline" target="_blank" href={ARMBAR_SETUP_FROM_MOUNT_YT}>Youtube reference: Armbar from mount</a>
              <a className="underline" target="_blank" href="https://youtu.be/iUap4TaYVQc?si=JN9vh2YTl5pd6w1k&t=415">Complete sequence</a>
            </nav>
          </aside>
          <main>
            <h3 className="text-3xl font-bold mb-5">Steps:</h3>
            <ol className="list-decimal pl-6 flex flex-col gap-3">
              <li>Put your left hand and put it on the opponent&apos;s shoulder</li>
              <img
                src={FIRST_STEP_IMG_SRC}
                alt="First step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>
                Put the blade of your forearm on his neck and lock it on his jaw, then do the movement like you were checking your watch
              </li>
              <video src={SECOND_STEP_VIDEO_SRC} controls muted autoPlay loop className="md:aspect-square md:object-cover w-2xl h-72" />

              <li>
                Then he tries to block that &quot;choke&quot; with his arm. When he does that, move your leg behind his elbow starting the S mount at the level of his head.
              </li>
              <img
                src={THIRD_STEP_IMG_SRC}
                alt="Third step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>Start moving your hips underneath his elbow</li>
              <img
                src={FOURTH_STEP_IMG_SRC}
                alt="Fourth step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>
                Lock the door by using both of your hands, one on his neck and the other to the temple (behind his ear) to lock his head against your hip and leg.
              </li>
              <img
                src={FIFTH_STEP_IMG_SRC}
                alt="Fifth step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>At the same time, move your feet underneath hir arm to finish the S mount. you want your palm foot not facing the mat, but the backend of your foot (empeine)</li>
              <img
                src={SIXTH_STEP_IMG_SRC}
                alt="Sixth step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>Keep locking his have agains your leg to avoid him escaping. The lock is like your hands are the bread, your hips and leg are the other bread and his head and shoulder are the jam of the sandwich</li>
              <img
                src={SEVENTH_STEP_IMG_SRC}
                alt="Seventh step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>Lean your torso to the opponent&apos;s knee to untrap your leg, your right shoulder to oponent&apos;s right knee. As you lean, find the arm to do the submission. Your foot untrapped find the ground and sit</li>
              <img
                src={NINTH_STEP_IMG_SRC}
                alt="Ninth step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />
              <img
                src={TENTH_STEP_IMG_SRC}
                alt="Tenth step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>Once your fit is on the ground, release the neck</li>
              <img
                src={ELEVENTH_STEP_IMG_SRC}
                alt="Eleventh step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>One foot behind his arm and the other like on his neck. Lock your legs against your butt, tense your hamstrings</li>

              <li>Clamp with the palms of your hand his wrist and start pulling his arm into you. </li>
              <img
                src={TWELFTH_STEP_IMG_SRC}
                alt="Twelfth step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>Then start elevating slowly your hips to finish the submission</li>
              <img
                src={THIRTEENTH_STEP_IMG_SRC}
                alt="Twelfth step of armbar from mount"
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