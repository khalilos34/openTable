'use server'

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
export const getAllRestaurant=async()=>{
const restaurants= await prisma.restaurant.findMany({
    select:{
        id:true,
        slug:true,
        name:true,
        main_image:true,
        location:true,
        cuisine:true,
        price:true,
     
    }
})
return restaurants
}
export const getRestaurantBySlug=async(slug:string) =>{
 const restaurant=await prisma.restaurant.findUnique({
    where:{
        slug:slug
    },
    select:{
        id:true,
        slug:true,
        name:true,
        main_image:true,
        location:true,
        cuisine:true,
        price:true,
        images:true,
        description:true,
        close_time:true,
        open_time:true,
        
    }
 })
 return restaurant
}
export const getRestaurantMenusItems=async(slug:string) => {
 const menu= await prisma.restaurant.findUnique({
    where:{
        slug
    },
    select:{
        items:true,
        main_image:true
        
    }
 })
 if(!menu) {
     throw new Error('menu not found')
 }
 return menu
}