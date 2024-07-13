"use server";
import { User } from "@/types";
import { cookies } from "next/headers";
const TWO_DAYS_IN_SECONDS = 2 * 24 * 60 * 60;
export const CookieUser = (user: User) => {
  const encodeBase64 = (data: string) => {
    return Buffer.from(data).toString("base64");
  };
  const cookieOptions = {
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    maxAge: TWO_DAYS_IN_SECONDS,
  };

  // Serialize and encode the data
  const encodedUserData = encodeBase64(JSON.stringify(user));

  cookies().set("user", encodedUserData, cookieOptions);
};

export const LogoutUser = () => {
  cookies().delete("user");
};
