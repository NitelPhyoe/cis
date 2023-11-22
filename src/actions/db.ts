"use server";

import prisma from "@/orm/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import omit from "lodash/omit";

//! Program CRUD
export const createProgram = async (data: any) => {
  await prisma.program.create({ data: { ...data } });
  revalidatePath("/program");
};

export const getPrograms = async () => {
  return await prisma.program.findMany();
};

export const getProgramById = async (id: number) => {
  return await prisma.program.findFirstOrThrow({ where: { id } });
};

export const updateProgramById = async (id: number, data: any) => {
  await prisma.program.update({
    where: { id },
    data: { ...omit(data, ["updatedAt", "createdAt", "id"]) },
  });

  revalidatePath("/program");
  redirect("/program");
};

export const deleteProgram = async (id: number) => {
  await prisma.program.delete({ where: { id } });
  revalidatePath("/program");
};

// !Patient CRUD

export const createPatient = async (data: any) => {
  await prisma.patient.create({ data: { ...data } });
  revalidatePath("/patient");
};

export const getPatients = async () => {
  return await prisma.patient.findMany();
};

export const getPatientById = async (id: number) => {
  return await prisma.patient.findFirstOrThrow({ where: { id } });
};

export const updatePatientById = async (id: number, data: any) => {
  await prisma.patient.update({
    where: { id },
    data: { ...omit(data, ["updatedAt", "createdAt", "id"]) },
  });

  revalidatePath("/patient");
  redirect("/patient");
};

export const deletePatient = async (id: number) => {
  await prisma.patient.delete({ where: { id } });
  revalidatePath("/patient");
};
