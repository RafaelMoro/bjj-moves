import { Metadata } from "next";
import Link from 'next/link'
import { Archivo } from "next/font/google";
import {
  ARM_TRIANGLE_FROM_MOUNT_TIKTOK, ARMBAR_FROM_MOUNT_ROUTE, DAILY_DECEMBER_2025_ROUTE, DAILY_FEBRUARY_2026_ROUTE, DAILY_JANUARY_2026_ROUTE, DAILY_NOVEMBER_2026_ROUTE, DAILY_OCTOBER_2026_ROUTE, DUCK_UNDER_ROUTE,
  GUARD_RETENTION_ROUTE, GUILLOTINE_CLOSED_GUARD_ROUTE, NO_GI_DARCE_CHOKE_NORTH_SOUTH, NO_GI_EZEKIEL_CHOKE_TIKTOK, PASSING_GUARD_ROUTE, TRANSITION_BREAKING_GUARD_LINK,
  TRANSITION_SIDECONTROL_NORTHSOUTH_LINK, TRANSITION_SWEEP_MOUNT_CLOSED_GUARD_LINK, TRIANGLE_CHOKE_FROM_MOUNT_ROUTE
} from "@/shared/constants/global.constants";

const archivo = Archivo({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

export const metadata: Metadata = {
  title: 'BJJ Basics - Home',
  description: 'Welcome to the home page of BJJ Basics, your resource for learning Brazilian Jiu-Jitsu techniques.',
};

const NAV = [
  ['terms', 'Terms'], ['positions', 'Positions'], ['techniques', 'Techniques'], ['submissions', 'Submissions'],
  ['daily', 'Daily notes'], ['try', 'To try'], ['takedowns', 'Takedowns'],
] as const;

const TERMS = [
  ['Guard', 'A position where one practitioner is on their back controlling the opponent with their legs.'],
  ['Passing guard', "The act of moving from inside an opponent's guard to a more dominant position."],
  ['Side control', 'A dominant position where one practitioner is on top, perpendicular to the opponent.'],
  ['Takedown', 'A technique used to bring an opponent to the ground from a standing position.'],
];

// items without href have no page yet and get the "pending" tag
const POSITIONS: { title: string; items: { label: string; href?: string }[] }[] = [
  { title: 'Closed guard', items: [{ label: 'Triangle choke' }, { label: 'Armbar' }, { label: 'Guillotine', href: GUILLOTINE_CLOSED_GUARD_ROUTE }, { label: 'Kimura' }] },
  { title: 'Mount', items: [{ label: 'Armbar', href: ARMBAR_FROM_MOUNT_ROUTE }, { label: 'Americana' }, { label: 'Triangle choke from mount', href: TRIANGLE_CHOKE_FROM_MOUNT_ROUTE }] },
  { title: 'Technical mount (back mount)', items: [{ label: 'Rear naked choke' }, { label: 'Armbar' }] },
  {
    title: 'Side control',
    items: [
      { label: 'Seated armbar', href: DAILY_OCTOBER_2026_ROUTE }, { label: 'Spinning armbar' }, { label: 'Straight armbar' },
      { label: 'Kimura' }, { label: 'One-hand kimura' }, { label: 'Americana' }, { label: 'Arm triangle' },
    ],
  },
  { title: 'North south', items: [{ label: 'North south choke', href: DAILY_OCTOBER_2026_ROUTE }, { label: "D'arce choke" }] },
  {
    title: 'Attack on turtle position',
    items: [
      { label: 'Anaconda', href: DAILY_NOVEMBER_2026_ROUTE }, { label: 'Guillotine', href: DAILY_NOVEMBER_2026_ROUTE },
      { label: "D'arce", href: DAILY_NOVEMBER_2026_ROUTE },
    ],
  },
];

const TRY: { label: string; tiktok?: string }[] = [
  { label: 'Try armbar from mount' },
  { label: 'Try guillotine' },
  { label: 'Try darce choke from north south', tiktok: NO_GI_DARCE_CHOKE_NORTH_SOUTH },
  { label: 'Transition from mount to back mount' },
  { label: 'Transition from side control to knee on belly' },
  { label: 'Setup an arm no gi ezekiel choke from mount', tiktok: NO_GI_EZEKIEL_CHOKE_TIKTOK },
  { label: 'Do a scissors sweep from closed guard (you bottom) to mount' },
  { label: 'Do an arm triangle from mount', tiktok: ARM_TRIANGLE_FROM_MOUNT_TIKTOK },
];

const TRANSITIONS: { title: string; link: string; linkLabel: string; tag?: string; steps: string[] }[] = [
  {
    title: 'Go from sidecontrol to north south', link: TRANSITION_SIDECONTROL_NORTHSOUTH_LINK, linkLabel: 'Side control to north south link',
    steps: [
      'Initialize from side control with your collarbone pushing on his ribs',
      'Note that you need your leg under his arm',
      'Pass your north side arm that wraps under his neck to move the arm over his neck',
      'Drop your hips so his arm trapped ir near his head',
      'Extend your legs and drop your hips over his arm',
      'Then start transitioning into north south with the south arm on his hips to avoid the opponent to turn',
    ],
  },
  {
    title: 'Pass the guard', link: TRANSITION_BREAKING_GUARD_LINK, linkLabel: 'Breaking guard link',
    steps: [
      'Position your body as away as possible with your back aligned (espalda derechita)',
      'Put your strong leg between his legs',
      'Pin and stretch to break closed guard',
      'Pin one leg to the mat and be aware of the other leg, underhook it may be an option',
      'Start passing with the leg next the opponent',
      'move your grips into the head and shoulders',
      'Use your other leg to stretch it and stabilize the transition to finally pass your leg trapped into side control',
    ],
  },
  {
    title: 'Roll from mount to closed guard', link: TRANSITION_SWEEP_MOUNT_CLOSED_GUARD_LINK, linkLabel: 'Roll from mount to closed guard link', tag: 'Me being on bottom',
    steps: [
      'Take one arm and pass his collarbone, his chin and wrap his arm with your armpit',
      'With your arm wrapping his arm, apply downward pressure into his elbow to avoid the opponent to post',
      'Use your leg of the side of the arm pushing his leg into our arm trapped',
      'Chop your arm into his armpit with an angle of 11 or 10. Your head being 12 and your legs being 6',
      'Bridge off the opposite foot',
      'Just roll until you are in his closed guard',
    ],
  },
];

const DAILY = [
  ['2025', 'Dec', DAILY_DECEMBER_2025_ROUTE], ['2026', 'Jan', DAILY_JANUARY_2026_ROUTE], ['2026', 'Feb', DAILY_FEBRUARY_2026_ROUTE],
  ['2026', 'Oct', DAILY_OCTOBER_2026_ROUTE], ['2026', 'Nov', DAILY_NOVEMBER_2026_ROUTE],
] as const;

const TECHNIQUES = [['Passing guard', PASSING_GUARD_ROUTE], ['Guard retention', GUARD_RETENTION_ROUTE]] as const;
const SUBMISSIONS = [
  ['Triangle choke from mount', TRIANGLE_CHOKE_FROM_MOUNT_ROUTE], ['Armbar from mount', ARMBAR_FROM_MOUNT_ROUTE],
  ['Guillotine from closed guard', GUILLOTINE_CLOSED_GUARD_ROUTE],
] as const;
const TAKEDOWNS = [['Duck under', DUCK_UNDER_ROUTE]] as const;

const tagAccent = 'inline-flex items-center text-[11px] tracking-[0.02em] px-2.5 py-[3px] bg-(--color-accent-100) text-(--color-accent-800)';

function Section({ id, n, title, children }: { id: string; n: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t-2 border-(--color-text) pt-8 pb-14 flex flex-wrap gap-x-8 gap-y-6 scroll-mt-[72px]">
      <div className="flex-[1_1_220px] flex flex-col gap-2">
        <span className="text-[13px] font-bold text-(--color-accent-700)">{n}</span>
        <h2 className="m-0 text-[28px] font-extrabold tracking-[-0.02em]">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function LinkList({ items }: { items: readonly (readonly [string, string])[] }) {
  return (
    <ul className="flex-[3_1_480px] flex flex-col border-t border-(--color-divider)">
      {items.map(([label, href]) => (
        <li key={label} className="border-b border-(--color-divider)">
          <Link href={href} className="flex justify-between gap-4 py-4 text-xl font-bold text-(--color-text)">{label} <span>→</span></Link>
        </li>
      ))}
    </ul>
  );
}

export default function MainPage() {
  return (
    <div className={`${archivo.className} bjj-home min-h-screen`}>
      <header className="sticky top-0 z-10 bg-(--color-bg) border-b-2 border-(--color-text)">
        <nav className="max-w-[1200px] mx-auto px-6 py-3 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a href="#top" className="mr-auto flex items-center gap-2 text-lg font-extrabold tracking-[-0.01em] text-(--color-text)">
            <span className="block size-3.5 bg-(--color-accent)" />BJJ Notes
          </a>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
            {NAV.map(([id, label]) => <a key={id} href={`#${id}`} className="text-(--color-text)">{label}</a>)}
          </div>
        </nav>
      </header>

      <main id="top" className="max-w-[1200px] mx-auto px-6">
        <section className="pt-[clamp(40px,8vw,96px)] pb-[clamp(32px,5vw,56px)] flex flex-col gap-4">
          <div className="text-[13px] font-bold tracking-[0.08em] uppercase text-(--color-accent-700)">Basics</div>
          <h1 className="m-0 font-extrabold text-[clamp(40px,8vw,96px)] leading-[0.95] tracking-[-0.03em] max-w-[14ch] text-balance">Welcome to BJJ Basics</h1>
        </section>

        <Section id="terms" n="01" title="Useful terms">
          <dl className="flex-[3_1_480px] m-0 grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] border-t border-l border-(--color-divider)">
            {TERMS.map(([term, def]) => (
              <div key={term} className="p-4 border-r border-b border-(--color-divider) flex flex-col gap-2">
                <dt className="font-extrabold text-lg">{term}</dt>
                <dd className="m-0 leading-normal text-(--color-neutral-800) text-pretty">{def}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="positions" n="02" title="Submission possibilities by position">
          <div className="flex-[3_1_480px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-6">
            {POSITIONS.map(({ title, items }) => (
              <div key={title} className="flex flex-col gap-3">
                <h3 className="m-0 text-base font-extrabold pb-2 border-b-2 border-(--color-text)">{title}</h3>
                <ul className={`flex flex-col gap-2 leading-snug ${items.length ? '' : 'text-(--color-neutral-700)'}`}>
                  {items.length === 0 && <li>No entries yet</li>}
                  {items.map(({ label, href }) => (
                    <li key={label} className="flex items-center gap-2">
                      {href ? <Link href={href} className="text-(--color-accent-700)">{label} →</Link> : label}
                      {!href && <span className={`${tagAccent} border border-(--color-accent) !bg-transparent text-(--color-accent)`}>pending</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="techniques" n="03" title="Techniques"><LinkList items={TECHNIQUES} /></Section>
        <Section id="submissions" n="04" title="Submission techniques"><LinkList items={SUBMISSIONS} /></Section>

        <Section id="daily" n="05" title="Daily notes">
          <div className="flex-[3_1_480px] grid grid-cols-[repeat(auto-fill,minmax(min(100%,150px),1fr))] border-t border-l border-(--color-divider)">
            {DAILY.map(([year, month, href]) => (
              <Link key={href} href={href} className="p-4 border-r border-b border-(--color-divider) flex flex-col gap-1 text-(--color-text) hover:bg-(--color-accent-100)">
                <span className="text-[13px] text-(--color-neutral-700)">{year}</span>
                <span className="text-2xl font-extrabold">{month}</span>
              </Link>
            ))}
          </div>
        </Section>

        <Section id="try" n="06" title="Things to try">
          <div className="flex-[3_1_480px] flex flex-col gap-8">
            <ul className="flex flex-col border-t border-(--color-divider)">
              {TRY.map(({ label, tiktok }) => (
                <li key={label} className="py-3 border-b border-(--color-divider) leading-snug flex flex-wrap justify-between gap-2">
                  {label}
                  {tiktok && <a href={tiktok} className={`${tagAccent} text-(--color-accent-800)`}>TikTok ↗</a>}
                </li>
              ))}
            </ul>

            {TRANSITIONS.map(({ title, link, linkLabel, tag, steps }) => (
              <article key={title} className="flex flex-col gap-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2 pb-2 border-b-2 border-(--color-text)">
                  <h3 className="m-0 text-[22px] font-extrabold tracking-[-0.01em]">{title}</h3>
                  <a href={link} className="font-bold text-sm text-(--color-accent-700)">{linkLabel} ↗</a>
                </div>
                {tag && <span className="self-start inline-flex items-center text-[11px] px-2.5 py-[3px] bg-(--color-neutral-100) text-(--color-neutral-800)">{tag}</span>}
                <ol className="flex flex-col gap-3 leading-normal">
                  {steps.map((step, i) => (
                    <li key={step} className="grid grid-cols-[32px_1fr] gap-2">
                      <span className="font-extrabold text-(--color-accent-700)">{String(i + 1).padStart(2, '0')}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </Section>

        <Section id="takedowns" n="07" title="Takedowns"><LinkList items={TAKEDOWNS} /></Section>
      </main>

      <footer className="border-t-2 border-(--color-text)">
        <div className="max-w-[1200px] mx-auto p-6 flex flex-wrap justify-between gap-4 text-sm text-(--color-neutral-700)">
          <span>BJJ Notes</span>
          <a href="#top" className="text-(--color-accent-700)">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
