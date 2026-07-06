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
      className={`group flex cursor-pointer items-center gap-2 rounded-sm bg-black 
        px-6 py-3 text-xs font-light 
        sm:px-10 sm:py-4 sm:text-xs
        text-[0.85rem] 
        sm:text-xs 
        text-white transition-colors duration-300 
        hover:bg-gray-950 hover:text-white/70 ${className}`}
    >
      <span className="text-[0.97em] sm:text-xs">{text}</span>
      <ArrowRightIcon className="h-4 w-4 sm:h-4 sm:w-4 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-2" />
    </button>
  );
}