import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="logo-triangle mr-2" />
      {showText && (
        <span className="text-xl font-bold">
          <span className="text-gold-primary">as</span>
          <span className="text-white">code</span>
          <span className="text-white">_</span>
        </span>
      )}
    </div>
  );
}
