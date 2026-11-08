import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarCheck,
  Check,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  HeartHandshake,
  LineChart,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  ShieldCheck,
  Target,
  UsersRound,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CourseCard } from "@/components/CourseCard";
import { AcademicHighlights } from "@/components/AcademicHighlights";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ContactInfo } from "@/components/ContactInfo";
import { MapPanel } from "@/components/MapPanel";
import { FacilityIcon } from "@/components/FacilityIcon";
import { CtaBand } from "@/components/CtaBand";
import {
  academicApproach,
  college,
  competitiveCourses,
  examinationSystem,
  facilities,
  intermediateCourses,
  studentSupport,
  testimonialPlaceholders,
  unverifiedDataNote,
  verifiedStats,
  whyChoose,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-maroon-deep text-white lg:min-h-[780px]">
        <Image
          src="/images/campus-hero.jpg"
          alt="Brochure-inspired facade visualization for Sree Abhyasa Junior College"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[55%_center]"
        />
        <div className="absolute inset-0 bg-charcoal/66" aria-hidden="true" />
        <div className="absolute inset-y-0 left-0 w-1 bg-gold" aria-hidden="true" />
        <div className="container-shell relative z-10 py-24 lg:py-28">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.68rem] font-extrabold tracking-[0.2em] text-gold uppercase">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> Alwal · Telangana
              </span>
              <span className="h-3 w-px bg-white/35" aria-hidden="true" />
              <span>College Code {college.code}</span>
            </div>
            <h1 className="heading-xl mt-8 max-w-4xl !text-white">
              Building Bright Futures Through <span className="text-gold">Academic Excellence.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
              Quality intermediate education, integrated preparation for competitive examinations and
              disciplined student development—delivered through personal attention, structured assessment
              and a strong foundation in fundamental concepts.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="#courses" className="btn btn-gold">
                Explore Courses <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/admissions#enquiry-form" className="btn btn-outline">
                Apply for Admission <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Contact Us <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
        <p className="absolute bottom-4 right-5 z-10 max-w-[18rem] text-right text-[0.62rem] leading-4 text-white/55 sm:bottom-5 sm:right-8">
          Campus facade is a brochure-based concept visual. Replace with the original brochure photograph before launch.
        </p>
      </section>

      {/* Verified statistics */}
      <section aria-label="Verified college facts" className="border-b border-charcoal/10 bg-white">
        <div className="container-shell grid grid-cols-2 divide-x divide-y divide-charcoal/10 lg:grid-cols-4 lg:divide-y-0">
          {verifiedStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06} className="p-6 lg:p-8">
              <p className="font-display text-4xl font-semibold leading-none text-maroon lg:text-5xl">{stat.value}</p>
              <p className="mt-3 text-[0.64rem] font-extrabold tracking-[0.16em] text-charcoal uppercase">{stat.label}</p>
              <p className="mt-2 text-xs leading-5 text-charcoal/55">{stat.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section id="about-intro" className="section-space scroll-mt-24 bg-white">
        <div className="container-shell grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-18">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Welcome to Sree Abhyasa"
              title={<>A focused place to learn, prepare and grow.</>}
              description="Sree Abhyasa Junior College offers MPC, BiPC, MEC and CEC alongside preparation for IIT-JEE, NEET, EAPCET and CA Foundation. Its published approach brings together board examination teaching, competitive examination coaching and close individual support."
            />
            <div className="mt-8 space-y-4">
              {[
                "Integrated coaching for board and competitive examinations",
                "Individual mentorship and a positive learning environment",
                "Structured assessment, analysis and parent communication",
              ].map((item) => (
                <div key={item} className="flex gap-3 border-b border-charcoal/10 pb-4 text-sm leading-6 text-charcoal/72">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-maroon" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn btn-primary">
                Discover the Institution <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/facilities" className="btn btn-outline-dark">
                View Facilities
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative pb-14 pr-0 sm:pb-16 sm:pr-16">
                <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                  <Image
                    src="/images/classroom.jpg"
                    alt="Students in a representative academic classroom"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-0 right-0 hidden h-44 w-64 border-[6px] border-white bg-cream shadow-[0_20px_45px_rgba(32,32,32,0.16)] sm:block">
                  <Image
                    src="/images/campus-hero.jpg"
                    alt="Brochure-inspired view of the college facade"
                    fill
                    sizes="260px"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <p className="caption-note mt-2 max-w-xl">
              Visual note: classroom and study imagery is representative educational photography. The facade inset is a
              brochure-based concept visual; the original building photograph from the supplied brochure should replace it.
            </p>
          </div>
        </div>
      </section>

      {/* All brochure highlights */}
      <AcademicHighlights />

      {/* Courses */}
      <section id="courses" className="section-space scroll-mt-24 bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Courses Offered"
            title={<>Pathways designed around ambition.</>}
            description="The college brochure lists four intermediate programmes and four competitive examination tracks. Each pathway is supported by the institution's integrated teaching, mentoring and assessment approach."
            action={
              <Link href="/courses" className="btn btn-outline-dark">
                All Course Details <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            }
          />
          <p className="mt-6 max-w-4xl border-l-2 border-gold bg-cream px-4 py-3 text-xs leading-6 text-charcoal/65">
            {unverifiedDataNote}
          </p>

          <div className="mt-14">
            <div className="mb-6 flex items-center gap-4">
              <h3 className="font-display text-2xl font-semibold text-charcoal">Intermediate Programmes</h3>
              <span className="h-px flex-1 bg-charcoal/10" aria-hidden="true" />
              <Link href="/academics" className="text-[0.65rem] font-extrabold tracking-[0.12em] text-maroon uppercase hover:underline">
                Academics Overview
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {intermediateCourses.map((course, index) => (
                <Reveal key={course.slug} delay={index * 0.05}>
                  <CourseCard course={course} index={index} />
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <div className="mb-6 flex items-center gap-4">
              <h3 className="font-display text-2xl font-semibold text-charcoal">Competitive Exam Preparation</h3>
              <span className="h-px flex-1 bg-charcoal/10" aria-hidden="true" />
              <Link href="/competitive-exams" className="text-[0.65rem] font-extrabold tracking-[0.12em] text-maroon uppercase hover:underline">
                Preparation Methodology
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {competitiveCourses.map((course, index) => (
                <Reveal key={course.slug} delay={index * 0.05}>
                  <CourseCard course={course} index={index + 4} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section id="why-choose" className="section-space scroll-mt-24 bg-maroon text-white">
        <div className="container-shell grid gap-14 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow !text-gold before:!bg-white/60">Why Choose Sree Abhyasa?</span>
            <h2 className="heading-lg mt-5 !text-white">Attention to the individual. Rigour in the academics.</h2>
            <p className="mt-6 max-w-lg text-sm leading-8 text-white/75">
              The college&apos;s published strengths centre on integrated preparation, close mentoring, regular assessment
              and a learning environment that keeps each student visible.
            </p>
            <div className="relative mt-10 aspect-[4/3] overflow-hidden border border-white/15">
              <Image
                src="/images/academic-campus.jpg"
                alt="Representative modern academic campus architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid gap-4 lg:col-span-7">
            {whyChoose.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="grid grid-cols-[auto_1fr] gap-5 border border-white/15 bg-white/5 p-7 transition hover:border-gold/60 hover:bg-white/8">
                  <span className="font-display text-3xl text-gold/85">0{index + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/72">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty and mentoring */}
      <section id="faculty" className="section-space scroll-mt-24 bg-cream">
        <div className="container-shell grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/lecture.jpg"
                alt="Representative photograph of a faculty member teaching students"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Faculty & Mentoring"
              title={<>Experienced teaching. Personal guidance.</>}
              description="The college brochure describes well-qualified and experienced faculty, a unique mentorship programme and individual attention to each student. CA Foundation coaching is guided by chartered accountants."
            />
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {[
                { icon: GraduationCap, title: "Concept-led teaching", text: "Special emphasis on fundamental concepts." },
                { icon: UsersRound, title: "Individual attention", text: "A unique mentorship programme for each student." },
                { icon: HeartHandshake, title: "Patient support", text: "Counselling and special focus on slow learners." },
                { icon: BookOpen, title: "Expert CA guidance", text: "CA Foundation coaching guided by chartered accountants." },
              ].map((item) => (
                <div key={item.title} className="border-t border-maroon/20 bg-white p-5">
                  <item.icon className="h-5 w-5 text-maroon" aria-hidden="true" />
                  <h3 className="mt-4 text-sm font-extrabold tracking-[0.04em] text-charcoal uppercase">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-charcoal/65">{item.text}</p>
                </div>
              ))}
            </div>
            <Link href="/about#philosophy" className="btn btn-outline-dark mt-8">
              Read Our Educational Philosophy <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Academic approach */}
      <section id="approach" className="section-space scroll-mt-24 bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Academic Approach"
            title={<>A deliberate method, repeated every week.</>}
            description="Planning, concept-building, practice, assessment and mentoring form a continuous academic loop drawn from the college's published teaching and examination practices."
            align="center"
          />
          <div className="relative mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-5">
            <div className="absolute left-0 right-0 top-[2.2rem] hidden h-px bg-gold/55 lg:block" aria-hidden="true" />
            {academicApproach.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.07} className="relative">
                <div className="flex h-[4.4rem] w-[4.4rem] items-center justify-center border border-maroon/20 bg-white font-display text-2xl font-bold text-maroon">
                  {step.step}
                </div>
                <h3 className="mt-6 text-base font-extrabold tracking-[0.03em] text-charcoal uppercase">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-charcoal/65">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Student support */}
      <section id="student-support" className="section-space scroll-mt-24 bg-cream">
        <div className="container-shell grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Student Support & Mentorship"
              title={<>No student is left without attention.</>}
              description="Individual mentoring, counselling, parent communication and career guidance sit alongside the academic programme. The college also places special focus on slow learners."
            />
            <div className="relative mt-9 aspect-[5/4] overflow-hidden">
              <Image
                src="/images/library.jpg"
                alt="Representative photograph of students collaborating in a library"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {studentSupport.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="premium-card h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-cream text-maroon">
                      {index % 4 === 0 ? <UsersRound className="h-4 w-4" aria-hidden="true" /> : null}
                      {index % 4 === 1 ? <HeartHandshake className="h-4 w-4" aria-hidden="true" /> : null}
                      {index % 4 === 2 ? <Target className="h-4 w-4" aria-hidden="true" /> : null}
                      {index % 4 === 3 ? <MessageCircle className="h-4 w-4" aria-hidden="true" /> : null}
                    </span>
                    <h3 className="text-sm font-extrabold tracking-[0.03em] text-charcoal uppercase">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-charcoal/65">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Examination system */}
      <section id="assessment" className="section-space scroll-mt-24 bg-charcoal text-white">
        <div className="container-shell grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="eyebrow !text-gold before:!bg-white/60">Examination & Assessment</span>
            <h2 className="heading-lg mt-5 !text-white">Regular testing. Careful review. Clear communication.</h2>
            <p className="mt-6 text-sm leading-8 text-white/70">
              Weekly online examinations, term examinations and cumulative examinations are followed by analysis and
              review. Parents are informed about marks and absenteeism through mobile SMS.
            </p>
            <div className="relative mt-10 aspect-[4/3] overflow-hidden border border-white/15">
              <Image
                src="/images/studyhall.jpg"
                alt="Representative overhead view of students studying in a library"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="divide-y divide-white/12 border-y border-white/12">
              {examinationSystem.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="grid grid-cols-[3rem_1fr_auto] items-center gap-5 py-6">
                    <span className="font-display text-2xl text-gold">0{index + 1}</span>
                    <div>
                      <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-white/65">{item.description}</p>
                    </div>
                    <ClipboardCheck className="hidden h-5 w-5 text-gold/80 sm:block" aria-hidden="true" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="section-space scroll-mt-24 bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Campus & Facilities"
            title={<>An environment built for attentive learning.</>}
            description="The facilities and academic practices below are stated in the college brochure. They support comfort, safety, focused teaching and regular feedback."
            action={
              <Link href="/facilities" className="btn btn-outline-dark">
                Explore Facilities <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            }
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility, index) => (
              <Reveal key={facility.title} delay={(index % 4) * 0.05}>
                <article className="premium-card h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center bg-cream text-maroon">
                    <FacilityIcon name={facility.icon} />
                  </span>
                  <h3 className="mt-6 text-sm font-extrabold tracking-[0.03em] text-charcoal uppercase">{facility.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-charcoal/65">{facility.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { src: "/images/classroom.jpg", alt: "Representative image of an engaged classroom" },
              { src: "/images/discussion.jpg", alt: "Representative image of an academic group discussion" },
              { src: "/images/problemsolving.jpg", alt: "Representative image of students working through problems together" },
            ].map((image) => (
              <div key={image.src} className="relative aspect-[4/3] overflow-hidden bg-cream">
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
            ))}
          </div>
          <p className="caption-note mt-3">Campus and classroom photography on this page is representative, not a depiction of college-owned facilities.</p>
        </div>
      </section>

      {/* Admission enquiry */}
      <section id="admission-enquiry" className="section-space scroll-mt-24 bg-cream">
        <div className="container-shell grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Admission Enquiry"
              title={<>Begin with a conversation.</>}
              description="Tell us about the student and the programme of interest. For current eligibility, admission requirements and fee details, speak directly with the college office."
            />
            <div className="mt-9 space-y-5">
              {[
                { icon: CalendarCheck, title: "Share your details", text: "Complete the enquiry form with the student's academic background and course interest." },
                { icon: Phone, title: "Speak with the college", text: "Call or message the admissions contact to confirm the latest requirements and next steps." },
                { icon: ShieldCheck, title: "No unverified claims", text: "Eligibility, fees and duration are not published here because they are not present in the supplied brochure." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 border-l-2 border-gold bg-white p-5">
                  <item.icon className="mt-1 h-5 w-5 shrink-0 text-maroon" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-extrabold tracking-[0.03em] text-charcoal uppercase">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-charcoal/65">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={college.phones[0].href} className="btn btn-primary">
                <Phone className="h-4 w-4" aria-hidden="true" /> {college.phones[0].display}
              </a>
              <a href={college.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <EnquiryForm source="homepage" formId="home-enquiry-form" />
          </div>
        </div>
      </section>

      {/* Testimonial placeholders */}
      <section className="section-space bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Voices from the Community"
            title={<>Testimonials, published with integrity.</>}
            description="Real parent and student testimonials will be published here once verified submissions are provided by the college. We do not display invented quotes or names."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonialPlaceholders.map((testimonial, index) => (
              <Reveal key={testimonial.slot} delay={index * 0.07}>
                <article className="flex h-full min-h-[230px] flex-col border border-dashed border-maroon/25 bg-cream/60 p-7">
                  <Quote className="h-7 w-7 text-gold" aria-hidden="true" />
                  <h3 className="mt-8 font-display text-2xl font-semibold text-charcoal">{testimonial.slot}</h3>
                  <p className="mt-2 text-xs font-extrabold tracking-[0.12em] text-maroon uppercase">{testimonial.status}</p>
                  <p className="mt-auto pt-7 text-xs leading-5 text-charcoal/55">
                    Reserved layout for a verified testimonial. Replace this card when an approved quote and attribution are available.
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Maps */}
      <section id="contact" className="section-space scroll-mt-24 bg-cream">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Contact & Location"
            title={<>Find us in Alwal. Speak to us directly.</>}
            description="Call, send a WhatsApp message, use the admission enquiry form or open the verified college address in Google Maps."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <ContactInfo />
            <MapPanel className="min-h-[500px]" />
          </div>
        </div>
      </section>

      <CtaBand
        title="Questions about a course or admission?"
        description="The college team can confirm current eligibility, available programmes and the admission process directly."
      />
    </>
  );
}
