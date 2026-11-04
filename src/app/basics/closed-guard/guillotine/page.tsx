import { Metadata } from "next";
import { GUILLLOTINE_SETUP_FROM_CLOSED_GUARD_YT } from "@/shared/constants/global.constants";
import { TechniquePage } from "@/shared/components/TechniquePage";
import { STEP_10_CRIMP_HEAD_SRC, STEP_11_HIP_POSITION_SRC, STEP_12_SHOULDER_OVER_HEAD_SRC, STEP_13_ONLY_ARM_FINISH_SRC, STEP_14_SHOULDER_OVER_HEAD_SRC, STEP_15_OVER_HIP_SRC, STEP_16_ARM_IN_FINISH_SRC, STEP_1_GRIP_IMG_SRC, STEP_2_WRIST_BLADE_SRC, STEP_3_WRIST_PLACEMENT_SRC, STEP_4_ELBOW_OVER_SRC, STEP_5_HOLD_PRESSURE_SRC, STEP_7_HEAD_POSITION_SRC, STEP_8_CRIMP_HOSE_SRC, STEP_9_CRIMP_NECK_VIDEO_SRC } from "./guillotine-closed-guard.constants";

export const metadata: Metadata = {
  title: "BJJ Basics - Guillotine from closed guard",
  description: "Steps to do guillotine from closed guard",
};

export default function GuillotineFromClosedGuardPage() {
  return (
    <TechniquePage
      title="Guillotine from closed guard"
      author="Matt Arroyo"
      category="Closed guard · Submission"
      refs={[
      { label: "Youtube reference: How to do Guillotine in BJJ", href: GUILLLOTINE_SETUP_FROM_CLOSED_GUARD_YT },
      { label: "Demostration of guillotine and arm-in guillotine", href: "https://youtu.be/YWwRC0V6O9Y?si=Awk3pWumTv0euebt&t=410" },
      ]}
      lists={[
    {
      name: "Only neck guillotine",
      steps: [
        { text: "Make a fist with the arm that will strangle and the other hand is holding your fist", media: [{ kind: 'image', src: STEP_1_GRIP_IMG_SRC, alt: "First step of armbar from mount" }] },
        { text: "You want the blade of your wrist on the oponent's chin. Use the grip as a hook to pull my wrist through his neck", media: [{ kind: 'image', src: STEP_2_WRIST_BLADE_SRC, alt: "First step of armbar from mount" }, { kind: 'image', src: STEP_3_WRIST_PLACEMENT_SRC, alt: "Third step of armbar from mount" }] },
        { text: "Be always on your hip. Be on the same side of the hip as where the oponent's head goes", media: [{ kind: 'image', src: STEP_11_HIP_POSITION_SRC, alt: "First step of armbar from mount" }] },
        { text: "You want your elbow over his shoulder.", media: [{ kind: 'image', src: STEP_12_SHOULDER_OVER_HEAD_SRC, alt: "Third step of armbar from mount" }] },
        { text: "Drive your wrist through his neck as you push your forearm over his shoulder", media: [{ kind: 'image', src: STEP_4_ELBOW_OVER_SRC, alt: "Third step of armbar from mount" }] },
        { text: "Hold steady pressure", media: [{ kind: 'image', src: STEP_5_HOLD_PRESSURE_SRC, alt: "Fourth step of armbar from mount" }, { kind: 'image', src: STEP_13_ONLY_ARM_FINISH_SRC, alt: "Fourth step of armbar from mount" }] },
      ],
    },
    {
      name: "Arm-in guillotine",
      steps: [
        { text: "We want to crimp the hose. Think of a garden hose where if you want to stop the water from coming out, you would block the hose, you crimp it and bend it", media: [{ kind: 'image', src: STEP_8_CRIMP_HOSE_SRC, alt: "Fifth step of armbar from mount" }] },
        { text: "To crimp the hose, bring the oponent's head to his chest", media: [{ kind: 'image', src: STEP_7_HEAD_POSITION_SRC, alt: "Fifth step of armbar from mount" }] },
        { text: "Make a fist with the arm that will strangle and the other hand is holding the fist.", media: [{ kind: 'image', src: STEP_2_WRIST_BLADE_SRC, alt: "First step of armbar from mount" }] },
        { text: "You want to put the blade of your wrist through his neck. If the neck is the wall, and the chin is the ceiling, you want to put that blade in the corner of the wall and ceiling", media: [{ kind: 'image', src: STEP_10_CRIMP_HEAD_SRC, alt: "First step of armbar from mount" }] },
        { text: "So the movement motion is to take his head and arch into it, then we crimp it down.", media: [{ kind: 'video', src: STEP_9_CRIMP_NECK_VIDEO_SRC, ratio: '2/1' }] },
        { text: "Sit on your hip", media: [{ kind: 'image', src: STEP_14_SHOULDER_OVER_HEAD_SRC, alt: "Fourth step of armbar from mount" }] },
        { text: "Slide his head into his belly. So like if he has a sweaty forehead, you want to see a sweat trail coming down", media: [{ kind: 'image', src: STEP_15_OVER_HIP_SRC, alt: "Fifth step of armbar from mount" }] },
        { text: "We want to push his head into his chest. Use your legs and abs to bring his body into you", media: [{ kind: 'image', src: STEP_16_ARM_IN_FINISH_SRC, alt: "Seventh step of armbar from mount" }] },
      ],
    },
      ]}
    />
  );
}
