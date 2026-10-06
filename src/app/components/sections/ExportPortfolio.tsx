"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { company } from "../../data/company";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function ExportPortfolio() {
  const { exportPortfolio } = company;

  return (
    <section
      id="portfolio"
      className="relative border-t border-white/10 bg-zinc-950 px-6 py-20 md:py-28 lg:px-50"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={item}>
          <SectionHeading>{exportPortfolio.eyebrow}</SectionHeading>
        </motion.div>

        <motion.p
          variants={item}
          className="mb-12 max-w-2xl text-base leading-7 text-white/50 md:mb-16"
        >
          {exportPortfolio.description}
        </motion.p>

        <ul className="grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:grid-cols-3 lg:grid-cols-4">
          {exportPortfolio.items.map((label, i) => (
            <motion.li
              key={label}
              variants={item}
              className="group flex min-h-28 cursor-default flex-col justify-between bg-zinc-950 p-5 transition-colors duration-300 hover:bg-white md:p-6"
            >
              <span className="text-xs tabular-nums tracking-[0.3em] text-white/30 transition-colors duration-300 group-hover:text-zinc-950/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-6 text-sm font-medium text-white/70 transition-colors duration-300 group-hover:text-zinc-950">
                {label}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}