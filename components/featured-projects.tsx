import React from "react";
import Container from "./container";
import ProductCard from "./ui/product-card";
import Heading from "./heading";

export default function FeaturedProjects() {
  return (
    <Container className=" space-y-8">
      <Heading title="Featured Projects" />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Container>
  );
}
