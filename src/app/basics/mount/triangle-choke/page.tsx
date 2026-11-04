import { Metadata } from "next";
import { TRIANGLE_CHOKE_SETUP_FROM_MOUNT_YT } from "@/shared/constants/global.constants";
import { TechniquePage } from "@/shared/components/TechniquePage";
import { EIGHTH_STEP_IMG_SRC, ELEVENTH_STEP_IMG_SRC, FIFTH_STEP_IMG_SRC, FIRST_STEP_IMG_SRC, FOURTH_STEP_IMG_SRC, NINTH_STEP_IMG_SRC, SECOND_STEP_IMG_SRC, SEVENTH_STEP_IMG_SRC, SIXTH_STEP_IMG_SRC, TENTH_STEP_IMG_SRC, THIRD_STEP_IMG_SRC } from "./triangle-choke.constants";

export const metadata: Metadata = {
  title: "Triangle choke from mount",
  description: "Steps to do triangle choke from mount",
};

export default function TriangleChokeFromMountPage() {
  return (
    <TechniquePage
      title="Triangle choke from mount"
      author="Craig Jones"
      category="Mount · Submission"
      refs={[
      { label: "Youtube reference: Triangle setup from mount", href: TRIANGLE_CHOKE_SETUP_FROM_MOUNT_YT },
      { label: "Complete sequence", href: "https://youtu.be/xnlx_hNfuZ4?si=JBWv_HFeXf9Vvqfg&t=195" },
      ]}
      lists={[
    {
      steps: [
        { text: "From mount, Pin opponent's arm to the mat using your both hands and grabbing his wrist", media: [{ kind: 'image', src: FIRST_STEP_IMG_SRC, alt: "First step of triangle choke from mount" }] },
        { text: "Go for the crossface and elevating his arm a little", media: [{ kind: 'image', src: SECOND_STEP_IMG_SRC, alt: "Second step of triangle choke from mount" }] },
        { text: "While pushing his arm up, have a fist being put in his armpit", media: [{ kind: 'image', src: THIRD_STEP_IMG_SRC, alt: "Third step of triangle choke from mount" }] },
        { text: "One you are sure that your fist is on his armpit, post with the two hands using your fists", media: [{ kind: 'image', src: FOURTH_STEP_IMG_SRC, alt: "Fourth step of triangle choke from mount" }] },
        { text: "Slide one leg behind his back and get your knee under his armpit", media: [{ kind: 'image', src: FIFTH_STEP_IMG_SRC, alt: "Fifth step of triangle choke from mount" }] },
        { text: "Immediately grab your ankle behind his shoulder", media: [{ kind: 'image', src: SIXTH_STEP_IMG_SRC, alt: "Sixth step of triangle choke from mount" }] },
        { text: "Lean forward posting and get your knee behind his neck", media: [{ kind: 'image', src: SEVENTH_STEP_IMG_SRC, alt: "Seventh step of triangle choke from mount" }] },
        { text: "Lock your anckle with your other leg to make the triangle", media: [{ kind: 'image', src: EIGHTH_STEP_IMG_SRC, alt: "Eighth step of triangle choke from mount" }] },
        { text: "Start siting and then go to your back grabbing one leg", media: [{ kind: 'image', src: NINTH_STEP_IMG_SRC, alt: "Ninth step of triangle choke from mount" }, { kind: 'image', src: TENTH_STEP_IMG_SRC, alt: "Tenth step of triangle choke from mount" }] },
        { text: "When being on that position, to make the triangle tighter, grab his wrist and put his elbow to the floor", media: [{ kind: 'image', src: ELEVENTH_STEP_IMG_SRC, alt: "Eleventh step of triangle choke from mount" }] },
      ],
    },
      ]}
    />
  );
}
