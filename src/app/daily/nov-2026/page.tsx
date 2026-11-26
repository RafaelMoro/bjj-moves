import { Metadata } from "next";
import { DailyShell, DaySection, RetroGroup, Topic } from "@/shared/components/DailyNotes";

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

      <DaySection id="nov-16" weekday="Monday" date="Nov 16th">
        <Topic
          title="Technical review"
          note="Class reviewing technical questions about what was seen by those who went to the BJJ camp."
        />
        <Topic
          title="De la riva: three points of contact with the gi"
          steps={[
            'Shin to shin',
            'Grab the inside of his knee with my hand or bicep, like hugging the leg',
            'Grip his sleeve on the opposite side of the leg I control with my ankle and the shin to shin',
          ]}
        />
        <RetroGroup variant="plain" title="De la riva key points" items={[
          'If he grips my gi at the knee, I break the grip by pushing my leg and pulling his hand into me',
          'If he breaks my grip on his hand, I immediately look for his farthest lapel and take it with the hand that is attacking the leg with the de la riva: it goes under the leg and grips',
        ]} />
        <Topic
          title="De la riva sweep with the gi"
          steps={[
            'Always look to grip the hand opposite to the leg I attack with the de la riva',
            'Once I have the three points of contact, push his other leg with my other leg (de la riva with the left, push with the right)',
            'Pull the hand grip and roll onto my shoulder so he loses the ability to post',
            'Then I may take his back to pressure and transition to side control',
          ]}
        />
        <Topic
          title="Half guard 90/10"
          tag="The oponent is facing me"
          note="His south leg is trapped in my half guard, and his north leg is usually posted at the height of my head."
          steps={[
            'Grab his north leg, like going forward to his hip',
            'Change the half guard and my body: instead of facing him, I face the same way he is facing',
            'If he goes all the way to the front posting, I can work to take his back',
            'If he has his weight more to the side of his back, drive into his legs, then double under and pass the guard',
          ]}
        />
        <Topic
          title="Side control tip: hip frame"
          tag="I start in side control"
          steps={[
            'Lower my hip near his head to collapse the frame on the hip',
            'Switch and walk my leg to isolate the arm near the head',
          ]}
        />
        <RetroGroup variant="improve" title="What needs improvement?" items={[
          'My guard gets passed when my legs collapse',
          'I end up in side control',
          "When I attack from side control, I'm not isolating the hip frame",
          'Improve knee on belly',
        ]} />
        <RetroGroup variant="plain" title="Other useful tips" items={[
          'Attack the arms with my legs as well, and pin them',
        ]} />
      </DaySection>

      <DaySection id="nov-24" weekday="Tuesday" date="Nov 24th">
        <Topic
          title="Fighting from the top"
          note="We saw a scheme that is new to me for fighting from the top."
          items={['Single leg', 'Double leg', 'Snap down to turtle, then front headlock and transition to the back', 'Arm drag']}
        />
        <Topic
          title="Drill: touch the knee 3 times"
          note="Touch the oponent's knee 3 times, then I can take him down or attack with:"
          items={['Single leg', 'Arm drag (no takedown)', 'Snap down']}
        />
        <RetroGroup variant="improve" title="What needs improvement?" items={[
          { text: 'Focus', children: ['My morale dropped, everyone submitted me', 'Recover the fighting mentality'] },
          "I didn't look to fight from the bottom to get the points of contact",
          'I let my guard be passed easily',
          "I didn't escape side control or mount",
        ]} />
      </DaySection>

      <DaySection id="nov-25" weekday="Wednesday" date="Nov 25th">
        <Topic
          title="Fighting from the top: grips"
          tag="Main topic: fighting from the top"
          definition="There are two important grips. The main grip is on the gi at collarbone height: usually my right hand looks for his left lapel. I can also go for his right lapel, which is harder to remove. The secondary grip is on the gi at elbow height with my other hand (the left one in this example), tensing my hand by flexing the wrist: palm facing out and the back of my hand facing me."
        />
        <Topic
          title="Feint"
          steps={[
            'Raise my right hand and come closer, looking for him to react by covering himself with his hand',
            'When he reacts, grab his left lapel with my other hand (the left one in this case)',
            'Switch the grip to my right hand',
          ]}
        />
        <Topic
          title="Attack"
          note="Once I have both grips, pull him towards me, squaring him up so my leg points between his legs."
          items={['Grab his belt and bring my body into his to make the takedown easier', 'Single legs']}
        />
        <RetroGroup variant="plain" title="Grip defense" items={[
          {
            text: 'Removing the main grip',
            children: [
              'Grab the wrist of his sleeve with both hands and push out, holding the sleeve towards his thumb: not forward, but outwards',
              'If the grip is close to the neck, move my head so his wrist ends up on my neck with his hand twisted and no grip power. If he grips my right lapel with his right hand, pass his arm around my head until the back of his hand is on my neck',
            ],
          },
          {
            text: 'Removing the secondary grip on the wrist',
            children: ['Bring my arm down towards my knee', 'Put my knee over his gripping hand and pull my arm towards me'],
          },
          {
            text: 'Removing the secondary grip on the elbow',
            children: ['Bring my arm towards my torso, or bring the hand towards my hip', 'With my other hand, push his gripping hand out'],
          },
        ]} />
        <RetroGroup variant="improve" title="What needs improvement?" items={[
          'Focus on my game: the control and what I will do for the submission',
          'Take advantage of the offense',
          'Attack the far arm in side control',
          'Isolate the near arm in side control',
        ]} />
      </DaySection>
    </DailyShell>
  );
}
