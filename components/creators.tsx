import React from "react";
import Container from "./container";
import Heading from "./heading";
import { CarouselDemo } from "./top-creators";

export default function Creators() {
  return (
    <Container>
      <Heading title="Meet Our Creators" />
      <div className="w-full">
        <CarouselDemo />
      </div>
    </Container>
  );
}
