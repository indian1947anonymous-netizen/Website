import { MessageCircle, Phone } from "lucide-react";
import { college } from "@/lib/site-data";

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 sm:bottom-7 sm:right-6">
      <a
        href={college.phones[0].href}
        aria-label={`Call Sree Abhyasa Junior College on ${college.phones[0].display}`}
        className="group inline-flex h-12 w-12 items-center justify-center border border-maroon bg-white text-maroon shadow-[0_10px_30px_rgba(32,32,32,0.18)] transition hover:bg-maroon hover:text-white"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
      </a>
      <a
        href={college.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open a WhatsApp enquiry with Sree Abhyasa Junior College"
        className="group inline-flex h-12 w-12 items-center justify-center border border-[#25D366] bg-[#25D366] text-white shadow-[0_10px_30px_rgba(32,32,32,0.18)] transition hover:brightness-95"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
      </a>
    </div>
  );
}
