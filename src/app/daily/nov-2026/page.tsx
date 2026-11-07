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

      <DaySection id="nov-04" weekday="Wednesday" date="Nov 4th">
        <Topic title="Turtle position" />
        <Topic
          title="Clock choke with the gi (incomplete)"
          tag="The oponent is on turtle and I'm on any of his sides"
          note="I don't remember what comes next."
          steps={[
            'My far arm attacks the lapel of the gi',
            'The other hand goes behind the neck, holding the gi',
          ]}
        />
        <Topic
          title="Crucifix transition"
          note="Be extremely careful here: you may hurt your partner if you go aggressively with the americana or the armbar with the legs. From the crucifix, finish gently with an armbar using your legs, or an americana."
          steps={[
            'Far hand grabs the lapel and near hand grabs the wrist',
            'Post the far leg; when he underhooks it, immediately trap that arm',
            'Sit on my knees and bring him into me to put him in the crucifix',
          ]}
        />
      </DaySection>

      <DaySection id="nov-05" weekday="Thursday" date="Nov 5th">
        <Topic title="Turtle position" />
        <Topic
          title="Deepening asymmetric hooks for the back choke"
          tag="Pick a side"
          steps={[
            'My far arm goes to the neck looking for the choke; the near arm grips the wrist, entering from the armpit towards the wrist',
            'With the wrist grip, push my elbow out to create space at the hip',
            'Insert the hook with the leg fully deep, hooking his leg with mine, and put the other hook with the opposite leg towards his adductor. My weight should be more on the side of the deep hook',
            'Switch grips: the arm on the side of the deep leg now chokes, and the other arm grips his other wrist',
            'Open his hips with my leg hooks to flatten him',
          ]}
        />
      </DaySection>

      <DaySection id="nov-07" weekday="Saturday" date="Nov 7th">
        <Topic
          title="Leg locks"
          definition="The key is the hook you make with your knee and your heel towards the oponent's hip. Without it, you can't get leverage."
          note="Defense: turning to your side doesn't work, it leaves you in a worse position and reduces your chances to escape."
        />
        <Topic
          title="Achilles defense: attacking his heel"
          tag="The oponent has me in an achilles lock"
          note="His inside leg pins with the knee and his outside leg completes the pin with the heel."
          steps={[
            'Keep my foot in a neutral position, not pointing nor flexing it',
            'Bring his heel down',
            'Pass to the other side, either trapping his outside leg under my butt or leaving it on the other side',
          ]}
        />
        <Topic
          title="Achilles offense: when he reacts to my heel"
          tag="Transition to outside ashi"
          note="Because of how you react to this defense, your chest ends up almost facing the floor."
          steps={[
            'The moment he grabs my heel and brings it down, use my inside leg and put it between his leg and his hip',
            'Go fully deep with that leg until the knee of my inside leg touches the heel of my outside leg again',
          ]}
        />
        <Topic
          title="Achilles defense: standing up"
          steps={[
            "Don't let him extend my foot: toes facing the ceiling, not to the side of the leg, to make the submission harder",
            'Stand up forward, planting the trapped foot',
            'Bring the knee down and pass the guard',
          ]}
        />
        <Topic
          title="Outside ashi defense (not deep)"
          note="If the oponent went deep on his outside ashi, it's very hard to escape. If he didn't, use the same standing defense: both of his legs will be pointing out, on the outside of my hip."
          steps={[
            'Get an underhook, then a crossface',
            'Extend my legs, breaking his grip',
            'Transition to side control',
          ]}
        />
      </DaySection>
    </DailyShell>
  );
}
