import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/motion";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`group relative border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.04] md:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}