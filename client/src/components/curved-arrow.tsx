interface CurvedArrowProps {
  className?: string;
}

export function CurvedArrow({ className = "" }: CurvedArrowProps) {
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M2 8 C2 4, 6 2, 10 4 L12 5 L10 6 L11 7 L14 4 L11 1 L10 2 L12 3 C6 0, 0 4, 0 8 Z" 
        fill="currentColor"
      />
    </svg>
  );
}