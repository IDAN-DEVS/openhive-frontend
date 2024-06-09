import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
interface SpinnerProps {
  width: number;
  height: number;
  className: string;
}
export default function Spinner({ width, height, className }: SpinnerProps) {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
  };
  return (
    <Loader
      className={cn("animate-spin", className)}
      width={width}
      height={height}
    />
  );
}
