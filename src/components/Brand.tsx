import Link from "next/link";
import { college } from "@/lib/site-data";

export function Brand({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const light = variant === "light";
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label={`${college.name} home`}>
      <span className="relative flex h-12 w-11 shrink-0 items-center justify-center">
        <svg viewBox="0 0 56 64" className="h-full w-full" aria-hidden="true">
          <path d="M3 3h50v43c0 8.5-13 12.8-25 17C16 58.8 3 54.5 3 46V3Z" fill="#920D16" />
          <path d="M9 9h38v35c0 5.4-9.3 9-19 12.5C18.3 53 9 49.4 9 44V9Z" fill="none" stroke="#F9B91B" strokeWidth="1.4" />
          <path d="M17 42 28 17l11 25M21.5 34.5h13" fill="none" stroke="#F9B91B" strokeWidth="2.4" strokeLinecap="square" />
          <path d="M21 47h14" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.7" />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`block text-[0.58rem] font-extrabold tracking-[0.35em] ${light ? "text-gold" : "text-maroon"}`}>
          SREE
        </span>
        <span className={`mt-1 block font-display text-[1.6rem] font-bold leading-none tracking-[0.015em] ${light ? "text-white" : "text-charcoal"}`}>
          ABHYASA
        </span>
        <span className={`mt-1.5 block text-[0.53rem] font-bold tracking-[0.19em] ${light ? "text-white/65" : "text-charcoal/60"}`}>
          JUNIOR COLLEGE · ALWAL
        </span>
      </span>
    </Link>
  );
}
