import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { college, getSiteUrl, seoKeywords } from "@/lib/site-data";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${college.name} | Junior College in Alwal, Hyderabad`,
    template: `%s | ${college.name}`,
  },
  description:
    "Sree Abhyasa Junior College in Alwal offers MPC, BiPC, MEC and CEC with integrated IIT-JEE, NEET, EAPCET and CA Foundation preparation. College code 59238.",
  keywords: [...seoKeywords],
  applicationName: college.name,
  authors: [{ name: college.name }],
  openGraph: {
    type: "website",
    siteName: college.name,
    title: `${college.name} | Academic Excellence in Alwal`,
    description:
      "A focused junior college in Alwal with integrated board and competitive examination preparation, individual mentoring and continuous assessment.",
    url: siteUrl,
    locale: "en_IN",
    images: [
      {
        url: "/images/campus-hero.jpg",
        width: 1250,
        height: 620,
        alt: "Brochure-inspired facade visualization for Sree Abhyasa Junior College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${college.name} | Academic Excellence in Alwal`,
    description: "Explore courses, facilities and admissions at Sree Abhyasa Junior College, Alwal.",
    images: ["/images/campus-hero.jpg"],
  },
  robots: { index: true, follow: true },
  category: "education",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#920D16",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: college.name,
  alternateName: "Sri Abhyasa Junior College",
  identifier: {
    "@type": "PropertyValue",
    name: "College Code",
    value: college.code,
  },
  url: siteUrl,
  telephone: [college.phones[0].display, college.phones[1].display],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Golnaka Circle, Beside Sundari Hospital, Alwal",
    addressLocality: "Alwal, Medchal-Malkajgiri",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  areaServed: "Alwal, Medchal-Malkajgiri, Hyderabad, Telangana",
  knowsAbout: [
    "MPC",
    "BiPC",
    "MEC",
    "CEC",
    "IIT-JEE Mains and Advanced",
    "NEET",
    "EAPCET",
    "CA Foundation",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-maroon-deep"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
