import { RiArrowLeftLine } from "@remixicon/react";
import Link from "next/link";

export default function TriangleChokeFromMountPage() {
  return (
    <div className="min-h-screen p-5">
      <header className="grid grid-cols-3 gap-4">
        <Link href="/">
          <RiArrowLeftLine />
        </Link>
        <h1 className="text-4xl font-bold">Triangle choke from mount</h1>
      </header>
      <main className="flex flex-col gap-10">
          
      </main>
    </div>
  )
}