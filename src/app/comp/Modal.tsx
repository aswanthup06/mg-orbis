'use client';

import { useEffect, useRef } from 'react';
import { Mail, Phone, Send, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-lg rounded-2xl border border-white/5 bg-zinc-950/90 backdrop-blur-xl p-8 text-white shadow-2xl"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-blue-500/10 text-white/40 hover:text-blue-400 transition-all duration-300"
              aria-label="Close modal"
            >
              <X size={20} />
            </motion.button>

            {/* Heading */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
                <h2 className="text-2xl font-medium text-white">Let&apos;s Connect</h2>
           
              </div>
              <p className="text-sm text-white/40 ml-4">
                Have a project in mind? Send me a message or reach me directly.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 mb-8">
              <motion.a
                whileHover={{ x: 5, borderColor: "rgba(59,130,246,0.3)" }}
                transition={{ duration: 0.2 }}
                href="tel:+917902578771"
                className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition-all duration-300 hover:bg-blue-500/5"
              >
                <div className="rounded-lg bg-blue-500/10 p-3">
                  <Phone size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-white/40">Phone</p>
                  <p className="text-sm font-medium text-white/80">+91 7902578771</p>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ x: 5, borderColor: "rgba(59,130,246,0.3)" }}
                transition={{ duration: 0.2 }}
                href="mailto:mggikhin@gmail.com"
                className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition-all duration-300 hover:bg-blue-500/5"
              >
                <div className="rounded-lg bg-blue-500/10 p-3">
                  <Mail size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-white/40">Email</p>
                  <p className="text-sm font-medium text-white/80">mggikhin@gmail.com</p>
                </div>
              </motion.a>
            </div>

            {/* Form */}
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
              />
              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-600 shadow-lg shadow-blue-500/20"
              >
                <Send size={16} />
                Send Message
              </motion.button>
            </form>

            {/* Decorative glow */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}