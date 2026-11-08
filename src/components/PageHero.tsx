import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  currentPage,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  currentPage: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate flex min-h-[440px] items-end overflow-hidden bg-maroon-deep text-white lg:min-h-[520px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-charcoal/62" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gold" aria-hidden="true" />
      <div className="container-shell relative z-10 pb-14 pt-32 lg:pb-20 lg:pt-40">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.15em] text-white/70 uppercase">
          <Link href="/" className="transition hover:text-gold">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
          <span className="text-gold">{currentPage}</span>
        </nav>
        <span className="eyebrow !text-gold before:!bg-white/70">{eyebrow}</span>
        <h1 className="heading-lg mt-5 max-w-5xl !text-white">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 lg:text-lg">{description}</p>
        {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </section>
  );
}
