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
import { authAxios } from "@/services/auth/service";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ResetPasswordForm() {
  const [isPending, setIsPending] = useState(false);

  const [error, setError] = useState<string | undefined>("");

  const [success, setSuccess] = useState<string | undefined>("");
  const router = useRouter();

  const form = useForm<z.infer<typeof ResetPasswordSchema>>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ResetPasswordSchema>) => {
    try {
      setIsPending(true);
      const res = await authAxios.post("/forgot-password", values);
      console.log(res);

      if (res.status === 201 && res.data.success) {
        toast.success(res.data.message);
        router.push(`/new-password?email=${values.email}`);
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      // @ts-ignore
      setError("Something went wrong");
      console.log(err);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div>
      <FormWrapper
        title="Forgot Your Password?"
        description=" No worries we would send reset instructions."
      >
        <div className="mt-6 space-y-2">
          <FormError message={error} />

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
                    {isPending ? (
                      <Loader className="h-5 w-5 animate-spin" />
                    ) : (
                      <span>Send reset</span>
                    )}
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
