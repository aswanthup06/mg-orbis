"use client";

import { motion } from "framer-motion";
import { company } from "../../data/company";

const socialClass =
  "flex h-9 w-9 items-center justify-center border border-white/10 text-white/50 transition-colors duration-300 hover:border-white hover:bg-white hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full border-t border-white/10 bg-zinc-950 px-6 lg:px-50"
    >
      <div className="flex flex-col items-start gap-6 py-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-2">
          <a
            href={company.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={socialClass}
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>

          <a
            href={company.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={socialClass}
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9v9" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.5v.01" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 18v-5a3 3 0 0 1 6 0v5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v9" />
            </svg>
          </a>
        </div>

        <p>
          Designed &amp; Developed by{" "}
          <a
            href={company.social.developer}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 underline underline-offset-4 transition-colors duration-300 hover:text-white"
          >
            Aswanth Up
          </a>
        </p>
      </div>
    </motion.footer>
  );
}