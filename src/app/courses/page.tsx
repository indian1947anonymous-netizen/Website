import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Info } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CourseDetail } from "@/components/CourseDetail";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import {
  college,
  competitiveCourses,
  courses,
  getSiteUrl,
  intermediateCourses,
  unverifiedDataNote,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Courses | IIT-JEE, NEET, EAPCET, CA Foundation, MPC, BiPC, MEC, CEC",
  description:
    "Explore all courses at Sree Abhyasa Junior College, Alwal: MPC, BiPC, MEC, CEC and preparation for IIT-JEE, NEET, EAPCET and CA Foundation.",
  alternates: { canonical: "/courses" },
};

const catalogData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Courses offered by Sree Abhyasa Junior College",
  itemListElement: courses.map((course, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: course.title,
    description: course.description,
    url: `${getSiteUrl()}/courses#${course.slug}`,
  })),
};

export default function CoursesPage() {
  return (
    <>
      <JsonLd data={catalogData} />
      <PageHero
        eyebrow="Courses Offered"
        title={<>Eight pathways. One disciplined academic foundation.</>}
        description="Explore the four intermediate programmes and four competitive examination tracks published by the college. Each section includes academic highlights, eligibility status and a direct enquiry link."
        image="/images/studying.jpg"
        imageAlt="Representative photograph of a student reading an academic textbook"
        currentPage="Courses"
      >
        <Link href="#intermediate" className="btn btn-gold">Intermediate Programmes</Link>
        <Link href="#competitive" className="btn btn-outline">Competitive Tracks</Link>
      </PageHero>

      <section className="bg-cream py-10">
        <div className="container-shell flex items-start gap-4 border-l-4 border-maroon bg-white p-6">
          <Info className="mt-1 h-5 w-5 shrink-0 text-maroon" aria-hidden="true" />
          <div>
            <h2 className="text-sm font-extrabold tracking-[0.05em] text-maroon uppercase">Course information policy</h2>
            <p className="mt-2 max-w-4xl text-sm leading-7 text-charcoal/68">{unverifiedDataNote}</p>
          </div>
        </div>
      </section>

      <section id="intermediate" className="scroll-mt-24 bg-white pt-16">
        <div className="container-shell">
          <SectionHeading
            eyebrow="01 · Intermediate Programmes"
            title={<>Choose your academic stream.</>}
            description="The college's intermediate programmes are supported by board examination teaching, regular assessment, individual mentoring and the institution's integrated academic planning."
            action={
              <Link href="/academics" className="btn btn-outline-dark">
                Academics Overview <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            }
          />
          <div className="mt-10">
            {intermediateCourses.map((course, index) => (
              <CourseDetail key={course.slug} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="competitive" className="section-space scroll-mt-24 bg-cream">
        <div className="container-shell">
          <SectionHeading
            eyebrow="02 · Competitive Examination Preparation"
            title={<>Preparation aligned with the academic day.</>}
            description="The college brochure identifies integrated coaching and daily focus for competitive examinations, supported by fundamentals, worksheets and a regular review cycle."
            action={
              <Link href="/competitive-exams" className="btn btn-outline-dark">
                Preparation Methodology <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            }
          />
          <div className="mt-10">
            {competitiveCourses.map((course, index) => (
              <CourseDetail key={course.slug} course={course} index={index + 4} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-maroon py-14 text-white">
        <div className="container-shell grid gap-8 lg:grid-cols-3 lg:items-center">
          <div className="lg:col-span-2">
            <span className="eyebrow !text-gold before:!bg-white/60">Need help choosing?</span>
            <h2 className="heading-md mt-4 !text-white">Current eligibility and course requirements should be confirmed directly.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75">
              We do not publish unverified eligibility, duration or fee information. Call {college.phones[0].display} or use
              the admission enquiry form to ask the college team.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href="/admissions#enquiry-form" className="btn btn-gold">Admission Enquiry</Link>
            <Link href="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

      <CtaBand showFormLink={false} />
    </>
  );
}
