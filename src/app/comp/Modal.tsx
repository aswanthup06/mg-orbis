'use client';

import { useEffect, useRef } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div
        ref={modalRef}
        className="w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-white shadow-2xl"
      >
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
          <p className="mt-2 text-zinc-400">
            Have a project in mind? Send me a message or reach me directly.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-4 mb-8">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-4 transition hover:border-white"
          >
            <div className="rounded-lg bg-zinc-800 p-3">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-sm text-zinc-400">Phone</p>
              <p className="font-medium">+91 7902578771</p>
            </div>
          </a>

          <a
            href="mailto:hello@example.com"
            className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-4 transition hover:border-white"
          >
            <div className="rounded-lg bg-zinc-800 p-3">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-sm text-zinc-400">Email</p>
              <p className="font-medium">mggikhin@gmail.com</p>
            </div>
          </a>
        </div>

        {/* Contact Form */}
        {/* <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-white focus:outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-white focus:outline-none"
          />

          <textarea
            rows={4}
            placeholder="Tell me about your project..."
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-white focus:outline-none"
          />

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200"
          >
            <Send size={18} />
            Send Message
          </button>
        </form> */}
      </div>
    </div>
  );
}