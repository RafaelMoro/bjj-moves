import { Metadata } from "next";
import { DailyShell, DaySection, NextToTry, RetroGroup } from "@/shared/components/DailyNotes";

export const metadata: Metadata = {
  title: 'Daily progress January 2026',
  description: 'Find daily notes improvements and observations for Brazilian Jiu-Jitsu in January 2026.',
};

const WELL = ['Transition from side control to kesa gatame'];
const SAW = ['Check again open guard and de la riva guard', 'Gi choke from back mount'];
const IMPROVE = ['I gassed out', 'The opponent passed my guard', 'I took a lot of guillotines'];

export default function DailyJan2026Page() {
  return (
    <DailyShell
      title="January 2026"
      eyebrow="Daily notes · Retrospective"
      closing={
        <NextToTry
          month="January"
          items={[
            'Try armbar from mount',
            'Try triangle choke from mount',
            'Try guillotine from closed guard',
            'Try darce choke from north south',
            'Transition from mount to back mount',
            'Transition from me being in closed guard into ashi garami',
            'Scissor sweep from closed guard to mount',
            'Transition from side control to knee on belly',
          ]}
        />
      }
    >
      <DaySection id="jan-01" weekday="Thursday" date="Jan 1st">
        <RetroGroup variant="well" title="What did we do well?" items={WELL} />
        <RetroGroup variant="saw" title="What did we saw?" items={SAW} />
        <RetroGroup variant="improve" title="What needs improvement?" items={IMPROVE} />
      </DaySection>

      <DaySection id="jan-12" weekday="Monday" date="Jan 12th">
        <RetroGroup variant="plain" title="Back mount" items={[
          'We got primary hand and secondary hand. The primary hand is the one that will strangle',
          "If the oponent slides to the weak hand, then put your head next to your oponent between the mat and his head and don't let him to pin his head on the mat",
          "If the oponent slides to the strong hand, then don't let him to escape his head from your hook or arm pining his head",
          "With the secondary hand would attack the primary hand of the oponent always, that's first priority. Always control the primary hand",
        ]} />
        <RetroGroup variant="well" title="What did we do well?" items={WELL} />
        <RetroGroup variant="saw" title="What did we saw?" items={SAW} />
        <RetroGroup variant="improve" title="What needs improvement?" items={IMPROVE} />
      </DaySection>
    </DailyShell>
  );
}
