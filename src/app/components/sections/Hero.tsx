"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import Navbar from "../layout/Navbar";
import ContactTrigger from "../ui/ContactTrigger";
import HeroBackground from "./HeroBackground";
import { company } from "../../data/company";

const EASE = [0.22, 1, 0.36, 1] as const;

function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const count = useMotionValue(0);

  const target = match ? parseFloat(match[2]) : 0;
  const decimals = match?.[2].includes(".") ? match[2].split(".")[1].length : 0;
  const display = useTransform(count, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (!inView || !match) return;
    if (reduce) {
      count.set(target);
      return;
    }
    const controls = animate(count, target, {
      duration: 2,
      delay: 0.9,
      ease: EASE,
    });
    return () => controls.stop();
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!match) return <span>{value}</span>;

  return (
    <span ref={ref}>
      {match[1]}
      <motion.span>{display}</motion.span>
      {match[3]}
    </span>
  );
}

function RevealLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center overflow-hidden"
    >
      <HeroBackground />
      <Navbar />

      <div className="relative z-10 mx-auto w-full px-6 pt-32 pb-24 lg:px-50">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-6 inline-flex max-w-full items-center gap-2 border border-white/10 bg-white/[0.03] px-2.5 py-1 backdrop-blur-sm sm:mb-8 sm:gap-3 sm:px-3 sm:py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0 sm:h-2 sm:w-2">
              <span className="absolute inline-flex h-full w-full animate-ping bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-full w-full bg-blue-400" />
            </span>
            <span className="truncate text-[10px] font-medium uppercase tracking-[0.18em] text-white/60 sm:text-xs sm:tracking-[0.3em]">
              {company.hero.badge}
            </span>
          </motion.div>

          <h1 className="font-semibold tracking-tight text-white text-4xl md:text-5xl lg:text-7xl">
            <RevealLine delay={0.15}>Connecting</RevealLine>
            <RevealLine delay={0.3}>
              <motion.span
                className="bg-gradient-to-r from-white/40 via-white to-white/40 bg-[length:200%_100%] bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1.5,
                }}
              >
                India to the World.
              </motion.span>
            </RevealLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
            className="mt-8 max-w-2xl text-base leading-7 text-white/60 sm:text-lg"
          >
            <span className="hidden sm:inline">
              {company.hero.desktopDescription}
            </span>
            <span className="sm:hidden">{company.hero.mobileDescription}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
            className="mt-10"
          >
            <ContactTrigger />
          </motion.div>
        </div>

       <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
  className="mt-12 grid max-w-2xl grid-cols-3 border-t border-white/10 sm:mt-20"
>
  {company.hero.stats.map((stat, i) => (
    <div
      key={stat.label}
      className={`min-w-0 pt-4 sm:pt-6 ${
        i > 0 ? "border-l border-white/10 pl-3 sm:pl-6" : ""
      }`}
    >
      <p className="text-xl font-semibold tabular-nums text-white sm:text-3xl">
        <CountUp value={String(stat.number)} />
      </p>
      <p className="mt-1 text-[10px] uppercase leading-snug tracking-wide text-white/40 sm:text-xs sm:tracking-wider">
        {stat.label}
      </p>
    </div>
  ))}
</motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-6 z-10 hidden items-center gap-3 sm:flex lg:left-50"
      >
        <span className="relative block h-10 w-px overflow-hidden bg-white/15">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-white"
            animate={{ y: [-16, 40] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
