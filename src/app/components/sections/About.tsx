"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { company } from "../../data/company";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function About() {
  const { about } = company;

  return (
    <section
      id="about"
      className="relative border-t border-white/10 bg-zinc-950 px-6 py-20 md:py-28 lg:px-50"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div variants={item}>
          <SectionHeading>{about.eyebrow}</SectionHeading>
        </motion.div>

        <motion.h2
          variants={item}
          className="mb-14 max-w-4xl text-2xl font-light leading-snug tracking-tight text-white/90 md:mb-20 md:text-3xl lg:text-4xl"
        >
          {about.description}
        </motion.h2>

        {/* mission / vision */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 border border-white/10 md:grid-cols-2 md:divide-x md:divide-white/10"
        >
          {[
            { n: "01", ...about.mission },
            { n: "02", ...about.vision },
          ].map((block, i) => (
            <div
              key={block.title}
              className={`group p-6 transition-colors duration-300 hover:bg-white/[0.02] md:p-10 ${
                i > 0 ? "border-t border-white/10 md:border-t-0" : ""
              }`}
            >
              <span className="text-xs tabular-nums tracking-[0.3em] text-white/30">
                {block.n}
              </span>
              <h3 className="mt-6 text-lg font-medium text-white">
                {block.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-white/50">
                {block.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* what we do */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 border border-t-0 border-white/10 lg:grid-cols-[1fr_2fr]"
        >
          <div className="p-6 md:p-10">
            <span className="text-xs tabular-nums tracking-[0.3em] text-white/30">
              03
            </span>
            <h3 className="mt-6 text-lg font-medium text-white">
              {about.whatWeDo.title}
            </h3>
          </div>

          <ul className="flex flex-wrap content-start gap-2 border-t border-white/10 p-6 md:p-10 lg:border-l lg:border-t-0">
            {about.whatWeDo.items.map((label) => (
              <li
                key={label}
                className="border border-white/10 px-3 py-1.5 text-xs text-white/50 transition-colors duration-200 hover:border-white hover:bg-white hover:text-zinc-950 md:px-4"
              >
                {label}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}