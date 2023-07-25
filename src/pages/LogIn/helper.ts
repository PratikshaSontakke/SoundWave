import { z } from "zod";

export const schema = z.object({
  username: z.string().nonempty("Username is required"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});