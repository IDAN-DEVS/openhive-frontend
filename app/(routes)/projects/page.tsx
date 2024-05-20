import Container from "@/components/container";
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React from "react";

import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProjectsPage() {
  return (
    <Container className="lg:space-y-20">
      <div className="flex items-start justify-start gap-4">
        <Button size="icon" variant="outline">
          <ChevronLeftIcon className="h-5 w-5" />
        </Button>
        <div className="flex flex-col gap-2">
          <Heading title="Product Details" />
          <Separator />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Explore projects</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="h-3 w-3">
                <Slash />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbPage>Project details</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Separator />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className=" rounded-md overflow-hidden bg-muted-foreground/50 lg:h-96 lg:w-[563px]">
          <AspectRatio ratio={1 / 1} className="lg:h-96 lg:w-[563px]">
            <Image
              src="/images/creator.jpeg"
              alt="Image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className=" object-cover"
            />
          </AspectRatio>
        </div>
        <div className="flex-col flex gap-10">
          <Heading
            title="Atom Aurelia Snippets"
            description="Join a vibrant community of creators, developers, and innovators from around the globe, all driven by a passion for collaboration and making a difference. Join a vibrant community of creators, developers, and innovators from around the globe, all driven by a passion for collaboration and making a difference."
          />
          <div className="flex items-center gap-4">
            <Button variant="primary">Contribute</Button>
            <div className="flex items-center gap-1.5">
              <Image src="/icons/star.svg" alt="star" width={20} height={20} />
              <p className="text-sm font-medium">40</p>
              <p className="text-muted-foreground text-sm">(180 reviews)</p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2">
            <Image
              src="/images/laravel_logo.svg"
              width={40}
              height={40}
              alt="Laravel logo"
            />
            <Image
              src="/images/php_logo.svg"
              width={40}
              height={40}
              alt="Laravel logo"
            />
            <Image
              src="/images/javascript.png"
              width={40}
              height={40}
              alt="Laravel logo"
            />
          </div>
        </div>
      </div>
      <Card className="w-full bg-[#111] rounded-sm">
        <CardHeader className="flex justify-between flex-row">
          <div className="flex flex-col gap-2">
            <CardTitle>Contributors Review</CardTitle>
            <div className="flex items-center gap-1.5">
              <Image src="/icons/star.svg" alt="star" width={20} height={20} />
              <p className="text-sm font-medium">40</p>
              <p className="text-muted-foreground text-sm">(180 reviews)</p>
            </div>
          </div>
          <Button variant="outline" className="w-fit">
            All reviews <ChevronDownIcon className="ml-1.5 h-5 w-5" />
          </Button>
        </CardHeader>

        <CardContent>
          <Separator />
          <div className="py-4 divide-y divide-border">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                className="flex justify-between items-start py-4"
                key={index}
              >
                <div className="flex items-start flex-col gap-4 justify-center">
                  <div className="flex item-start justify-center gap-2">
                    <Avatar className=" border-2 border-white">
                      <AvatarImage src="/images/product-avatar.png" />
                      <AvatarFallback className="bg-muted">
                        <UserIcon className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <h2 className=" text-[#EBECF0] text-sm lg:text-base font-medium before:content-[''] before:block ...">
                        Theresa Webb
                      </h2>
                      <div className="flex items-center gap-1">
                        <Image
                          src="/icons/star.svg"
                          alt="star"
                          width={15}
                          height={15}
                        />
                        <Image
                          src="/icons/star.svg"
                          alt="star"
                          width={15}
                          height={15}
                        />
                        <Image
                          src="/icons/star.svg"
                          alt="star"
                          width={15}
                          height={15}
                        />
                        <Image
                          src="/icons/star.svg"
                          alt="star"
                          width={15}
                          height={15}
                        />
                        <Image
                          src="/icons/star.svg"
                          alt="star"
                          width={15}
                          height={15}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    The shirt is absolutely gorgeous and the fabric is really
                    nice. Extremely well crafted
                  </p>
                </div>
                <p className="text-muted-foreground text-sm"> 2 days ago</p>
              </div>
            ))}
          </div>
          <Separator />
        </CardContent>
        <CardFooter className="flex-col gap-4">
          <Button
            size="lg"
            variant="link"
            className="w-fit text-gray hover:text-primary"
          >
            See more <ArrowUpRightIcon className="h-4 w-4 ml-1.5" />
          </Button>
          <Button size="lg" className="w-full">
            Leave a review
          </Button>
        </CardFooter>
      </Card>
    </Container>
  );
}
