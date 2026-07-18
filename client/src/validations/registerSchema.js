import { z } from "zod";

export const registerSchema = z
    .object({

        fullName: z
            .string()
            .min(3, "Full name must contain at least 3 characters"),

        username: z
            .string()
            .min(3, "Username must contain at least 3 characters")
            .max(20, "Username is too long")
            .regex(
                /^[a-zA-Z0-9_]+$/,
                "Username can only contain letters, numbers and underscore"
            ),

        email: z
            .string()
            .email("Please enter a valid email"),

        password: z
            .string()
            .min(6, "Password must be at least 6 characters"),

        confirmPassword: z
            .string()

    })

    .refine(

        (data) => data.password === data.confirmPassword,

        {

            path: ["confirmPassword"],

            message: "Passwords do not match"

        }

    );