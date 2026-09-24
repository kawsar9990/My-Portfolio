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
import { useMountedTheme } from "@/hook/useMountedTheme";

export default function ContactSection() {
  const { isDarkMode } = useMountedTheme();
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
      <section
        className={`py-12 px-4 flex flex-col items-center justify-center min-h-[300px] transition-colors duration-300 ${
          isDarkMode ? "bg-[#141C2B] text-white" : "bg-[#FFFFFF] text-gray-900"
        }`}
      >
        <div className="text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <FaCheckSquare className="text-2xl text-green-500" />
            <h2 className="text-2xl font-bold text-green-500">
              Message sent successfully!
            </h2>
          </div>
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Thanks for reaching out. I&apos;ll get back to you soon.
          </p>

          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 text-violet-500 cursor-pointer underline text-xs font-medium hover:text-violet-400 transition block mx-auto"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }


  const cardBgClass = isDarkMode
    ? "bg-[#111827] border border-gray-800 text-gray-100"
    : "bg-white border border-gray-100 text-gray-900";

  const inputClass = `w-full px-3 text-xs rounded-md outline-none transition-colors focus:border-2 focus:border-violet-600 ${
    isDarkMode
      ? "bg-[#1F2937] border border-gray-700 text-white placeholder-gray-400"
      : "bg-gray-100 border border-gray-200 text-gray-900 placeholder-gray-500"
  }`;

  const socialIconClass = `w-8 h-8 flex items-center justify-center rounded-full transition text-xs ${
    isDarkMode
      ? "bg-gray-800 text-violet-400 hover:bg-violet-600 hover:text-white"
      : "bg-gray-100 text-violet-600 hover:bg-violet-600 hover:text-white"
  }`;

  return (
    <section
      className={`py-8 transition-colors duration-300 ${
        isDarkMode ? "bg-[#141C2B]" : "bg-[#FFFFFF]"
      }`}
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-10 md:mb-16">
       <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#9333ea] tracking-tight">
          Contact Me
        </h2>
        </div>
       

        <div className="grid lg:grid-cols-[280px_1fr] gap-4 px-5">

          <div className="space-y-3">
            <div className={`rounded-lg shadow-sm p-4 ${cardBgClass}`}>
              <h3 className="text-base font-bold text-violet-600 mb-2">
                Quick Response
              </h3>
              <p
                className={`text-xs mb-3 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I typically respond within 24 hours during business days.
              </p>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center gap-2 text-violet-500">
                  <FaEnvelope className="shrink-0" />
                  <span className="truncate">kawsar158464@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-violet-500">
                  <FaWhatsapp className="shrink-0" />
                  <span>+880 1602084187</span>
                </div>
              </div>
            </div>

            <div className={`rounded-lg shadow-sm p-4 ${cardBgClass}`}>
              <h3 className="text-base font-bold text-violet-600 mb-2">
                Availability
              </h3>
              <p className="text-green-500 font-medium text-xs mb-1.5">
                ● Available
              </p>
              <div
                className={`flex items-center gap-2 text-xs ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <FaClock className="shrink-0" />
                <span>Sat - Fri, 9:00 AM - 6:00 PM (GMT +6)</span>
              </div>
            </div>

            <div className={`rounded-lg shadow-sm p-4 ${cardBgClass}`}>
              <h3 className="text-base font-bold text-violet-600 mb-3">
                Follow Me
              </h3>
              <div className="flex gap-2">
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
                <a
                  href="https://www.facebook.com/profile.php?id=61594494171535"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialIconClass}
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>

   
          <div className={`rounded-lg shadow-sm p-5 ${cardBgClass}`}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1 text-xs font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className={`h-9 ${inputClass}`}
                  />
                </div>

                <div>
                  <label className="block mb-1 text-xs font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    onKeyDown={handleEmailKeyDown}
                    placeholder="Enter your email"
                    className={`h-9 ${inputClass}`}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1 text-xs font-medium">
                    Phone Number
                  </label>
                  <input
                    ref={phoneInputRef}
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    className={`h-9 ${inputClass}`}
                  />
                </div>

                <div>
                  <label className="block mb-1 text-xs font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="What's this about?"
                    className={`h-9 ${inputClass}`}
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-xs font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Write your message..."
                  className={`py-2 ${inputClass}`}
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full h-9 cursor-pointer rounded-md bg-gradient-to-r from-violet-700 to-fuchsia-600 text-white font-semibold text-xs hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSending ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {errorMessage && (
                <p className="text-red-500 text-xs text-center mt-2">
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