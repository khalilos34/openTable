import { Cuisine, PrismaClient } from "@prisma/client";



const prisma= new PrismaClient()

export const getAllCuisins=():Promise<Cuisine[]>=>{
  return prisma.cuisine.findMany()
}