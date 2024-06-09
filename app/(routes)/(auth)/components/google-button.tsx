"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Google from "public/img/google.svg";
import { Loader } from "lucide-react";
// import { google } from "@/actions/auth";
import { FormError } from "./form-error";

interface Props {
  loading: boolean | undefined;
}

export default function GoogleButton({ loading }: Props) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");

  const onSubmit = () => {
    // startTransition(() => {
    //   google()
    //     .then((data) => {
    //       if (data?.error) {
    //         setError(data.error);
    //       }
    //     })
    //     .catch(() => setError("Oops! Something went wrong!"));
    // });
  };

  return (
    <div className="">
      <div>
        <FormError message={error} />
        <form action={onSubmit}>
          <Button
            variant="secondary"
            size="lg"
            type="submit"
            className=" inline-flex w-full  gap-x-3 rounded-lg p-3 text-base font-medium text-white shadow-sm "
            disabled={isPending || loading}
          >
            {isPending && <Loader className="h-5 w-5 animate-spin" />}
            <Image
              alt=""
              loading="lazy"
              width="18"
              height="18"
              decoding="async"
              src="/icons/github.svg"
              className="h-5 w-5"
            />
            <span>Sign up with Gitub</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
