import Image from "next/image";
import { motion } from "framer-motion";
import ContactTrigger from "../ui/ContactTrigger";
import { company } from "../../data/company";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-0 z-50  border-white/10 px-6"
    >
      <div className="flex h-20 items-center justify-between">
        <Image
          src={company.logo}
          alt={company.name}
          width={100}
          height={100}
          priority
          className="h-10 w-auto object-contain md:h-12"
        />
        <ContactTrigger />
      </div>
    </motion.nav>
  );
}