import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PrismaClient } from "@/lib/generated/prisma";
import Link from "next/link";

const Tags = async () => {
  const prisma = new PrismaClient();
  const getTags = await prisma.tags.findMany();

  return (
    <div className="space-y-8">
      <h2 className="h2-bold">Tags</h2>
      <Button>
        <Link href="/add-tag">Add Tag</Link>
      </Button>

      <Table>
        <TableCaption>A list of tags.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
          {getTags.map((tag) => (
            <TableRow key={tag.id}>
              <TableCell className="font-medium">{tag.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Tags;