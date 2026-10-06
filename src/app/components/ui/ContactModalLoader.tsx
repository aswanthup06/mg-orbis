"use client";

import dynamic from "next/dynamic";

const ContactModal = dynamic(
  () => import("./ContactModal"),
  {
    ssr: false,
  }
);

export default function ContactModalLoader() {
  return <ContactModal />;
}