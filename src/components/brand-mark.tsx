type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" fill="currentColor" r="21" />
      <path
        d="M14 28c5-1 9-5 11-12 4 4 7 9 9 16-7 0-14-1-20-4Z"
        fill="var(--mark-cutout, white)"
      />
      <path
        d="M19 34c3-6 7-11 13-15"
        fill="none"
        stroke="var(--mark-line, #d8a527)"
        strokeLinecap="round"
        strokeWidth="3"
      />
    </svg>
  );
}
