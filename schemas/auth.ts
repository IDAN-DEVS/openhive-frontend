import * as z from "zod";
export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be more than six characters long!" }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be more than six characters long!" }),
});

export const ResetPasswordSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});
export const VerifySchema = z.object({
  code: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export const NewPasswordSchema = z
  .object({
    code: z.string().min(6, {
      message: "Your one-time password must be 6 characters.",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be more than six characters long!" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be more than six characters long!" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match!",
    path: ["confirmPassword"],
  });
