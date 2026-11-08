import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, ClipboardCheck, LineChart, Target } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CourseDetail } from "@/components/CourseDetail";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import {
  academicApproach,
  college,
  examinationSystem,
  getSiteUrl,
  intermediateCourses,
  unverifiedDataNote,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Academics | MPC, BiPC, MEC and CEC in Alwal",
  description:
    "Explore the MPC, BiPC, MEC and CEC intermediate programmes at Sree Abhyasa Junior College, with integrated competitive exam preparation and individual mentoring.",
  alternates: { canonical: "/academics" },
};

const courseListData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Intermediate academic programmes",
  itemListElement: intermediateCourses.map((course, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: course.title,
    url: `${getSiteUrl()}/courses#${course.slug}`,
  })),
};

export default function AcademicsPage() {
  return (
    <>
      <JsonLd data={courseListData} />
      <PageHero
        eyebrow="Academics"
        title={<>Intermediate study with a wider academic horizon.</>}
        description="Four intermediate programmes are offered at Sree Abhyasa Junior College, supported by concept-led teaching, regular assessment and integrated competitive examination preparation."
        image="/images/lecturehall.jpg"
        imageAlt="Representative photograph of students in a university lecture hall"
        currentPage="Academics"
      >
        <Link href="#programmes" className="btn btn-gold">
          View Programmes
        </Link>
        <Link href="/competitive-exams" className="btn btn-outline">
          Competitive Preparation <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </PageHero>

      <section className="section-space bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Academic Programmes"
            title={<>A strong foundation in every stream.</>}
            description="The college's published approach emphasises fundamental concepts, meticulous planning, daily competitive-exam focus where relevant, worksheets, regular examinations and individual mentoring."
          />
          <p className="mt-7 max-w-4xl border-l-2 border-gold bg-cream px-5 py-4 text-sm leading-7 text-charcoal/65">
            {unverifiedDataNote}
          </p>
        </div>
      </section>

      <section id="programmes" className="scroll-mt-24 bg-white pb-20">
        <div className="container-shell">
          {intermediateCourses.map((course, index) => (
            <CourseDetail key={course.slug} course={course} index={index} />
          ))}
        </div>
      </section>

      <section className="section-space bg-cream">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Academic Framework"
            title={<>The same disciplined framework across every programme.</>}
            description="Every stream benefits from the college's published planning, teaching, practice, examination and mentoring practices."
            align="center"
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="border border-charcoal/10 bg-white p-8">
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-maroon" aria-hidden="true" />
                <h3 className="text-[0.68rem] font-extrabold tracking-[0.18em] text-maroon uppercase">Teaching & Practice</h3>
              </div>
              <ul className="mt-7 space-y-5">
                {academicApproach.map((step) => (
                  <li key={step.step} className="grid grid-cols-[2.5rem_1fr] gap-4">
                    <span className="font-display text-xl text-gold">{step.step}</span>
                    <div>
                      <h4 className="text-sm font-extrabold tracking-[0.03em] text-charcoal uppercase">{step.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-charcoal/65">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-charcoal/10 bg-white p-8">
              <div className="flex items-center gap-3">
                <ClipboardCheck className="h-5 w-5 text-maroon" aria-hidden="true" />
                <h3 className="text-[0.68rem] font-extrabold tracking-[0.18em] text-maroon uppercase">Assessment & Review</h3>
              </div>
              <ul className="mt-7 space-y-5">
                {examinationSystem.map((item, index) => (
                  <li key={item.title} className="grid grid-cols-[2.5rem_1fr] gap-4">
                    <span className="font-display text-xl text-gold">0{index + 1}</span>
                    <div>
                      <h4 className="text-sm font-extrabold tracking-[0.03em] text-charcoal uppercase">{item.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-charcoal/65">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border border-maroon/12 bg-white p-6 text-sm text-charcoal/70">
            {[
              "Limited strength per class",
              "Special focus on slow learners",
              "Parent communication on marks and absenteeism",
              "CCTV surveillance",
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-maroon" aria-hidden="true" /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-maroon py-12 text-white">
        <div className="container-shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <LineChart className="mt-1 h-7 w-7 shrink-0 text-gold" aria-hidden="true" />
            <div>
              <h2 className="font-display text-3xl font-semibold">Looking for competitive exam preparation?</h2>
              <p className="mt-2 text-sm text-white/75">
                Explore the dedicated IIT-JEE, NEET, EAPCET and CA Foundation preparation methodology.
              </p>
            </div>
          </div>
          <Link href="/competitive-exams" className="btn btn-gold shrink-0">
            Preparation Pathways <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CtaBand
        eyebrow="Admissions"
        title={`Speak to the college about ${intermediateCourses.map((course) => course.shortTitle).join(", ")}.`}
        description={`Call ${college.phones[0].display} to confirm current eligibility and admission information.`}
      />
    </>
  );
}
