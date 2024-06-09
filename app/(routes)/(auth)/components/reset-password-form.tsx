"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ResetPasswordSchema } from "@/schemas/auth";
import FormWrapper from "./form-wrapper";
// import { reset } from "@/actions/auth";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { Loader } from "lucide-react";

export default function ResetPasswordForm() {
  const [isPending, startTransition] = useTransition();

  const [error, setError] = useState<string | undefined>("");

  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof ResetPasswordSchema>>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ResetPasswordSchema>) => {
    // startTransition(() => {
    //   reset(values)
    //     .then((data) => {
    //       if (data?.error) {
    //         form.reset();
    //         setSuccess("");
    //         setError(data.error);
    //       }
    //       if (data?.success) {
    //         form.reset();
    //         setError("");
    //         setSuccess(data.success);
    //       }
    //     })
    //     .catch(() => setError("Oops! Something went wrong!"));
    // });
  };

  return (
    <div>
      <FormWrapper
        title="Forgot Your Password?"
        description=" No worries we would send reset instructions."
      >
        <div className="mt-6 space-y-2">
          <FormError message={error} />
          <FormSuccess message={success} />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Enter Email"
                        type="email"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <div>
                  <Button
                    size="lg"
                    type="submit"
                    className="w-full border py-3 px-4 text-base shadow-sm border-black"
                    disabled={isPending}
                  >
                    {isPending && <Loader className="h-5 w-5 animate-spin" />}
                    <span>Send reset link</span>
                  </Button>
                </div>
              </div>
            </form>
          </Form>
          <div className="flex justify-center items-center">
            <Button
              asChild
              variant="link"
              className={
                isPending
                  ? "pointer-events-none cursor-not-allowed text-muted-foreground p-0"
                  : "p-0"
              }
            >
              <Link href="/login">Back to login</Link>
            </Button>
          </div>
        </div>
      </FormWrapper>
    </div>
  );
}
