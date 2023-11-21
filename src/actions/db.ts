"use server";

import prisma from "@/orm/client";

export const getUsers = () => {
  return prisma.user.findMany();
};
