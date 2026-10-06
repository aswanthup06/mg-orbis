"use client";

import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Loader2, Mail, Phone, Send, X } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { company } from "../../data/company";

type Status = "idle" | "loading" | "success" | "error";

const EASE = [0.22, 1, 0.36, 1] as const;

const fieldClass =
  "w-full border border-white/10 bg-transparent px-4 py-3 text-sm text-white outline-none transition-colors duration-200 placeholder:text-white/30 hover:border-white/30 focus:border-white";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const open = () => {
      setIsOpen(true);
      setStatus("idle");
    };

    window.addEventListener("open-contact-modal", open);
    return () => window.removeEventListener("open-contact-modal", open);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(company.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
      setCopied(false);
    }
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") return;

    // Save the form BEFORE await
    const form = event.currentTarget;

    setStatus("loading");

    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "Failed to send message.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setStatus("idle"), 250);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/80 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="relative max-h-[92dvh] w-full max-w-lg overflow-y-auto border border-white/10 bg-zinc-950 p-6 md:p-10"
          >
            {/* close */}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close contact form"
              className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center border border-white/10 text-white/50 transition-colors duration-300 hover:border-white hover:bg-white hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            {/* header */}
            <div className="mb-8 pr-10">
              <SectionHeading>Let&apos;s connect</SectionHeading>

              <h2
                id="contact-title"
                className="text-3xl font-light tracking-tight text-white"
              >
                Start a conversation
              </h2>

              <p className="mt-3 text-sm leading-7 text-white/50">
                Tell us about your requirements and we&apos;ll get back to you.
              </p>
            </div>

            {/* contact info */}
            <div className="mb-8 divide-y divide-white/10 border border-white/10">
              <div className="flex items-center gap-4 p-4">
                <Phone
                  className="h-4 w-4 shrink-0 text-white/40"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                    Phone
                  </p>
                  <p className="mt-1 text-sm text-white/80">+91 7902578771</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4">
                <Mail
                  className="h-4 w-4 shrink-0 text-white/40"
                  aria-hidden="true"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                    Email
                  </p>
                  <p className="mt-1 truncate text-sm text-white/80">
                    {company.email}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label={copied ? "Email copied" : "Copy email address"}
                  title={copied ? "Copied" : "Copy email"}
                  className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center border border-white/10 text-white/50 transition-colors duration-300 hover:border-white hover:bg-white hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {copied ? (
                    <Check className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Copy className="h-4 w-4" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            {/* success / form */}
            {status === "success" ? (
              <div className="border border-white/10 p-8 text-center">
                <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center border border-blue-400 text-blue-400">
                  <Check className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3 className="text-lg font-light text-white">
                  Message sent successfully
                </h3>

                <p className="mt-2 text-sm text-white/50">
                  Thank you for contacting MG Orbis.
                </p>

                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-6 h-11 cursor-pointer border border-white/10 px-6 text-sm font-medium text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-3">
                <label className="sr-only" htmlFor="cm-name">
                  Your name
                </label>
                <input
                  id="cm-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className={fieldClass}
                />

                <label className="sr-only" htmlFor="cm-email">
                  Email address
                </label>
                <input
                  id="cm-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Email address"
                  className={fieldClass}
                />

                <label className="sr-only" htmlFor="cm-company">
                  Company
                </label>
                <input
                  id="cm-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Company"
                  className={fieldClass}
                />

                <label className="sr-only" htmlFor="cm-message">
                  Message
                </label>
                <textarea
                  id="cm-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your requirement"
                  className={`${fieldClass} resize-none`}
                />

                {status === "error" && (
                  <p
                    role="alert"
                    className="border-l border-red-400 pl-4 text-sm leading-7 text-red-400"
                  >
                    Something went wrong. Please try again or email{" "}
                    <a
                      href={`mailto:${company.email}`}
                      className="underline underline-offset-4"
                    >
                      {company.email}
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="!mt-6 flex h-12 w-full cursor-pointer items-center justify-center gap-2 border border-white bg-white text-sm font-medium tracking-tight text-zinc-950 transition-colors duration-300 hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2
                        className="h-4 w-4 animate-spin"
                        aria-hidden="true"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden="true" />
                      Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}