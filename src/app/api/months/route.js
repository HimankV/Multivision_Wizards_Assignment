import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const months = await prisma.Student.groupBy({
    by: ["Month_Enrolled"],
    _count: { Month_Enrolled: true },
  });

  // Format: [{ Month_Enrolled: "January", _count: { Month_Enrolled: 3 } }, ...]
  return Response.json(months);
}
