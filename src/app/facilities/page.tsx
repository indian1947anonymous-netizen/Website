import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { FacilityIcon } from "@/components/FacilityIcon";
import { CtaBand } from "@/components/CtaBand";
import { facilities } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Facilities | AC Digital Classrooms, Mentoring and Campus Safety",
  description:
    "Explore the published facilities and academic practices at Sree Abhyasa Junior College, Alwal: AC and digital classrooms, individual mentoring, limited class strength, examinations and CCTV surveillance.",
  alternates: { canonical: "/facilities" },
};

const outcomes = [
  {
    icon: UsersRound,
    title: "Closer attention",
    description: "Limited strength per class and individual mentoring help faculty understand each student's progress.",
  },
  {
    icon: Sparkles,
    title: "Stronger fundamentals",
    description: "Concept-led teaching, worksheets and problem-solving activities support deeper understanding.",
  },
  {
    icon: ShieldCheck,
    title: "A monitored environment",
    description: "CCTV surveillance and parent communication support a structured and attentive campus setting.",
  },
  {
    icon: Check,
    title: "Consistent feedback",
    description: "Weekly online, term and cumulative examinations are followed by performance analysis and review.",
  },
];

const gallery = [
  { src: "/images/classroom.jpg", alt: "Representative photograph of students in a modern classroom" },
  { src: "/images/discussion.jpg", alt: "Representative photograph of an academic discussion" },
  { src: "/images/studyhall.jpg", alt: "Representative photograph of a studious library environment" },
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Campus & Facilities"
        title={<>An environment built for attentive learning.</>}
        description="Air-conditioned digital classrooms, experienced faculty, individual mentoring, limited class strength, regular assessment and campus surveillance are among the features identified in the college brochure."
        image="/images/academic-campus.jpg"
        imageAlt="Representative photograph of a modern academic campus building"
        currentPage="Facilities"
      >
        <Link href="#facilities-grid" className="btn btn-gold">Explore Facilities</Link>
        <Link href="/admissions#enquiry-form" className="btn btn-outline">Admission Enquiry <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
      </PageHero>

      <section id="facilities-grid" className="section-space scroll-mt-24 bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Published College Features"
            title={<>Facilities and practices that support the whole student.</>}
            description="Every item below is drawn from the college's published highlights. No additional campus amenities, capacity figures or infrastructure claims have been added."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility, index) => (
              <Reveal key={facility.title} delay={(index % 4) * 0.05}>
                <article className="premium-card h-full p-7">
                  <span className="flex h-12 w-12 items-center justify-center bg-cream text-maroon">
                    <FacilityIcon name={facility.icon} />
                  </span>
                  <span className="mt-7 block font-display text-2xl text-gold/80">0{index + 1}</span>
                  <h3 className="mt-2 text-sm font-extrabold tracking-[0.04em] text-charcoal uppercase">{facility.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-charcoal/65">{facility.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-cream">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Learning Environment"
            title={<>How the facilities work together.</>}
            description="The college's published practices connect comfortable teaching spaces, personal attention, regular assessment and communication with parents."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="h-full border-t-[3px] border-maroon bg-white p-7">
                  <item.icon className="h-6 w-6 text-maroon" aria-hidden="true" />
                  <h3 className="mt-6 font-display text-2xl font-semibold text-charcoal">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-charcoal/65">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Academic Photography"
            title={<>Spaces that encourage focus and dialogue.</>}
            description="The photographs below are representative educational imagery, included to convey the character of a focused academic environment."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {gallery.map((image, index) => (
              <Reveal key={image.src} delay={index * 0.07}>
                <figure className="relative aspect-[4/3] overflow-hidden bg-cream">
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </figure>
              </Reveal>
            ))}
          </div>
          <p className="caption-note mt-4">
            These images are illustrative and are not presented as photographs of Sree Abhyasa Junior College facilities.
            Replace them with approved campus photography when available.
          </p>
        </div>
      </section>

      <CtaBand
        eyebrow="Visit the College"
        title="See the learning environment for yourself."
        description="Contact the college to ask about campus visits, current facilities and programme availability."
      />
    </>
  );
}
