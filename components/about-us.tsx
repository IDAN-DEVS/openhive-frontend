import React from "react";
import Container from "./container";
import Heading from "./heading";
import Image from "next/image";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Button } from "./ui/button";

export default function AboutUs() {
  return (
    <Container>
      <div className="flex lg:justify-between flex-col justify-center items-center lg:flex-row  gap-y-4">
        <div className="flex flex-col gap-4">
          <Heading title="About Us" className="text-center lg:text-start" />
          <p className="text-muted-foreground max-w-md text-center lg:text-start">
            Join a vibrant community of creators, developers, and innovators
            from around the globe, all driven by a passion for collaboration and
            making a difference.
          </p>
        </div>
        <Button size="lg">Learn more</Button>
      </div>
      <div className="flex justify-center bg-muted-foreground/50 items-center text-center relative aspect-[1/1] md:aspect-[2.6/1] z-0 overflow-hidden rounded-lg shadow-xl w-full">
        <Image
          src="/images/about.jpg"
          alt="Hero section background image"
          className=" object-cover w-full h-full z-0"
          fill
          loading="lazy"
        />
      </div>
    </Container>
  );
}
