import { FloatingLabel } from "./floating-label";
import { cn } from "@/lib/utils";

interface StepCardProps {
  stepNumber: number;
  label: React.ReactNode;
  children: React.ReactNode;
  showConnector?: boolean;
  className?: string;
}

export function StepCard({ stepNumber, label, children, showConnector = true, className }: StepCardProps) {
  return (
    <div className={cn("step-card", className)}>
      <FloatingLabel stepNumber={stepNumber}>
        {label}
      </FloatingLabel>
      {showConnector && <div className="dotted-connector"></div>}
      {children}
    </div>
  );
}
