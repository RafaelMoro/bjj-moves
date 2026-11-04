import { Metadata } from "next";
import { ARMBAR_SETUP_FROM_MOUNT_YT } from "@/shared/constants/global.constants";
import { TechniquePage } from "@/shared/components/TechniquePage";
import { ELEVENTH_STEP_IMG_SRC, FIFTH_STEP_IMG_SRC, FIRST_STEP_IMG_SRC, FOURTH_STEP_IMG_SRC, NINTH_STEP_IMG_SRC, SECOND_STEP_VIDEO_SRC, SEVENTH_STEP_IMG_SRC, SIXTH_STEP_IMG_SRC, TENTH_STEP_IMG_SRC, THIRD_STEP_IMG_SRC, THIRTEENTH_STEP_IMG_SRC, TWELFTH_STEP_IMG_SRC } from "./mount-armbar.constants";

export const metadata: Metadata = {
  title: "BJJ Basics - Armbar from mount",
  description: "Steps to do armbar from mount",
};

export default function ArmbarFromMountPage() {
  return (
    <TechniquePage
      title="Armbar from mount"
      author="Matt Arroyo"
      category="Mount · Submission"
      refs={[
      { label: "Youtube reference: Armbar from mount", href: ARMBAR_SETUP_FROM_MOUNT_YT },
      { label: "Complete sequence", href: "https://youtu.be/iUap4TaYVQc?si=JN9vh2YTl5pd6w1k&t=415" },
      ]}
      lists={[
    {
      steps: [
        { text: "Put your left hand and put it on the opponent's shoulder", media: [{ kind: 'image', src: FIRST_STEP_IMG_SRC, alt: "First step of armbar from mount" }] },
        { text: "Put the blade of your forearm on his neck and lock it on his jaw, then do the movement like you were checking your watch", media: [{ kind: 'video', src: SECOND_STEP_VIDEO_SRC, ratio: '2/1' }] },
        { text: "Then he tries to block that \"choke\" with his arm. When he does that, move your leg behind his elbow starting the S mount at the level of his head.", media: [{ kind: 'image', src: THIRD_STEP_IMG_SRC, alt: "Third step of armbar from mount" }] },
        { text: "Start moving your hips underneath his elbow", media: [{ kind: 'image', src: FOURTH_STEP_IMG_SRC, alt: "Fourth step of armbar from mount" }] },
        { text: "Lock the door by using both of your hands, one on his neck and the other to the temple (behind his ear) to lock his head against your hip and leg.", media: [{ kind: 'image', src: FIFTH_STEP_IMG_SRC, alt: "Fifth step of armbar from mount" }] },
        { text: "At the same time, move your feet underneath hir arm to finish the S mount. you want your palm foot not facing the mat, but the backend of your foot (empeine)", media: [{ kind: 'image', src: SIXTH_STEP_IMG_SRC, alt: "Sixth step of armbar from mount" }] },
        { text: "Keep locking his have agains your leg to avoid him escaping. The lock is like your hands are the bread, your hips and leg are the other bread and his head and shoulder are the jam of the sandwich", media: [{ kind: 'image', src: SEVENTH_STEP_IMG_SRC, alt: "Seventh step of armbar from mount" }] },
        { text: "Lean your torso to the opponent's knee to untrap your leg, your right shoulder to oponent's right knee. As you lean, find the arm to do the submission. Your foot untrapped find the ground and sit", media: [{ kind: 'image', src: NINTH_STEP_IMG_SRC, alt: "Ninth step of armbar from mount" }, { kind: 'image', src: TENTH_STEP_IMG_SRC, alt: "Tenth step of armbar from mount" }] },
        { text: "Once your fit is on the ground, release the neck", media: [{ kind: 'image', src: ELEVENTH_STEP_IMG_SRC, alt: "Eleventh step of armbar from mount" }] },
        { text: "One foot behind his arm and the other like on his neck. Lock your legs against your butt, tense your hamstrings" },
        { text: "Clamp with the palms of your hand his wrist and start pulling his arm into you.", media: [{ kind: 'image', src: TWELFTH_STEP_IMG_SRC, alt: "Twelfth step of armbar from mount" }] },
        { text: "Then start elevating slowly your hips to finish the submission", media: [{ kind: 'image', src: THIRTEENTH_STEP_IMG_SRC, alt: "Twelfth step of armbar from mount" }] },
      ],
    },
      ]}
    />
  );
}
