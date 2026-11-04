import { Metadata } from "next";
import { TechniquePage } from "@/shared/components/TechniquePage";
import { EIGHTH_STEP_VIDEO_SRC, FIFTH_STEP_VIDEO_SRC, FIRST_STEP_IMG_SRC, FOURTH_STEP_VIDEO_SRC, NINTH_STEP_VIDEO_SRC, SECOND_STEP_VIDEO_SRC, SEVENTH_STEP_VIDEO_SRC, SIXTH_STEP_VIDEO_SRC } from "./duck-under.constants";

export const metadata: Metadata = {
  title: "Duck under takedown",
  description: "Learn the duck under takedown technique in Brazilian Jiu-Jitsu.",
};

export default function DuckUnderPage() {
  return (
    <TechniquePage
      title="Duck under"
      category="Takedown · Technique"
      refs={[
      { label: "Video instruction", href: "https://www.youtube.com/watch?v=Ww-SsGOHemY&t=41s" },
      ]}
      lists={[
    {
      steps: [
        { text: "If you're right-handed, leave your hand on the top of the lower head, not the neck", media: [{ kind: 'image', src: FIRST_STEP_IMG_SRC, alt: "First step of duck under" }] },
        { text: "With your other arm, put your palm on his bicep pushing his arm away", media: [{ kind: 'video', src: SECOND_STEP_VIDEO_SRC }] },
        { text: "Use push pull theory. We have to reach the point where our arm is holding the tricep." },
        { text: "We need to flare his arm out and up to create an opening", media: [{ kind: 'video', src: FOURTH_STEP_VIDEO_SRC }] },
        { text: "We land the knee to enter. Getting your head past their armpit is imperative. As you reach his back, with your arm pull his body to the floor. Pull his forearm and complete with your other arm taking his elbow", media: [{ kind: 'video', src: FIFTH_STEP_VIDEO_SRC }] },
        { text: "Here is the sequence complete. Once you got your hand on his neck and the other on the bicep, do the flare rapidly. Do not dance", media: [{ kind: 'video', src: SIXTH_STEP_VIDEO_SRC }] },
        { text: "Pull his forearm and complete with your other arm taking his elbow", media: [{ kind: 'video', src: SEVENTH_STEP_VIDEO_SRC }] },
        { text: "Now that you have wrapped his left arm, place your foot into his", media: [{ kind: 'video', src: EIGHTH_STEP_VIDEO_SRC }] },
      ],
    },
      ]}
      sequenceSrc={NINTH_STEP_VIDEO_SRC}
    />
  );
}
