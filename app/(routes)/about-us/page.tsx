import Container from "@/components/container";
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import ContributorCard from "@/components/ui/contributor-card";
import Image from "next/image";
import React from "react";

export default function AboutUsPage() {
  return (
    <Container className=" lg:space-y-[140px]">
      <div className="space-y-8">
        <Heading title="About OpenHive" />
        <div
          className="relative flex justify-end items-start bg-center aspect-video md:aspect-[2.6/1] overflow-hidden bg-cover rounded-md shadow-xl"
          style={{ backgroundImage: `url(/images/about.jpg)` }}
        >
          {/* Dimmed overlay */}
          <div className="absolute inset-0 backdrop-brightness-50"></div>
          <div className="absolute bottom-0 left-0 p-4 z-10">
            <Heading
              title="Built by Nigerians, for the Rest of the World."
              className="lg:text-4xl text-white"
            />
          </div>
        </div>
        <div className="space-y-4">
          <p className=" text-muted-foreground  leading-8 text-lg ">
            Join a vibrant community of creators, developers, and innovators
            from around the globe, all driven by a passion for collaboration and
            making a difference. Join a vibrant community of creators,
            developers, and innovators from around the globe, all driven by a
            passion for collaboration and making a difference. Join a vibrant
            community of creators, developers, and innovators from around the
            globe, all driven by a passion for collaboration and making a
            difference. Join a vibrant community of creators, developers, and
            innovators from around the globe, all driven by a passion for
            collaboration and making a difference. Join a vibrant community of
            creators, developers, and innovators from around the globe, all
            driven by a passion for collaboration and making a difference. Join
            a vibrant community of creators, developers, and innovators from
            around the globe, all driven by a passion for collaboration and
            making a difference.
          </p>
          <div className="flex items-center gap-2">
            <Button variant="primary">View more</Button>
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
      </div>
      <div className=" space-y-8">
        <Heading title="Contributors" />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 place-items-center">
          <ContributorCard />
          <ContributorCard />
          <ContributorCard />
          <ContributorCard />
          <ContributorCard />
          <ContributorCard />
          <ContributorCard />
          <ContributorCard />
          <ContributorCard />
          <ContributorCard />
          <ContributorCard />
          <ContributorCard />
        </div>
      </div>

      <div>
        <Heading title="Meet Our Creators" />
      </div>
    </Container>
  );
}
