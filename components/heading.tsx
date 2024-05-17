import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description?: string;
  className?: string;
}

export default function Heading({ title, description, className }: Props) {
  return (
    <div className="space-y-2 lg:space-y-4">
      <h2
        className={cn(
          "lg:text-4xl md:text-3xl text-2xl font-bold tracking-tight",
          className
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("text-sm text-muted-foreground", className)}>
          {description}
        </p>
      )}
    </div>
  );
}
