import { Metadata } from "next";
import { DailyShell, DaySection, NextToTry, RetroGroup } from "@/shared/components/DailyNotes";

export const metadata: Metadata = {
  title: 'Daily progress February 2026',
  description: 'Find daily notes improvements and observations for Brazilian Jiu-Jitsu in February 2026.',
};

export default function DailyFeb2026Page() {
  return (
    <DailyShell
      title="February 2026"
      eyebrow="Daily notes · Retrospective"
      closing={
        <NextToTry
          month="February"
          items={[
            'Keep practicing the armbar from mount',
            "Keep trying the d'arce choke from side control",
            'Keep transitioning into north south and look for the north south choke',
            'Keep practicing the defense to avoid the oponent to pass your guard',
            'Keep practicing the attack and pass guard',
          ]}
        />
      }
    >
      <DaySection id="feb-09" weekday="Monday" date="Feb 9th">
        <RetroGroup variant="plain" title="Back mount" items={[
          'We got primary hand and secondary hand. The primary hand is the one that will strangle',
          "If the oponent slides to the weak hand, then put your head next to your oponent between the mat and his head and don't let him to pin his head on the mat",
          "If the oponent slides to the strong hand, then don't let him to escape his head from your hook or arm pining his head",
          "With the secondary hand would attack the primary hand of the oponent always, that's first priority. Always control the primary hand",
        ]} />
      </DaySection>

      <DaySection id="feb-12" weekday="Friday" date="Feb 12th">
        <RetroGroup variant="plain" title="Back mount and turtle position" items={[
          'When your oponent start escaping, you can push him in a way to make him to change into turtle position',
          'When you go attacking turtle position, flat his back and get your leg underhooks',
          'When the back is flatened, then look for the RNC submission',
        ]} />
      </DaySection>

      <DaySection id="overall" date="Overall improvement notes">
        <RetroGroup variant="plain" title="Defending on bottom starting fight" items={[
          "Don't let your oponent to flatten your legs to the side",
          'Look for their ankles and start destabilizing their posture',
          'Look for sweeps',
        ]} />
        <RetroGroup variant="plain" title="Attacking standing up on start fight" items={[
          'Look for grips',
          'Collapse their legs',
          "Don't fall on their closed guard",
        ]} />
      </DaySection>
    </DailyShell>
  );
}
