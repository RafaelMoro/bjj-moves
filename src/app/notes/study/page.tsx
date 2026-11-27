import { Metadata } from "next";
import { DailyShell, DaySection, RetroGroup, Topic } from "@/shared/components/DailyNotes";

export const metadata: Metadata = {
  title: 'Study notes',
  description: 'Brazilian Jiu-Jitsu notes from instructional videos, grouped by position.',
};

const BACK: [string, string] = ['/#notes', '← All notes'];

export default function StudyNotesPage() {
  return (
    <DailyShell title="Study notes" eyebrow="Self learning" back={BACK}>
      <DaySection id="general" date="General concepts">
        <Topic
          title="5 tips to improve your BJJ immediately"
          link="https://www.youtube.com/watch?v=MxyfgXz_vaM&t=200s"
          steps={[
            'Use your legs',
            'Hip escape: do it when the oponent is passing your knee level',
            'Keep your arms tucked in tight: if he gets your back, tuck your arms to avoid the seatbelt grip and protect your neck with your hands',
            'Learn to bridge: it lets you escape side control. Frame correctly with your arms, bring your knees close to your butt, then bridge',
            'Focus on control',
          ]}
        />
        <Topic
          title="20 BJJ concepts that will change how you roll"
          link="https://www.youtube.com/watch?v=aXP_4Jncfj0&list=PL-immDk5vYqwvmm85QCYuWXM54vVgDB1H&index=14"
          steps={[
            'There are three targets in the guard when your feet are advantageous: inside the elbows, the hips and inside the knees',
            'Block and drive, lift and rotate',
            "Keep your hips off the mat: one of the major goals of guard is to sweep. Don't almost sweep or almost pass, take the action to the end",
            "Get your chest onto the oponent's torso",
            'Connect to the upper body or the lower body for takedowns',
            'Head, hands and hips are the lines of defense for takedowns: first get over the head, then the hands and finally the hips',
            'Rotate a bent limb or hyperextend a straight limb',
            'Create space to defend, take away space to attack',
            'Make his hips and shoulders face opposite directions',
            'Use your head as a fifth limb',
            'The feet are the hands of the legs',
            "Stay out of the oponent's lap",
            'Between the ear and shoulder, and between the armpit and hip, is sacred space: it gives access to inside position',
            'Get behind the elbows: it makes it easy to take the back',
            'Stay in front of the knees',
            'Never let someone grab your head: where the head goes, the body follows',
            'Just stand up',
            'Keep your elbows close: if he underhooks the elbow, he can control your arm easily and take kimuras or lasso grips',
          ]}
        />
        <Topic
          title="White belt tips for immediate improvement"
          link="https://www.youtube.com/watch?v=kIxGONqQ-Ds"
          steps={[
            'Look for the tip of the branch',
            'Gable grip: locks your hands together without using your thumbs',
            'S grip: for when the oponent is too big for your arms to go palm to palm',
            'Seat belt grip: commonly used from back control',
            'Always look for 3 points of contact',
            'Shot posture: if you shoot a double leg and end up in a guillotine, fix your posture on one knee with your back straight and perpendicular to the floor, hug the leg and continue the takedown',
          ]}
        />
      </DaySection>

      <DaySection id="closed-guard" date="Closed guard">
        <Topic
          title="Closed guard fundamentals by John Danaher"
          link="https://www.youtube.com/watch?v=ypi3ie6hKTI&t=305s"
          steps={[
            'Focus first on retention, then on offense',
            'Control his posture by controlling the head and arms: he wants to posture, stand up and break the guard',
            'If you get his hands on the mat, you have broken his posture',
            'Look for a chest to chest position',
            'Get double underhooks on his armpits and use an S grip behind his head',
            'Get outside his elbows to start transitioning to the back',
            'First battle for posture, then transition from neutral positions to dominant positions',
            'To pull him into closed guard: grip his head, put your right foot on his hip and throw your other leg onto his back. When he postures again, adjust to close the guard',
          ]}
        />
      </DaySection>

      <DaySection id="guard-passing" date="Guard passing">
        <Topic
          title="God level guard passing by John Danaher"
          link="https://youtu.be/T4C4oPpwOSU?si=7A_1LgPX-xe8ofau&t=935"
          definition="Control the feet, then the hips, and finally the hips and shoulders."
          steps={[
            "Grab his feet. Don't stay square to his legs and torso: pull his legs to turn him so his head meets your feet, giving him a bad angle",
            "Close distance with your head. Don't fight his legs with your hands",
            'Run your legs into his legs to control his hips so he cannot recover his guard',
          ]}
        />
        <Topic
          title="Half guard passing"
          link="https://youtu.be/T4C4oPpwOSU?si=KtskUi25RVId2rTy&t=1090"
          steps={[
            'Frame your hand on his shoulder to flatten his back, gripping his armpit and elbow',
            'Change knee level',
            'Turn your knee inwards into him so he cannot knee escape',
          ]}
        />
        <Topic
          title="Types of guard passing"
          link="https://www.guardiabjj.com/los-tipos-de-pasajes-de-guardia-del-brazilian-jiu-jitsu/"
          linkLabel="Read article"
          items={['Toreando (bullfighter)', 'Knee slice', 'Leg drag', 'Over under', 'Double under', 'Stack pass', 'Body lock']}
        />
        <Topic
          title="5 tips to pass any guard: retention side"
          link="https://www.youtube.com/watch?v=ODuQCA88oY4&t=1090s"
          steps={[
            'The bottom player wants his feet on your hips and a lapel grip to bring your head lower than your hips',
            'Pull the upper body and push the lower body',
            'Point your knees and frames at the oponent: that makes the guard hard to pass',
          ]}
        />
        <Topic
          title="5 tips to pass any guard: passing side"
          link="https://youtu.be/ODuQCA88oY4?si=BgeT_BgLhVdWc_mm&t=1306"
          steps={[
            'If he grips your lapel, break the grip immediately with both hands',
            'If he pulls your head down, lower your stance',
            "If his feet are on your hips, step back and put them under your legs so he can't connect with your hips",
            'Gripping the gi at his knee makes it easier for him to trap you in spider guard',
            "Don't connect your lower body to his legs",
            'Make his knees and frames point in different directions: knees to the left, frames to the right',
            'Use a V grip to hold his feet from the middle to the lower part, or grip under the achilles',
          ]}
        />
        <Topic
          title="Pin the leg and pass"
          link="https://youtu.be/ODuQCA88oY4?si=XWVYtC9pLDUJZ6D5&t=1011"
          steps={[
            "Don't step your lead leg over his feet line",
            'Lean forward a little and look for the connection on his hips and knee',
            "Bring him to the side of the knee you're holding and pin his knee to the mat",
            'Hips down, butt up, and clear your far leg out',
            'Collapse his legs and start passing to side control',
          ]}
        />
        <Topic
          title="Achilles grip pass"
          link="https://youtu.be/ODuQCA88oY4?si=3DwdhhaHjDfw3bFu&t=1342"
          steps={[
            'Grip under the achilles and bring his foot to face the ceiling',
            'Lower your stance and look for a lapel grip',
            'Push his hips so his toes touch the mat',
            'Put your head on his hip and push the opposite hip. Keep your head down towards the far hip to avoid a leg triangle',
          ]}
        />
      </DaySection>

      <DaySection id="guard-retention" date="Guard retention and open guard">
        <Topic
          title="Shin to shin"
          link="https://www.youtube.com/watch?v=wFZf7Oyx0_4"
          steps={[
            'Put your foot on the inside of his foot, then shin to shin, with your knee tucked to the outside',
            'Hug the inside of his knee with the inside of your elbow, and pull the leg into you to unbalance him',
            'Place your knee on his center line, between his legs: when you lean onto your shoulder, your knee stays between his chest, your chest and the front of his hips',
            'Lift the leg you hold by leaning onto your far shoulder, framing his near knee with your other hand so he cannot pass your hips straight to mount',
            'Place your other foot behind the heel of his far leg, or on the outside of his foot',
            'Fire into ashi garami: the leg that was between his legs goes with the knee on his hip, the shin to shin foot goes to his hips, and your other hand grips his other ankle',
            'To sweep, lift your hips and push the foot on his hips up, then to the side to bring him down',
          ]}
        />
        <RetroGroup variant="plain" title="Shin to shin: watch out" items={[
          'Once in ashi garami, if he changes level to remove your knee, put your knee on his chest to keep him away',
          'Gripping the inside of his knee with your palm: he can underhook you and knee slice',
          'Putting your far arm on the mat: he can roll and trap you in a kimura',
          'Your head position: if you lean too much, he can attack your neck',
        ]} />
        <Topic
          title="No gi open guard by John Danaher"
          link="https://www.youtube.com/watch?v=gOFADlBRlgY"
          note="Retain enough guard to be able to do your moves: offense from guard takes time, so focus first on retention. To pass the guard, the oponent needs to:"
          items={['Close distance', 'Establish grips', 'Get the angle', 'Level change', 'Expose my torso', 'Pin my shoulders for 3 seconds']}
        />
        <Topic
          title="Open guard principles"
          steps={[
            'When he gets the angle, frame with your hand to put your body in front of him again',
            "You can't only retain: think about your counter offense too",
            'Continuous engagement',
            'Most attacks from guard can be defeated by a simple change of posture',
            "The legs are the only part he can't hide from you: attack them while he's standing, on one knee or on both knees",
            'Use your legs to be a continuous threat he has to address',
          ]}
        />
        <Topic
          title="X guard setup"
          link="https://www.youtube.com/watch?v=yTyjCYMlfXg"
          tag="When the oponent tries to knee slice"
          note="Put your foot on the inside of his butt. There are two possibilities:"
          steps={[
            'If his head is lower than his hips: put your far foot behind his far knee, on the hamstring, hold his near armpit and roll him',
            'If his head looks forward and he posts with his arms: hold the armpit and dive deep between his legs',
            'The foot opposite to your digging arm goes on his far hamstring, inside the knee',
            'Put his ankle on your shoulder and lock it by raising your arm, holding the inside of his knee so the leg cannot escape',
            'With your free leg, kick forward to create momentum, center your hips and enter your foot on the trapped leg to make the X',
          ]}
        />
        <Topic
          title="X guard"
          definition="The knee of the leg that finishes the X goes to the outside of his hip, otherwise he collapses your legs and passes. The ankle of that same leg frames the trapped leg."
        />
        <Topic
          title="X guard basic sweep"
          link="https://youtu.be/yTyjCYMlfXg?si=obP4g2nDIIihwl2c&t=169"
          tag="Incomplete: the sweep into backroll is still missing"
          steps={[
            'Push with your legs',
            'Pull your legs in to bring his ankle close to you',
            'Hold his ankle: pull it and push again to make him fall to his side',
            'Once he is on the floor, twist through to come up',
          ]}
        />
      </DaySection>

      <DaySection id="side-control" date="Side control">
        <Topic
          title="BJJ pressure principles: side control"
          link="https://www.youtube.com/watch?v=zi60LYeGPdc&list=PL-immDk5vYqwvmm85QCYuWXM54vVgDB1H&index=38&t=586s"
          steps={[
            'Be attached and dominant: underhook the bicep deeply',
            'Put your other arm over his head and stay heavy, otherwise he can arm triangle you',
            'Try to get your leg between his legs',
            'Stay attached when he tries to escape',
          ]}
        />
        <Topic
          title="Pressure principles: sweep"
          link="https://youtu.be/zi60LYeGPdc?si=8jgSfgXJJIZaznOW&t=434"
          note="Variation 2: control the arm that overhooks you in side control, take it to his belly and sweep."
          steps={[
            'Use your frame on his head to create space and grip deep on his shoulder, over his near arm',
            'Use the other frame to push his head down, or grab his belt',
            'Move your feet like going to north south and bridge over your shoulder',
          ]}
        />
        <Topic
          title="Pressure principles: overwrap"
          link="https://youtu.be/zi60LYeGPdc?si=4KYkUlEWkqEPdyie&t=558"
          steps={[
            'Put your ribs on his sternum',
            'When wrapping, lift his torso up and stay on your toes',
            'Position yourself to disrupt his breathing: the control and the submission become easier',
          ]}
        />
        <Topic
          title="Side control pressure by Roger Gracie"
          link="https://www.youtube.com/watch?v=DVEMxS9rnZY"
          tag="When he has his arms tucked in"
          steps={[
            'Use your weight to apply pressure. If he moves his hips away, put your hip bone on his ribs so he carries your weight when he moves',
            "If I cup his far arm, don't let his elbow pass my arm; the same for the near hand. His elbow must stay on my bicep",
            'Pressure his arms with your chest',
            'Widen your north leg and post on that foot to put your weight on his chest and arms',
            'Keep your hips facing him, never vertical, or he can push you and unbalance you',
            'Stretch your south leg',
            'Push your weight as if climbing his arms',
          ]}
        />
        <Topic
          title="Side control details by Henry Akins"
          link="https://youtu.be/0N3Njr98-w0?si=70jmsUF609Rktnpb&t=126"
          definition="Transition from side control into a kesa gatame variation, trapping his north arm in the 'super chill position'."
          steps={[
            'Trap his arm: underhook it and rest your hand on your head so the arm cannot escape',
            'Use your body weight, not raw strength, to limit his breathing and recovery: save your energy and make him waste his',
            'Extend your far leg, with his south arm over it',
            'Post with the other leg so he cannot flip you backwards',
            'From here you can transition to mount',
          ]}
        />
        <Topic
          title="Paper cut choke"
          link="https://youtu.be/0N3Njr98-w0?si=7V4OXsPdkUW_Jk9z&t=272"
          tag="You want him looking up"
          steps={[
            'Turn his chin with your wrist',
            'Rotate your wrist so the blade of your little finger pushes into his neck',
            'Cup your fingers on his shoulder',
            'Point your elbow out: he can no longer turn his head',
          ]}
        />
        <Topic
          title="Cross side crucifix"
          link="https://youtu.be/0N3Njr98-w0?si=T9EelkPNnNTSLRti&t=389"
          tag="Incomplete: continue from minute 6:29"
          items={['Trap the arm when he defends the choke', 'Keep attacking the neck with the paper cut choke', 'Wrist lock']}
        />
      </DaySection>

      <DaySection id="escapes" date="Escapes">
        <Topic
          title="Escape pins: pin legs and roll"
          link="https://www.youtube.com/watch?v=aNrnRrsWSFo"
          tag="Bottom side control"
          steps={[
            'Pin his legs with your arm, grabbing the hamstring of his far leg',
            'Push his base with your hips to make him unstable',
            'Bridge with your other arm and roll, ending on top in side control',
          ]}
        />
        <Topic
          title="Escape pins: diagonal exit"
          tag="Bottom side control"
          steps={[
            'Use your north arm to pin his head to his elbow, like grabbing his far armpit',
            "Roll onto your shoulder towards 12 or 1 o'clock to bridge diagonally",
          ]}
        />
        <Topic
          title="Escape pins: knee in and you're out"
          link="https://youtu.be/aNrnRrsWSFo?si=bN6f3G8hBqNOCqPG&t=370"
          tag="Bottom mount"
          steps={[
            'When he sits up straight with his hips heavy, break his posture: frame on his knee and push his back with your knee',
            'Put your fists on his hip bones',
            'Bridge, extend your arms and move your hips away. Bring one knee in and sit up to create more distance',
            "Don't bench press: use the momentum of your hips to bring your knee in",
          ]}
        />
        <Topic
          title="Side control escape by John Danaher"
          link="https://youtu.be/cuXq-k__9lQ?si=xj2U8UqNusSUF6_n&t=647"
          steps={[
            "Get your elbow inside his hips. If you can't, turn the other way as if giving your back, just to create space and get your arm in",
            'Place your knee on his hip',
            'Join elbow and knee to make a frame and create space',
            'Push your leg with the help of the other leg to get vertical to him',
            'Frame on his shoulder with your arm',
            'Escape: bring your leg in to recover closed guard, or grab his tricep with both hands and sit up. If he pushes his weight back on you, try to sweep him',
          ]}
        />
        <Topic
          title="Side control escape by Gordon Ryan"
          link="https://youtu.be/0pzF4_ltfJQ?si=1RfTNYDlmT63SlpZ&t=193"
          definition="Take inside control. Don't let the oponent control your head or arms."
          steps={[
            'Bring your frames first: elbow in his armpit, hand framing his shoulder',
            'Your other arm goes inside his hips',
            'Push him and bring your knees in',
          ]}
        />
        <Topic
          title="Side control escape: knee on the hip"
          link="https://youtu.be/0pzF4_ltfJQ?si=QcZdrhaQXcZHL_Xn&t=208"
          steps={[
            'Bring your elbow inside his hip first',
            'Place your knee on his hip, then hip escape to bring the knee in and get inside control',
            'Change your hand frames to get vertical to him: put your other foot on your foot to turn and create more space',
            'Connect your hands over his shoulder',
            'Bring your far knee inside his shoulder, then your hands',
          ]}
        />
        <Topic
          title="Mount escape: kipping"
          link="https://youtu.be/0pzF4_ltfJQ?si=pOAU8ga6wU3-VMTZ&t=245"
          steps={[
            'Bring the hand that is not being crossfaced inside his hip',
            'Bridge and start bringing your knees in, turning your body sideways',
            'Get your knees to inside position',
          ]}
        />
        <Topic
          title="North south escape"
          link="https://youtu.be/0pzF4_ltfJQ?si=UFi6uqmD1xnohQKD&t=492"
          tag="The oponent is on his knees"
          steps={[
            'Bring your arms inside his elbows and armpits',
            'Lift and bring your knees in',
            'Rotate to bring him in front of your knees',
          ]}
        />
        <Topic
          title="North south escape: he tripods"
          link="https://youtu.be/0pzF4_ltfJQ?si=SWly2rtP_P4mwx8B&t=525"
          tag="He tripods and drops his head onto your hips"
          steps={[
            'Bring your arms in and frame on the side of his back and his hips',
            'Walk your feet towards the frames to make him perpendicular',
            'Shrimp and bring your knees in',
          ]}
        />
      </DaySection>

      <DaySection id="mount-defense" date="Mount defense">
        <Topic
          title="Cross collar choke defense by Ryron Gracie"
          link="https://www.youtube.com/watch?v=mW2nLo-6apc&t=1338s"
          tag="He gets his first grip, on my right lapel in this example"
          note="If he blocks me the same way, he has to block my bicep: when I reach for his lapel, I turn my weight and go to S mount for the armbar."
          steps={[
            'My left hand takes his wrist and lifts the elbow, keeping my hand as a short frame protecting my neck. This arm is there to catch the arm that comes for the second grip',
            'My right arm frames on his bicep to stop the choke',
            'When his hand comes over the top, redirect the arm with my left frame and push his elbow with my right hand',
          ]}
        />
        <Topic
          title="Cross collar choke defense: he gets both grips"
          link="https://youtu.be/mW2nLo-6apc?si=tStmWXD8aoc1oE6L&t=952"
          tag="The second grip comes in with strength or speed and I couldn't stop it"
          steps={[
            "With my right hand, turn his elbow outwards",
            'That creates space to bring my left arm in, touching my head, and make a frame with my elbow that blocks the second grip',
          ]}
        />
        <Topic
          title="Armbar defense"
          link="https://youtu.be/mW2nLo-6apc?si=CF01Rpzi3bp29QpX&t=1216"
          tag="He transitions from modified mount to the armbar, without passing his leg over my belly"
          note="If he is in S mount, pass your arm under his leg and move towards him. Watch out for triangles: act when he starts posting to pass his other leg."
          steps={[
            "Do nothing with the arm he's taking for the armbar",
            'Hide the other arm under your leg, or pretend it is there',
            'When he passes his leg to sit for the armbar, push his leg off your chest',
            "The defense doesn't work if he has both arms",
          ]}
        />
      </DaySection>

      <DaySection id="north-south" date="North south">
        <Topic
          title="North south choke by John Danaher"
          link="https://youtu.be/Li4hK0kCL80?si=Cyoowap5ny6SY677&t=327"
          note="Variation: same steps, but with the gable grip go perpendicular to his body."
          steps={[
            'Underhook an arm and start wrapping your arm behind his head',
            'Go fully north south',
            'Lock a gable grip',
            'Push your body north like a push up to remove space, and hold',
            'Put your head on his tricep so he cannot push you off the neck',
          ]}
        />
      </DaySection>

      <DaySection id="kesa-gatame" date="Kesa gatame">
        <Topic
          title="Kesa gatame set up"
          link="https://www.youtube.com/watch?v=G0Xf_CJzE6M"
          steps={[
            'Use it as a counter when he is in side control underhooking your arm: pin the tricep of his near arm and switch to kesa gatame',
            'Use your weight on his chest and belly to make him uncomfortable',
            'If his arm is flopping around, grab his wrist with your elbow pinned to your body, then crunch and put his arm under your near leg',
            'Pull up his head, pin his arm to the mat with your legs, then bridge to finish',
            'If he straightens his arm, do the same motion with your knees controlling his head to finish the armbar. Put one leg behind his elbow',
            "If he grabs your torso so you can't get his wrist, scoop his far elbow with your wrist blade and make an S grip, then go for the kimura: his wrist goes down and his elbow up",
          ]}
        />
        <Topic
          title="Kuzure kesa gatame"
          link="https://www.youtube.com/watch?v=uyAtgqkLeOk"
          definition="Like kesa gatame, but instead of wrapping the head you overhook his far arm and grip his shoulder or neck."
          note="Kimura variation: trap the head with your leg without closing the triangle, pin his body with your legs and trap his far arm."
          steps={[
            'Trap his near arm between your legs',
            'When he lifts his head, cup it, push it near your leg and trap it for an arm triangle',
            'Lock your leg over his head, and put the other leg under his shoulder to close the triangle',
            'Pull the arm to finish',
          ]}
        />
        <Topic
          title="Kesa gatame: 2 tight chokes"
          link="https://www.youtube.com/watch?v=VrDond0Pb64"
          note="Both chokes start the same way: in kesa gatame, wrap his head with your near arm and grab your thigh, then try to get his arm into your leg. If he pushes you away, use the momentum of his resistance to pull his arm past your neck and go for an arm triangle."
        />
        <Topic
          title="Tight choke 1"
          steps={[
            'Go temple to temple',
            "Switch to a gable grip, or better, a d'arce style grip holding both elbows",
            'Switch your stance towards him and, in one motion, press his arm with your chest while expanding it, and turn your chin into his eye socket',
          ]}
        />
        <Topic
          title="Tight choke 2"
          steps={[
            'Switch the grip of the arm around his neck to a gable grip instead of holding your thigh',
            'Straighten both arms so the choking arm goes deeper, then recoil and hold the choke',
          ]}
        />
      </DaySection>

      <DaySection id="training" date="Animal movement drills">
        <Topic
          title="When to do them"
          steps={[
            'Before a BJJ session (recommended): warms up joints and muscles, primes movement patterns, and transfers best to rolling and drilling',
            'Standalone session: for mobility, coordination or recovery, with slow controlled reps. Example (12–15 min): joint prep 2–3 min, mobility patterns 4–5 min, technical locomotion 6–8 min, then 3 rounds of integration chains',
            'After a gym workout: OK, but brief and low intensity. Focus on quality, and avoid explosive drills or deep ranges when tired',
          ]}
        />
        <Topic
          title="Programming tips"
          steps={[
            'Quality beats quantity: stop when form breaks',
            'Match intensity to freshness, avoid them when exhausted',
            'Progress by adding complexity (directions, chains) before speed or volume',
            'Use slow, paused reps for mobility and tissue sparing',
          ]}
        />
        <Topic
          title="Weekly use"
          steps={[
            'Minimalist: before BJJ only, 8–10 min, 3–4 times a week',
            'Skill focus: 3 times before BJJ plus 2 standalone sessions',
            'Hybrid strength: 2 times before BJJ, 2 short ones after lifting, 1 standalone',
            'Competition week: only minimal priming before BJJ',
          ]}
        />
        <Topic
          title="Drill selection"
          note="Red flags: skip or adapt the drills if there is joint pain or severe fatigue, and never sacrifice form for volume."
          items={['Monkey: lateral movement, base shifts', 'Crocodile: low pressure, core control', 'Duck walk: deep squat, knee and ankle mobility', 'Bear, frog, crab: optional for variety']}
        />
      </DaySection>
    </DailyShell>
  );
}
