"use client";

import { motion } from "framer-motion";
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

export default function Process() {
  const { process, values } = company;

  return (
    <section
      id="process"
      className="relative border-t border-white/10 bg-zinc-950 px-6 py-20 md:py-28 lg:px-50"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24"
      >
        {/* process */}
        <div>
          <motion.div variants={item}>
            <SectionHeading className="mb-10">{process.eyebrow}</SectionHeading>
          </motion.div>

          <ol className="border-t border-white/10">
            {process.items.map((label, i) => (
              <motion.li
                key={label}
                variants={item}
                className="group flex cursor-default items-center gap-4 border-b border-white/10 py-4 transition-colors duration-300 hover:bg-white/[0.03]"
              >
                <span className="w-6 text-xs tabular-nums tracking-[0.3em] text-white/30 transition-colors duration-300 group-hover:text-blue-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-white/70 transition-colors duration-300 group-hover:text-white">
                  {label}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* values */}
        <div>
          <motion.div variants={item}>
            <SectionHeading className="mb-10">{values.eyebrow}</SectionHeading>
          </motion.div>

          <ul className="grid grid-cols-2 gap-px border border-white/10 bg-white/10">
            {values.items.map((label) => (
              <motion.li
                key={label}
                variants={item}
                className="group flex min-h-20 cursor-default items-center bg-zinc-950 p-5 transition-colors duration-300 hover:bg-white"
              >
                <span className="text-sm font-medium text-white/70 transition-colors duration-300 group-hover:text-zinc-950">
                  {label}
                </span>
              </motion.li>
            ))}
          </ul>

          <motion.p
            variants={item}
            className="mt-8 max-w-md border-l border-blue-400 pl-5 text-sm leading-7 text-white/50"
          >
            {values.description}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}