import { db } from "@/db";
import { enquiries } from "@/db/schema";
import { courseOptions } from "@/lib/site-data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RawEnquiry = Record<string, unknown>;

const asString = (value: unknown) => (typeof value === "string" ? value.trim() : "");
const nameIsValid = (value: string) => value.length >= 2 && value.length <= 120;
const emailIsValid = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value) && value.length <= 180;
const phoneIsValid = (value: string) => /^(?:91)?[6-9]\d{9}$/.test(value.replace(/[^\d]/g, ""));

function validate(payload: RawEnquiry) {
  const fields = {
    studentName: asString(payload.studentName),
    parentName: asString(payload.parentName),
    phone: asString(payload.phone),
    email: asString(payload.email),
    course: asString(payload.course),
    qualification: asString(payload.qualification),
    message: asString(payload.message),
  };

  const canonicalCourse = courseOptions.find(
    (option) => option.toLowerCase() === fields.course.toLowerCase(),
  );

  const errors: Record<string, string> = {};
  if (!nameIsValid(fields.studentName)) errors.studentName = "Enter the student's full name.";
  if (!nameIsValid(fields.parentName)) errors.parentName = "Enter the parent or guardian's full name.";
  if (!phoneIsValid(fields.phone)) errors.phone = "Enter a valid 10-digit Indian mobile number.";
  if (!emailIsValid(fields.email)) errors.email = "Enter a valid email address.";
  if (!canonicalCourse) errors.course = "Select a course from the list.";
  if (fields.qualification.length < 2 || fields.qualification.length > 160) {
    errors.qualification = "Enter the previous academic qualification.";
  }
  if (fields.message.length < 10 || fields.message.length > 2000) {
    errors.message = "Please write at least 10 characters.";
  }

  return {
    errors,
    value: {
      ...fields,
      course: canonicalCourse ?? fields.course,
      phone: fields.phone.replace(/[^\d]/g, ""),
      source: asString(payload.source).slice(0, 120) || "website",
    },
  };
}

export async function POST(request: Request) {
  let payload: RawEnquiry;
  try {
    payload = (await request.json()) as RawEnquiry;
  } catch {
    return Response.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const { errors, value } = validate(payload);
  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, message: "Please correct the highlighted fields.", errors }, { status: 400 });
  }

  try {
    const [record] = await db
      .insert(enquiries)
      .values({
        studentName: value.studentName,
        parentName: value.parentName,
        phone: value.phone,
        email: value.email,
        course: value.course,
        qualification: value.qualification,
        message: value.message,
        source: value.source,
      })
      .returning({ id: enquiries.id });

    return Response.json({
      ok: true,
      reference: `SAJC-${String(record.id).padStart(5, "0")}`,
      message: "Your enquiry has been saved. The admissions team will contact you.",
    });
  } catch (error) {
    console.error("Unable to save admission enquiry", error);
    return Response.json(
      {
        ok: false,
        message:
          "We could not save your enquiry right now. Please call the college or use WhatsApp so your enquiry is not missed.",
      },
      { status: 503 },
    );
  }
}
