import { Metadata } from "next";
import { DailyShell, DaySection, RetroGroup, Topic } from "@/shared/components/DailyNotes";

export const metadata: Metadata = {
  title: 'Class notes',
  description: 'Brazilian Jiu-Jitsu notes from class: drills, half guard, grips, takedowns and the ABCs.',
};

const BACK: [string, string] = ['/#notes', '← All notes'];

export default function ClassNotesPage() {
  return (
    <DailyShell title="Class notes" eyebrow="From class" back={BACK}>
      <DaySection id="drills" date="Drills">
        <Topic
          title="Drill 1"
          tag="Starts in side control, me on top"
          steps={[
            "Keep control of the critical point (J-point), the oponent's hip, so he can't come towards you",
            'Slide your knee across to mount, always keeping your weight low so he cannot throw you',
            'When you finish the slide your knee touches the floor. Lift the underhook you had from side control and hip out to free the leg and complete the mount',
            'Posture up: basically sit on his belly',
            'The oponent frames on your knee and hip (the knee frame is his elbow resting on the mat, pushing your knee). He pushes with his knees and the frame at the same time to unbalance you',
            'The oponent first looks to control your head (not the neck), then looks for the underhook',
            'The oponent sweeps: first a hip thrust, then he puts his weight on his shoulder at an angle to end up with you in his guard',
            'You end up inside his guard and posture up',
            'Stand up one leg, then the other, then fully',
            'Pin one leg with an arm and control his hip with your opposite hand, protecting yourself from his leg',
            'Slide through to side control and repeat the cycle',
          ]}
        />
        <Topic
          title="Drill 2"
          tag="Starts in seated mount (no crossface)"
          steps={[
            'The oponent frames on your knee and hip; when the knee is pushed, the legs push on the back',
            'Underhook fight, twice on each arm',
            'The oponent turns over (in a real fight, never give your back)',
            'Take the back: put your leg at the height of his head, bring your other leg in front of his hands, control his near hand with a figure 4 grip, head to head, sit him down first, then take him to the strong side',
            'The oponent bridges and breaks the grip, if there is one',
            'The oponent grabs the primary hand with both hands, lifts it and does a neck lock using the arm as a lever, keeping control',
            'The oponent mounts',
          ]}
        />
        <Topic
          title="Drill 3"
          tag="Starts with the oponent in your closed guard"
          steps={[
            'The oponent posts both legs, minding his posture, to break the guard. Then he stands up',
            'When he stands up, open the guard: close your adductors and knees, push with your feet and pull his ankles with your hands to sweep',
            'If you sweep him, go up to mount',
            'The oponent posts and leaves the leg on the post side flat. Use the posting arm to push the knee and, with the leg opposite to the posted one, trap the foot to extract the leg and end in half guard (left post → left leg flat → trap the foot with the right leg)',
            'If the oponent does a sliding shrimp to create space, he gets an underhook on the shrimp side (arm extended, palm facing your face) and posts the other arm on your bicep',
            'With another sliding shrimp he puts the leg back on the hip and closes you in closed guard again',
          ]}
        />
        <Topic
          title="Drill 4"
          tag="You are on bottom, in side control or 100 kilos"
          steps={[
            'Secure your frames: one arm against his neck and the other frame on his hip',
            'Make space: bridge and push with the arm that frames the neck',
            'Underhook: get your arm under his armpit fast and stretch it hard. His armpit ends up more or less on your shoulder, with your palm facing where you would look straight ahead',
            'Come up: post on your elbow, swing your leg like a pendulum and switch to turtle, hugging his back',
            'Switch: get in front of him and take the turtle grip',
            'He escapes: he hugs the elbow of the arm under his armpit, stretches his legs and escapes to the side, keeping the grip on the arm',
            'He brings in the leg opposite to the side of his elbow grip: if your grip is on his right armpit, he grips with his right arm and brings in his left leg',
            'He looks at the ceiling and takes the back',
            'He traps you: he pulls your neck and hip to put you on bottom again. Start over',
          ]}
        />
      </DaySection>

      <DaySection id="half-guard" date="Half guard">
        <Topic
          title="The ranges of half guard"
          link="https://www.grapplearts.com/the-6-ranges-of-half-guard/"
          linkLabel="Read article"
          definition="There are 5 versions of half guard: 2 close, 1 middle and 2 far."
          items={['Close: deep half', 'Close: 90/10', 'Middle: orthodox', 'Far: Z guard', 'Far: lockdown']}
        />
        <Topic
          title="Half guard tips"
          steps={[
            'Keep your shoulder fully connected to your neck to protect that frame better, and connect it with your knee shield when possible',
            'From a far half guard, look for the space to recover the guard',
            'From orthodox, look for the 90/10, and from there sweep him or dog fight to sweep his far leg',
          ]}
        />
        <Topic
          title="Sweep against reverse half"
          tag="I'm on bottom in orthodox half guard"
          note="He is in reverse half: his chest is on my hip and both his arms are trying to free the leg trapped in my half guard."
          steps={[
            "In gi, grip his gi at belt height and his near leg (the one that isn't trapped)",
            'First trap that leg with my legs, in a kind of triangle',
            'Use the grip on the near leg to push it and trap it with my legs',
            'Post on my shoulder and push with my hip to sweep him',
            'Immediately look for the crossface and pass to mount',
          ]}
        />
        <Topic
          title="90/10"
          steps={[
            'To enter 90/10, first stick your head to his hip',
            'In right half guard, your left leg can be the knee shield: use it to break his hip by pushing his calf to the left',
            'Push him a bit with your shoulder frame to bring the knee in front of your right knee',
            'Then hug the leg and get your head deep on his hip',
          ]}
        />
        <RetroGroup variant="plain" title="90/10 options" items={[
          'If he whizzers the overhook and comes towards you, sweep him from right to left and end in side control',
          'If he whizzers but moves away, pendulum your left leg into the dog fight, then go for his far leg and sweep him',
          'Take his back with a pendulum of your far leg',
        ]} />
      </DaySection>

      <DaySection id="fighting-from-the-top" date="Fighting from the top">
        <Topic
          title="Primary and secondary grips"
          definition="Primary grips move the oponent. Secondary grips create space."
        />
        <Topic
          title="No gi grips"
          steps={[
            'Underhook: create a vector with your shoulder, changing the direction of his arm upwards',
            'Overhook: at deltoid height, NOT over the shoulder',
            'Whizzer: the counter to the underhook. Use it to create distance, or to close it',
          ]}
        />
        <Topic
          title="Gi grips: the feint"
          note="Feint with one hand, take the grip with the other, then fix the grip. Example: feint with the right hand, grip with the left, then fix it with the right."
        />
        <RetroGroup variant="plain" title="Gi grips" items={[
          {
            text: 'Primary grips',
            children: [
              'On the lapel: not too high, not too low. Connect your elbow to his chest to control his weight better',
              'On the "patch" of the gi, between the shoulder blades',
            ],
          },
          {
            text: 'Secondary grips: they must put tension on the gi',
            children: [
              'At the elbow: grip with 4 fingers, wrist flexed, palm facing out, to control him and create space',
              'On the sleeve with a pistol grip: roll the gi like a churro, held in your 4 fingers',
              'On the sleeve at the wrist, from top to bottom, holding the gi with 4 fingers',
            ],
          },
        ]} />
        <Topic
          title="Uchi mata"
          steps={[
            'Get the primary grip on the lapel',
            'Look for the secondary grip on the elbow',
            'Use the primary grip to pull him in, and the secondary grip to create space at the same time',
            'Get his head off the center line of his body',
            'Sweep his leg on the side of the primary grip, swinging your whole leg together with the action of the grips',
          ]}
        />
        <Topic
          title="Ankle pick"
          steps={[
            'Get a collar tie holding the head, not the back of the neck',
            'Stick your elbow to his chest',
            'Grip his wrist as the secondary grip',
            'Push and pull: when you pull him, change levels',
            'When changing levels, kneel on the knee on the side of the wrist grip',
            "Don't lift the leg: pull the ankle and use the collar tie to bring him to the floor",
          ]}
        />
      </DaySection>

      <DaySection id="abcs" date="ABCs">
        <Topic title="ABC of the guard" steps={['Break the posture', 'Control the upper body', 'Angle']} />
        <Topic title="ABC of guard passing" steps={['Grips', 'Angle', 'Close distance', 'Level change', 'Secure the pin']} />
        <Topic title="ABC of side control" steps={['Chest to chest contact', 'Crossface', 'Underhook']} />
      </DaySection>

      <DaySection id="terms" date="Terms">
        <Topic
          title="Kipping"
          definition="A mount escape from the bottom: put your fists on each side of his hips, then push him to create space and escape."
        />
        <Topic
          title="Trap and roll"
          definition="Trap his head, get an underhook and bridge towards the underhook side, at an angle over that shoulder, to end in his closed guard."
        />
        <Topic
          title="Other terms"
          items={['Underhook', 'Wizard or whizzer', 'Arm drag', 'Collar tie', 'Clinch', 'Guardia opuesta', 'Guardia encontrada', 'Monkey grip', 'Sprawl']}
        />
      </DaySection>

      <DaySection id="may-2026" weekday="Class notes" date="May 2026">
        <Topic
          title="Taking the back"
          definition="Don't let the oponent use his legs to put his butt on the mat: use the leg that isn't touching the mat to hook inside his knee."
        />
        <Topic
          title="Back escape: strong side"
          steps={[
            "My primary hand guards the oponent's primary hand",
            'Plant both feet on the mat and climb',
            'Climb high enough that he loses the mechanical advantage and I can free my secondary hand',
            'Free my secondary hand',
            'Grab his primary hand with a baseball grip',
            'Free his primary hand from my neck. While doing it, arm drag him by holding his tricep towards me',
            "Put my secondary elbow and arm on him so his chest doesn't face me. That way he can't mount me. Don't let go of the arm drag",
            'Climb until my butt touches the mat',
            'Hip escape to face him',
            'Transition onto him',
          ]}
        />
        <Topic
          title="Back escape: weak side"
          steps={[
            "My primary hand guards the oponent's primary hand to avoid the choke",
            'My ability to escape depends on my ability to put my head on the mat',
            'Start climbing, and at the same time get my back to start touching the floor',
            'Keep climbing so he loses the mechanical advantage',
            "Don't let his chest face me: if it does, he has a better chance to mount me",
          ]}
        />
      </DaySection>
    </DailyShell>
  );
}
