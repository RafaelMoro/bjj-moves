/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { ARMBAR_SETUP_FROM_MOUNT_YT } from "@/shared/constants/global.constants";
import { RiArrowLeftLine } from "@remixicon/react";
import {
  EIGHTH_STEP_IMG_SRC,
  ELEVENTH_STEP_IMG_SRC,
  FIFTH_STEP_IMG_SRC,
  FIRST_STEP_IMG_SRC,
  FOURTH_STEP_IMG_SRC,
  SECOND_STEP_IMG_SRC,
  SEVENTH_STEP_IMG_SRC,
  SIXTH_STEP_IMG_SRC,
  TENTH_STEP_IMG_SRC,
  THIRD_STEP_IMG_SRC
} from "../triangle-choke/triangle-choke.constants";

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
              <li>Pending</li>
              <img
                src={FIRST_STEP_IMG_SRC}
                alt="First step of triangle choke from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>Pending</li>
              <img
                src={SECOND_STEP_IMG_SRC}
                alt="Second step of triangle choke from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>Pending</li>
              <img
                src={THIRD_STEP_IMG_SRC}
                alt="Third step of triangle choke from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>Pending</li>
              <img
                src={FOURTH_STEP_IMG_SRC}
                alt="Fourth step of triangle choke from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>Pending</li>
              <img
                src={FIFTH_STEP_IMG_SRC}
                alt="Fifth step of triangle choke from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>Pending</li>
              <img
                src={SIXTH_STEP_IMG_SRC}
                alt="Sixth step of triangle choke from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>Pendingk</li>
              <img
                src={SEVENTH_STEP_IMG_SRC}
                alt="Seventh step of triangle choke from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>Pending</li>
              <img
                src={EIGHTH_STEP_IMG_SRC}
                alt="Eighth step of triangle choke from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>Pending</li>
              <img
                src={TENTH_STEP_IMG_SRC}
                alt="Tenth step of triangle choke from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>Pending</li>
              <img
                src={ELEVENTH_STEP_IMG_SRC}
                alt="Eleventh step of triangle choke from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72"
              />
            </ol>
          </main>
      </div>
    </div>
  )
}