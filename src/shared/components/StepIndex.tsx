'use client';

import { useEffect, useState } from "react";

export type StepIndexList = { name?: string; steps: { id: string; num: string }[] };

/** Sticky step index: highlights the step in view and shows "03 / 12" progress. */
export function StepIndex({ lists }: { lists: StepIndexList[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      const hit = entries.find((e) => e.isIntersecting);
      if (hit) setActive(hit.target.getAttribute('data-step'));
    }, { rootMargin: '-35% 0px -60% 0px' });
    document.querySelectorAll('[data-step]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const total = lists.reduce((sum, l) => sum + l.steps.length, 0);
  const activeList = lists.find((l) => l.steps.some((s) => s.id === active));
  const activeIdx = activeList ? activeList.steps.findIndex((s) => s.id === active) : -1;
  const progress = activeList ? `${String(activeIdx + 1).padStart(2, '0')} / ${String(activeList.steps.length).padStart(2, '0')}` : `${total} steps`;

  return (
    <aside className="flex-[1_1_220px] min-[900px]:sticky min-[900px]:top-[88px] flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <span className="text-[13px] font-bold tracking-[0.08em] uppercase text-(--color-accent-700)">Steps</span>
        <span className="text-[28px] font-extrabold tracking-[-0.02em]">{progress}</span>
      </div>
      {lists.map((list, li) => (
        <nav key={li} className="flex flex-col gap-2" aria-label={list.name ?? 'Steps'}>
          {list.name && <span className="text-sm font-bold text-(--bjj-neutral-900)">{list.name}</span>}
          <div className="grid grid-cols-[repeat(auto-fill,40px)] gap-1">
            {list.steps.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`h-10 flex items-center pl-2 text-sm font-extrabold border border-(--color-divider) hover:border-(--color-accent) ${
                  active === s.id ? 'bg-(--color-accent) text-(--color-bg)' : 'text-(--color-text)'
                }`}
              >
                {s.num}
              </a>
            ))}
          </div>
        </nav>
      ))}
    </aside>
  );
}
