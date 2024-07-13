"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { NewPasswordSchema } from "@/schemas/auth";
import {
  ArrowLeftIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import FormWrapper from "./form-wrapper";
// import { newPassword } from "@/actions/auth";
import { FormError } from "./form-error";
import { Loader } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter, useSearchParams } from "next/navigation";
import { authAxios } from "@/services/auth/service";

export default function NewPasswordForm() {
  const [isPending, setIsPending] = useState(false);

  const [error, setError] = useState<string | undefined>("");

  const [success, setSuccess] = useState<string | undefined>("");

  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email");
  if (!email) {
    router.push("/");
  }

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      code: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof NewPasswordSchema>) => {
    try {
      const payload = {
        email,
        code: parseInt(values.code, 10),
        password: values.password,
        confirmPassword: values.confirmPassword,
      };
      setIsPending(true);
      const res = await authAxios.post("/forgot-password/update", payload);
      if (res.status === 201 && res.data.success) {
        router.push("/dashboard");
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      // @ts-ignore
      setError(err.response.data.message || "Something went wrong");
      console.log(err);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <FormWrapper
      title="Please create a new password"
      description={`Insert the 6 digit code we sent to ${email}`}
    >
      <div className="mt-6 space-y-2">
        <FormError message={error} />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputOTP maxLength={6} {...field} disabled={isPending}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Confirm Password"
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
                    <span>Change Password</span>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </FormWrapper>
  );
}
