import { ArrowUpRight, MapPinned } from "lucide-react";
import { college } from "@/lib/site-data";

export function MapPanel({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden border border-charcoal/12 bg-cream ${className}`}>
      <iframe
        src={college.mapEmbed}
        title="Google Maps location for Sree Abhyasa Junior College, Alwal"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full min-h-[380px] w-full border-0"
        allowFullScreen
      />
      <a
        href={college.mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-white px-4 py-3 text-xs font-extrabold tracking-[0.05em] text-maroon uppercase shadow-[0_10px_25px_rgba(32,32,32,0.16)] transition hover:bg-cream"
      >
        <MapPinned className="h-4 w-4" aria-hidden="true" />
        Open in Google Maps <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </div>
  );
}
