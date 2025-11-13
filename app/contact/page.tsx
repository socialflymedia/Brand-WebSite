"use client";

import React, { useState, useRef } from "react";
import { Check, Mail, Phone, X, ArrowRight } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  company?: string;
  message: string;
  phone?: string;
  website?: string; // honeypot
};

export default function ContactSection(): JSX.Element {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
    phone: "",
    website: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [failure, setFailure] = useState<string | null>(null);
  const messageMax = 2000;
  const formRef = useRef<HTMLFormElement | null>(null);

  const inputClass =
    "w-full mt-2 p-4 rounded-xl bg-black/30 border border-white/20 placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-inner";

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    // simple client-side email check — server should validate again
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email.";
    if ((form.message || "").trim().length < 12) e.message = "Message should be at least 12 characters.";
    if (form.phone && form.phone.length > 25) e.phone = "Phone number is too long.";
    return e;
  };

  const handleChange =
    (k: keyof FormState) => (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = ev.target.value;
      setForm((s) => ({ ...s, [k]: value }));
      setErrors((s) => ({ ...s, [k]: undefined }));
      // clear top-level messages on user input
      setSuccess(null);
      setFailure(null);
    };

  const focusFirstError = () => {
    if (!formRef.current) return;
    const el = formRef.current.querySelector<HTMLElement>(".input--error, [aria-invalid='true']");
    el?.focus();
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setSuccess(null);
    setFailure(null);

    // honeypot anti-spam
    if (form.website && form.website.trim() !== "") {
      // silently ignore/hard fail
      setFailure("Failed to send message. Please try again.");
      return;
    }

    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      setTimeout(focusFirstError, 50);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // server should also remove honeypot and revalidate
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone?.trim() || undefined,
          company: form.company?.trim() || undefined,
          message: form.message.trim(),
        }),
      });

      // safe parse
      const text = await res.text().catch(() => "");
      let data: any = null;
      try {
        data = text ? JSON.parse(text) : null;
      } catch {
        data = null;
      }

      if (!res.ok) {
        // don't leak internal errors to user
        const msg = data?.message || `Request failed (${res.status}).`;
        throw new Error(msg);
      }

      setSuccess("Thanks — your message has been sent. We'll get back to you shortly.");
      setForm({ name: "", email: "", company: "", message: "", phone: "", website: "" });
      setErrors({});
    } catch (err: any) {
      console.error("Contact form error:", err);
      setFailure(
        typeof err?.message === "string"
          ? err.message
          : "Something went wrong. Please try again later or email hello@yourdomain.com"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full py-12">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-orange-900/20 to-black pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left Info */}
          <aside className="rounded-3xl p-8 md:p-10 bg-white/6 backdrop-blur-md border border-white/10 shadow-lg flex flex-col justify-between overflow-hidden">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold mb-5 shadow-md">
                <Mail className="w-4 h-4" aria-hidden="true" /> Contact Sales
              </span>

              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
                Let’s build something{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  remarkable
                </span>
              </h3>

              <p className="text-white/70 mb-6 text-base md:text-lg leading-relaxed">
                Share your idea or project — we’ll turn it into reality with speed, quality, and thoughtful design.
              </p>

              <div className="grid grid-cols-1 gap-4 mt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-orange-500/20 border border-orange-400/30 flex-shrink-0">
                    <Phone className="w-5 h-5 text-orange-300" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Sales Inquiries</p>
                    <a href="tel:+9411978307" className="text-white/60 text-sm hover:underline">
                      +91 81260 40011
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-orange-500/20 border border-orange-400/30 flex-shrink-0">
                    <Mail className="w-5 h-5 text-orange-300" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a href="mailto:hello@yourdomain.com" className="text-white/60 text-sm hover:underline">
                      hello@yourdomain.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <footer className="mt-6 text-sm text-white/60">
              <div>We typically reply within 24 hours.</div>
            </footer>
          </aside>

          {/* Right Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-3xl p-6 md:p-10 bg-white/6 border border-white/10 backdrop-blur-md shadow-lg overflow-hidden"
            aria-describedby="contact-form-desc"
          >
            <div id="contact-form-desc" className="sr-only">
              Contact form — required fields: name, email, message.
            </div>

            {/* name */}
            <div className="mb-4">
              <label htmlFor="name" className="text-sm text-white/70">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange("name")}
                className={`${inputClass} ${errors.name ? "input--error ring-2 ring-rose-400" : ""}`}
                placeholder="Jane Doe"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                maxLength={80}
              />
              {errors.name && (
                <div id="name-error" role="alert" className="mt-2 text-rose-400 text-sm">
                  {errors.name}
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* email */}
              <div>
                <label htmlFor="email" className="text-sm text-white/70">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  className={`${inputClass} ${errors.email ? "input--error ring-2 ring-rose-400" : ""}`}
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <div id="email-error" role="alert" className="mt-2 text-rose-400 text-sm">
                    {errors.email}
                  </div>
                )}
              </div>

              {/* phone */}
              <div>
                <label htmlFor="phone" className="text-sm text-white/70">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  className={`${inputClass} ${errors.phone ? "input--error ring-2 ring-rose-400" : ""}`}
                  placeholder="+91 98X-XXX-XXXX"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  maxLength={25}
                />
                {errors.phone && (
                  <div id="phone-error" role="alert" className="mt-2 text-rose-400 text-sm">
                    {errors.phone}
                  </div>
                )}
              </div>
            </div>

            {/* company */}
            <div className="mb-4">
              <label htmlFor="company" className="text-sm text-white/70">
                Company (optional)
              </label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                value={form.company}
                onChange={handleChange("company")}
                className={inputClass}
                placeholder="Acme Inc."
                maxLength={120}
              />
            </div>

            {/* message */}
            <div className="mb-4">
              <label htmlFor="message" className="text-sm text-white/70 flex items-center justify-between">
                <span>Message</span>
                <span className="text-xs text-white/50">{form.message.length}/{messageMax}</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange("message")}
                className={`${inputClass} min-h-[140px] resize-none ${errors.message ? "input--error ring-2 ring-rose-400" : ""}`}
                placeholder="Tell us about your project..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                maxLength={messageMax}
              />
              {errors.message && (
                <div id="message-error" role="alert" className="mt-2 text-rose-400 text-sm">
                  {errors.message}
                </div>
              )}
            </div>

            {/* honeypot - hidden */}
            <div className="sr-only">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                value={form.website}
                onChange={handleChange("website")}
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
              />
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between gap-4 mt-6">
              <div className="text-sm text-white/60 hidden sm:block">We usually respond in under 24 hours.</div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold shadow-lg transform transition-transform duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                aria-busy={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            {/* feedback */}
            <div className="mt-5" aria-live="polite">
              {success && (
                <div className="flex items-center gap-3 text-green-300 bg-white/6 p-3 rounded-xl border border-green-400/20">
                  <Check className="w-5 h-5" aria-hidden="true" /> <span>{success}</span>
                </div>
              )}
              {failure && (
                <div className="flex items-center gap-3 text-rose-300 bg-white/6 p-3 rounded-xl border border-rose-400/20">
                  <X className="w-5 h-5" aria-hidden="true" /> <span>{failure}</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
