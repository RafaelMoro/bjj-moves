import { ARM_TRIANGLE_FROM_MOUNT_TIKTOK, TRIANGLE_CHOKE_SETUP_FROM_MOUNT_YT } from "@/shared/constants/global.constants";
import { RiArrowLeftLine } from "@remixicon/react";
import Link from "next/link";

export default function TriangleChokeFromMountPage() {
  return (
    <div className="min-h-screen p-5">
      <header className="grid grid-cols-3 gap-4">
        <Link href="/">
          <RiArrowLeftLine />
        </Link>
        <h1 className="text-4xl font-bold">Triangle choke from mount by Craig Jones</h1>
      </header>
      <main className="flex flex-col gap-10">
          <section>
            <h2 className="text-2xl font-bold mb-5">References</h2>
            <nav className="flex flex-col gap-3 pl-3">
              <a className="underline" href={ARM_TRIANGLE_FROM_MOUNT_TIKTOK}>Tiktok</a>
              <a className="underline" href={TRIANGLE_CHOKE_SETUP_FROM_MOUNT_YT}>Youtube reference: Triangle setup from mount</a>
              <a href="https://youtu.be/xnlx_hNfuZ4?si=JBWv_HFeXf9Vvqfg&t=195">Complete sequence</a>
            </nav>
          </section>
          <section>
            <h3 className="text-3xl font-bold mb-5">Steps:</h3>
            <ol className="list-decimal pl-6 flex flex-col gap-3">
              <li>From mount, Pin opponent&apos;s arm to the mat using your both hands and grabbing his wrist</li>
              <li>Go for the crossface and elevating his arm a little</li>
              <li>While pushing his arm up, have a fist being put in his armpit</li>
              <li>One you are sure that your fist is on his armpit, post with the two hands using your fists</li>
              <li>Slide one leg behind his back and get your knee under his armpit</li>
              <li>Immediately grab your ankle behind his shoulder</li>
              <li>Lean forward posting and get your knee behind his neck</li>
              <li>Lock your anckle with your other leg to make the triangle</li>
              <li>Start siting and then go to your back grabbing one leg</li>
              <li>When being on that position, to make the triangle tighter, grab his wrist and put his elbow to the floor</li>
            </ol>
          </section>
      </main>
    </div>
  )
}