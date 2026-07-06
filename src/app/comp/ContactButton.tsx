'use client';

import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ContactButtonProps {
  onClick: () => void;
  text?: string;
  className?: string;
}

export default function ContactButton({
  onClick,
  text = 'Contact Now',
  className = '',
}: ContactButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group flex cursor-pointer items-center gap-2 rounded-sm bg-black px-10 py-4 text-xs font-light text-white transition-colors duration-300 hover:bg-gray-950 hover:text-white/70 ${className}`}
    >
      <span>{text}</span>
      <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
    </button>
  );
}