import { ArrowUpRight, BadgeCheck, MapPin, MessageCircle, Phone } from "lucide-react";
import { college } from "@/lib/site-data";

export function ContactInfo({ id }: { id?: string }) {
  return (
    <div id={id} className="grid gap-4 sm:grid-cols-2">
      <div className="premium-card p-6 sm:col-span-2">
        <div className="flex gap-4">
          <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center bg-cream text-maroon">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-[0.65rem] font-extrabold tracking-[0.18em] text-maroon uppercase">College address</h3>
            <address className="mt-2 text-sm not-italic leading-7 text-charcoal/72">{college.address}</address>
            <a
              href={college.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.06em] text-maroon uppercase hover:gap-3"
            >
              Get Directions <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="premium-card p-6">
        <span className="flex h-10 w-10 items-center justify-center bg-cream text-maroon">
          <Phone className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-[0.65rem] font-extrabold tracking-[0.18em] text-maroon uppercase">Call the college</h3>
        <div className="mt-3 flex flex-col gap-2">
          {college.phones.map((phone) => (
            <a key={phone.digits} href={phone.href} className="text-lg font-bold text-charcoal transition hover:text-maroon">
              {phone.display}
            </a>
          ))}
        </div>
        <p className="mt-2 caption-note">Tap a number to call directly from your phone.</p>
      </div>

      <div className="premium-card p-6">
        <span className="flex h-10 w-10 items-center justify-center bg-cream text-maroon">
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-[0.65rem] font-extrabold tracking-[0.18em] text-maroon uppercase">WhatsApp enquiry</h3>
        <a
          href={college.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-base font-bold text-maroon hover:underline"
        >
          Start a conversation <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <p className="mt-2 caption-note">Opens WhatsApp with an admission enquiry message.</p>
      </div>

      <div className="premium-card flex items-center justify-between gap-4 border-l-2 border-l-gold bg-cream p-6 sm:col-span-2">
        <div className="flex items-center gap-4">
          <span className="flex h-10 w-10 items-center justify-center bg-white text-maroon">
            <BadgeCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-[0.65rem] font-extrabold tracking-[0.18em] text-maroon uppercase">Official college code</h3>
            <p className="mt-1 text-sm text-charcoal/65">As published in the college brochure</p>
          </div>
        </div>
        <span className="font-display text-4xl font-bold text-maroon">{college.code}</span>
      </div>
    </div>
  );
}
