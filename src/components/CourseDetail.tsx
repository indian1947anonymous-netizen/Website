import Link from "next/link";
import { ArrowUpRight, Check, Info } from "lucide-react";
import type { Course } from "@/lib/site-data";
import { courseEnquiryHref } from "@/lib/site-data";

export function CourseDetail({ course, index }: { course: Course; index: number }) {
  return (
    <section
      id={course.slug}
      aria-labelledby={`${course.slug}-title`}
      className="scroll-mt-28 border-t border-charcoal/10 py-12 lg:py-16"
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <span className="inline-flex items-center gap-3 text-[0.64rem] font-extrabold tracking-[0.2em] text-maroon uppercase">
            <span className="font-display text-2xl tracking-normal text-gold">
              {String(index + 1).padStart(2, "0")}
            </span>
            {course.category}
          </span>
          <h2 id={`${course.slug}-title`} className="heading-md mt-5 text-charcoal">
            {course.title}
          </h2>
          <p className="mt-3 text-sm font-semibold text-charcoal/55">{course.tagline}</p>
          <div className="mt-8 hidden h-px w-24 bg-gold lg:block" />
        </div>

        <div className="lg:col-span-8">
          <p className="max-w-3xl text-[1.05rem] leading-8 text-charcoal/72">{course.description}</p>

          <div className="mt-9 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-[0.66rem] font-extrabold tracking-[0.19em] text-maroon uppercase">
                Academic highlights
              </h3>
              <ul className="mt-4 space-y-3">
                {course.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-6 text-charcoal/70">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-maroon" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[0.66rem] font-extrabold tracking-[0.19em] text-maroon uppercase">
                Eligibility & admissions
              </h3>
              <div className="mt-4 flex gap-3 border-l-2 border-gold bg-cream p-4 text-sm leading-6 text-charcoal/70">
                <Info className="mt-1 h-4 w-4 shrink-0 text-maroon" aria-hidden="true" />
                <p>
                  <span className="font-bold text-maroon">Eligibility:</span> {course.eligibility}
                  <br />
                  Duration and fee details are not published in the college brochure.
                </p>
              </div>
              <p className="mt-4 text-xs leading-5 text-charcoal/55">
                For current admission criteria and verification, please contact the college directly.
              </p>
              <Link href={courseEnquiryHref(course.slug)} className="btn btn-primary mt-6">
                Enquire About {course.shortTitle} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              {course.category === "Competitive Exam Preparation" ? (
                <Link
                  href="/competitive-exams"
                  className="ml-5 inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.08em] text-maroon uppercase hover:gap-3"
                >
                  Preparation methodology <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
