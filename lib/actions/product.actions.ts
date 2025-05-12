'use server';

import { PrismaClient } from "@/lib/generated/prisma";
import { convertToPlainObject } from "@/lib/utils";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";

export async function getLatestProducts() {
  const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: 'desc' }
  });

  return convertToPlainObject(data);
}

export async function getProductBySlug(slug: string) {
  const prisma = new PrismaClient();

  return prisma.product.findFirst({
    where: { slug: slug }
  });
}