import { Metadata } from "next";
import Link from "next/link";

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
          <li>
            Staple one kene with your hand which will tilt the body of your opponent to one side
          </li>
          <li>
            Then replace your hand with your leg
          </li>
          <li>
            Start passing your other leg and progress the position to side control
          </li>
          {/* <Image
            src={FIRST_STEP_IMG_SRC}
            alt="First step of duck under"
            width={605}
            height={530}
            className="md:aspect-square md:object-cover w-72 h-72"
          />

          <li>With your other arm, put your palm on his bicep pushing his arm away</li>
          <video src={SECOND_STEP_VIDEO_SRC} controls muted autoPlay loop className="md:aspect-square md:object-cover w-72 h-72" />
          <li>Use push pull theory. We have to reach the point where our arm is holding the tricep.</li>

          <li>We need to flare his arm out and up to create an opening</li>
          <video src={FOURTH_STEP_VIDEO_SRC} controls muted autoPlay loop className="md:aspect-square md:object-cover w-72 h-72" />

          <li>We land the knee to enter. Getting your head past their armpit is imperative. As you reach his back, with your arm pull his body to the floor. Pull his forearm and complete with your other arm taking his elbow</li>
          <video src={FIFTH_STEP_VIDEO_SRC} controls muted autoPlay loop className="md:aspect-square md:object-cover w-72 h-72" />

          <li>Here is the sequence complete. Once you got your hand on his neck and the other on the bicep, do the flare rapidly. Do not dance</li>
          <video src={SIXTH_STEP_VIDEO_SRC} controls muted autoPlay loop className="md:aspect-square md:object-cover w-72 h-72" />

          <li>Pull his forearm and complete with your other arm taking his elbow</li>
          <video src={SEVENTH_STEP_VIDEO_SRC} controls muted autoPlay loop className="md:aspect-square md:object-cover w-72 h-72" />

          <li>Now that you have wrapped his left arm, place your foot into his </li>
          <video src={EIGHTH_STEP_VIDEO_SRC} controls muted autoPlay loop className="md:aspect-square md:object-cover w-72 h-72" /> */}
        </ul>

        <div className="flex flex-col items-center gap-4">
          <p>Complete sequence</p>
          {/* <video src={NINTH_STEP_VIDEO_SRC} controls muted autoPlay loop className="md:aspect-square md:object-cover w-72 h-72" /> */}
        </div>
      </section>
    </main>
  )
}