import type { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionHeading({
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-6 flex items-center gap-4 ${className}`}>
      <motion.span
        aria-hidden="true"
        initial={{ width: 0 }}
        whileInView={{ width: 32 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="block h-px bg-blue-400"
      />
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
        {children}
      </p>
    </div>
  );
}