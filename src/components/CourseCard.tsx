import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import type { Course } from "@/lib/site-data";
import { courseEnquiryHref } from "@/lib/site-data";

export function CourseCard({ course, index }: { course: Course; index: number }) {
  return (
    <article className="premium-card group flex h-full flex-col p-7 lg:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-[0.62rem] font-extrabold tracking-[0.19em] text-maroon uppercase">
            {course.category}
          </span>
          <h3 className="mt-3 font-display text-3xl font-semibold leading-none text-charcoal">
            {course.title}
          </h3>
          <p className="mt-2 text-xs font-semibold text-charcoal/55">{course.tagline}</p>
        </div>
        <span className="font-display text-3xl text-gold/75">{String(index + 1).padStart(2, "0")}</span>
      </div>

      <p className="mt-6 text-sm leading-7 text-charcoal/65">{course.description}</p>

      <div className="mt-6 border-t border-charcoal/10 pt-5">
        <p className="text-[0.62rem] font-extrabold tracking-[0.17em] text-maroon uppercase">Academic highlights</p>
        <ul className="mt-3 space-y-2.5">
          {course.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex gap-2.5 text-xs leading-5 text-charcoal/70">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-maroon" aria-hidden="true" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 rounded-none border-l-2 border-gold bg-cream px-4 py-3 text-xs leading-5 text-charcoal/60">
        <span className="font-bold text-maroon">Eligibility:</span> {course.eligibility}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-7">
        <Link href={`/courses#${course.slug}`} className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.08em] text-maroon uppercase hover:gap-3">
          View Details <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
        <Link href={courseEnquiryHref(course.slug)} className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.08em] text-charcoal uppercase hover:text-maroon">
          Enquire <ArrowUpRight className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
