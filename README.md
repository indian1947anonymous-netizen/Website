# Sree Abhyasa Junior College — Official Website

A production-oriented Next.js App Router website for Sree Abhyasa Junior College, Alwal. Content is based on the supplied college brochure and the verified details in the project brief.

## Verified information

- College: Sree Abhyasa Junior College, College Code 59238
- Phone: 63098 36569 / 85209 36569
- Address: Golnaka Circle, Beside Sundari Hospital, Alwal, Medchal-Malkajgiri, Telangana
- Courses: IIT-JEE, NEET, CA Foundation, EAPCET, MPC, BiPC, MEC, CEC
- Academic claims: only the brochure highlights listed in `src/lib/site-data.ts`

No fees, durations, faculty names, rankings, results, admissions deadlines, email addresses, or official social URLs have been invented. Unverified eligibility fields and testimonials are visibly marked as placeholders.

## Important asset note

The supplied brochure image was provided in the conversation but not as a project file, so `/public/images/college-building.jpg` and `/public/images/campus-hero.jpg` are brochure-based AI concept visuals, **not the original photograph**. Before launch, crop the real building photo from the supplied brochure and replace:

- `public/images/college-building.jpg`
- `public/images/campus-hero.jpg`

Then remove the small visual-note copy on the homepage. All other academic photos are representative stock photography from Pexels and are captioned as representative where relevant.

## Enquiry backend

The admission and contact forms are functional. They POST validated data to `/api/enquiries`, which stores records in PostgreSQL through Drizzle ORM in the `enquiries` table defined in `src/db/schema.ts`.

To connect a CRM, email notification, or external form service, extend `src/app/api/enquiries/route.ts` after the database insert. Keep API credentials in environment variables and never in client code. The form never claims a submission was stored unless the API returns success.

## Local setup

1. Set `DATABASE_URL` in `.env`.
2. Run `npm install`.
3. Run `npx drizzle-kit push` to create the enquiry table.
4. Optional: set `NEXT_PUBLIC_SITE_URL` to the production origin for canonical URLs and the sitemap.
5. Run `npm run dev`.

## Validation

Use `npx next typegen`, `npm exec tsc -- --noEmit`, `npm run build`, and the platform preview health check before deployment.
