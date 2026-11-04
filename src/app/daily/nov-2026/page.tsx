import { Metadata } from "next";
import { DailyShell, DaySection, Topic } from "@/shared/components/DailyNotes";

export const metadata: Metadata = {
  title: 'Daily progress November 2026',
  description: 'Find daily notes improvements and observations for Brazilian Jiu-Jitsu in November 2026.',
};

export default function DailyNov2026Page() {
  return (
    <DailyShell title="November 2026">
      <DaySection id="nov-02" weekday="Monday" date="Nov 2nd">
        <Topic
          title="Turtle position"
          definition="A correct turtle position has the arms tucked inside the body and the legs open at shoulder distance: not too tight, not too wide."
        />
        <Topic
          title="Turtle reversal into side control"
          note="The oponent is on turtle. I go sideways and put my chest and weight on his hips. Then I enter the wrench with my south leg, setting my knee between his butt and ankle. The wrench sets my ankle on his ankle so mine is perpendicular to his."
          steps={[
            'Grab his hips on the hip bone',
            'Step the north leg back along with my weight',
            'Pull him to roll him over and start fighting for side control',
          ]}
        />
        <Topic
          title="Anaconda from turtle"
          tag="The oponent is on turtle and I'm on one of his sides"
          steps={[
            'Thread my head-side arm under his neck, through the far armpit',
            'Lock a gable grip',
            'Push his tricep to make the grip tighter',
            'Lock the figure 4 and place my head on the side of his back where I did the gable grip',
            'Roll to the side where I placed my head',
            'His head ends around my chest; go towards him, seeking his legs with mine',
          ]}
        />
        <Topic
          title="Guillotine from turtle"
          tag="The oponent is on turtle and I'm in front of him"
          steps={[
            'Slide my arm in with the palm open facing my chest, wrapping his neck',
            'Lock an S grip, with the elbow of the wrapping arm facing the ceiling',
            'Post the leg opposite to the wrapping arm (right arm guillotine, post the left leg)',
            'Bring him to me like in the guard',
            'Place the non-posted leg between his hips, and the posted leg on his back and hips',
          ]}
        />
      </DaySection>

      <DaySection id="nov-03" weekday="Tuesday" date="Nov 3rd">
        <Topic
          title="Turtle position"
          note="The oponent is on turtle. If he passed my guard in a competition, I can transition to turtle."
        />
        <Topic
          title="Top position in turtle"
          note="Don't position my body in front of the oponent. Wrap him with my arms at 45 degrees, posted on my toes (not my knees), like a plank with my chest on his back."
        />
        <Topic
          title="Attack from turtle"
          steps={[
            'Chest on his back at 45 degrees, on my toes',
            'Wrap his neck and his nearest arm, and connect a gable grip',
            'Move my forearm over his head like a "nelson"',
            'Pull my nearest arm and elbow into me to reverse him',
            "Lock the figure 4 of the d'arce",
            'Finish while looking at his legs',
          ]}
        />
        <Topic
          title="Defense in turtle"
          steps={[
            'As soon as he wraps me (say, his left arm around my neck), use my right hand to frame, holding that wrist',
            'Create space with my hand and move my head out of the seatbelt grip',
            'Change position looking to sit, and bring him into my full guard',
          ]}
        />
      </DaySection>
    </DailyShell>
  );
}
