import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function FormWrapper({ title, description, children }: Props) {
  return (
    <div className="mx-auto w-full max-w-sm lg:w-96">
      <div className="mb-6 flex items-center justify-center flex-col gap-2">
        <Button size="icon" variant="ghost" className=" mb-4 h-fit" asChild>
          <Link href="/" className="select-none gap-1 w-fit">
            <Image
              src="/images/logo.svg"
              alt="Open Hive logo"
              width={60}
              height={60}
              quality={100}
            />
          </Link>
        </Button>
        <h1 className=" bg-clip-text text-balance  text-2xl font-semibold leading-tight sm:text-3xl sm:leading-tight md:leading-tight">
          {title}
        </h1>
        {description && (
          <h2 className="text-muted-foreground">{description}</h2>
        )}
      </div>
      <div className="mb-8">{children}</div>
    </div>
  );
}
