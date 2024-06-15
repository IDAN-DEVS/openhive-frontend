"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const CREATOR_DATA = [
  {
    id: 1,
    imgSrc: "/images/creator.jpeg",
    title: "Learning by doing in Open Source: Ifeora Patrick",
    description:
      "Some people come to open source by accident and Ifeora is one. He shares his story of how he came into open source",
  },
  {
    id: 2,
    imgSrc: "/images/creator-2.jpeg",
    title: "Scratching my own itch with open source: Shalvah Adebayo",
    description:
      "Shalvah took matters into his one hands. With his spirit for openness, projects built to solve his own problems have gone on to impact many others - through open source.",
  },
  {
    id: 3,
    imgSrc: "/images/creator-3.jpeg",
    title: "Growing with open source: Shedrack Akintayo",
    description:
      "Inspired by how open source has created some of the most useful tools in the industry, Shedrack wants to do his best to carry on the culture.",
  },
  {
    id: 4,
    imgSrc: "/images/creator-4.jpeg",
    title: "Building a career in open source: Prosper Otemuyiwa",
    description:
      "Prosper's drive to contribute to open source is paving the way for others in the community. He shares his journey and predictions for the future.",
  },
  {
    id: 5,
    imgSrc: "/images/creator-5.jpg",
    title: "Building and sharing in Open Source: Omolara Adejuwon",
    description:
      "Open Source wasn’t a thing I came into with intention. Everything started with the passion for sharing. It was just me working on projects over the weekend, pushing it out for people to see and asking for feedback.",
  },
];

export function CarouselDemo() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      className="w-full mb-5"
    >
      <CarouselContent>
        {CREATOR_DATA.map((creator) => (
          <CarouselItem key={creator.id} className=" md:basis-1/2 lg:basis-1/3">
            <Card>
              <div className="p-3">
                <Image
                  alt={creator.title}
                  className="w-full rounded-t-lg object-cover object-top"
                  height="300"
                  src={creator.imgSrc}
                  style={{
                    aspectRatio: "380/300",
                    objectFit: "cover",
                  }}
                  width="380"
                />
              </div>

              <CardContent className="p-4 rounded-md space-y-5 mb-3">
                <CardTitle>{creator.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {creator.description}
                </CardDescription>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
