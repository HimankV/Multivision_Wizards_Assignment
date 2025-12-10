import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();

export const createStudent = async (formData) => {
  "use server";
  await prisma.Student.create({
    data: {
      Name: formData.get("Name"),
      Class: parseInt(formData.get("Class")), // Convert to Int
      Section: formData.get("Section"),
      Month_Enrolled: formData.get("Month"), // This is fine
      createdAt: new Date(),
    },
  });
  revalidatePath("/");
};

export const findStudents = async () => {
  "use server";
  const res = await prisma.Student.findMany({
    select: {
      id: true,
      Name: true,
      Class: true,
      Section: true,
      Month_Enrolled: true,
    },
  });
  return res;
};

export const findMonths = async () => {
  "use client";
  const res = await prisma.Student.findMany({
    select: {
      Month_Enrolled: true,
    },
  });
  return res;
};

export const deleteAllStudents = async () => {
  "use server";
  await prisma.Student.deleteMany({});
};

// export async function insertStudent(
//   StudentName_: string,
//   Class_: Number,
//   Section_: String,
//   Month_: String
// ) {
//   prisma.Student.create({
//     data: {
//       Name: StudentName_,
//       Class: Class_,
//       Section: Section_,
//       Month_Enrolled: Month_,
//     },
//   });
// }

// export async function updateStudent({Student}) {
//   prisma.Student.update({
//     where : {

//     }
//   });
// }
