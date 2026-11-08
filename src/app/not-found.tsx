import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section-space bg-cream">
      <div className="container-shell max-w-3xl text-center">
        <span className="eyebrow">Page Not Found</span>
        <p className="mt-6 font-display text-8xl font-semibold leading-none text-maroon">404</p>
        <h1 className="heading-md mt-4 text-charcoal">This page is not part of the college website.</h1>
        <p className="body-copy mx-auto mt-5 max-w-xl">
          The link may be outdated. Return to the homepage or explore courses, admissions and contact information.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary">Return Home <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          <Link href="/courses" className="btn btn-outline-dark">Explore Courses</Link>
          <Link href="/contact" className="btn btn-outline-dark">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
