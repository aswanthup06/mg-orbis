"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { company } from "../../data/company";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const imageReveal = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 1.1, ease: EASE },
  },
};

export default function WhyChooseUs() {
  const { whyChooseUs } = company;

  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="why-us"
      className="relative border-t border-white/10 bg-zinc-950 px-6 py-20 md:py-28 lg:px-50"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 border border-white/10 lg:grid-cols-2"
      >
        {/* image */}
        <motion.div
          ref={imageRef}
          variants={imageReveal}
          className="group relative h-64 overflow-hidden border-b border-white/10 sm:h-80 lg:h-auto lg:min-h-[480px] lg:border-b-0 lg:border-r"
        >
          {/* parallax layer */}
          <motion.div style={{ y }} className="absolute -inset-[10%]">
            <Image
              src={whyChooseUs.image}
              alt={whyChooseUs.eyebrow}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </motion.div>

          {/* bottom gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/10 to-transparent" />

          {/* corner brackets */}
          <span className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l border-t border-white/60 transition-all duration-500 group-hover:left-6 group-hover:top-6 group-hover:h-6 group-hover:w-6" />
          <span className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b border-r border-white/60 transition-all duration-500 group-hover:bottom-6 group-hover:right-6 group-hover:h-6 group-hover:w-6" />

          {/* caption */}
          <div className="absolute bottom-0 left-0 flex items-center gap-3 p-5 md:p-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 bg-blue-400" />
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 sm:text-xs sm:tracking-[0.3em]">
              Made in India · Shipped Worldwide
            </span>
          </div>
        </motion.div>

        {/* content */}
        <div className="flex flex-col justify-center p-6 md:p-12 lg:p-14">
          <motion.div variants={item}>
            <SectionHeading className="mb-10">
              {whyChooseUs.eyebrow}
            </SectionHeading>
          </motion.div>

          <ul className="border-t border-white/10">
            {whyChooseUs.items.map((label, i) => (
              <motion.li
                key={label}
                variants={item}
                className="group relative cursor-default overflow-hidden border-b border-white/10 transition-colors duration-300 hover:bg-white/[0.03]"
              >
                {/* accent line */}
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-blue-400 transition-transform duration-300 ease-out group-hover:scale-y-100"
                />

             <div className="flex items-center gap-4 py-4 transition-transform duration-300 ease-out group-hover:translate-x-3">
  <span className="w-6 text-xs tabular-nums tracking-[0.3em] text-white/30 transition-colors duration-300 group-hover:text-blue-400">
    {String(i + 1).padStart(2, "0")}
  </span>
  <span className="flex-1 text-sm text-white/70 transition-colors duration-300 group-hover:text-white">
    {label}
  </span>
  <Check
    className="mr-3 h-4 w-4 text-blue-400 opacity-40 transition-opacity duration-300 group-hover:opacity-100"
    strokeWidth={2}
    aria-hidden="true"
  />
</div>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}