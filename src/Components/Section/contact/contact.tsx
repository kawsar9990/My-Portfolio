"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaWhatsapp,
  FaClock,
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaCheckSquare,
} from "react-icons/fa";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setErrorMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing!");
      setErrorMessage("Configuration missing. Please check env variables.");
      setIsSending(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setIsSending(false);
      setSubmitted(true);
      formRef.current.reset();
    } catch (err: unknown) {
      console.error("Email send failed:", err);
      setErrorMessage("Failed to send message. Please try again.");
      setIsSending(false);
    }
  };

  const handleEmailKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      phoneInputRef.current?.focus();
    }
  };

  if (submitted) {
    return (
      <section className="relative w-full py-16 md:py-20 px-4 flex flex-col items-center justify-center min-h-[350px] bg-slate-50 text-slate-900 dark:bg-[#141C2B] dark:text-white overflow-hidden">

        <div className="relative z-10 text-center p-8 bg-white/80 dark:bg-slate-900/70 rounded-2xl border border-indigo-200/80 dark:border-indigo-900/40 shadow-xl max-w-md w-full">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <FaCheckSquare className="text-3xl text-emerald-500" />
            <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              Message sent successfully!
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Thanks for reaching out. I&apos;ll get back to you soon.
          </p>

          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 text-indigo-600 dark:text-indigo-400 cursor-pointer underline text-xs font-semibold hover:text-violet-500 transition block mx-auto"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  const cardBgClass =
    "bg-white/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 text-slate-900 dark:text-slate-100 rounded-2xl shadow-sm";

  const inputClass =
    "w-full px-3.5 text-xs sm:text-sm rounded-xl outline-none transition-all duration-300 bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20";

  const socialIconClass =
    "w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-300 text-xs bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/70 dark:border-indigo-800/50 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 hover:text-white hover:border-transparent hover:scale-105 shadow-sm";

  return (
    <section className="relative w-full py-16 md:py-10 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#141C2B] font-sans antialiased overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/60 px-4 py-1.5 rounded-full mb-3 border border-indigo-200 dark:border-indigo-800">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-violet-400">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mt-3" />
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-6">

          <div className="space-y-4">
            <div className={`p-5 ${cardBgClass}`}>
              <h3 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-2 uppercase tracking-wide">
                Quick Response
              </h3>
              <p className="text-xs mb-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                I typically respond within 24 hours during business days.
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                  <FaEnvelope className="shrink-0 text-indigo-600 dark:text-indigo-400" />
                  <span className="truncate font-medium">kawsar158464@gmail.com</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                  <FaWhatsapp className="shrink-0 text-emerald-500" />
                  <span className="font-medium">+880 1602084187</span>
                </div>
              </div>
            </div>

            <div className={`p-5 ${cardBgClass}`}>
              <h3 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-2 uppercase tracking-wide">
                Availability
              </h3>
              <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-xs mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                <FaClock className="shrink-0 text-indigo-600 dark:text-indigo-400" />
                <span>Sat - Fri, 9:00 AM - 11:00 PM (GMT +6)</span>
              </div>
            </div>

            <div className={`p-5 ${cardBgClass}`}>
              <h3 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-3 uppercase tracking-wide">
                Follow Me
              </h3>
              <div className="flex gap-2.5">
                <a
                  href="https://web.facebook.com/programming.kawsar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialIconClass}
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.linkedin.com/in/kawsar-ahmed-2a466441b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialIconClass}
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/kawsar9990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialIconClass}
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className={`p-6 sm:p-8 ${cardBgClass}`}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className={`h-10 ${inputClass}`}
                  />
                </div>

                <div>
                  <label className="block mb-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    onKeyDown={handleEmailKeyDown}
                    placeholder="Enter your email"
                    className={`h-10 ${inputClass}`}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Phone Number
                  </label>
                  <input
                    ref={phoneInputRef}
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    className={`h-10 ${inputClass}`}
                  />
                </div>

                <div>
                  <label className="block mb-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="What's this about?"
                    className={`h-10 ${inputClass}`}
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message..."
                  className={`py-3 ${inputClass}`}
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full h-11 cursor-pointer rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-500/20 active:scale-[0.99] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {errorMessage && (
                <p className="text-red-500 text-xs text-center mt-2 font-medium">
                  {errorMessage}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}