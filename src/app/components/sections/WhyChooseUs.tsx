"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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

export default function WhyChooseUs() {
  const { whyChooseUs } = company;

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
          variants={item}
          className="group relative h-64 overflow-hidden border-b border-white/10 sm:h-80 lg:h-auto lg:min-h-[480px] lg:border-b-0 lg:border-r"
        >
          <Image
            src={whyChooseUs.image}
            alt={whyChooseUs.eyebrow}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover grayscale transition duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-zinc-950/40 transition-opacity duration-700 group-hover:opacity-0" />
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
                className="group flex cursor-default items-center gap-4 border-b border-white/10 py-4 transition-colors duration-300 hover:bg-white/[0.03]"
              >
                <span className="w-6 text-xs tabular-nums tracking-[0.3em] text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-sm text-white/70 transition-colors duration-300 group-hover:text-white">
                  {label}
                </span>
                <Check
                  className="h-4 w-4 text-blue-400 opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}