import { db } from "@/config/db";

export const getAllLocations = () => {
  return db.location.findMany();
};
