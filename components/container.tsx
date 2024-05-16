import { ReactElement, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Children = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className,
}: Children): ReactElement {
  return (
    <div className={cn("px-6 lg:px-24 space-y-8 py-10 lg:py-20", className)}>
      {children}
    </div>
  );
}
