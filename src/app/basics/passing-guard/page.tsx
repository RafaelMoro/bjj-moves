import { Metadata } from "next";
import { TechniquePage } from "@/shared/components/TechniquePage";
import { FIRST_STEP_VIDEO_SRC, FOURTH_STEP_VIDEO_SRC, SECOND_STEP_IMG_SRC, THIRD_STEP_IMG_SRC } from "./passing-guard.constants";

export const metadata: Metadata = {
  title: "Passing guard",
  description: "Learn the passing guard technique in Brazilian Jiu-Jitsu.",
};

export default function PassingGuardPage() {
  return (
    <TechniquePage
      title="Passing guard"
      category="Guard passing · Technique"
      refs={[
      { label: "Video instruction", href: "https://www.youtube.com/watch?v=slQ-imlIU9I&list=PL-immDk5vYqwvmm85QCYuWXM54vVgDB1H&index=2&t=49s" },
      ]}
      lists={[
    {
      steps: [
        { text: "Push your palms against below the ribs of your oponent to break the lock on his legs", media: [{ kind: 'video', src: FIRST_STEP_VIDEO_SRC, ratio: '2/1' }] },
        { text: "Staple one knee with your hand which will tilt the body of your opponent to one side. Control the other leg by underhooking it in your armpit", media: [{ kind: 'image', src: SECOND_STEP_IMG_SRC, alt: "First step of duck under", ratio: '2/1' }] },
        { text: "Then replace your hand with your leg. Start positioning your hands in a way to control the arms of the opponent.", media: [{ kind: 'image', src: THIRD_STEP_IMG_SRC, alt: "First step of duck under", ratio: '2/1' }] },
        { text: "Start passing your other leg and progress the position to side control", media: [{ kind: 'video', src: FOURTH_STEP_VIDEO_SRC, ratio: '2/1' }] },
      ],
    },
      ]}
    />
  );
}
