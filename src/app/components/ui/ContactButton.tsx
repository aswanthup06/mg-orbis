import { ArrowUpRight } from "lucide-react";

type ContactButtonProps = {
  onClick: () => void;
};

function Label() {
  return (
    <>
      <span>Contact us</span>
      <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
    </>
  );
}

export default function ContactButton({ onClick }: ContactButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Contact MG Orbis"
      className="group relative inline-flex h-9 cursor-pointer items-center overflow-hidden border border-white bg-white px-4 text-xs font-medium tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 sm:h-12 sm:px-6 sm:text-sm"
    >
      {/* fill */}
      <span
        aria-hidden="true"
        className="absolute inset-0 translate-y-full bg-zinc-950 transition-transform duration-300 ease-out group-hover:translate-y-0"
      />

      <span className="relative flex items-center">
        {/* default layer */}
        <span className="flex items-center gap-2 text-zinc-950 transition-transform duration-300 ease-out group-hover:-translate-y-[200%] sm:gap-3">
          <Label />
        </span>

        {/* hover layer */}
        <span
          aria-hidden="true"
          className="absolute inset-0 flex translate-y-[200%] items-center gap-2 text-white transition-transform duration-300 ease-out group-hover:translate-y-0 sm:gap-3"
        >
          <Label />
        </span>
      </span>
    </button>
  );
}