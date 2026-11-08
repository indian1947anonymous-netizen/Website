import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  FileText,
  Info,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { EnquiryForm } from "@/components/EnquiryForm";
import { CtaBand } from "@/components/CtaBand";
import { college, courseEnquiryHref, courses, unverifiedDataNote } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Admissions | Enquire About Courses at Sree Abhyasa Junior College",
  description:
    "Send an admission enquiry to Sree Abhyasa Junior College, Alwal. Explore MPC, BiPC, MEC, CEC, IIT-JEE, NEET, EAPCET and CA Foundation and contact the college for current requirements.",
  alternates: { canonical: "/admissions" },
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title={<>Begin with the right information.</>}
        description="Use this page to enquire about admissions at Sree Abhyasa Junior College. Current eligibility, fees, documents and admission timelines should be confirmed directly with the college office."
        image="/images/studying.jpg"
        imageAlt="Representative photograph of a student preparing for higher studies"
        currentPage="Admissions"
      >
        <Link href="#enquiry-form" className="btn btn-gold">Open Enquiry Form</Link>
        <a href={college.phones[0].href} className="btn btn-outline">
          <Phone className="h-4 w-4" aria-hidden="true" /> Call Admissions
        </a>
      </PageHero>

      <section className="section-space bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Admission Information"
            title={<>A clear, direct admission enquiry.</>}
            description="This is an enquiry form, not an online application, payment gateway or document upload portal. A member of the college team can guide you through the current admission process."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              {
                icon: FileText,
                title: "What you can share",
                items: ["Student and parent/guardian names", "Phone number and email", "Course of interest", "Previous academic qualification"],
              },
              {
                icon: Info,
                title: "What to confirm",
                items: ["Current eligibility criteria", "Required documents", "Fee and duration information", "Admission dates and availability"],
              },
              {
                icon: ShieldCheck,
                title: "How we handle claims",
                items: ["Only brochure-verified details are published", "Eligibility fields are marked for verification", "No fees or durations are invented", "No unverified admission guarantees"],
              },
            ].map((card) => (
              <article key={card.title} className="border border-charcoal/10 bg-cream p-7">
                <card.icon className="h-6 w-6 text-maroon" aria-hidden="true" />
                <h3 className="mt-6 font-display text-2xl font-semibold text-charcoal">{card.title}</h3>
                <ul className="mt-5 space-y-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-charcoal/70">
                      <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-maroon" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-7 border-l-2 border-gold bg-cream px-5 py-4 text-sm leading-7 text-charcoal/65">
            {unverifiedDataNote}
          </p>
        </div>
      </section>

      <section id="enquiry-form" className="section-space scroll-mt-24 bg-cream">
        <div className="container-shell grid gap-10 lg:grid-cols-12 lg:items-start">
          <aside className="lg:col-span-4 lg:sticky lg:top-28">
            <span className="eyebrow">Direct Contact</span>
            <h2 className="heading-md mt-4 text-charcoal">Prefer to speak to someone?</h2>
            <p className="mt-4 text-sm leading-7 text-charcoal/68">
              Call either published college number or open WhatsApp with a pre-written admission enquiry.
            </p>
            <div className="mt-8 space-y-3">
              {college.phones.map((phone) => (
                <a key={phone.digits} href={phone.href} className="premium-card flex items-center justify-between p-5 transition hover:border-maroon">
                  <span className="inline-flex items-center gap-3 text-lg font-bold text-charcoal">
                    <Phone className="h-4 w-4 text-maroon" aria-hidden="true" /> {phone.display}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-maroon" aria-hidden="true" />
                </a>
              ))}
              <a href={college.whatsapp} target="_blank" rel="noopener noreferrer" className="premium-card flex items-center justify-between p-5 transition hover:border-maroon">
                <span className="inline-flex items-center gap-3 text-base font-bold text-charcoal">
                  <MessageCircle className="h-4 w-4 text-maroon" aria-hidden="true" /> WhatsApp Enquiry
                </span>
                <ArrowUpRight className="h-4 w-4 text-maroon" aria-hidden="true" />
              </a>
            </div>
            <div className="mt-8 border border-maroon/12 bg-white p-6">
              <h3 className="text-[0.64rem] font-extrabold tracking-[0.16em] text-maroon uppercase">College Code</h3>
              <p className="mt-2 font-display text-4xl font-semibold text-maroon">{college.code}</p>
              <p className="mt-3 text-xs leading-6 text-charcoal/60">{college.address}</p>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <EnquiryForm source="admissions" formId="admissions-enquiry-form" />
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Available Courses"
            title={<>Select a pathway when you enquire.</>}
            description="Choose from the eight courses published by the college. Each enquiry button opens the form with that course selected."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <article key={course.slug} className="premium-card flex flex-col p-6">
                <span className="text-[0.6rem] font-extrabold tracking-[0.16em] text-maroon uppercase">{course.category}</span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-charcoal">{course.shortTitle}</h3>
                <p className="mt-3 text-xs leading-6 text-charcoal/60">{course.tagline}</p>
                <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-6">
                  <Link href={`/courses#${course.slug}`} className="text-[0.66rem] font-extrabold tracking-[0.08em] text-charcoal uppercase hover:text-maroon">
                    Details
                  </Link>
                  <Link href={courseEnquiryHref(course.slug)} className="inline-flex items-center gap-1 text-[0.66rem] font-extrabold tracking-[0.08em] text-maroon uppercase hover:underline">
                    Enquire <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        showFormLink={false}
        eyebrow="Need assistance?"
        title="The college office can confirm the latest admission details."
        description="Eligibility, documents, dates and fee information are not published in the supplied brochure—please verify them directly."
      />
    </>
  );
}
