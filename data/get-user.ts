import { cookies } from "next/headers";
import { User } from "@/types";

// Helper function to decode Base64
const decodeBase64 = (data: string): string => {
  return Buffer.from(data, "base64").toString("utf-8");
};

// Function to get user data from the cookie
export const getUser = (): User | null => {
  const cookieStore = cookies();
  const userCookie = cookieStore.get("user");

  if (!userCookie) {
    return null;
  }

  // Decode and parse the cookie value
  const decodedUserData = decodeBase64(userCookie.value);
  return JSON.parse(decodedUserData) as User;
};
