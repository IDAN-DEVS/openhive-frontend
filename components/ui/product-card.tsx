import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { UserIcon } from "@heroicons/react/16/solid";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { Button } from "./button";

export default function ProductCard() {
  return (
    <Card className="bg-[#111] border-none w-full">
      <CardHeader className=" justify-between flex flex-row items-">
        <div className="flex lg:items-center items-start lg:flex-row flex-col gap-2 justify-center">
          <Avatar className=" border-2 border-white">
            <AvatarImage src="/images/product-avatar.png" />
            <AvatarFallback className="bg-muted">
              <UserIcon className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
          <h2 className=" text-gray lg:text-lg font-medium before:content-[''] before:block ...">
            Theresa Webb
          </h2>
        </div>
        <Button variant="outline" size="icon" className="h-7 w-7">
          <EllipsisVerticalIcon className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent className="gap-4 flex flex-col">
        <CardTitle className="text-primary text-base lg:text-lg">
          Atom Aurelia Snippets
        </CardTitle>
        <CardDescription className="max-w-[20rem] text-sm lg:tex-base leading-6 text-gray line-clamp-3 ">
          A plugin for Atom Editor to autocomplete aurelia snippets when working
          with Aurelia.
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <Image
            src="/images/laravel_logo.svg"
            width={30}
            height={30}
            alt="Laravel logo"
          />
          <Image
            src="/images/php_logo.svg"
            width={30}
            height={30}
            alt="Laravel logo"
          />
          <Image
            src="/images/javascript.png"
            width={30}
            height={30}
            alt="Laravel logo"
          />
        </div>
        <div className="flex justify-center items-center gap-2">
          <Image
            src="/images/star.svg"
            width={30}
            height={30}
            alt="Laravel logo"
          />
          <p className="text-lg">0</p>
        </div>
      </CardFooter>
    </Card>
  );
}
