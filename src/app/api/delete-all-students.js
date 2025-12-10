import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST() {
  await prisma.Student.deleteMany({});
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
