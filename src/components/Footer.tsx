import Link from "next/link";
import {
  ArrowUpRight,
  Camera,
  Globe,
  MapPin,
  MessageCircle,
  Phone,
  Play,
} from "lucide-react";
import { Brand } from "@/components/Brand";
import { college, courses, navLinks, socialPlaceholders } from "@/lib/site-data";

const socialIcons = [Globe, Camera, Play];

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Brand variant="light" />
          <p className="mt-7 max-w-sm text-sm leading-7 text-white/65">
            A junior college in Alwal focused on quality education, integrated competitive examination
            preparation, disciplined learning and individual student development.
          </p>
          <div className="mt-8">
            <p className="text-[0.65rem] font-extrabold tracking-[0.2em] text-gold uppercase">Social media</p>
            <div className="mt-3 flex gap-2">
              {socialPlaceholders.map((social, index) => {
                const Icon = socialIcons[index];
                return (
                  <span
                    key={social.label}
                    title={`${social.label}: ${social.note}`}
                    aria-label={`${social.label}: ${social.note}`}
                    aria-disabled="true"
                    className="inline-flex h-10 w-10 items-center justify-center border border-white/18 text-white/55"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                );
              })}
            </div>
            <p className="mt-3 text-xs leading-5 text-white/45">
              Official social profile URLs are placeholders until supplied by the college.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-[0.68rem] font-extrabold tracking-[0.2em] text-gold uppercase">Explore</h3>
          <ul className="mt-6 space-y-3.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/70 transition hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/competitive-exams" className="text-sm text-white/70 transition hover:text-gold">
                Competitive Exams
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-[0.68rem] font-extrabold tracking-[0.2em] text-gold uppercase">Programmes</h3>
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3.5">
            {courses.map((course) => (
              <li key={course.slug}>
                <Link
                  href={`/courses#${course.slug}`}
                  className="text-sm text-white/70 transition hover:text-gold"
                >
                  {course.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-7 inline-flex items-center gap-3 border border-gold/35 px-4 py-3">
            <span className="text-[0.62rem] font-bold tracking-[0.16em] text-white/60 uppercase">College Code</span>
            <span className="font-display text-2xl font-bold text-gold">{college.code}</span>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-[0.68rem] font-extrabold tracking-[0.2em] text-gold uppercase">Visit & Contact</h3>
          <address className="mt-6 space-y-5 text-sm not-italic leading-6 text-white/70">
            <p className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={college.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                {college.address}
              </a>
            </p>
            <p className="flex flex-col gap-2">
              {college.phones.map((phone) => (
                <a key={phone.digits} href={phone.href} className="inline-flex items-center gap-3 hover:text-gold">
                  <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {phone.display}
                </a>
              ))}
            </p>
            <p>
              <a
                href={college.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 hover:text-gold"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                WhatsApp enquiry <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-3 py-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {college.name}. All rights reserved.</p>
          <p>College Code {college.code} · Alwal, Medchal-Malkajgiri, Telangana</p>
        </div>
      </div>
    </footer>
  );
}
