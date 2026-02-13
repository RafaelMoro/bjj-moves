/* eslint-disable @next/next/no-img-element */
 
 
import { Metadata } from "next";
import Link from "next/link";
import { RiArrowLeftLine } from "@remixicon/react";

import { GUILLLOTINE_SETUP_FROM_CLOSED_GUARD_YT } from "@/shared/constants/global.constants";
import {
  STEP_10_CRIMP_HEAD_SRC,
  STEP_11_HIP_POSITION_SRC,
  STEP_12_SHOULDER_OVER_HEAD_SRC,
  STEP_13_ONLY_ARM_FINISH_SRC,
  STEP_14_SHOULDER_OVER_HEAD_SRC,
  STEP_15_OVER_HIP_SRC,
  STEP_16_ARM_IN_FINISH_SRC,
  STEP_1_GRIP_IMG_SRC,
  STEP_2_WRIST_BLADE_SRC,
  STEP_3_WRIST_PLACEMENT_SRC,
  STEP_4_ELBOW_OVER_SRC,
  STEP_5_HOLD_PRESSURE_SRC,
  STEP_7_HEAD_POSITION_SRC,
  STEP_8_CRIMP_HOSE_SRC,
  STEP_9_CRIMP_NECK_VIDEO_SRC
} from "./guillotine-closed-guard.constants";

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
                You want the blade of your wrist on the oponent&apos;s chin. Use the grip as a hook to pull my wrist through his neck
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

              <li>Be always on your hip. Be on the same side of the hip as where the oponent&apos;s head goes</li>
              <img
                src={STEP_11_HIP_POSITION_SRC}
                alt="First step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>
                You want your elbow over his shoulder. 
              </li>
              <img
                src={STEP_12_SHOULDER_OVER_HEAD_SRC}
                alt="Third step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>Drive your wrist through his neck as you push your forearm over his shoulder</li>
              <img
                src={STEP_4_ELBOW_OVER_SRC}
                alt="Third step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />              

              <li>Hold steady pressure</li>
              <img
                src={STEP_5_HOLD_PRESSURE_SRC}
                alt="Fourth step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />
              <img
                src={STEP_13_ONLY_ARM_FINISH_SRC}
                alt="Fourth step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />
            </ol>

            <h4 className="text-3xl font-bold mb-5">Steps Arm-in guillotine:</h4>
            <ol className="list-decimal pl-6 flex flex-col gap-3">
              <li>We want to crimp the hose. Think of a garden hose where if you want to stop the water from coming out, you would block the hose, you crimp it and bend it</li>
              <img
                src={STEP_8_CRIMP_HOSE_SRC}
                alt="Fifth step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>To crimp the hose, bring the oponent&apos;s head to his chest</li>
              <img
                src={STEP_7_HEAD_POSITION_SRC}
                alt="Fifth step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>Make a fist with the arm that will strangle and the other hand is holding the fist.</li>
              <img
                src={STEP_2_WRIST_BLADE_SRC}
                alt="First step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>
                You want to put the blade of your wrist through his neck. If the neck is the wall, and the chin is the ceiling, you want to put that blade in the corner of the wall and ceiling
              </li>
              <img
                src={STEP_10_CRIMP_HEAD_SRC}
                alt="First step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />
              <li>So the movement motion is to take his head and arch into it, then we crimp it down.</li>
              <video src={STEP_9_CRIMP_NECK_VIDEO_SRC} controls muted autoPlay loop className="md:aspect-square md:object-cover w-2xl h-72" />

              <li>Sit on your hip</li>
              <img
                src={STEP_14_SHOULDER_OVER_HEAD_SRC}
                alt="Fourth step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>
                Slide his head into his belly. So like if he has a sweaty forehead, you want to see a sweat trail coming down
              </li>
              <img
                src={STEP_15_OVER_HIP_SRC}
                alt="Fifth step of armbar from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>We want to push his head into his chest. Use your legs and abs to bring his body into you</li>
              <img
                src={STEP_16_ARM_IN_FINISH_SRC}
                alt="Seventh step of armbar from mount"
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