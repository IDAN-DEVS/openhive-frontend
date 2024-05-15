"use client";
import Image from "next/image";

import { Button } from "./ui/button";
import { Bars2Icon, UserIcon } from "@heroicons/react/16/solid";
import Container from "./container";

import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger, SheetFooter } from "./ui/sheet";

import { usePathname } from "next/navigation";

import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const navigation = [
    {
      name: "Explore Projects",
      href: `/explore`,

      active: pathname === "/explore",
    },
    {
      name: "About us",
      href: `/about`,

      active: pathname === "/about-us",
    },
  ];
  return (
    <header className="fixed top-0 w-full z-50 bg-[#111111]">
      <nav>
        <Container className="flex justify-between items-center  py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center select-none gap-1">
              <Image
                src="/images/logo.svg"
                alt="HiME logo"
                width={35}
                height={35}
                priority
              />
              <h1 className=" bg-clip-text text-primary text-lg font-bold leading-tight sm:leading-tight md:leading-tight tracking-tight">
                OpenHive
              </h1>
            </Link>
            <div className="hidden lg:flex gap-x-2 items-center">
              {navigation.map((nav) => (
                <Button variant="ghost" key={nav.name} asChild>
                  <Link href={nav.href}>{nav.name}</Link>
                </Button>
              ))}
            </div>
          </div>
          <div className="lg:flex hidden">
            <div className="lg:flex items-center gap-2">
              <Button asChild variant="ghost">
                <Link className="flex items-center gap-1.5" href="/login">
                  Login
                </Link>
              </Button>

              <Button asChild>
                <Link className="flex items-center gap-1.5" href="/sign-up">
                  Get started
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button size="icon" variant="link">
                  <span className="sr-only">Toggle menu</span>

                  <Bars2Icon className=" h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="space-y-6 text-lg font-medium">
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    onClick={() => setOpen(false)}
                  >
                    <Link
                      href="/"
                      className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 "
                    >
                      <Image
                        src="/images/logo.svg"
                        alt="HiMe Logo"
                        width={40}
                        height={40}
                        priority
                      />
                      <h1 className="sr-only">OpenHive</h1>
                    </Link>
                  </Button>
                  <div className="flex flex-col gap-3">
                    {navigation.map((nav) => (
                      <Button
                        variant="ghost"
                        className=" justify-start w-full"
                        key={nav.name}
                        asChild
                        onClick={() => setOpen(false)}
                      >
                        <Link href={nav.href}>{nav.name}</Link>
                      </Button>
                    ))}
                  </div>
                </nav>
                <SheetFooter className=" gap-4 w-full pt-4">
                  <Button
                    asChild
                    variant="ghost"
                    onClick={() => setOpen(false)}
                  >
                    <Link className="flex items-center gap-1.5" href="/login">
                      Login
                    </Link>
                  </Button>
                  <Button asChild onClick={() => setOpen(false)}>
                    <Link className="flex items-center gap-1.5" href="/sign-up">
                      Get started
                    </Link>
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </Container>
      </nav>
    </header>
  );
}
