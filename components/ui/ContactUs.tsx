"use client";

import React, { useState } from "react";
import { Check, Mail, Phone, X, ArrowRight } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  company?: string;
  message: string;
  phone?: string;
};

export default function ContactSection(): JSX.Element {
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", message: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [failure, setFailure] = useState<string | null>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.match(/^\S+@\S+\.\S+$/)) e.email = "Please enter a valid email.";
    if (form.message.trim().length < 12) e.message = "Message should be at least 12 characters.";
    return e;
  };

  const handleChange = (k: keyof FormState) => (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [k]: ev.target.value });
    setErrors({ ...errors, [k]: "" });
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setSuccess(null);
    setFailure(null);

    const e = validate();
    if (Object.keys(e).length) return setErrors(e);

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Failed to send message");

      setSuccess("Thanks — your message has been sent. We'll get back to you shortly.");
      setForm({ name: "", email: "", company: "", message: "", phone: "" });
    } catch (err: any) {
      setFailure(err.message || "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full py-24">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-orange-900/30 to-black" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* Left Info */}
          <div className="rounded-3xl p-10 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold mb-6 shadow-lg shadow-orange-500/30">
                <Mail className="w-5 h-5" /> Contact Sales
              </span>

              <h3 className="text-4xl font-extrabold text-white mb-4 leading-tight">
                Let’s build something{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">remarkable</span>
              </h3>
              <p className="text-white/70 mb-6 text-lg leading-relaxed">
                Share your idea or project with us. We’ll turn it into reality with speed, quality, and innovation.
              </p>

              <div className="grid grid-cols-1 gap-4 mt-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-orange-500/20 border border-orange-400/30">
                    <Phone className="w-5 h-5 text-orange-300" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Sales Inquiries</p>
                    <p className="text-white/60 text-sm">+91 9411978307</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-orange-500/20 border border-orange-400/30">
                    <Mail className="w-5 h-5 text-orange-300" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-white/60 text-sm">info@socialflynetworks.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form onSubmit={handleSubmit} className="rounded-3xl p-10 bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl">
            {/* Inputs */}
            <div className="mb-6">
              <label className="text-sm text-white/70">Full name</label>
              <input
                value={form.name}
                onChange={handleChange("name")}
                className="w-full mt-2 p-4 rounded-xl bg-black/30 border border-white/20 placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-inner"
                placeholder="Jane Doe"
              />
              {errors.name && <div className="mt-2 text-rose-400 text-sm">{errors.name}</div>}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input
                  value={form.email}
                  onChange={handleChange("email")}
                  className="w-full mt-2 p-4 rounded-xl bg-black/30 border border-white/20 placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-inner"
                  placeholder="you@company.com"
                />
                {errors.email && <div className="mt-2 text-rose-400 text-sm">{errors.email}</div>}
              </div>
              <div>
                <label className="text-sm text-white/70">Phone</label>
                <input
                  value={form.phone}
                  onChange={handleChange("phone")}
                  className="w-full mt-2 p-4 rounded-xl bg-black/30 border border-white/20 placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-inner"
                  placeholder="+91 98X-XXX-XXXX"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="text-sm text-white/70">Company</label>
              <input
                value={form.company}
                onChange={handleChange("company")}
                className="w-full mt-2 p-4 rounded-xl bg-black/30 border border-white/20 placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-inner"
                placeholder="Acme Inc."
              />
            </div>

            <div className="mb-6">
              <label className="text-sm text-white/70">Message</label>
              <textarea
                value={form.message}
                onChange={handleChange("message")}
                className="w-full mt-2 p-4 min-h-[150px] rounded-xl bg-black/30 border border-white/20 placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-inner resize-none"
                placeholder="Tell us about your project..."
              />
              {errors.message && <div className="mt-2 text-rose-400 text-sm">{errors.message}</div>}
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between mt-10">
              <div className="text-sm text-white/60">We usually respond in under 24 hours.</div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold shadow-xl shadow-orange-600/30 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/40 transition-transform duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Feedback */}
            <div className="mt-6">
              {success && (
                <div className="flex items-center gap-3 text-green-300 bg-white/10 p-3 rounded-xl border border-green-400/30">
                  <Check className="w-5 h-5" /> <span>{success}</span>
                </div>
              )}
              {failure && (
                <div className="flex items-center gap-3 text-rose-300 bg-white/10 p-3 rounded-xl border border-rose-400/30">
                  <X className="w-5 h-5" /> <span>{failure}</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
