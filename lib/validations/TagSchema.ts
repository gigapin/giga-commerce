import { z }from "zod";

export const insertTagSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(20, { message: "Name not must be more 20 characters long" }),
  description: z
    .string()
    .max(200)
});