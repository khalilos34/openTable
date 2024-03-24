"use server";

import { db } from "@/config/db";
import { Restaurant } from "@/types";

export const getAllRestaurant = async () => {
  const restaurants = await db.restaurant.findMany({
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
  const restaurant = await db.restaurant.findUnique({
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
  const menu = await db.restaurant.findUnique({
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
    return db.restaurant.findMany({
      select,
    });
  const restaurant = db.restaurant.findMany({
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
  const restaurants = db.restaurant.findMany({
    where,
    select,
  });
  return restaurants;
};
