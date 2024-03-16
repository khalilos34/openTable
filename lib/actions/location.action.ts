import { PrismaClient } from "@prisma/client";



const prisma= new PrismaClient()
 export const getAllLocations =  ()=>{
 return prisma.location.findMany()
 
} 