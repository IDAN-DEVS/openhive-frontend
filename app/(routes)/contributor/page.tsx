import Container from "@/components/container";
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
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
import ProductCard from "@/components/ui/product-card";
import Footer from "@/components/footer";

export default function ContributorPage() {
  return (
    <div>
      <Container className=" lg:space-y-20">
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
                  <BreadcrumbPage>View profile</BreadcrumbPage>
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
              title="About Owai"
              description="Join a vibrant community of creators, developers, and innovators from around the globe, all driven by a passion for collaboration and making a difference. Join a vibrant community of creators, developers, and innovators from around the globe, all driven by a passion for collaboration and making a difference."
            />
            <div className="flex items-center gap-4">
              <Button variant="primary">View repo</Button>
              <div className="flex items-center gap-1.5">
                <Image
                  src="/icons/twitter.svg"
                  alt="Twitter Icon"
                  width={30}
                  height={30}
                />
                <Image
                  src="/icons/linkedin.svg"
                  alt="Twitter Icon"
                  width={30}
                  height={30}
                />
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
        <div className="space-y-8">
          <Heading title="My Projects" />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 place-items-center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
