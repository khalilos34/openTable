import { times } from "@/constants";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import { json } from "stream/consumers";

const prisma = new PrismaClient();
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const pathname = url.pathname;
  const searchParams = new URLSearchParams(url.searchParams);
  const slug = pathname.split("/")[3];
  const day = searchParams.get("day");
  const time = searchParams.get("time");
  const partySize = searchParams.get("partySize");
  if (!day || !partySize || !time) {
    return NextResponse.json({ error: "Missing required parameters" });
  }
  const availability = {
    day,
    slug,
    time,
    partySize,
  };

  const searchTime = times.find((t) => t.time === time)?.searchTime;
  if (!searchTime) return NextResponse.json({ error: "invalid parameters" });

  const bookings = await prisma.booking.findMany({
    where: {
      booking_time: {
        gte: new Date(`${day}T${searchTime[0]}`),
        lte: new Date(`${day}T${searchTime[searchTime?.length - 1]}`),
      },
    },
    select: {
      number_of_people: true,
      booking_time: true,
      tables: true,
    },
  });
  const bookingtableObj: { [key: string]: { [key: number]: true } } = {};
  bookings.forEach((booking) => {
    bookingtableObj[booking.booking_time.toISOString()] = booking.tables.reduce(
      (obj, table) => {
        return { ...obj, [table.table_id]: true };
      },
      {}
    );
  });
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug },
    select: { tables: true },
  });
  if (!restaurant) return NextResponse.json({ error: "invalid parameters" });
  const tables = restaurant.tables;

  const searchTimeswithTables = searchTime.map((searchTime) => {
    return {
      date: new Date(`${day}T${time}`),
      searchTime,
      tables,
    };
  });

  return NextResponse.json({
    searchTime,
    bookings,
    bookingtableObj,
    tables,
    searchTimeswithTables,
  });
}
