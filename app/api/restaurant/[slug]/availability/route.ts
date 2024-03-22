import { times } from "@/constants";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

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
    select: { tables: true, open_time: true, close_time: true },
  });
  if (!restaurant) return NextResponse.json({ error: "invalid parameters" });
  const tables = restaurant.tables;

  const searchTimeswithTables = searchTime.map((searchTime) => {
    return {
      date: new Date(`${day}T${searchTime}`),
      searchTime,
      tables,
    };
  });
  searchTimeswithTables.forEach((searchTime) => {
    searchTime.tables = searchTime.tables.filter((table) => {
      if (bookingtableObj[searchTime.date.toISOString()]) {
        if (bookingtableObj[searchTime.date.toISOString()][table.id])
          return false;
      }
      return true;
    });
  });
  const availability = searchTimeswithTables
    .map((searchTime) => {
      const sumSeats = searchTime.tables.reduce(
        (total, table) => total + table.seats,
        0
      );
      return {
        time: searchTime.searchTime,
        availability: sumSeats >= parseInt(partySize),
      };
    })
    .filter((availability) => {
      const timeIsAfterOpeningHours =
        new Date(`${day}T${availability.time}`) >=
        new Date(`${day}T${restaurant.open_time}`);
      const timeIsBeforeClosingHours =
        new Date(`${day}T${availability.time}`) <=
        new Date(`${day}T${restaurant.close_time}`);
      return timeIsAfterOpeningHours && timeIsBeforeClosingHours;
    });

  return NextResponse.json(availability);
}
