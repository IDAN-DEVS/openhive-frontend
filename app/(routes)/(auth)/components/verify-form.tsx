"use client";

import { useRouter, useSearchParams } from "next/navigation";
import FormWrapper from "./form-wrapper";
import { Button } from "@/components/ui/button";
// import { createClient } from "@/utils/supabase/client";
// import { toast } from "sonner";
import { useTransition } from "react";
// import { verify } from "@/actions/auth";
import { Loader } from "lucide-react";

export default function Verification() {
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email");
  if (!email) {
    router.push("/");
  }

  const resend = () => {
    // startTransition(() => {
    //   verify(email)
    //     .then((data) => {
    //       if (data?.error) {
    //         toast.error(data.error);
    //       }
    //       if (data?.success) {
    //         toast.success(data.success);
    //       }
    //     })
    //     .catch(() => toast.error("Oops! Something went wrong!"));
    // });
  };

  return (
    <div className="flex justify-center items-center">
      <FormWrapper title="Thanks for registering!">
        <div className=" p-3 rounded-md flex items-center gap-x-2 text-xl text-center">
          <p>
            We have sent a verification link to
            <span className="font-semibold inline">{email}</span>
            Click the link in the email to verify your account and setup your
            profile.
          </p>
        </div>
        <div className="flex justify-center items-center">
          Didn&apos;t get the email?
          <form action={resend}>
            <Button type="submit" variant="link" disabled={isPending}>
              {isPending ? (
                <Loader className="h-5 w-5 animate-spin" />
              ) : (
                <span> Click to resend</span>
              )}
            </Button>
          </form>
        </div>
      </FormWrapper>
    </div>
  );
}
