import { Metadata } from "next";
import { DailyShell, DaySection, Topic } from "@/shared/components/DailyNotes";

export const metadata: Metadata = {
  title: 'Daily progress October 2026',
  description: 'Find daily notes improvements and observations for Brazilian Jiu-Jitsu in October 2026.',
};

export default function DailyOct2026Page() {
  return (
    <DailyShell title="October 2026">
      <DaySection id="oct-29" weekday="Thursday" date="Oct 29th">
        <Topic
          title="Attacks from side control"
          items={['Spinning armbar', 'Kimura', 'One-hand kimura', 'Americana', 'Straight armbar', 'Arm triangle']}
        />
        <Topic
          title="Seated armbar from side control"
          tag="When the oponent hugs my arm in the frame against his neck"
          steps={[
            'Secure the arm by putting my hand on the inside of his elbow',
            'Mount the south leg',
            'Pass the north leg next to his neck',
            'Sit up',
            'Two fingers down, then apply the armbar',
          ]}
        />
      </DaySection>

      <DaySection id="oct-31" weekday="Saturday" date="Oct 31st">
        <Topic
          title="North south choke"
          tag="When I'm on top in north south"
          steps={[
            'Put my forearm below his head, palm open facing the mat',
            'Lock the S grip and walk towards the head',
            'Place my delt on his neck',
            'Drive the delt towards the mat, pushing a little above, as if placing my shoulder on the mat',
          ]}
        />
      </DaySection>
    </DailyShell>
  );
}
