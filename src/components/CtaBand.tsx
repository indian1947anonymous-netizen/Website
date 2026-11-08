import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { college } from "@/lib/site-data";

export function CtaBand({
  eyebrow = "Admissions & Enquiries",
  title = "Take the next step with confidence.",
  description = "Speak with the college about courses, eligibility and the admission process. Our team will guide you through the next steps.",
  showFormLink = true,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  showFormLink?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-maroon text-white">
      <span className="pointer-events-none absolute -right-4 -top-20 font-display text-[18rem] leading-none text-white/4 select-none" aria-hidden="true">
        A
      </span>
      <div className="container-shell relative z-10 grid gap-9 py-14 lg:grid-cols-12 lg:items-center lg:py-18">
        <div className="lg:col-span-7">
          <span className="eyebrow !text-gold before:!bg-white/60">{eyebrow}</span>
          <h2 className="heading-md mt-5 max-w-3xl !text-white">{title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
          {showFormLink ? (
            <Link href="/admissions#enquiry-form" className="btn btn-gold">
              Admission Enquiry <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          ) : null}
          <a href={college.phones[0].href} className="btn btn-outline">
            <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
          </a>
          <a href={college.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
