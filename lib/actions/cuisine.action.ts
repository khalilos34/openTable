import { db } from "@/config/db";
import { Cuisine, PrismaClient } from "@prisma/client";

export const getAllCuisins = (): Promise<Cuisine[]> => {
  return db.cuisine.findMany();
};
