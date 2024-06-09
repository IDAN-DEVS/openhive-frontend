"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col ">
      <div className="py-8 space-y-4  flex items-center justify-center flex-col h-screen">
        <h1 className="text-2xl lg:text-4xl font-bold">404</h1>
        <p className="text-xl text-gray-400">
          Could not find requested resource
        </p>
        <div className="flex items-center justify-center gap-2">
          <Button asChild size="lg">
            <Link href="/">Go back to home</Link>
          </Button>
          <Button size="lg" variant="secondary" onClick={() => router.back()}>
            Go back
          </Button>
        </div>
      </div>
    </div>
  );
}
