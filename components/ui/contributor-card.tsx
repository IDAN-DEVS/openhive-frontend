import { Card, CardContent, CardDescription, CardHeader } from "./card";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { UserIcon } from "@heroicons/react/16/solid";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { Button } from "./button";

export default function ContributorCard() {
  return (
    <Card className="bg-[#111] border-none w-full">
      <CardHeader className=" flex flex-row items-start">
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
      </CardHeader>
      <CardContent className="gap-4 flex flex-col">
        <CardDescription className="text-muted-foreground">
          <span className="text-primary">300</span> Contributions
        </CardDescription>
      </CardContent>
    </Card>
  );
}
