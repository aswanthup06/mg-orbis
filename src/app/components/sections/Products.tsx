"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const EASE = [0.22, 1, 0.36, 1] as const;

const CATALOG_URL = "/MG_ORBIS_Catalogue.pdf";

// Placeholder data. Replace names, copy and images.
// Later you can move this into company.ts as `company.products`.
const products = [
  {
    name: "White Premium Designs",
    category: "T-Shirt",
    description: "Clean, refined styles designed for contemporary fashion collections.",
    image: "/design/t design (3).webp",
  },
  {
    name: "Black Premium Designs",
    category: "T-Shirt",
    description: "Bold, versatile styles crafted for modern streetwear collections.",
    image: "/design/t design (1).webp",
  },
  {
    name: "White — Minimal Statement",
    category: "T-Shirt",
    description: "Clean artistic graphics designed for modern premium fashion collections.",
    image: "/design/t design (2).webp",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

function CatalogLabel() {
  return (
    <>
      <span>Download Catalog</span>
      <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
    </>
  );
}

function CatalogButton() {
  return (
    <a
      href={CATALOG_URL}
      download="MG_ORBIS_Catalogue.pdf"
      aria-label="Download MG Orbis catalogue (PDF)"
      className="group relative inline-flex h-9 cursor-pointer items-center overflow-hidden border border-white bg-white px-4 text-xs font-medium tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 active:scale-[0.98] sm:h-12 sm:px-6 sm:text-sm"
    >
      {/* fill */}
      <span
        aria-hidden="true"
        className="absolute inset-0 translate-y-full bg-zinc-950 transition-transform duration-300 ease-out group-hover:translate-y-0"
      />

      <span className="relative flex items-center">
        {/* default layer */}
        <span className="flex items-center gap-2 text-zinc-950 transition-transform duration-300 ease-out group-hover:-translate-y-[200%] sm:gap-3">
          <CatalogLabel />
        </span>

        {/* hover layer */}
        <span
          aria-hidden="true"
          className="absolute inset-0 flex translate-y-[200%] items-center gap-2 text-white transition-transform duration-300 ease-out group-hover:translate-y-0 sm:gap-3"
        >
          <CatalogLabel />
        </span>
      </span>
    </a>
  );
}

export default function Products() {
  const enquire = () =>
    window.dispatchEvent(new Event("open-contact-modal"));

  return (
    <section
      id="products"
      className="relative border-t border-white/10 bg-zinc-950 px-6 py-20 md:py-28 lg:px-50"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="mb-14 flex flex-col items-start gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.div variants={item}>
              <SectionHeading>Our Products</SectionHeading>
            </motion.div>

            <motion.h2
              variants={item}
              className="max-w-4xl text-2xl font-light leading-snug tracking-tight text-white/90 md:text-3xl lg:text-4xl"
            >
              Quality goods from India, ready for global markets.
            </motion.h2>
          </div>

          <motion.div variants={item} className="shrink-0">
            <CatalogButton />
          </motion.div>
        </div>

        <ul className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.li
              key={p.name}
              variants={item}
              className="group flex flex-col bg-zinc-950 transition-colors duration-300 hover:bg-white/[0.03]"
            >
              {/* image */}
              <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 28vw, (min-width: 768px) 45vw, 100vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>

              {/* content */}
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/30">
                  <span className="tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{p.category}</span>
                </div>

                <h3 className="mt-6 text-lg font-medium text-white">
                  {p.name}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-7 text-white/50">
                  {p.description}
                </p>

                <button
                  type="button"
                  onClick={enquire}
                  aria-label={`Enquire about ${p.name}`}
                  className="mt-8 inline-flex w-fit cursor-pointer items-center gap-2 border-b border-white/20 pb-1 text-sm text-white/70 transition-colors duration-300 hover:border-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                >
                  Enquire
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}