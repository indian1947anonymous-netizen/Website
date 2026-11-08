import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Compass, GraduationCap, HeartHandshake, Quote, Target } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { AcademicHighlights } from "@/components/AcademicHighlights";
import { CtaBand } from "@/components/CtaBand";
import { academicApproach, college, studentSupport } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us | Junior College in Alwal",
  description:
    "Learn about Sree Abhyasa Junior College's educational philosophy, academic values, teaching methodology, mentoring and learning environment in Alwal, Telangana.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Sree Abhyasa Junior College",
    description: "A detailed institutional profile grounded in the college's published academic practices.",
    url: "/about",
  },
};

const values = [
  "Strong emphasis on fundamental concepts",
  "Meticulous academic planning and consistent review",
  "Individual attention and patient-oriented teaching",
  "Career guidance, student values and ethics",
  "Regular communication with parents",
  "A positive and closely monitored learning environment",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Institution"
        title={<>Purpose in teaching. Attention to every student.</>}
        description="Sree Abhyasa Junior College is an intermediate college in Alwal offering academic programmes alongside integrated preparation for competitive examinations. This profile reflects the college's published brochure."
        image="/images/academic-campus.jpg"
        imageAlt="Representative photograph of a modern academic campus"
        currentPage="About Us"
      >
        <Link href="#profile" className="btn btn-gold">
          Read Our Profile <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <Link href="/academics" className="btn btn-outline">
          Academic Programmes <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </PageHero>

      <section id="profile" className="section-space scroll-mt-24 bg-white">
        <div className="container-shell grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Institutional Profile"
              title={<>A college shaped by disciplined beginnings.</>}
            />
            <div className="mt-8 space-y-6 text-[1.02rem] leading-8 text-charcoal/72">
              <p>
                {college.name} is located at Golnaka Circle, beside Sundari Hospital, in Alwal,
                Medchal-Malkajgiri, Telangana. Its published college code is {college.code}. The college offers
                MPC, BiPC, MEC and CEC, together with preparation for IIT-JEE, NEET, EAPCET and CA Foundation.
              </p>
              <p>
                The brochure describes an academic model that integrates coaching for board examinations with
                competitive examination preparation. Teaching emphasises fundamental concepts and daily focus
                on JEE, NEET and EAPCET, supported by meticulous planning, problem-solving worksheets and a
                regular cycle of tests, analysis and review.
              </p>
              <p>
                Alongside academics, the institution highlights a unique mentorship programme, individual
                attention, special focus on slow learners, counselling, career guidance, values and ethics, and
                communication with parents regarding marks and absenteeism.
              </p>
            </div>
            <div className="mt-9 border-l-4 border-gold bg-cream p-6">
              <Quote className="h-6 w-6 text-maroon" aria-hidden="true" />
              <p className="mt-3 font-display text-2xl italic text-charcoal">
                “End depends upon the beginning…”
              </p>
              <p className="mt-2 caption-note">Phrase appearing beneath the college identity in the supplied brochure.</p>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <Reveal className="relative aspect-[4/5] overflow-hidden bg-cream">
              <Image
                src="/images/lecturehall.jpg"
                alt="Representative photograph of students attending a lecture"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </Reveal>
            <div className="grid grid-cols-2 border border-charcoal/10 bg-white">
              <div className="border-r border-charcoal/10 p-6">
                <p className="text-[0.62rem] font-extrabold tracking-[0.15em] text-maroon uppercase">College Code</p>
                <p className="mt-2 font-display text-3xl font-semibold text-charcoal">{college.code}</p>
              </div>
              <div className="p-6">
                <p className="text-[0.62rem] font-extrabold tracking-[0.15em] text-maroon uppercase">Location</p>
                <p className="mt-2 font-display text-3xl font-semibold text-charcoal">Alwal</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="philosophy" className="section-space scroll-mt-24 bg-cream">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Educational Philosophy · Mission · Vision"
            title={<>Academic ambition grounded in care.</>}
            description="The supplied brochure does not contain formally adopted mission or vision statements. The wording below is an editorial draft based only on published academic practices and is marked for official approval."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <Reveal>
              <article className="h-full border-t-[3px] border-maroon bg-white p-7">
                <Compass className="h-6 w-6 text-maroon" aria-hidden="true" />
                <h2 className="heading-md mt-6 text-charcoal">Mission</h2>
                <p className="mt-3 text-[0.65rem] font-extrabold tracking-[0.14em] text-gold uppercase">
                  [Official mission statement to be supplied]
                </p>
                <p className="mt-5 text-sm leading-7 text-charcoal/70">
                  Draft for approval: to provide quality intermediate education through strong fundamentals,
                  integrated competitive examination preparation, individual mentoring and consistent academic review.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.07}>
              <article className="h-full border-t-[3px] border-maroon bg-white p-7">
                <Target className="h-6 w-6 text-maroon" aria-hidden="true" />
                <h2 className="heading-md mt-6 text-charcoal">Vision</h2>
                <p className="mt-3 text-[0.65rem] font-extrabold tracking-[0.14em] text-gold uppercase">
                  [Official vision statement to be supplied]
                </p>
                <p className="mt-5 text-sm leading-7 text-charcoal/70">
                  Draft for approval: to be a learning environment where disciplined preparation, personal
                  attention, values and career guidance help students build a strong foundation for what comes next.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.14}>
              <article className="h-full border-t-[3px] border-gold bg-maroon p-7 text-white">
                <GraduationCap className="h-6 w-6 text-gold" aria-hidden="true" />
                <h2 className="heading-md mt-6 !text-white">Academic Values</h2>
                <ul className="mt-5 space-y-3">
                  {values.map((value) => (
                    <li key={value} className="flex gap-3 text-sm leading-6 text-white/78">
                      <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
                      {value}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <AcademicHighlights
        eyebrow="Published Academic Strengths"
        title="The practices behind the institution's approach."
        description="These highlights are taken directly from the college brochure and form the basis of the institutional profile on this page."
      />

      <section id="methodology" className="section-space scroll-mt-24 bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Teaching Methodology"
            title={<>From planning to review, a continuous academic loop.</>}
            description="The methodology below restates the college's published teaching, practice and assessment practices. A detailed day-by-day timetable is not provided in the brochure."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {academicApproach.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.06}>
                <article className="h-full border border-charcoal/10 bg-cream p-6">
                  <span className="font-display text-3xl text-gold">{step.step}</span>
                  <h3 className="mt-6 text-sm font-extrabold tracking-[0.04em] text-charcoal uppercase">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-charcoal/65">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="student-development" className="section-space scroll-mt-24 bg-cream">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Student Development"
            title={<>Development beyond the examination hall.</>}
            description="Mentorship, counselling, career guidance, parent communication and a supportive environment are part of the college's published approach to student development."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {studentSupport.map((item, index) => (
              <Reveal key={item.title} delay={(index % 3) * 0.06}>
                <article className="premium-card h-full p-7">
                  <HeartHandshake className="h-5 w-5 text-maroon" aria-hidden="true" />
                  <h3 className="mt-5 text-sm font-extrabold tracking-[0.04em] text-charcoal uppercase">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-charcoal/65">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="learning-environment" className="section-space scroll-mt-24 bg-white">
        <div className="container-shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/library.jpg"
              alt="Representative photograph of an academic library learning environment"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Learning Environment"
              title={<>Close attention, calm focus and clear expectations.</>}
              description="AC and digital classrooms, limited strength per class, CCTV surveillance and a positive learning environment are among the features identified in the college brochure."
            />
            <p className="mt-6 text-sm leading-8 text-charcoal/70">
              The environment is designed around visibility: limited class strength supports interaction, regular
              examinations make progress measurable, and parent communication keeps families informed about marks
              and absenteeism. Student feedback regarding lectures is also noted in the brochure.
            </p>
            <Link href="/facilities" className="btn btn-primary mt-8">
              View Campus Facilities <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Visit or Enquire"
        title="A conversation is the best way to understand the college."
        description={`Call ${college.phones[0].display} or ${college.phones[1].display} to ask about programmes, facilities and the admission process.`}
      />
    </>
  );
}
