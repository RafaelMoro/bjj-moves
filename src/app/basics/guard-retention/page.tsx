import { Metadata } from "next";
import { TechniquePage } from "@/shared/components/TechniquePage";
import { FIFTH_STEP_VIDEO_SRC, FIRST_STEP_IMG_SRC, FOURTH_STEP_IMG_SRC, SECOND_STEP_IMG_SRC, THIRD_STEP_VIDEO_SRC } from "./guard-retention.constants";

export const metadata: Metadata = {
  title: "Guard retention",
  description: "Steps to do guard retention",
};

export default function GuardRetentionPage() {
  return (
    <TechniquePage
      title="Guard retention"
      category="Guard · Technique"
      refs={[
      { label: "Youtube reference: Guard Retention - How To Never Get Your Guard Passed In Jiu Jitsu by Gordon Ryan", href: "https://youtu.be/URGwWYwdoAs?si=19hSAQOz8ztgX-x6" },
      ]}
      notes={[
        "Kuzushi: off balance the oponent",
        "The goal is to transition from a defensive cycle to neutral position to be able to start an offense cycle",
        "Do not let the oponent control your head, not in side control, not in mount. That creates you the opportunitty to escape",
      ]}
      lists={[
    {
      steps: [
        { text: "Create initial stickyness to the oponent, wrap his knee with your hands or hand, take his wrist and ankles", media: [{ kind: 'image', src: FIRST_STEP_IMG_SRC, alt: "First step of guard retention" }] },
        { text: "If he starts turning, wrap your legs into one of his to maintain stickyness", media: [{ kind: 'image', src: SECOND_STEP_IMG_SRC, alt: "Second step of guard retention" }] },
        { text: "Make your grips to feel uncomfortable to the oponent in a sense of using Kuzushi, making him off balance" },
        { text: "Your primary goal is to keep the oponent in front of you. When he passes our legs, correct position to have him in front of you.", media: [{ kind: 'video', src: THIRD_STEP_VIDEO_SRC, ratio: '2/1' }] },
        { text: "If he's not controlling your head, you can use your arms to bring back your legs again", media: [{ kind: 'video', src: FIFTH_STEP_VIDEO_SRC, ratio: '2/1' }] },
        { text: "Passing your legs in the first battle, controling your neck is the second battle" },
        { text: "When they're lowering their position for side control, use your arms to create space and bring your legs back" },
        { text: "Unless he passes to north south, you need to protect your hips by raising your knees and arms. Put your knees inside the collarbone of their shoulders and don't let them control your hips", media: [{ kind: 'image', src: FOURTH_STEP_IMG_SRC, alt: "Fourth step of guard retention" }] },
      ],
    },
      ]}
    />
  );
}
