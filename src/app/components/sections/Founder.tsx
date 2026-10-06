"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactTrigger from "../ui/ContactTrigger";
import SectionHeading from "../ui/SectionHeading";
import { company } from "../../data/company";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Founder() {
  const { founder } = company;

  return (
    <section
      id="founder"
      className="relative border-t border-white/10 bg-zinc-950 px-6 py-20 md:py-28 lg:px-50"
    >
      <div className="group relative min-h-[460px] overflow-hidden border border-white/10 md:min-h-[520px]">
        {/* image */}
        <Image
          src={founder.image}
          alt={`${founder.name}, ${founder.role}`}
          fill
          sizes="(min-width: 1024px) 80vw, 100vw"
          className="object-cover grayscale transition duration-700 ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
        />

        {/* overlays */}
        <div className="absolute inset-0 bg-zinc-950/60 transition-opacity duration-700 group-hover:opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent" />

        {/* content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:w-2/3 lg:p-16"
        >
          <motion.div variants={item}>
            <SectionHeading>Founder</SectionHeading>
          </motion.div>

          <motion.blockquote
            variants={item}
            className="text-xl font-light leading-snug tracking-tight text-white md:text-2xl lg:text-3xl"
          >
            &ldquo;{founder.quote}&rdquo;
          </motion.blockquote>

          <motion.p
            variants={item}
            className="mt-6 text-sm text-white/60"
          >
            <span className="font-medium text-white">{founder.name}</span>
            <span className="mx-2 text-white/30">/</span>
            {founder.role}
          </motion.p>

          <motion.div variants={item} className="mt-8">
            <ContactTrigger />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}