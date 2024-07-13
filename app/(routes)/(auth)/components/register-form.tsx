"use client";

import { useState } from "react";
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
import { RegisterSchema } from "@/schemas/auth";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import FormWrapper from "./form-wrapper";
import { FormError } from "./form-error";
import { Loader } from "lucide-react";
import { authAxios } from "@/services/auth/service";
import { FormSuccess } from "./form-success";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    try {
      setIsPending(true);
      const res = await authAxios.post("/register", values);
      if (res.status === 201 && res.data.success) {
        router.push(`/verify?email=${res.data.data.email}`);
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
    <FormWrapper title="Create an account">
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
                    <span>Register</span>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </Form>
        <div className="flex justify-center items-center">
          Already have an account?
          <Button
            asChild
            variant="link"
            className={
              isPending
                ? "pointer-events-none cursor-not-allowed text-muted-foreground"
                : ""
            }
          >
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </FormWrapper>
  );
}
