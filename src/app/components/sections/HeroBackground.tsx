"use client";

import { motion, useReducedMotion } from "framer-motion";

type Point = { x: number; y: number };

const HUB: Point = { x: 400, y: 400 };

const NODES: Point[] = [
  { x: 130, y: 190 },
  { x: 250, y: 90 },
  { x: 610, y: 110 },
  { x: 700, y: 260 },
  { x: 690, y: 560 },
  { x: 520, y: 700 },
  { x: 220, y: 650 },
  { x: 100, y: 440 },
];

function arc(a: Point, b: Point) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const k = 0.22;
  const cx = mx - (b.y - a.y) * k;
  const cy = my + (b.x - a.x) * k;
  return `M${a.x},${a.y} Q${cx},${cy} ${b.x},${b.y}`;
}

const circlePath = (r: number) =>
  `M${HUB.x - r},${HUB.y} a${r},${r} 0 1,0 ${r * 2},0 a${r},${r} 0 1,0 ${-r * 2},0`;

export default function HeroBackground() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-zinc-950">
      {/* grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 60% 50%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 60% 50%, black, transparent)",
        }}
      />

      {/* drifting glows */}
      <motion.div
        className="absolute -right-40 top-1/4 h-[480px] w-[480px] rounded-full bg-blue-500/20 blur-3xl"
        animate={reduce ? undefined : { x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 h-[360px] w-[360px] rounded-full bg-indigo-500/15 blur-3xl"
        animate={reduce ? undefined : { x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* network */}
      <svg
        viewBox="0 0 800 800"
        fill="none"
        className="absolute right-[-35%] top-1/2 w-[900px] max-w-none -translate-y-1/2 opacity-50 sm:right-[-15%] lg:right-0 lg:w-[58%] lg:opacity-100"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 30%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 30%)",
        }}
      >
        {/* rings */}
        {[120, 220, 320].map((r, i) => (
          <circle
            key={r}
            cx={HUB.x}
            cy={HUB.y}
            r={r}
            stroke="white"
            strokeOpacity={0.12 - i * 0.025}
            strokeDasharray={i === 1 ? "2 10" : i === 2 ? "1 6" : undefined}
          >
            {!reduce && i > 0 && (
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`${i % 2 ? 0 : 360} ${HUB.x} ${HUB.y}`}
                to={`${i % 2 ? 360 : 0} ${HUB.x} ${HUB.y}`}
                dur={`${50 + i * 20}s`}
                repeatCount="indefinite"
              />
            )}
          </circle>
        ))}

        {/* orbiting dots */}
        {!reduce &&
          [
            { r: 120, dur: 14 },
            { r: 220, dur: 26 },
            { r: 320, dur: 40 },
          ].map(({ r, dur }) => (
            <circle key={r} r="2.5" fill="white" fillOpacity="0.7">
              <animateMotion dur={`${dur}s`} repeatCount="indefinite" path={circlePath(r)} />
            </circle>
          ))}

        {/* routes */}
        {NODES.map((n, i) => {
          const d = arc(HUB, n);
          return (
            <g key={i}>
              <motion.path
                d={d}
                stroke="white"
                strokeOpacity={0.3}
                strokeWidth={1}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.6,
                  delay: 0.8 + i * 0.18,
                  ease: "easeInOut",
                }}
              />

              {!reduce && (
                <circle r="3" fill="#93c5fd">
                  <animateMotion
                    dur={`${3.5 + (i % 3)}s`}
                    begin={`${2.5 + i * 0.4}s`}
                    repeatCount="indefinite"
                    path={d}
                  />
                </circle>
              )}

              {/* destination node */}
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + i * 0.18, duration: 0.5 }}
                style={{ transformOrigin: `${n.x}px ${n.y}px` }}
              >
                <circle cx={n.x} cy={n.y} r="4" fill="white" />
                {!reduce && (
                  <motion.circle
                    cx={n.x}
                    cy={n.y}
                    r="4"
                    stroke="white"
                    strokeOpacity={0.5}
                    animate={{ r: [4, 16], opacity: [0.6, 0] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      delay: i * 0.35,
                      ease: "easeOut",
                    }}
                  />
                )}
              </motion.g>
            </g>
          );
        })}

        {/* hub */}
        {!reduce &&
          [0, 1.2].map((delay) => (
            <motion.circle
              key={delay}
              cx={HUB.x}
              cy={HUB.y}
              r="8"
              stroke="#93c5fd"
              animate={{ r: [8, 70], opacity: [0.7, 0] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                delay,
                ease: "easeOut",
              }}
            />
          ))}
        <circle cx={HUB.x} cy={HUB.y} r="8" fill="white" />
        <circle cx={HUB.x} cy={HUB.y} r="3" fill="#09090b" />
      </svg>

      {/* bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent" />
    </div>
  );
}