import Link from "next/link";
import { Archivo } from "next/font/google";

// Modernist dark design ("Daily Notes" in claude.ai/design). Tokens live in globals.css under .bjj-home.
const archivo = Archivo({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

const tagNeutral = 'self-start inline-flex items-center text-[11px] tracking-[0.02em] px-2.5 py-[3px] bg-(--color-neutral-100) text-(--color-neutral-800)';

export function DailyShell({ title, eyebrow = 'Daily notes', closing, children }: { title: string; eyebrow?: string; closing?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div id="top" className={`${archivo.className} bjj-home min-h-screen`}>
      <header className="sticky top-0 z-10 bg-(--color-bg) border-b-2 border-(--color-text)">
        <nav className="max-w-[1200px] mx-auto px-6 py-3 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href="/" className="mr-auto flex items-center gap-2 text-lg font-extrabold tracking-[-0.01em] text-(--color-text)">
            <span className="block size-3.5 bg-(--color-accent)" />BJJ Notes
          </Link>
          <Link href="/#daily" className="text-sm font-semibold text-(--color-text)">← All daily notes</Link>
        </nav>
      </header>

      <main className="max-w-[1200px] mx-auto px-6">
        <section className="pt-[clamp(40px,8vw,96px)] pb-[clamp(32px,5vw,56px)] flex flex-col gap-4">
          <div className="text-[13px] font-bold tracking-[0.08em] uppercase text-(--color-accent-700)">{eyebrow}</div>
          <h1 className="m-0 font-extrabold text-[clamp(40px,8vw,96px)] leading-[0.95] tracking-[-0.03em] text-balance">{title}</h1>
        </section>
        {children}
      </main>

      {closing}

      <footer className="border-t-2 border-(--color-text)">
        <div className="max-w-[1200px] mx-auto p-6 flex flex-wrap justify-between gap-4 text-sm text-(--color-neutral-700)">
          <Link href="/#daily" className="text-(--color-accent-700)">← All daily notes</Link>
          <a href="#top" className="text-(--color-accent-700)">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export function DaySection({ id, weekday, date, children }: { id: string; weekday?: string; date: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t-2 border-(--color-text) pt-8 pb-14 flex flex-wrap gap-x-8 gap-y-6 scroll-mt-[72px]">
      <div className="flex-[1_1_220px] flex flex-col gap-1">
        {weekday && <span className="text-[13px] font-bold tracking-[0.08em] uppercase text-(--color-accent-700)">{weekday}</span>}
        <h2 className="m-0 text-[28px] font-extrabold tracking-[-0.02em] text-balance">{date}</h2>
      </div>
      <div className="flex-[3_1_480px] flex flex-col gap-8">{children}</div>
    </section>
  );
}

type TopicProps = {
  title: string;
  /** One short sentence: shown as a neutral tag. */
  tag?: string;
  /** Longer context: muted paragraph above the steps. */
  note?: string;
  /** A definition to remember: paragraph with an accent left border. */
  definition?: string;
  steps?: string[];
  /** Short items shown as a bordered grid instead of numbered steps. */
  items?: string[];
};

export function Topic({ title, tag, note, definition, steps, items }: TopicProps) {
  return (
    <article className="flex flex-col gap-4">
      <h3 className="m-0 text-[22px] font-extrabold tracking-[-0.01em] pb-2 border-b-2 border-(--color-text)">{title}</h3>
      {tag && <span className={tagNeutral}>{tag}</span>}
      {note && <p className="m-0 leading-normal text-(--color-neutral-800) text-pretty">{note}</p>}
      {definition && (
        <p className="m-0 leading-normal text-(--color-neutral-800) text-pretty border-l-2 border-(--color-accent) pl-4">{definition}</p>
      )}
      {items && (
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,200px),1fr))] border-t border-l border-(--color-divider)">
          {items.map((item) => (
            <li key={item} className="px-4 py-3 border-r border-b border-(--color-divider) font-semibold">{item}</li>
          ))}
        </ul>
      )}
      {steps && (
        <ol className="flex flex-col gap-3 leading-normal">
          {steps.map((step, i) => (
            <li key={step} className="grid grid-cols-[32px_1fr] gap-2">
              <span className="font-extrabold text-(--color-accent-700)">{String(i + 1).padStart(2, '0')}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      )}
    </article>
  );
}

// ── Retrospective groups ("Daily Notes Retrospective" design) ──────────────────────────

export type RetroItem = string | { text: string; children: string[] };

const icons = {
  well: <path d="M20 6 9 17l-5-5" />,
  saw: <><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></>,
  improve: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>,
};

const variants = {
  well: { box: 'border-t-2 border-(--color-text) pt-3', head: '', list: '', bullet: 'bg-(--color-text)' },
  saw: { box: 'border-t-2 border-(--bjj-neutral-500) pt-3', head: 'text-(--bjj-neutral-900)', list: 'text-(--bjj-neutral-900)', bullet: 'box-border border-[1.5px] border-(--bjj-neutral-900)' },
  improve: { box: 'border-t-2 border-(--color-accent) bg-(--color-accent-100) px-4 pt-3 pb-4', head: 'text-(--color-accent-700)', list: '', bullet: 'bg-(--color-accent)' },
  plain: { box: 'border-t-2 border-(--color-text) pt-3', head: '', list: '', bullet: 'bg-(--color-text)' },
};

/** well = "What did we do well?", saw = "What did we saw?", improve = "What needs improvement?", plain = any other titled list. */
export function RetroGroup({ variant, title, items }: { variant: keyof typeof variants; title: string; items: RetroItem[] }) {
  const v = variants[variant];
  return (
    <div className={`flex flex-col gap-4 ${v.box}`}>
      <h3 className={`m-0 flex items-center gap-2 text-lg font-extrabold ${v.head}`}>
        {variant !== 'plain' && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" aria-hidden>
            {icons[variant]}
          </svg>
        )}
        {title}
      </h3>
      <ul className={`flex flex-col ${items.some((i) => typeof i !== 'string') ? 'gap-4' : 'gap-3'} leading-normal ${v.list}`}>
        {items.map((item) => {
          const { text, children } = typeof item === 'string' ? { text: item, children: [] } : item;
          return (
            <li key={text} className="grid grid-cols-[18px_1fr] gap-2">
              <span className={`size-[7px] mt-[9px] ${v.bullet}`} />
              <div className="flex flex-col gap-2">
                <span className={`text-pretty ${children.length ? 'font-bold' : ''}`}>{text}</span>
                {children.length > 0 && (
                  <ul className="flex flex-col gap-2 text-(--bjj-neutral-900)">
                    {children.map((child) => (
                      <li key={child} className="grid grid-cols-[18px_1fr] gap-1">
                        <span className="w-2.5 h-0.5 mt-[11px] bg-(--color-accent-700)" />
                        <span className="text-pretty">{child}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** Full-width accent band that closes a month. */
export function NextToTry({ month, items }: { month: string; items: string[] }) {
  return (
    <section id="next" className="bg-(--color-accent) text-(--color-bg) scroll-mt-[72px]">
      <div className="max-w-[1200px] mx-auto px-6 py-[clamp(40px,6vw,72px)] flex flex-wrap gap-x-8 gap-y-6">
        <div className="flex-[1_1_220px] flex flex-col gap-1">
          <span className="text-[13px] font-bold tracking-[0.08em] uppercase">End of {month}</span>
          <h2 className="m-0 font-extrabold text-[clamp(32px,4vw,44px)] leading-none tracking-[-0.02em]">Next things to try</h2>
        </div>
        <ul className="flex-[3_1_480px] flex flex-col border-t-2 border-(--color-bg)">
          {items.map((item) => (
            <li key={item} className="flex justify-between gap-4 py-4 border-b-2 border-(--color-bg) text-[22px] font-extrabold tracking-[-0.01em]">
              {item}<span>→</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
