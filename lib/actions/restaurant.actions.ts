"use server";

import { Restaurant } from "@/types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const getAllRestaurant = async () => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      slug: true,
      name: true,
      main_image: true,
      location: true,
      cuisine: true,
      price: true,
      reviews: true,
    },
  });
  return restaurants;
};
export const getRestaurantBySlug = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug: slug,
    },
    select: {
      id: true,
      slug: true,
      name: true,
      main_image: true,
      location: true,
      cuisine: true,
      price: true,
      images: true,
      description: true,
      close_time: true,
      open_time: true,
      reviews: true,
    },
  });
  return restaurant;
};
export const getRestaurantMenusItems = async (slug: string) => {
  const menu = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
      main_image: true,
    },
  });
  if (!menu) {
    throw new Error("menu not found");
  }
  return menu;
};
export const getRestaurantByLocation = (
  location: string
): Promise<Restaurant[]> => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    images: true,
    close_time: true,
    open_time: true,
    description: true,
    slug: true,
    price: true,
    location: true,
    cuisine: true,
    reviews: true,
  };
  if (!location)
    return prisma.restaurant.findMany({
      select,
    });
  const restaurant = prisma.restaurant.findMany({
    where: {
      location: {
        name: { equals: location.toLowerCase() },
      },
    },
    select,
  });
  return restaurant;
};

export const getRestaurantByQuery = (params: {
  city?: string;
  price?: string;
  cuisine?: string;
}): Promise<Restaurant[]> => {
  let where: any = {};
  if (params.city) {
    const location = { name: { equals: params.city.toLocaleLowerCase() } };
    where.location = location;
  }

  if (params.cuisine) {
    const cuisine = { name: { equals: params.cuisine } };
    where.cuisine = cuisine;
  }
  if (params.price) {
    const price = params.price;
    where.price = price;
  }
  const select = {
    id: true,
    name: true,
    main_image: true,
    images: true,
    close_time: true,
    open_time: true,
    description: true,
    slug: true,
    price: true,
    location: true,
    cuisine: true,
    reviews: true,
  };
  const restaurants = prisma.restaurant.findMany({
    where,
    select,
  });
  return restaurants;
};
