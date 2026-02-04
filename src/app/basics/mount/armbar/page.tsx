 
import Link from "next/link";

import { ARMBAR_SETUP_FROM_MOUNT_YT } from "@/shared/constants/global.constants";
import { RiArrowLeftLine } from "@remixicon/react";

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
              {/* <img
                src={FIRST_STEP_IMG_SRC}
                alt="First step of triangle choke from mount"
                width={605}
                height={530}
                className="md:aspect-square md:object-cover w-72 h-72 mb-10"
              /> */}

              <li>
                Put the blade of your forearm on his neck and lock it on his jaw, then do the movement like you were checking your watch
              </li>

              <li>
                Then he tries to block that &quot;choke&quot; with his arm. When he does that, move your leg behind his elbow starting the S mount at the level of his head.
              </li>

              <li>Start moving your hips underneath his elbow</li>

              <li>
                Lock the door by using both of your hands, one on his neck and the other to the temple (behind his ear) to lock his head against your hip and leg.
              </li>

              <li>At the same time, move your feet underneath hir arm to finish the S mount. you want your palm foot not facing the mat, but the backend of your foot (empeine)</li>

              <li>Keep locking his have agains your leg to avoid him escaping. The lock is like your hands are the bread, your hips and leg are the other bread and his head and shoulder are the jam of the sandwich</li>

              <li>Lean your torso to the opponent&apos;s knee to untrap your leg, your right shoulder to oponent&apos;s right knee. As you lean, find the arm to do the submission. Your foot untrapped find the ground and sit</li>

              <li>Once your fit is on the ground, release the neck</li>

              <li>One foot behind his arm and the other like on his neck. Lock your legs against your butt, tense your hamstrings</li>

              <li>Clamp with the palms of your hand his wrist and start pulling his arm into you. </li>

              <li>Then start elevating slowly your hips to finish the submission</li>
            </ol>
          </main>
      </div>
    </div>
  )
}