/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { TRIANGLE_CHOKE_SETUP_FROM_MOUNT_YT } from "@/shared/constants/global.constants";
import { RiArrowLeftLine } from "@remixicon/react";
import { EIGHTH_STEP_IMG_SRC, ELEVENTH_STEP_IMG_SRC, FIFTH_STEP_IMG_SRC, FIRST_STEP_IMG_SRC, FOURTH_STEP_IMG_SRC, NINTH_STEP_IMG_SRC, SECOND_STEP_IMG_SRC, SEVENTH_STEP_IMG_SRC, SIXTH_STEP_IMG_SRC, TENTH_STEP_IMG_SRC, THIRD_STEP_IMG_SRC } from "./triangle-choke.constants";

export default function TriangleChokeFromMountPage() {
  return (
    <div className="min-h-screen p-5">
      <header className="grid grid-cols-3 gap-4">
        <Link href="/">
          <RiArrowLeftLine />
        </Link>
        <h1 className="text-4xl font-bold">Triangle choke from mount by Craig Jones</h1>
      </header>
      <div className="mt-16 grid grid-30-70 justify-items-center">
          <aside className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-5">References</h2>
            <nav className="flex flex-col items-center gap-3 pl-3">
              <a className="underline" target="_blank" href={TRIANGLE_CHOKE_SETUP_FROM_MOUNT_YT}>Youtube reference: Triangle setup from mount</a>
              <a className="underline" target="_blank" href="https://youtu.be/xnlx_hNfuZ4?si=JBWv_HFeXf9Vvqfg&t=195">Complete sequence</a>
            </nav>
          </aside>
          <main>
            <h3 className="text-3xl font-bold mb-5">Steps:</h3>
            <ol className="list-decimal pl-6 flex flex-col gap-3">
              <li>From mount, Pin opponent&apos;s arm to the mat using your both hands and grabbing his wrist</li>
              <img
                src={FIRST_STEP_IMG_SRC}
                alt="First step of triangle choke from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>Go for the crossface and elevating his arm a little</li>
              <img
                src={SECOND_STEP_IMG_SRC}
                alt="Second step of triangle choke from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>While pushing his arm up, have a fist being put in his armpit</li>
              <img
                src={THIRD_STEP_IMG_SRC}
                alt="Third step of triangle choke from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>One you are sure that your fist is on his armpit, post with the two hands using your fists</li>
              <img
                src={FOURTH_STEP_IMG_SRC}
                alt="Fourth step of triangle choke from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>Slide one leg behind his back and get your knee under his armpit</li>
              <img
                src={FIFTH_STEP_IMG_SRC}
                alt="Fifth step of triangle choke from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>Immediately grab your ankle behind his shoulder</li>
              <img
                src={SIXTH_STEP_IMG_SRC}
                alt="Sixth step of triangle choke from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>Lean forward posting and get your knee behind his neck</li>
              <img
                src={SEVENTH_STEP_IMG_SRC}
                alt="Seventh step of triangle choke from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>Lock your anckle with your other leg to make the triangle</li>
              <img
                src={EIGHTH_STEP_IMG_SRC}
                alt="Eighth step of triangle choke from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>Start siting and then go to your back grabbing one leg</li>
              <img
                src={NINTH_STEP_IMG_SRC}
                alt="Ninth step of triangle choke from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72"
              />
              <img
                src={TENTH_STEP_IMG_SRC}
                alt="Tenth step of triangle choke from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              />

              <li>When being on that position, to make the triangle tighter, grab his wrist and put his elbow to the floor</li>
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