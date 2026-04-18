type Props = {
  className?: string;
};

export function Ornament({ className }: Props) {
  return (
    <div className={`flex items-center justify-center gap-3 text-gold ${className ?? ""}`}>
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/60" />
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M14 1.5l3.2 7.5 7.8.7-5.9 5.2 1.8 7.6L14 18.7l-6.9 3.8 1.8-7.6L3 9.7l7.8-.7L14 1.5z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <circle cx="14" cy="14" r="2.2" fill="currentColor" />
      </svg>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  );
}
