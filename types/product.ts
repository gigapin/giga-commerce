//import { Decimal } from "@/lib/generated/prisma/runtime/library";
import { z } from "zod";
import { insertProductSchema } from "@/lib/validations/ProductSchema";

type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  numReviews: number;
  createdAt: Date;
}

export default Product;