import Container from "@/components/container";
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/ui/product-card";
import {
  AdjustmentsHorizontalIcon,
  CreditCardIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Keyboard, Settings } from "lucide-react";
import React from "react";

export default function ExplorePage() {
  return (
    <Container>
      <div className="flex justify-between items-center flex-col lg:flex-row gap-y-4">
        <Heading
          title="Explore Projects"
          className="text-center lg:text-start"
          description="A curation of awesome tools and projects built by Nigerian developers."
        />
        <div className="flex items-center gap-2 w-full lg:justify-end justify-between">
          {" "}
          <label className="relative block w-full max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5 text-muted-foreground" />
            </span>
            <Input
              className="w-full pl-10 bg-muted"
              type="text"
              placeholder="Search projects,creators"
            />
          </label>
          <Button variant="outline" size="icon" className="lg:hidden">
            <AdjustmentsHorizontalIcon className="w-5 h-5" />
          </Button>
          <div className="lg:flex items-center gap-2 hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="text-muted-foreground">
                  Technologies
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="lg:w-96 w-full" align="end">
                <DropdownMenuLabel>Technologies</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className="grid grid-cols-3 gap-4 text-muted-foreground">
                  <DropdownMenuItem>Python</DropdownMenuItem>
                  <DropdownMenuItem>JavaScript</DropdownMenuItem>
                  <DropdownMenuItem>Java </DropdownMenuItem>
                  <DropdownMenuItem>C++</DropdownMenuItem>
                  <DropdownMenuItem>C#</DropdownMenuItem>
                  <DropdownMenuItem>Ruby</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="text-muted-foreground">
                  Ratings
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="lg:w-96 w-full" align="end">
                <DropdownMenuLabel>Ratings</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className="grid grid-cols-3 gap-4 text-muted-foreground">
                  <DropdownMenuItem>Python</DropdownMenuItem>
                  <DropdownMenuItem>JavaScript</DropdownMenuItem>
                  <DropdownMenuItem>Java </DropdownMenuItem>
                  <DropdownMenuItem>C++</DropdownMenuItem>
                  <DropdownMenuItem>C#</DropdownMenuItem>
                  <DropdownMenuItem>Ruby</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
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
