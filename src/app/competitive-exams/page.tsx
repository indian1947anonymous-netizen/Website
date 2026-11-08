import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarCheck,
  Check,
  ClipboardCheck,
  HeartHandshake,
  Info,
  LineChart,
  NotebookPen,
  Target,
  UsersRound,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CourseDetail } from "@/components/CourseDetail";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { competitiveCourses, getSiteUrl, studentSupport } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Competitive Exam Preparation | IIT-JEE, NEET, EAPCET, CA Foundation",
  description:
    "Discover Sree Abhyasa Junior College's integrated preparation methodology for IIT-JEE Mains & Advanced, NEET, EAPCET and CA Foundation in Alwal, Hyderabad.",
  alternates: { canonical: "/competitive-exams" },
};

const prepData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Competitive examination preparation at Sree Abhyasa Junior College",
  itemListElement: competitiveCourses.map((course, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: course.title,
    url: `${getSiteUrl()}/competitive-exams#${course.slug}`,
  })),
};

const studyPlanFramework = [
  {
    icon: Target,
    title: "Daily exam focus",
    description: "Daily focus on JEE, NEET and EAPCET preparation is stated in the college brochure.",
  },
  {
    icon: NotebookPen,
    title: "Worksheets & practice",
    description: "Problem-solving worksheets develop application beyond classroom explanation.",
  },
  {
    icon: CalendarCheck,
    title: "Weekly online exams",
    description: "Weekend online examinations provide a frequent checkpoint on learning.",
  },
  {
    icon: ClipboardCheck,
    title: "Term & cumulative exams",
    description: "Broader examinations revisit learning across the term and across accumulated topics.",
  },
  {
    icon: LineChart,
    title: "Analysis & review",
    description: "Performance is analysed and reviewed so teaching can respond to student needs.",
  },
  {
    icon: UsersRound,
    title: "Individual mentoring",
    description: "Personal attention and special focus on slow learners support steady progress.",
  },
];

export default function CompetitiveExamsPage() {
  return (
    <>
      <JsonLd data={prepData} />
      <PageHero
        eyebrow="Competitive Examination Preparation"
        title={<>Preparation built into every academic day.</>}
        description="Integrated coaching, strong fundamentals, daily competitive-exam focus, structured practice and frequent assessment shape preparation for IIT-JEE, NEET, EAPCET and CA Foundation."
        image="/images/problemsolving.jpg"
        imageAlt="Representative photograph of students working through academic problems together"
        currentPage="Competitive Exams"
      >
        <Link href="#programmes" className="btn btn-gold">Explore Exam Tracks</Link>
        <Link href="/admissions#enquiry-form" className="btn btn-outline">Enquire Now <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
      </PageHero>

      <section className="bg-cream py-10">
        <div className="container-shell flex items-start gap-4 border-l-4 border-maroon bg-white p-6">
          <Info className="mt-1 h-5 w-5 shrink-0 text-maroon" aria-hidden="true" />
          <p className="max-w-4xl text-sm leading-7 text-charcoal/68">
            The preparation framework on this page reflects published college practices. The brochure does not supply a
            subject-wise timetable, batch schedule, duration or fee structure. Any such details should be verified with
            the college before publication.
          </p>
        </div>
      </section>

      <section id="programmes" className="section-space scroll-mt-24 bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Dedicated Preparation Tracks"
            title={<>Four examinations. One coherent academic system.</>}
            description="Each section below describes the programme using only the college's published information, with a clearly marked eligibility field and a direct enquiry action."
          />
          <div className="mt-10">
            {competitiveCourses.map((course, index) => (
              <CourseDetail key={course.slug} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="methodology" className="section-space scroll-mt-24 bg-maroon text-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Preparation Methodology"
            title={<>A weekly rhythm of learning, testing and review.</>}
            description="Rather than publishing an invented timetable, this page presents the verified study-plan framework described by the college."
            light
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {studyPlanFramework.map((item, index) => (
              <article key={item.title} className="border border-white/16 bg-white/5 p-7 transition hover:border-gold/60">
                <item.icon className="h-6 w-6 text-gold" aria-hidden="true" />
                <span className="mt-6 block font-display text-2xl text-gold/80">0{index + 1}</span>
                <h3 className="mt-2 text-sm font-extrabold tracking-[0.05em] uppercase">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 border border-gold/40 bg-white/5 p-6 text-sm leading-7 text-white/75">
            <p className="font-extrabold tracking-[0.08em] text-gold uppercase">[Detailed timetable to be supplied by the college]</p>
            <p className="mt-2">
              Hour-by-hour schedules, batch timings, mock-test dates and individual study plans are not published in the
              supplied brochure. Please request current details directly from the college office.
            </p>
          </div>
        </div>
      </section>

      <section id="student-support" className="section-space scroll-mt-24 bg-cream">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Student Support"
            title={<>Preparation is personal, not one-size-fits-all.</>}
            description="The college combines individual mentoring, counselling, parent communication and career guidance with its examination preparation framework."
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {studentSupport.map((item) => (
              <article key={item.title} className="premium-card p-7">
                <HeartHandshake className="h-5 w-5 text-maroon" aria-hidden="true" />
                <h3 className="mt-5 text-sm font-extrabold tracking-[0.04em] text-charcoal uppercase">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-charcoal/65">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 border border-maroon/12 bg-white p-6 text-sm text-charcoal/70">
            {[
              "Integrated board and competitive exam coaching",
              "Strong emphasis on fundamentals",
              "Limited strength per class",
              "Parent updates on marks and absenteeism",
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-maroon" aria-hidden="true" /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Course Enquiries"
        title="Ask about the preparation track that fits your goals."
        description="Use the admission enquiry form, call the college or send a WhatsApp message to confirm current programme details."
      />
    </>
  );
}
