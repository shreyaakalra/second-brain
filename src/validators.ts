import { z } from "zod";

export const userSignupSchema = z.object({
    name: z.string()
        .min(3, { message: "Username must be at least 3 characters long." })
        .max(10, { message: "Username cannot exceed 10 characters." }),
    
    email: z.string()
        .email({ message: "Invalid email address format." }),
    
    password: z.string()
        .min(8, { message: "Password must be at least 8 characters long." })
        .max(20, { message: "Password cannot exceed 20 characters." })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
        .regex(/[0-9]/, { message: "Password must contain at least one number." })
        .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one special character." })
});