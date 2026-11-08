"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Brand } from "@/components/Brand";
import { college, navLinks } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/courses") return pathname.startsWith("/courses") || pathname.startsWith("/competitive-exams");
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <div className="hidden bg-maroon-deep text-white lg:block">
        <div className="container-shell flex h-10 items-center justify-between text-[0.69rem] font-semibold tracking-[0.1em]">
          <div className="flex items-center gap-7">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              Golnaka Circle, Alwal, Telangana
            </span>
            <span className="inline-flex items-center gap-2 text-white/75">
              College Code <span className="font-bold text-gold">{college.code}</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            {college.phones.map((phone) => (
              <a key={phone.digits} href={phone.href} className="inline-flex items-center gap-2 transition hover:text-gold">
                <Phone className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                {phone.display}
              </a>
            ))}
            <a
              href={college.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-gold"
            >
              <MessageCircle className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-charcoal/8 bg-white/96 backdrop-blur-md">
        <div className="container-shell flex h-[76px] items-center justify-between gap-6">
          <Brand />

          <nav aria-label="Primary navigation" className="hidden items-center gap-7 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`relative py-2 text-[0.7rem] font-extrabold tracking-[0.11em] uppercase transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 ${
                  isActive(link.href)
                    ? "text-maroon after:w-full"
                    : "text-charcoal/72 after:w-0 hover:text-maroon hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <Link href="/admissions" className="btn btn-primary px-5">
              Enquire Now <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-11 w-11 items-center justify-center border border-charcoal/15 text-maroon xl:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden border-t border-charcoal/10 bg-white shadow-[0_20px_40px_rgba(32,32,32,0.12)] xl:hidden"
            >
              <nav
                aria-label="Mobile navigation"
                className="container-shell flex flex-col py-5"
                onClick={(event) => {
                  if ((event.target as HTMLElement).closest("a")) setOpen(false);
                }}
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`flex items-center justify-between border-b border-charcoal/8 py-3.5 text-sm font-bold tracking-[0.06em] uppercase ${
                      isActive(link.href) ? "text-maroon" : "text-charcoal"
                    }`}
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 text-gold" aria-hidden="true" />
                  </Link>
                ))}
                <Link
                  href="/competitive-exams"
                  className="flex items-center justify-between border-b border-charcoal/8 py-3.5 pl-4 text-[0.78rem] font-bold tracking-[0.06em] text-maroon uppercase"
                >
                  Competitive Exam Preparation
                  <ArrowUpRight className="h-4 w-4 text-gold" aria-hidden="true" />
                </Link>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a href={college.phones[0].href} className="btn btn-outline-dark px-3">
                    <Phone className="h-4 w-4" aria-hidden="true" /> Call
                  </a>
                  <a
                    href={college.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark px-3"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
                  </a>
                </div>
                <Link href="/admissions" className="btn btn-primary mt-3">
                  Enquire Now <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <p className="mt-5 text-center text-xs text-charcoal/55">
                  College Code <span className="font-bold text-maroon">{college.code}</span>
                </p>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}
