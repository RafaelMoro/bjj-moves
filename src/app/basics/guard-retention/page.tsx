import { RiArrowLeftLine } from "@remixicon/react";
import Link from "next/link";

export default function GuardRetentionPage() {
  return (
    <div className="min-h-screen p-4">
      <header className="grid grid-cols-3 gap-4">
        <Link href="/">
          <RiArrowLeftLine />
        </Link>
        <h1 className="text-4xl font-bold">Guard retention</h1>
      </header>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-[30%_70%] justify-items-center">
        <aside className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-5">References</h2>
          <nav className="flex flex-col items-center gap-3 pl-3">
            <a className="underline" target="_blank" href="https://youtu.be/URGwWYwdoAs?si=19hSAQOz8ztgX-x6">Youtube reference: Guard Retention - How To Never Get Your Guard Passed In Jiu Jitsu by Gordon Ryan</a>
            {/* <a className="underline" target="_blank" href="https://youtu.be/xnlx_hNfuZ4?si=JBWv_HFeXf9Vvqfg&t=195">Complete sequence</a> */}
          </nav>
        </aside>
      </div>
    </div>
  )
}