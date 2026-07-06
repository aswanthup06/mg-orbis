"use client";
import { SiNormalizedotcss } from "react-icons/si";
import Image from "next/image";
import ContactButton from "./comp/ContactButton";
import { useState } from "react";
import Modal from "./comp/Modal";
import { motion } from "framer-motion";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const scaleOnHover = {
    whileHover: { scale: 1.02 },
    transition: { duration: 0.3 },
  };

  return (
    <div className="hide-scrollbar overflow-x-auto h-dvh">
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}></Modal>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-4 md:px-12 lg:px-24 xl:px-50 w-full absolute z-50 top-0 bg-white/10 backdrop-blur-sm md:bg-transparent"
        >
          <div className="flex w-full items-center justify-between px-4 py-1 md:py-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
             <Image
  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[90px] lg:h-[90px] object-contain"
  src="/images/logo.png"
  alt="logo"
  width={90}
  height={90}
  priority
/>
            </motion.div>
            <div>
              <ContactButton onClick={() => setIsOpen(true)} />
            </div>
          </div>
        </motion.nav>

        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/images/bg.jpg"
            alt=""
            width={1000}
            height={1000}
            className="w-full h-dvh object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 left-0 w-full h-full bg-black/10 backdrop-blur-sm"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute px-4 md:px-12 lg:px-24 xl:px-50 top-0 left-0 w-full h-full bg-black/10 flex flex-col justify-center items-center"
        >
          <div className="w-full max-w-6xl">
            <motion.h3
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4 text-blue-400 flex gap-2 items-center bg-black/20 w-fit px-3 py-1 backdrop-blur-2xl rounded-full shadow-lg text-sm"
            >
                 <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="w-2 h-2 bg-blue-500 rounded-full inline-block"
                ></motion.span>MG Orbis - Connecting India to Global
              Markets
            </motion.h3>

            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white font-extralight text-2xl sm:text-2xl md:text-3xl lg:text-4xl w-full lg:w-[80%] mb-10 leading-tight"
            >
              We are an India-based export company dedicated to connecting
              high-quality products with international markets. Our mission is
              to simplify global trade by providing reliable sourcing, quality
              assurance, and efficient logistics while building long-term
              partnerships based on trust and transparency.
            </motion.h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <ContactButton onClick={() => setIsOpen(true)} />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-8 md:gap-20 mt-10"
            >
              {[
                { number: "200+", label: "Happy Customers" },
                { number: "50+", label: "Countries Served" },
                { number: "99%", label: "Satisfaction Rate" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl md:text-3xl font-semibold text-white">
                    {stat.number}
                  </h2>
                  <h4 className="text-white/60 text-sm">{stat.label}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Learn About Us Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="px-4 md:px-12 lg:px-24 xl:px-50 py-16 md:py-20"
      >
      
        <div className="flex items-center gap-3 mb-6">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: 32 }}
              transition={{ duration: 0.5 }}
              className="w-1 bg-blue-500 rounded-full"
            ></motion.div>
            <h3 className="text-sm font-medium tracking-wider text-blue-400 uppercase">
            Learn About Us
            </h3>
          </div>

        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl lg:text-3xl w-full lg:w-[80%] mb-10 leading-tight font-extralight text-white/90"
        >
          Whether it is agricultural commodities, food products, textiles,
          consumer goods, or other export opportunities, we work closely with
          trusted suppliers to deliver products that meet international quality
          standards.
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Our Mission */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="group relative p-6 md:p-8 bg-black/60 backdrop-blur-sm border border-white/5 rounded-3xl hover:border-blue-400/40 transition-all duration-500 overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -top-20 -left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-all duration-700"
            ></motion.div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] to-transparent rounded-3xl"></div>
            <h3 className="text-lg font-medium text-white relative z-10 mb-2">
              Our Mission
            </h3>
            <p className="text-sm text-white/50 relative z-10 leading-relaxed">
              To bridge Indian manufacturers and producers with businesses
              worldwide by delivering quality products, dependable service, and
              seamless export solutions.
            </p>
          </motion.div>

          {/* Our Vision */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="group relative p-6 md:p-8 bg-black/60 backdrop-blur-sm border border-white/5 rounded-3xl hover:border-blue-400/40 transition-all duration-500 overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-20 -left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-all duration-700"
            ></motion.div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] to-transparent rounded-3xl"></div>
            <h3 className="text-lg font-medium text-white relative z-10 mb-2">
              Our Vision
            </h3>
            <p className="text-sm text-white/50 relative z-10 leading-relaxed">
              To become a trusted global export partner known for quality,
              reliability, and long-term business relationships.
            </p>
          </motion.div>

          {/* What We Do */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="group relative col-span-1 md:col-span-2 p-6 md:p-8 bg-black/60 backdrop-blur-sm border border-white/5 rounded-3xl hover:border-blue-400/40 transition-all duration-500 overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -top-20 -left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-all duration-700"
            ></motion.div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] to-transparent rounded-3xl"></div>
            <h3 className="text-lg font-medium text-white relative z-10 mb-4">
              What We Do
            </h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 md:gap-3 relative z-10"
            >
              {[
                "Product Sourcing",
                "Supplier Verification",
                "Quality Inspection",
                "Export Documentation",
                "International Logistics",
                "Container Loading Coordination",
                "Global B2B Trade",
                "Supply Chain Support",
                "Industries We Serve",
              ].map((item, idx) => (
                <motion.span
                  key={idx}
                  variants={fadeIn}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="px-3 md:px-4 py-1.5 text-xs text-white/40 bg-white/5 rounded-full border border-white/5 hover:bg-blue-500/10 hover:text-white/70 hover:border-blue-400/20 transition-all duration-300"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Export Portfolio Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="px-4 md:px-12 lg:px-24 xl:px-50 mb-20"
      >
        <motion.div variants={fadeInUp} className="space-y-6">
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: 32 }}
              transition={{ duration: 0.5 }}
              className="w-1 bg-blue-500 rounded-full"
            ></motion.div>
            <h3 className="text-sm font-medium tracking-wider text-blue-400 uppercase">
              Export Portfolio
            </h3>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-sm text-white/40 leading-relaxed"
          >
            Our export portfolio continues to grow and may include:
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {[
              "Agricultural Products",
              "Food & Beverages",
              "Textiles & Apparel",
              "Consumer Goods",
              "Industrial Products",
              "FMCG Products",
              "Private Label Products",
              "Custom Export Solutions",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ duration: 0.2 }}
                className="group p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-blue-500/10 hover:border-blue-500/20 transition-all duration-300 cursor-default"
              >
                <div className="flex items-center gap-2.5">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="w-1.5 h-1.5 rounded-full bg-blue-400/50 group-hover:bg-blue-400 transition-all duration-300"
                  ></motion.div>
                  <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    {item}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Why Choose MG Orbis Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="px-4 md:px-12 lg:px-24 xl:px-50 mb-20"
      >
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-blue-950/30 to-transparent rounded-4xl border border-white/5 overflow-hidden shadow-2xl"
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-64 lg:h-auto overflow-hidden"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1729508180134-51bf90e4a6d2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Why Choose MG Orbis"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent lg:bg-gradient-to-r"></div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center p-8 md:p-12 lg:p-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: 32 }}
                transition={{ duration: 0.5 }}
                className="w-1 bg-blue-500 rounded-full"
              ></motion.div>
              <h3 className="text-sm font-medium tracking-wider text-blue-400 uppercase flex items-center gap-2">
             
                Why Choose MG Orbis?
              </h3>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              {[
                "Trusted Supplier Network",
                "International Quality Standards",
                "Reliable Documentation",
                "Transparent Communication",
                "Timely Delivery",
                "Customer-Centric Approach",
                "Long-Term Business Partnerships",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="group flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-default"
                >
                  <motion.div
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 pt-6 border-t border-white/5"
            >
              <motion.button
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
                className="group flex items-center gap-3 text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                <span>Learn more about our services</span>
                <motion.svg
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Our Process & Values Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="px-4 md:px-12 lg:px-24 xl:px-50 mb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Our Process */}
          <motion.div
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: 32 }}
                transition={{ duration: 0.5 }}
                className="w-1 bg-blue-500 rounded-full"
              ></motion.div>
              <h3 className="text-sm font-medium tracking-wider text-blue-400 uppercase">
                Our Process
              </h3>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-0"
            >
              {[
                "Product Sourcing",
                "Supplier Verification",
                "Quality Inspection",
                "Packaging & Labeling",
                "Export Documentation",
                "Shipping & Logistics",
                "Worldwide Delivery",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                  transition={{ duration: 0.2 }}
                  className="group flex items-center gap-4 px-4 py-3 border-b border-white/5 hover:bg-white/5 transition-all duration-300 rounded-lg"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-xs font-medium text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </motion.div>
                  <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {item}
                  </span>
                  <motion.svg
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="w-4 h-4 text-white/20 ml-auto group-hover:text-blue-400/50 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Our Values */}
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: 32 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-1 bg-blue-500 rounded-full"
              ></motion.div>
              <h3 className="text-sm font-medium tracking-wider text-blue-400 uppercase">
                Our Values
              </h3>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                "Integrity",
                "Quality",
                "Transparency",
                "Reliability",
                "Sustainability",
                "Innovation",
                "Global Reach",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="group p-4 rounded-2xl border border-white/5 bg-white/5 hover:bg-blue-500/10 hover:border-blue-500/20 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                      className="w-2 h-2 rounded-full bg-blue-400/50 group-hover:bg-blue-400 transition-all duration-300"
                    ></motion.div>
                    <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent border border-white/5"
            >
              <p className="text-sm text-white/50 leading-relaxed">
                We aim to serve businesses across Asia, Europe, the Middle East,
                North America, and other international markets by delivering
                reliable export solutions tailored to customer needs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Founder Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="px-4 md:px-12 lg:px-24 xl:px-50 mb-20"
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/images/company.jpg"
              alt=""
              width={1920}
              height={800}
              className="w-full h-80 md:h-96 lg:h-120 object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-0 left-0 p-6 md:p-10 lg:p-20 w-full lg:w-2/3"
          >
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white text-base md:text-lg lg:text-2xl mb-2 md:mb-4 leading-relaxed font-light"
            >
              &quot;I founded MG Orbis with a vision to connect quality Indian
              products with global markets through transparency, reliability,
              and long-term partnerships. Our goal is to simplify international
              trade while maintaining the highest standards of quality and
              customer satisfaction.&quot;
         
            </motion.h3>

            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-blue-500 mb-4 text-sm md:text-base font-light"
            >
              — Gikhin Gopinath, Founder, MG Orbis
            </motion.h4>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <ContactButton onClick={() => setIsOpen(true)} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full border-t border-gray-200/10 bg-black/20 backdrop-blur-sm py-5 text-center text-xs text-gray-500"
      >
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <span>&copy; {new Date().getFullYear()} Orbis Exports</span>
          <span className="hidden sm:inline text-gray-700">•</span>
          <span>All rights reserved</span>
          <span className="hidden sm:inline text-gray-700">•</span>
          <span className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.2 }}
              href="https://www.instagram.com/mg.orbis?igsh=MTJ2enk1MnU3d3pybA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
              aria-label="Instagram"
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <rect
                  x="2.75"
                  y="2.75"
                  width="18.5"
                  height="18.5"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="17" cy="7" r="1" fill="currentColor" />
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              transition={{ duration: 0.2 }}
              href="https://www.linkedin.com/company/mg-orbis"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <rect
                  x="2.75"
                  y="2.75"
                  width="18.5"
                  height="18.5"
                  rx="4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M7.5 10v6M7.5 7.98v.02M12 10v6m0 0v-3a2 2 0 1 1 4 0v3"
                />
              </svg>
            </motion.a>
          </span>
          <span className="hidden sm:inline text-gray-700">•</span>
          <span>
            Designed & Developed by{" "}
            <motion.a
              whileHover={{ color: "#9CA3AF" }}
              transition={{ duration: 0.2 }}
              href="https://www.aswanthup.online"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors underline underline-offset-2"
            >
              Aswanth Up
            </motion.a>
          </span>
        </div>
      </motion.footer>
    </div>
  );
}