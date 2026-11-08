import { Check, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { academicHighlightGroups } from "@/lib/site-data";

export function AcademicHighlights({
  eyebrow = "From the College Brochure",
  title = "Academic highlights that shape consistent progress.",
  description = "Every point below reflects the college's published academic features. No results, rankings, faculty names or fee figures have been added.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="section-space bg-cream" id="academic-highlights">
      <div className="container-shell">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {academicHighlightGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.08}>
              <article className="h-full border-t-[3px] border-maroon bg-white p-7 shadow-[0_14px_40px_rgba(32,32,32,0.05)]">
                <div className="flex items-start justify-between gap-4 border-b border-charcoal/10 pb-5">
                  <div>
                    <Sparkles className="h-5 w-5 text-gold" aria-hidden="true" />
                    <h3 className="mt-4 font-display text-2xl font-semibold text-charcoal">{group.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-charcoal/55">{group.intro}</p>
                  </div>
                  <span className="font-display text-3xl text-gold/70">0{groupIndex + 1}</span>
                </div>
                <ul className="mt-6 space-y-4">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-charcoal/72">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-maroon" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
