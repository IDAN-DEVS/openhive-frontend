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
import { LoginSchema } from "@/schemas/auth";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

import FormWrapper from "./form-wrapper";
import { useRouter, useSearchParams } from "next/navigation";
import { FormError } from "./form-error";
import { Loader } from "lucide-react";
import { authAxios } from "@/services/auth/service";
import { CookieUser } from "@/data/user";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const calLbackUrl = searchParams.get("callbackUrl");

  const [isPending, setIsPending] = useState(false);
  const router = useRouter();
  const [error, setError] = useState<string | undefined>("");

  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    try {
      setIsPending(true);
      const res = await authAxios.post("/login", values);
      if (res.status === 201 && res.data.success) {
        CookieUser(res.data.data);
        router.push("/explore");
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
    <FormWrapper title=" Welcome Back 👋">
      <FormError message={error} />
      <div className="mt-6 space-y-2">
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Enter Password"
                        type={showPassword ? "text" : "password"}
                      />
                      <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      >
                        {showPassword ? (
                          <EyeIcon className="text-muted-foreground h-5 w-5" />
                        ) : (
                          <EyeSlashIcon className="text-muted-foreground h-5 w-5" />
                        )}
                      </span>
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button
                asChild
                variant="link"
                className={
                  isPending
                    ? "pointer-events-none cursor-not-allowed text-muted-foreground p-0"
                    : "p-0"
                }
              >
                <Link href="/reset-password">Forgot Password?</Link>
              </Button>
            </div>
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
                    <span>Login</span>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </Form>
        <div className="flex justify-center items-center">
          Don&apos;t have an account?
          <Button
            asChild
            variant="link"
            className={
              isPending
                ? "pointer-events-none cursor-not-allowed text-muted-foreground"
                : ""
            }
          >
            <Link href="/sign-up">Sign up for free</Link>
          </Button>
        </div>
      </div>
    </FormWrapper>
  );
}
