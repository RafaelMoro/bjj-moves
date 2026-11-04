/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Archivo } from "next/font/google";
import { StepIndex } from "./StepIndex";

// Modernist dark design ("Technique Page" in claude.ai/design). Tokens live in globals.css under .bjj-home.
const archivo = Archivo({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

export type TechniqueMedia = { kind: 'image' | 'video'; src: string; alt?: string; ratio?: '1/1' | '2/1' };
export type TechniqueStep = { text?: string; media?: TechniqueMedia[] };
export type TechniqueList = { name?: string; steps: TechniqueStep[] };
export type TechniquePageProps = {
  title: string;
  category: string;
  author?: string;
  refs: { label: string; href: string }[];
  /** "Important notes" callout shown before the steps. */
  notes?: string[];
  lists: TechniqueList[];
  /** Video shown in the closing "Complete sequence" band. */
  sequenceSrc?: string;
};

const pad = (n: number) => String(n).padStart(2, '0');
const grayscale = '[filter:grayscale(1)_contrast(1.08)]';

function Figure({ media, num }: { media: TechniqueMedia; num: string }) {
  const ratio = media.ratio ?? '1/1';
  const isVideo = media.kind === 'video';
  return (
    <figure className={`m-0 flex flex-col gap-2 w-full ${ratio === '2/1' ? 'max-w-[720px]' : 'max-w-[480px]'}`}>
      <div className={`relative w-full border-2 border-(--color-text) bg-(--color-surface) ${grayscale}`} style={{ aspectRatio: ratio }}>
        {isVideo ? (
          <video src={media.src} controls muted autoPlay loop playsInline className="block size-full object-cover" />
        ) : (
          <img src={media.src} alt={media.alt ?? ''} className="block size-full object-cover" />
        )}
        <span className={`absolute top-0 left-0 px-2 py-1 text-[13px] font-extrabold pointer-events-none flex items-center gap-1.5 text-(--color-bg) ${isVideo ? 'bg-(--color-accent)' : 'bg-(--color-text)'}`}>
          {num}
          {isVideo && <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M6 3l14 9-14 9z" /></svg>}
        </span>
      </div>
      <figcaption className="text-[13px] text-(--color-neutral-800)">Fig. {num} · {isVideo ? 'Video loop' : 'Still'}</figcaption>
    </figure>
  );
}

export function TechniquePage({ title, category, author, refs, notes, lists, sequenceSrc }: TechniquePageProps) {
  const indexLists = lists.map((l, li) => ({
    name: l.name,
    steps: l.steps.map((_, i) => ({ id: `step-${li + 1}-${i + 1}`, num: pad(i + 1) })),
  }));

  return (
    <div id="top" className={`${archivo.className} bjj-home min-h-screen`}>
      <header className="sticky top-0 z-10 bg-(--color-bg) border-b-2 border-(--color-text)">
        <nav className="max-w-[1200px] mx-auto px-6 py-3 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href="/" className="mr-auto flex items-center gap-2 text-lg font-extrabold tracking-[-0.01em] text-(--color-text)">
            <span className="block size-3.5 bg-(--color-accent)" />BJJ Notes
          </Link>
          <Link href="/" className="text-sm font-semibold text-(--color-text)">← Home</Link>
        </nav>
      </header>

      <main className="max-w-[1200px] mx-auto px-6">
        <section className="pt-[clamp(40px,8vw,96px)] pb-[clamp(32px,5vw,48px)] flex flex-col gap-4">
          <div className="text-[13px] font-bold tracking-[0.08em] uppercase text-(--color-accent-700)">{category}</div>
          <h1 className="m-0 font-extrabold text-[clamp(40px,8vw,96px)] leading-[0.95] tracking-[-0.03em] max-w-[15ch] text-balance">{title}</h1>
          {author && <div className="text-xl font-semibold text-(--color-neutral-800)">by {author}</div>}
        </section>

        <section aria-label="References" className="pb-8">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] border-t-2 border-(--color-text) border-l border-l-(--color-divider)">
            {refs.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-start gap-4 p-4 border-r border-b border-(--color-divider) text-(--color-text) no-underline hover:bg-(--color-accent-100)"
              >
                <span className="flex flex-col gap-1">
                  <span className="text-xs font-bold tracking-[0.08em] uppercase text-(--color-accent-700)">Reference · opens in new tab</span>
                  <span className="text-[17px] font-bold leading-[1.35] text-pretty">{label}</span>
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" className="flex-none text-(--color-accent)" aria-hidden>
                  <path d="M7 7h10v10" /><path d="M7 17 17 7" />
                </svg>
              </a>
            ))}
          </div>
        </section>

        {notes && notes.length > 0 && (
          <section className="pb-8">
            <div className="flex flex-col gap-4 border-t-2 border-(--color-accent) bg-(--color-accent-100) px-4 pt-3 pb-4">
              <h2 className="m-0 flex items-center gap-2 text-lg font-extrabold text-(--color-accent-700)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" aria-hidden>
                  <circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" />
                </svg>
                Important notes
              </h2>
              <ul className="flex flex-col gap-3 leading-normal">
                {notes.map((note) => (
                  <li key={note} className="grid grid-cols-[18px_1fr] gap-2">
                    <span className="size-[7px] mt-[9px] bg-(--color-accent)" />
                    <span className="text-pretty">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="border-t-2 border-(--color-text) pt-8 pb-14 flex flex-wrap items-start gap-x-8 gap-y-6">
          <StepIndex lists={indexLists} />

          <div className="flex-[3_1_480px] min-w-0 flex flex-col gap-14">
            {lists.map((list, li) => (
              <div key={li} className="flex flex-col">
                {list.name && (
                  <div className="flex flex-wrap justify-between items-baseline gap-2 pb-3 mb-2 border-b-2 border-(--color-text)">
                    <h2 className="m-0 text-2xl font-extrabold tracking-[-0.02em]">
                      <span className="text-(--color-accent-700)">Steps — </span>{list.name}
                    </h2>
                    <span className="text-sm font-semibold text-(--color-neutral-800)">{list.steps.length} steps</span>
                  </div>
                )}
                <ol className="flex flex-col">
                  {list.steps.map((step, i) => {
                    const id = `step-${li + 1}-${i + 1}`;
                    return (
                      <li key={id} id={id} data-step={id} className="grid grid-cols-[clamp(40px,6vw,64px)_minmax(0,1fr)] gap-4 py-6 border-b border-(--color-divider) scroll-mt-20">
                        <span className="text-[clamp(22px,3vw,32px)] font-extrabold leading-none tracking-[-0.02em] text-(--color-accent-700)">{pad(i + 1)}</span>
                        <div className="flex flex-col gap-4 min-w-0">
                          {step.text && <p className="m-0 text-lg leading-[1.55] max-w-[60ch] text-pretty">{step.text}</p>}
                          {step.media?.map((m) => <Figure key={m.src} media={m} num={pad(i + 1)} />)}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            ))}
          </div>
        </section>
      </main>

      {sequenceSrc && (
        <section id="sequence" className="bg-(--color-surface) border-t-2 border-(--color-text)">
          <div className="max-w-[1200px] mx-auto px-6 py-[clamp(40px,6vw,72px)] flex flex-wrap gap-x-8 gap-y-6">
            <div className="flex-[1_1_220px] flex flex-col gap-1">
              <span className="text-[13px] font-bold tracking-[0.08em] uppercase text-(--color-accent-700)">All steps together</span>
              <h2 className="m-0 font-extrabold text-[clamp(32px,4vw,44px)] leading-none tracking-[-0.02em]">Complete sequence</h2>
            </div>
            <figure className="flex-[3_1_480px] min-w-0 m-0 flex flex-col gap-2">
              <div className={`w-full aspect-video border-2 border-(--color-text) bg-(--color-bg) ${grayscale}`}>
                <video src={sequenceSrc} controls muted autoPlay loop playsInline className="block size-full object-contain" />
              </div>
              <figcaption className="text-[13px] text-(--color-neutral-800)">{title} · full sequence</figcaption>
            </figure>
          </div>
        </section>
      )}

      <footer className="border-t-2 border-(--color-text)">
        <div className="max-w-[1200px] mx-auto p-6 flex flex-wrap justify-between gap-4 text-sm text-(--color-neutral-700)">
          <Link href="/" className="text-(--color-accent-700)">← Home</Link>
          <a href="#top" className="text-(--color-accent-700)">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
