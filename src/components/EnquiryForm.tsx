"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AlertCircle, ArrowUpRight, CheckCircle2, MessageCircle, Phone, Send } from "lucide-react";
import { college, courseOptions, courses } from "@/lib/site-data";

type FormValues = {
  studentName: string;
  parentName: string;
  phone: string;
  email: string;
  course: string;
  qualification: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormValues, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const initialValues: FormValues = {
  studentName: "",
  parentName: "",
  phone: "",
  email: "",
  course: "",
  qualification: "",
  message: "",
};

const validate = (values: FormValues): FieldErrors => {
  const errors: FieldErrors = {};
  if (values.studentName.trim().length < 2) errors.studentName = "Enter the student's full name.";
  if (values.parentName.trim().length < 2) errors.parentName = "Enter the parent or guardian's full name.";
  if (!/^(?:91)?[6-9]\d{9}$/.test(values.phone.replace(/[^\d]/g, ""))) {
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!courseOptions.includes(values.course)) errors.course = "Select a course from the list.";
  if (values.qualification.trim().length < 2) {
    errors.qualification = "Enter the previous academic qualification.";
  }
  if (values.message.trim().length < 10) errors.message = "Please write at least 10 characters.";
  return errors;
};

export function EnquiryForm({
  source,
  formId = "enquiry-form",
  title = "Admission Enquiry",
  description = "Share a few details and the admissions team will get back to you. Fields marked with an asterisk are required.",
}: {
  source: string;
  formId?: string;
  title?: string;
  description?: string;
}) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const [reference, setReference] = useState("");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const requested = new URLSearchParams(window.location.search).get("course");
      if (!requested) return;
      const normalized = requested.toLowerCase();
      const match = courses.find(
        (course) =>
          course.slug.toLowerCase() === normalized ||
          course.shortTitle.toLowerCase() === normalized ||
          course.title.toLowerCase() === normalized,
      );
      if (match) setValues((current) => ({ ...current, course: match.shortTitle }));
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const fieldId = (name: keyof FormValues) => `${formId}-${name}`;
  const update = (name: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const inputProps = (name: keyof FormValues) => ({
    id: fieldId(name),
    name,
    value: values[name],
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      update(name, event.target.value),
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${fieldId(name)}-error` : undefined,
    className: "form-field",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const clientErrors = validate(values);
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      setStatus("error");
      setFeedback("Please correct the highlighted fields before submitting.");
      return;
    }

    setStatus("submitting");
    setFeedback("");
    setErrors({});

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source }),
      });
      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        message?: string;
        reference?: string;
        errors?: FieldErrors;
      };

      if (!response.ok || !data.ok) {
        setErrors(data.errors ?? {});
        setStatus("error");
        setFeedback(data.message ?? "We could not save your enquiry. No details were stored.");
        return;
      }

      setReference(data.reference ?? "");
      setStatus("success");
      setFeedback(data.message ?? "Your enquiry has been saved.");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setFeedback("The submission could not reach the server. No details were stored. Please try again, call, or use WhatsApp.");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-maroon/15 bg-white p-8 shadow-[0_18px_50px_rgba(32,32,32,0.07)] lg:p-10" aria-live="polite">
        <CheckCircle2 className="h-10 w-10 text-maroon" aria-hidden="true" />
        <h3 className="mt-5 font-display text-3xl font-semibold text-charcoal">Thank you for your enquiry.</h3>
        <p className="mt-3 text-sm leading-7 text-charcoal/70">{feedback}</p>
        {reference ? (
          <p className="mt-5 inline-flex items-center gap-3 border border-gold/50 bg-cream px-4 py-3 text-sm">
            <span className="text-charcoal/60">Reference</span>
            <strong className="tracking-[0.08em] text-maroon">{reference}</strong>
          </p>
        ) : null}
        <p className="mt-6 text-sm leading-7 text-charcoal/65">
          Need to speak to someone sooner? Call{" "}
          <a href={college.phones[0].href} className="font-bold text-maroon hover:underline">
            {college.phones[0].display}
          </a>{" "}
          or send a{" "}
          <a href={college.whatsapp} target="_blank" rel="noopener noreferrer" className="font-bold text-maroon hover:underline">
            WhatsApp enquiry
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFeedback("");
            setReference("");
          }}
          className="btn btn-outline-dark mt-8"
        >
          Send another enquiry <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    );
  }

  return (
    <div id={formId} className="scroll-mt-28 border border-maroon/12 bg-white p-6 shadow-[0_18px_50px_rgba(32,32,32,0.07)] sm:p-8 lg:p-10">
      <div className="mb-8 border-b border-charcoal/10 pb-6">
        <span className="eyebrow">Enquiry Form</span>
        <h3 className="heading-md mt-4 text-charcoal">{title}</h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-charcoal/65">{description}</p>
      </div>

      {status === "error" ? (
        <div role="alert" className="mb-7 flex gap-3 border-l-4 border-maroon bg-cream p-4 text-sm leading-6 text-charcoal/75">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-maroon" aria-hidden="true" />
          <div>
            <p className="font-bold text-maroon">Enquiry not submitted</p>
            <p>{feedback}</p>
            <p className="mt-2">
              <a href={college.phones[0].href} className="inline-flex items-center gap-1.5 font-bold text-maroon hover:underline">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" /> Call the college
              </a>
              <span className="mx-3 text-charcoal/30">|</span>
              <a href={college.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-bold text-maroon hover:underline">
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" /> WhatsApp
              </a>
            </p>
          </div>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor={fieldId("studentName")} className="mb-2 block text-xs font-bold tracking-[0.06em] text-charcoal uppercase">
              Student name <span className="text-maroon">*</span>
            </label>
            <input {...inputProps("studentName")} type="text" autoComplete="name" placeholder="Full name" required />
            {errors.studentName ? <p id={`${fieldId("studentName")}-error`} className="mt-1.5 text-xs text-maroon">{errors.studentName}</p> : null}
          </div>
          <div>
            <label htmlFor={fieldId("parentName")} className="mb-2 block text-xs font-bold tracking-[0.06em] text-charcoal uppercase">
              Parent / guardian name <span className="text-maroon">*</span>
            </label>
            <input {...inputProps("parentName")} type="text" placeholder="Full name" required />
            {errors.parentName ? <p id={`${fieldId("parentName")}-error`} className="mt-1.5 text-xs text-maroon">{errors.parentName}</p> : null}
          </div>
          <div>
            <label htmlFor={fieldId("phone")} className="mb-2 block text-xs font-bold tracking-[0.06em] text-charcoal uppercase">
              Phone number <span className="text-maroon">*</span>
            </label>
            <input {...inputProps("phone")} type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile number" required />
            {errors.phone ? <p id={`${fieldId("phone")}-error`} className="mt-1.5 text-xs text-maroon">{errors.phone}</p> : null}
          </div>
          <div>
            <label htmlFor={fieldId("email")} className="mb-2 block text-xs font-bold tracking-[0.06em] text-charcoal uppercase">
              Email address <span className="text-maroon">*</span>
            </label>
            <input {...inputProps("email")} type="email" autoComplete="email" placeholder="name@example.com" required />
            {errors.email ? <p id={`${fieldId("email")}-error`} className="mt-1.5 text-xs text-maroon">{errors.email}</p> : null}
          </div>
          <div>
            <label htmlFor={fieldId("course")} className="mb-2 block text-xs font-bold tracking-[0.06em] text-charcoal uppercase">
              Course interested in <span className="text-maroon">*</span>
            </label>
            <select {...inputProps("course")} required>
              <option value="">Select a course</option>
              {courseOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.course ? <p id={`${fieldId("course")}-error`} className="mt-1.5 text-xs text-maroon">{errors.course}</p> : null}
          </div>
          <div>
            <label htmlFor={fieldId("qualification")} className="mb-2 block text-xs font-bold tracking-[0.06em] text-charcoal uppercase">
              Previous academic qualification <span className="text-maroon">*</span>
            </label>
            <input {...inputProps("qualification")} type="text" placeholder="e.g. Class X / SSC" required />
            {errors.qualification ? <p id={`${fieldId("qualification")}-error`} className="mt-1.5 text-xs text-maroon">{errors.qualification}</p> : null}
          </div>
          <div className="md:col-span-2">
            <label htmlFor={fieldId("message")} className="mb-2 block text-xs font-bold tracking-[0.06em] text-charcoal uppercase">
              Message <span className="text-maroon">*</span>
            </label>
            <textarea {...inputProps("message")} rows={5} placeholder="Tell us what you would like to know about admissions, courses or campus facilities." required />
            {errors.message ? <p id={`${fieldId("message")}-error`} className="mt-1.5 text-xs text-maroon">{errors.message}</p> : null}
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-4 border-t border-charcoal/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="caption-note max-w-md">
            Enquiries are submitted to <code className="font-semibold text-maroon">/api/enquiries</code> and saved in the website database. A CRM or email service can be connected in that API route when available.
          </p>
          <button type="submit" disabled={status === "submitting"} className="btn btn-primary shrink-0 disabled:cursor-not-allowed disabled:opacity-65">
            {status === "submitting" ? "Submitting…" : "Submit Enquiry"}
            <Send className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </form>
    </div>
  );
}
