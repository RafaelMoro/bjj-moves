import { Metadata } from "next";
import { DailyShell, DaySection, NextToTry, RetroGroup } from "@/shared/components/DailyNotes";

export const metadata: Metadata = {
  title: 'Daily progress December 2025',
  description: 'Find daily notes improvements and observations for Brazilian Jiu-Jitsu in December 2025.',
};

export default function DailyDec2025Page() {
  return (
    <DailyShell
      title="December 2025"
      eyebrow="Daily notes · Retrospective"
      closing={
        <NextToTry
          month="December"
          items={['Try armbar from mount', 'Try guillotine', 'Try darce choke from north south', 'Transition from mount to back mount']}
        />
      }
    >
      <DaySection id="dec-22" weekday="Monday" date="Dec 22nd">
        <RetroGroup variant="well" title="What did we do well?" items={[
          'Transition from side control to kesa gatame',
          'Transition from side control to north south',
        ]} />
        <RetroGroup variant="improve" title="What needs improvement?" items={[
          'Isolate the arm in kesa gatame',
          'Being able to secure the arms in side control, kesa gatame and north south',
          "Improve escape while being in opponent's closed guard",
          'Close contact in open guard',
          'While passing guard, enter with the knee and lower your body',
        ]} />
      </DaySection>

      <DaySection id="dec-23" weekday="Tuesday" date="Dec 23rd">
        <RetroGroup variant="well" title="What did we do well?" items={['Defend americana', 'Defend armbar']} />
        <RetroGroup variant="improve" title="What needs improvement?" items={[
          { text: 'I got my guard passed down', children: ["I didn't put my foot in my opponent's hips", 'Always bring your legs into your opponent'] },
          'The opponent passed from side control to mount',
          "I couldn't pass the opponent's guard and finished on triangles or armbars",
          "I couldn't finished the darce choke from north south",
          "I didn't finished the americana or armbar in kesa gatame",
        ]} />
      </DaySection>

      <DaySection id="dec-31" weekday="Wednesday" date="Dec 31st">
        <RetroGroup variant="well" title="What did we do well?" items={['My first submission from back mount with Rear naked choke']} />
        <RetroGroup variant="saw" title="What did we saw?" items={[
          '5 steps of the mount',
          'Americana with armbar from side control',
          'How to control an arm by walking your hand in the mat in a circle',
          { text: 'Basics of side control', children: ['Have direct contact chest to chest', 'Crossface'] },
        ]} />
        <RetroGroup variant="improve" title="What needs improvement?" items={[
          'I gassed out',
          { text: 'I let my guard being passed down', children: ["I didn't put my foot in my opponent's hips", 'Always bring your legs into your opponent'] },
          "I couldn't pass the opponent's guard and finished on triangles or armbars",
        ]} />
      </DaySection>
    </DailyShell>
  );
}
