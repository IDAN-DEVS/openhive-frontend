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
  return <div className={cn("px-6 lg:px-20 py-2", className)}>{children}</div>;
}
