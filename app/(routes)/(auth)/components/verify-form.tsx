"use client";

import { useRouter, useSearchParams } from "next/navigation";
import FormWrapper from "./form-wrapper";
import { Button } from "@/components/ui/button";

import { useEffect, useState, useTransition } from "react";
import { Loader } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { VerifySchema } from "@/schemas/auth";
import { authAxios } from "@/services/auth/service";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FormError } from "./form-error";
import { toast } from "sonner";

export default function Verification() {
  const [isPending, setIsPending] = useState(false);
  const [timer, setTimer] = useState(300);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email");
  if (!email) {
    router.push("/");
  }

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  const form = useForm<z.infer<typeof VerifySchema>>({
    resolver: zodResolver(VerifySchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof VerifySchema>) => {
    try {
      setIsPending(true);
      const payload = {
        email,
        code: parseInt(values.code, 10),
      };
      const res = await authAxios.post("/verify-email", payload);
      if (res.status === 201 && res.data.success) {
        toast.success(res.data.message);
        setError(undefined);
        router.push("/login");
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
  const requestOtp = async () => {
    try {
      if (!email) {
        setError("Email is not defined");
      }
      const payload = {
        email,
      };
      const res = await authAxios.post("/verify-email/otp", payload);
      if (res.status === 201 && res.data.success) {
        setSuccess(res.data.message);
        setError(undefined);
      }
      setIsResendDisabled(true);
      setTimer(300);
    } catch (err) {
      // @ts-ignore
      setError(err.response.data.message || "Something went wrong");
      console.log(err);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <FormWrapper
        title="Enter the code"
        description={`Insert the 5 digit code we sent to ${email}`}
      >
        <FormError message={error} />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
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
            <Button
              variant="link"
              className="block"
              onClick={requestOtp}
              type="button"
              disabled={isResendDisabled}
            >
              {isResendDisabled
                ? `Resend code in ${Math.floor(timer / 60)}:${timer % 60 < 10 ? "0" : ""}${timer % 60}`
                : "Resend code"}
            </Button>
            <Button type="submit" size="lg" disabled={isPending}>
              {isPending ? (
                <Loader className="h-5 w-5 animate-spin" />
              ) : (
                <span>Submit</span>
              )}
            </Button>
          </form>
        </Form>
      </FormWrapper>
    </div>
  );
}
