 "use client";

import ContactButton from "./ContactButton";

export default function ContactTrigger() {
  return (
    <ContactButton
      onClick={() => window.dispatchEvent(new Event("open-contact-modal"))}
    />
  );
}
