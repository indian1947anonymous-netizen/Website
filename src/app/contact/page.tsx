import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPinned, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactInfo } from "@/components/ContactInfo";
import { MapPanel } from "@/components/MapPanel";
import { EnquiryForm } from "@/components/EnquiryForm";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { college, getSiteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us | Sree Abhyasa Junior College, Alwal",
  description:
    "Contact Sree Abhyasa Junior College at Golnaka Circle, Beside Sundari Hospital, Alwal. Call 63098 36569 / 85209 36569, use WhatsApp, send an enquiry or view Google Maps.",
  alternates: { canonical: "/contact" },
};

const contactData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${college.name}`,
  url: `${getSiteUrl()}/contact`,
  mainEntity: {
    "@type": "EducationalOrganization",
    name: college.name,
    telephone: [college.phones[0].display, college.phones[1].display],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Golnaka Circle, Beside Sundari Hospital, Alwal",
      addressLocality: "Medchal-Malkajgiri",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactData} />
      <PageHero
        eyebrow="Contact Us"
        title={<>We are here to answer your questions.</>}
        description={`Visit the college at Golnaka Circle, Alwal, call ${college.phones[0].display} / ${college.phones[1].display}, send a WhatsApp message or use the enquiry form below.`}
        image="/images/campus-hero.jpg"
        imageAlt="Brochure-inspired facade visualization for Sree Abhyasa Junior College"
        currentPage="Contact"
      >
        <a href={college.phones[0].href} className="btn btn-gold">
          <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
        </a>
        <a href={college.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
        </a>
        <Link href="#map" className="btn btn-outline">
          <MapPinned className="h-4 w-4" aria-hidden="true" /> View Map
        </Link>
      </PageHero>

      <section className="section-space bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Get in Touch"
            title={<>Direct details. No guessing.</>}
            description="Use the verified phone numbers, WhatsApp link or address below. The college brochure does not publish an official email address, so none is invented here."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <ContactInfo />
            <div id="map" className="scroll-mt-28">
              <MapPanel className="min-h-[520px]" />
              <div className="mt-4 border-l-2 border-gold bg-cream p-5">
                <h3 className="text-sm font-extrabold tracking-[0.04em] text-charcoal uppercase">Finding the college</h3>
                <p className="mt-2 text-sm leading-7 text-charcoal/68">
                  Golnaka Circle, beside Sundari Hospital, Alwal, Medchal-Malkajgiri, Telangana. The map uses a Google
                  Maps search for the verified address.
                </p>
                <a
                  href={college.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.07em] text-maroon uppercase hover:underline"
                >
                  Open Directions <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-cream">
        <div className="container-shell grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Contact Enquiry"
              title={<>Write to us.</>}
              description="Use this form for course, facility, admission or general questions. For the fastest response during college hours, call or use WhatsApp."
            />
            <div className="mt-8 border border-maroon/12 bg-white p-6">
              <h3 className="text-[0.64rem] font-extrabold tracking-[0.16em] text-maroon uppercase">Office Identity</h3>
              <p className="mt-3 font-display text-2xl font-semibold text-charcoal">{college.name}</p>
              <p className="mt-2 text-sm text-charcoal/65">College Code {college.code}</p>
              <p className="mt-4 text-sm leading-7 text-charcoal/65">{college.address}</p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <EnquiryForm
              source="contact"
              formId="contact-enquiry-form"
              title="Contact Enquiry"
              description="Tell us what you would like to know. All fields marked with an asterisk are required."
            />
          </div>
        </div>
      </section>

      <CtaBand
        showFormLink={false}
        eyebrow="Admissions"
        title="Ready to ask about a specific course?"
        description="The admissions page lists every programme and lets you open an enquiry with your course already selected."
      />
    </>
  );
}
