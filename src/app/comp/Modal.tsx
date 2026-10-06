'use client';

import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Send, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
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

  // Close with Escape
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Submit form
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSending(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const message = formData.get('message')?.toString().trim();

    if (!name || !email || !message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all fields.',
      });

      setIsSending(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || 'Failed to send message.'
        );
      }

      setStatus({
        type: 'success',
        message: 'Message sent successfully!',
      });

      form.reset();
    } catch (error) {
      console.error('Contact form error:', error);

      setStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        >
          <motion.div
            ref={modalRef}
            initial={{
              scale: 0.95,
              y: 20,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              y: 0,
              opacity: 1,
            }}
            exit={{
              scale: 0.95,
              y: 20,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
              ease: 'easeOut',
            }}
            className="relative w-full max-w-lg rounded-2xl border border-white/5 bg-zinc-950/90 backdrop-blur-xl p-8 text-white shadow-2xl"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{
                scale: 1.1,
                rotate: 90,
              }}
              whileTap={{
                scale: 0.9,
              }}
              transition={{
                duration: 0.2,
              }}
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full p-2 text-white/40 transition-all duration-300 hover:bg-blue-500/10 hover:text-blue-400"
              aria-label="Close modal"
              type="button"
            >
              <X size={20} />
            </motion.button>

            {/* Heading */}
            <div className="mb-8">
              <div className="mb-2 flex items-center gap-3">
                <div className="h-8 w-1 rounded-full bg-blue-500" />

                <h2 className="text-2xl font-medium text-white">
                  Let&apos;s Connect
                </h2>
              </div>

              <p className="ml-4 text-sm text-white/40">
                Have a project in mind? Send me a message or reach me
                directly.
              </p>
            </div>

            {/* Contact Details */}
            <div className="mb-8 space-y-3">
              {/* Phone */}
              <motion.a
                whileHover={{
                  x: 5,
                  borderColor: 'rgba(59,130,246,0.3)',
                }}
                transition={{ duration: 0.2 }}
                href="tel:+917902578771"
                className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition-all duration-300 hover:bg-blue-500/5"
              >
                <div className="rounded-lg bg-blue-500/10 p-3">
                  <Phone
                    size={18}
                    className="text-blue-400"
                  />
                </div>

                <div>
                  <p className="text-xs text-white/40">
                    Phone
                  </p>

                  <p className="text-sm font-medium text-white/80">
                    +91 7902578771
                  </p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                whileHover={{
                  x: 5,
                  borderColor: 'rgba(59,130,246,0.3)',
                }}
                transition={{ duration: 0.2 }}
                href="mailto:sourcing@mgorbis.com"
                className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition-all duration-300 hover:bg-blue-500/5"
              >
                <div className="rounded-lg bg-blue-500/10 p-3">
                  <Mail
                    size={18}
                    className="text-blue-400"
                  />
                </div>

                <div>
                  <p className="text-xs text-white/40">
                    Email
                  </p>

                  <p className="text-sm font-medium text-white/80">
                    sourcing@mgorbis.com
                  </p>
                </div>
              </motion.a>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-3"
            >
              {/* Name */}
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 transition-all duration-300 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 transition-all duration-300 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
              />

              {/* Message */}
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 transition-all duration-300 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
              />

              {/* Status */}
              <AnimatePresence mode="wait">
                {status && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: -5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -5,
                    }}
                    className={`text-sm ${
                      status.type === 'success'
                        ? 'text-green-400'
                        : 'text-red-400'
                    }`}
                  >
                    {status.message}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Submit */}
              <motion.button
                whileHover={{
                  scale: isSending ? 1 : 1.02,
                }}
                whileTap={{
                  scale: isSending ? 1 : 0.98,
                }}
                type="submit"
                disabled={isSending}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={16} />

                {isSending
                  ? 'Sending...'
                  : 'Send Message'}
              </motion.button>
            </form>

            {/* Decorative Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}