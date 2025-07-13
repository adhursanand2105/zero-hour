import { cn } from "@/lib/utils";

interface FloatingLabelProps {
  stepNumber: number;
  children: React.ReactNode;
  className?: string;
}

export function FloatingLabel({ stepNumber, children, className }: FloatingLabelProps) {
  return (
    <div className={cn("floating-label", className)}>
      <span className="text-light-blue font-semibold">STEP {stepNumber}</span>
      <span className="text-white ml-2 font-normal">{children}</span>
    </div>
  );
}
