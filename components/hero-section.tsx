// import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Container from "./container";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex justify-center items-center flex-col gap-4 px-0 pb-28">
      <Container className="space-y-4 flex flex-col justify-center items-center">
        {" "}
        <h1 className="max-w-5xl text-center  text-3xl font-bold leading-tight  sm:text-5xl md:text-7xl">
          Welcome to <span className="text-primary">OpenHive</span>
          <br />
          where talent meets opportunity!
        </h1>
        <p className="max-w-3xl text-muted-foreground text-center  text-lg leading-relaxed">
          Join a vibrant community of creators, developers, and innovators from
          around the globe, all driven by a passion for collaboration and making
          a difference.
        </p>
        <Button asChild size="lg">
          <Link className="flex items-center gap-1.5" href="/sign-up">
            Get started
          </Link>
        </Button>
      </Container>
      <div className="flex justify-center items-center text-center relative aspect-[2.6/1]  w-full">
        <Image
          src="/images/map-base.png"
          alt="Hero section background image"
          className="absolute inset-0 object-fill w-full h-full z-0"
          fill
          priority
          loading="eager"
        />
      </div>
    </div>
  );
}
