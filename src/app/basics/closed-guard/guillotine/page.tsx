/* eslint-disable @next/next/no-img-element */
 
 
import { Metadata } from "next";
import Link from "next/link";
import { RiArrowLeftLine } from "@remixicon/react";

import { GUILLLOTINE_SETUP_FROM_CLOSED_GUARD_YT } from "@/shared/constants/global.constants";
import { STEP_1_GRIP_IMG_SRC, STEP_2_WRIST_BLADE_SRC, STEP_3_WRIST_PLACEMENT_SRC, STEP_4_ELBOW_OVER_SRC, STEP_5_HOLD_PRESSURE_SRC, STEP_7_HEAD_POSITION_SRC } from "./guillotine-closed-guard.constants";

export const metadata: Metadata = {
  title: 'BJJ Basics - Guillotine from closed guard',
  description: 'Steps to do guillotine from closed guard',
};

export default function GuillotineFromClosedGuardPage() {
  return (
    <div className="min-h-screen p-5">
      <header className="grid grid-cols-3 gap-4">
        <Link href="/">
          <RiArrowLeftLine />
        </Link>
        <h1 className="text-4xl font-bold">Guillotine by Matt Arroyo</h1>
      </header>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-[30%_70%] justify-items-center">
          <aside className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-5">References</h2>
            <nav className="flex flex-col items-center gap-3 pl-3">
              <a className="underline" target="_blank" href={GUILLLOTINE_SETUP_FROM_CLOSED_GUARD_YT}>Youtube reference: How to do Guillotine in BJJ</a>
              <a className="underline" target="_blank" href="https://youtu.be/YWwRC0V6O9Y?si=Awk3pWumTv0euebt&t=410">Demostration of guillotine and arm-in guillotine</a>
            </nav>
          </aside>
          <main>
            <h4 className="text-3xl font-bold mb-5">Steps Only neck guillotine:</h4>
            <ol className="list-decimal pl-6 flex flex-col gap-3 mb-10">
              <li>Make a fist with the arm that will strangle and the other hand is holding your fist</li>
              <img
                src={STEP_1_GRIP_IMG_SRC}
                alt="First step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>
                You want the blade of your wrist on the oponent's chin. Use the grip as a hook to pull my wrist through his neck
              </li>
              <img
                src={STEP_2_WRIST_BLADE_SRC}
                alt="First step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />
              <img
                src={STEP_3_WRIST_PLACEMENT_SRC}
                alt="Third step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />
              {/* <video src={SECOND_STEP_VIDEO_SRC} controls muted autoPlay loop className="md:aspect-square md:object-cover w-2xl h-72" /> */}

              <li>
                You want your elbow over his shoulder and HOLD the pressure
              </li>
              <img
                src={STEP_4_ELBOW_OVER_SRC}
                alt="Third step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>Be always on your hip. Be on the same side of the hip as where the oponent's head goes</li>
              <li>Bring your forearm over his shoulder</li>
              <li>
                Drive your wrist through his neck as you push your forearm over his shoulder
              </li>
              <li>Hold steady pressure</li>
              <img
                src={STEP_5_HOLD_PRESSURE_SRC}
                alt="Fourth step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <img
                src={STEP_7_HEAD_POSITION_SRC}
                alt="Fifth step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />
            </ol>

            <h4 className="text-3xl font-bold mb-5">Steps Arm-in guillotine:</h4>
            <ol className="list-decimal pl-6 flex flex-col gap-3">
              <li>Put your left hand and put it on the opponent&apos;s shoulder</li>
              {/* <img
                src={FIRST_STEP_IMG_SRC}
                alt="First step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              /> */}

              <li>
                Put the blade of your forearm on his neck and lock it on his jaw, then do the movement like you were checking your watch
              </li>
              {/* <video src={SECOND_STEP_VIDEO_SRC} controls muted autoPlay loop className="md:aspect-square md:object-cover w-2xl h-72" /> */}

              <li>
                Then he tries to block that &quot;choke&quot; with his arm. When he does that, move your leg behind his elbow starting the S mount at the level of his head.
              </li>
              {/* <img
                src={THIRD_STEP_IMG_SRC}
                alt="Third step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              /> */}

              <li>Start moving your hips underneath his elbow</li>
              {/* <img
                src={FOURTH_STEP_IMG_SRC}
                alt="Fourth step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              /> */}

              <li>
                Lock the door by using both of your hands, one on his neck and the other to the temple (behind his ear) to lock his head against your hip and leg.
              </li>
              {/* <img
                src={FIFTH_STEP_IMG_SRC}
                alt="Fifth step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              /> */}

              <li>At the same time, move your feet underneath hir arm to finish the S mount. you want your palm foot not facing the mat, but the backend of your foot (empeine)</li>
              {/* <img
                src={SIXTH_STEP_IMG_SRC}
                alt="Sixth step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              /> */}

              <li>Keep locking his have agains your leg to avoid him escaping. The lock is like your hands are the bread, your hips and leg are the other bread and his head and shoulder are the jam of the sandwich</li>
              {/* <img
                src={SEVENTH_STEP_IMG_SRC}
                alt="Seventh step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              /> */}

              <li>Lean your torso to the opponent&apos;s knee to untrap your leg, your right shoulder to oponent&apos;s right knee. As you lean, find the arm to do the submission. Your foot untrapped find the ground and sit</li>
              {/* <img
                src={NINTH_STEP_IMG_SRC}
                alt="Ninth step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              /> */}
              {/* <img
                src={TENTH_STEP_IMG_SRC}
                alt="Tenth step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              /> */}

              <li>Once your fit is on the ground, release the neck</li>
              {/* <img
                src={ELEVENTH_STEP_IMG_SRC}
                alt="Eleventh step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              /> */}

              <li>One foot behind his arm and the other like on his neck. Lock your legs against your butt, tense your hamstrings</li>

              <li>Clamp with the palms of your hand his wrist and start pulling his arm into you. </li>
              {/* <img
                src={TWELFTH_STEP_IMG_SRC}
                alt="Twelfth step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              /> */}

              <li>Then start elevating slowly your hips to finish the submission</li>
              {/* <img
                src={THIRTEENTH_STEP_IMG_SRC}
                alt="Twelfth step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              /> */}
            </ol>
          </main>
      </div>
    </div>
  )
}