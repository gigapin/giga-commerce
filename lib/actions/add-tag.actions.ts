"use server";

import { PrismaClient } from "@/lib/generated/prisma";
import Tag from "@/types/tag";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export async function createTag(data: Tag) {
  const prisma = new PrismaClient();

  const newTag = await prisma.tags.create({
    data: { ...data }
  });

  if (newTag) {
    revalidatePath("/tags");
    redirect("/tags");
  }

}